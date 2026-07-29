"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Vapi from "@vapi-ai/web";

const SYSTEM_PROMPT = `You are the AI receptionist for IronLoop Labs (ironlooplabs.com).

CRITICAL VOICE & LISTENING RULES:
1. KEEP ALL RESPONSES EXTREMELY SHORT — maximum 1 to 2 short sentences (under 25 words per turn). Never deliver long monologues or paragraphs.
2. BE AN ACTIVE LISTENER — let the user guide the conversation. Ask simple questions and give the user room to speak.
3. Stop talking immediately when the user responds.

IronLoop Labs helps HVAC, plumbing, and roofing companies stop losing jobs to missed calls with 24/7 AI call answering, missed-call text-back, CRM booking, and dead lead reactivation.

Key facts (only state if directly asked, in 1 brief sentence):
- Response time: under 10 seconds, 24/7
- Setup: live in 14 days, no contracts
- Integrations: ServiceTitan, Jobber, Housecall Pro, Salesforce
- Pricing: Tier 1 ~$247/mo, Tier 2 ~$497/mo, Tier 3 ~$897/mo (always mention final pricing is customized on a demo call)

Early in the conversation, naturally ask for their name and email. The moment you have BOTH, call the shareContactInfo function immediately.
Keep all replies warm, concise, and conversational.`;

const assistantConfig: any = {
  name: "Iron Loop Labs Receptionist",
  firstMessage:
    "Hi, thanks for calling IronLoop Labs! I'm the AI receptionist. Mind sharing your name and email so our team can follow up?",
  model: {
    provider: "openai",
    model: "gpt-4o-mini",
    temperature: 0.6,
    maxTokens: 100,
    messages: [{ role: "system", content: SYSTEM_PROMPT }],
    tools: [
      {
        type: "function",
        function: {
          name: "shareContactInfo",
          description: "Call this the moment you have both the caller's name and email.",
          parameters: {
            type: "object",
            properties: {
              name: { type: "string" },
              email: { type: "string" },
            },
            required: ["name", "email"],
          },
        },
      },
    ],
  },
  voice: {
    provider: "azure",
    voiceId: "en-US-JennyNeural",
    speed: 1.0,
  },
  silenceTimeoutSeconds: 30,
  maxDurationSeconds: 600,
  backchannelingEnabled: false,
  numWordsToInterrupt: 2,
  clientMessages: ["transcript", "tool-calls"],
};

export default function VoiceDemoClient() {
  const [status, setStatus] = useState<"idle" | "connecting" | "active">("idle");
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string }>>([]);
  const [capturedLead, setCapturedLead] = useState<{ name?: string; email?: string } | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const transcriptRef = useRef<string[]>([]);
  const vapiRef = useRef<Vapi | null>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Initialize Vapi client safely on browser mount
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "31fd6b51-f0b8-45e7-88f9-37cffd69f920";
    if (publicKey && typeof window !== "undefined") {
      try {
        vapiRef.current = new Vapi(publicKey);
      } catch (err) {
        console.error("Vapi init error:", err);
      }
    }
  }, []);

  // Auto-scroll transcript window
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [transcript]);

  const notify = (payload: any) => {
    fetch("/api/notify-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error("Lead notify failed:", err));
  };

  const startCall = async () => {
    setStatus("connecting");
    setErrorMessage(null);
    setTranscript([]);
    setCapturedLead(null);
    transcriptRef.current = [];

    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "31fd6b51-f0b8-45e7-88f9-37cffd69f920";

    try {
      let vapi = vapiRef.current;
      if (!vapi) {
        vapi = new Vapi(publicKey);
        vapiRef.current = vapi;
      }

      vapi.removeAllListeners();

      vapi.on("call-start", () => {
        setStatus("active");
        setErrorMessage(null);
      });

      vapi.on("call-end", () => {
        setStatus("idle");
        notify({ type: "call-ended", transcript: transcriptRef.current });
      });

      vapi.on("message", (msg: any) => {
        if (msg.type === "transcript" && msg.transcriptType === "final") {
          const roleName = msg.role === "assistant" || msg.role === "bot" ? "AI Receptionist" : "You";
          const entry = `${roleName}: ${msg.transcript}`;
          transcriptRef.current.push(entry);
          setTranscript((prev) => [...prev, { role: roleName, text: msg.transcript }]);
        }
        if (msg.type === "tool-calls") {
          const call = msg.toolCallList?.[0];
          if (call?.function?.name === "shareContactInfo") {
            const args =
              typeof call.function.arguments === "string"
                ? JSON.parse(call.function.arguments)
                : call.function.arguments;
            setCapturedLead(args);
            notify({ type: "contact-captured", ...args });
          }
        }
      });

      vapi.on("error", (err: any) => {
        console.error("Vapi Error Event:", err);
        const msg = typeof err === "string" ? err : err?.message || "Audio connection failed. Check microphone permission.";
        setErrorMessage(msg);
        setStatus("idle");
      });

      await vapi.start(assistantConfig);
    } catch (err: any) {
      console.error("Vapi Start Error:", err);
      const msg = err?.message || "Could not start voice call. Please allow microphone access.";
      setErrorMessage(msg);
      setStatus("idle");
    }
  };

  const endCall = () => {
    if (vapiRef.current) {
      try {
        vapiRef.current.stop();
      } catch (err) {
        console.error("Stop call error:", err);
      }
    }
    setStatus("idle");
  };

  const toggleMute = () => {
    if (vapiRef.current && status === "active") {
      const nextMute = !isMuted;
      vapiRef.current.setMuted(nextMute);
      setIsMuted(nextMute);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden pt-28 pb-24">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Glow Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#C5E033]/[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5E033]/10 border border-[#C5E033]/30 text-[#C5E033] font-mono text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C5E033] animate-ping" />
            Live Voice AI Demonstration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-display"
          >
            Talk to IronLoop&apos;s <span className="text-[#C5E033]">AI Receptionist</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-body leading-relaxed max-w-2xl mx-auto"
          >
            Click start below to test our 24/7 voice AI live in your browser. Speak naturally, ask about pricing, integrations, or your trade — and see how it captures lead details automatically.
          </motion.p>
        </div>

        {/* VOICE CONSOLE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl bg-[#0c0e14]/90 border border-white/15 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden mb-12"
        >
          {/* Corner Glow Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5E033]/10 blur-[80px] pointer-events-none" />

          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Visualizer Ring / Pulse Orb */}
            <div className="relative w-36 h-36 mb-8 flex items-center justify-center">
              {status === "active" && (
                <>
                  <div className="absolute inset-0 rounded-full bg-[#C5E033]/20 animate-ping" />
                  <div className="absolute -inset-4 rounded-full border border-[#C5E033]/30 animate-pulse" />
                </>
              )}
              {status === "connecting" && (
                <div className="absolute inset-0 rounded-full border-2 border-[#C5E033] border-t-transparent animate-spin" />
              )}
              
              <div
                className={`w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
                  status === "active"
                    ? "bg-[#C5E033] text-[#050505] shadow-[0_0_50px_rgba(197,224,51,0.5)] scale-105"
                    : status === "connecting"
                    ? "bg-white/10 text-white/60 border border-white/20"
                    : "bg-[#12151f] text-white/80 border border-white/15 hover:border-[#C5E033]/50"
                }`}
              >
                <span className="material-symbols-outlined text-4xl">
                  {status === "active" ? "graphic_eq" : status === "connecting" ? "hourglass_empty" : "mic"}
                </span>
              </div>
            </div>

            {/* Status Label */}
            <div className="mb-8">
              {status === "idle" && (
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-display">Ready to Connect</h3>
                  <p className="text-sm text-white/50">Ensure microphone access is allowed in your browser</p>
                </div>
              )}
              {status === "connecting" && (
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#C5E033] font-display animate-pulse">Connecting to AI Voice Engine…</h3>
                  <p className="text-sm text-white/50">Establishing low-latency neural audio stream</p>
                </div>
              )}
              {status === "active" && (
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#C5E033] font-display flex items-center justify-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5E033] animate-pulse" />
                    Call Active — Speak Now
                  </h3>
                  <p className="text-sm text-white/60">Our AI receptionist is listening and responding live</p>
                </div>
              )}
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 max-w-md w-full p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono text-left flex items-start gap-2">
                <span className="material-symbols-outlined text-base shrink-0 mt-0.5">error</span>
                <div>
                  <strong>Connection Alert:</strong> {errorMessage}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {status === "idle" && (
                <button
                  onClick={startCall}
                  className="px-8 py-4 rounded-full bg-[#C5E033] text-[#050505] font-display font-extrabold text-base tracking-wide hover:bg-[#d4ed45] active:scale-95 transition-all shadow-[0_0_30px_rgba(197,224,51,0.3)] flex items-center gap-3 cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">call</span>
                  Start Live Voice Call
                </button>
              )}

              {status === "connecting" && (
                <button
                  disabled
                  className="px-8 py-4 rounded-full bg-white/10 text-white/40 font-display font-bold text-base cursor-not-allowed flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-2xl animate-spin">sync</span>
                  Connecting…
                </button>
              )}

              {status === "active" && (
                <>
                  <button
                    onClick={toggleMute}
                    className={`px-6 py-3.5 rounded-full font-display font-bold text-sm transition-all flex items-center gap-2 ${
                      isMuted
                        ? "bg-amber-500/20 border border-amber-500/40 text-amber-400"
                        : "bg-white/10 border border-white/15 text-white hover:bg-white/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {isMuted ? "mic_off" : "mic"}
                    </span>
                    {isMuted ? "Unmute Mic" : "Mute Mic"}
                  </button>

                  <button
                    onClick={endCall}
                    className="px-8 py-4 rounded-full bg-red-600/90 text-white font-display font-extrabold text-base hover:bg-red-500 active:scale-95 transition-all shadow-[0_0_25px_rgba(239,68,68,0.4)] flex items-center gap-3 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-2xl">call_end</span>
                    End Call
                  </button>
                </>
              )}
            </div>
          </div>

          {/* LIVE TRANSCRIPT WINDOW */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white/70 uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#C5E033]">subtitles</span>
                Live Audio Transcript
              </h4>
              <span className="text-xs text-white/40 font-mono">
                {transcript.length > 0 ? `${transcript.length} turns recorded` : "Waiting for audio input…"}
              </span>
            </div>

            <div
              ref={chatScrollRef}
              className="bg-[#05060a] border border-white/10 rounded-2xl p-4 sm:p-6 h-64 overflow-y-auto font-mono text-sm space-y-3 custom-scrollbar"
            >
              {transcript.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/30 text-center space-y-2">
                  <span className="material-symbols-outlined text-3xl">record_voice_over</span>
                  <p className="text-xs font-sans">Click &quot;Start Live Voice Call&quot; and say hi to the AI receptionist!</p>
                </div>
              ) : (
                transcript.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl max-w-[85%] text-xs sm:text-sm leading-relaxed ${
                      item.role === "AI Receptionist"
                        ? "bg-[#C5E033]/10 border border-[#C5E033]/20 text-[#C5E033] font-sans font-medium mr-auto"
                        : "bg-white/10 border border-white/10 text-white font-sans font-medium ml-auto text-right"
                    }`}
                  >
                    <strong className="block text-[10px] uppercase tracking-wider text-white/40 mb-1 font-mono">
                      {item.role}
                    </strong>
                    {item.text}
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>

        {/* DEMO FEATURES / HIGHLIGHT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0c0e14]/70 border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#C5E033]/10 border border-[#C5E033]/30 flex items-center justify-center text-[#C5E033] mb-4">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display mb-2">Zero-Latency AI Voice</h4>
            <p className="text-sm text-white/60 leading-relaxed font-body">
              Responds in under 1 second using low-latency neural audio, sounding natural and human to your customers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0e14]/70 border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#C5E033]/10 border border-[#C5E033]/30 flex items-center justify-center text-[#C5E033] mb-4">
              <span className="material-symbols-outlined">mark_email_read</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display mb-2">Instant Lead Transmission</h4>
            <p className="text-sm text-white/60 leading-relaxed font-body">
              The moment contact info is mentioned, your inbox receives a formatted lead email via Hostinger SMTP.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0e14]/70 border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#C5E033]/10 border border-[#C5E033]/30 flex items-center justify-center text-[#C5E033] mb-4">
              <span className="material-symbols-outlined">sync_alt</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display mb-2">Direct CRM Sync</h4>
            <p className="text-sm text-white/60 leading-relaxed font-body">
              Integrates directly with ServiceTitan, Jobber, Housecall Pro, and Salesforce for automatic appointment booking.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA LINK */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#C5E033] font-display font-semibold text-sm transition-colors"
          >
            Ready to deploy this for your HVAC, Plumbing, or Roofing business?
            <span className="text-[#C5E033] underline">Contact us →</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
