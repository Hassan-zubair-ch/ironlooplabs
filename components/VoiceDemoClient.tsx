"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Vapi from "@vapi-ai/web";

const SYSTEM_PROMPT = `You are the executive AI receptionist for IronLoop Labs (ironlooplabs.com).

EXECUTIVE VOICE & LISTENING RULES:
1. EXTREMELY BRIEF & DIRECT — maximum 1 short, polished sentence per turn (under 15 words). Never monologue.
2. ULTRA-FAST & RESPONSIVE — answer directly without filler phrases, hesitation, or delays.
3. PROFESSIONAL & COURTEOUS — represent an enterprise AI automation company with executive polish.
4. ACTIVE LISTENER — stop speaking the exact instant the caller speaks.

Company Brief:
IronLoop Labs provides 24/7 AI call answering, missed-call text-back, and CRM dispatch for HVAC, plumbing, and roofing enterprises.

Key details (1 sentence max, only if asked):
- Guarantee: 100% call capture, 24/7/365
- Deployment: 14-day setup, zero lock-in contracts
- Integrations: ServiceTitan, Jobber, Housecall Pro, Salesforce

Early in the call, naturally request their name and email. As soon as you have BOTH, call the shareContactInfo function immediately.`;

const assistantConfig: any = {
  name: "Iron Loop Labs Executive Receptionist",
  firstMessage:
    "Welcome to IronLoop Labs. I'm your AI receptionist. May I have your name and email to get started?",
  model: {
    provider: "openai",
    model: "gpt-4o-mini",
    temperature: 0.2, // Fast deterministic inference
    maxTokens: 80, // Concise 1-sentence responses
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
  },
  silenceTimeoutSeconds: 30,
  maxDurationSeconds: 600,
  backchannelingEnabled: false,
  numWordsToInterrupt: 1, // Instantly interrupts on 1 word
  clientMessages: ["transcript", "tool-calls"],
};

export default function VoiceDemoClient() {
  const [status, setStatus] = useState<"idle" | "connecting" | "active">("idle");
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string; time: string }>>([]);
  const [capturedLead, setCapturedLead] = useState<{ name?: string; email?: string } | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const transcriptRef = useRef<string[]>([]);
  const vapiRef = useRef<Vapi | null>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // Pre-initialize Vapi instance on mount for zero-delay startup
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "31fd6b51-f0b8-45e7-88f9-37cffd69f920";
    if (publicKey && typeof window !== "undefined") {
      try {
        vapiRef.current = new Vapi(publicKey);
      } catch (err) {
        console.error("Vapi pre-init error:", err);
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
      // Prompt browser for microphone permission
      if (typeof navigator !== "undefined" && navigator.mediaDevices?.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          // Release stream tracks after permission confirmation so Vapi can acquire it
          stream.getTracks().forEach((track) => track.stop());
        } catch (micErr: any) {
          console.warn("Microphone permission denied:", micErr);
          setErrorMessage("Microphone access was denied. Please allow microphone permissions in your browser address bar.");
          setStatus("idle");
          return;
        }
      }

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
          const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          const entry = `[${now}] ${roleName}: ${msg.transcript}`;
          transcriptRef.current.push(entry);
          setTranscript((prev) => [...prev, { role: roleName, text: msg.transcript, time: now }]);
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
        const msg = typeof err === "string" ? err : err?.message || "Audio connection issue. Please verify microphone permission.";
        setErrorMessage(msg);
        setStatus("idle");
      });

      await vapi.start(assistantConfig);
    } catch (err: any) {
      console.error("Vapi Start Error:", err);
      const msg = err?.message || "Connection failed. Please allow microphone access.";
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
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Glow Gradients */}
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
            Ultra-Low Latency Neural Voice Demo
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
            Experience our 24/7 enterprise voice AI live in your browser. Speak naturally to test zero-latency call handling, instant answers, and automatic CRM qualification.
          </motion.p>
        </div>

        {/* EXECUTIVE VOICE CONSOLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-3xl bg-[#0c0e14]/90 border border-white/15 p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-xl relative overflow-hidden mb-12"
        >
          {/* Corner Glow Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5E033]/10 blur-[80px] pointer-events-none" />

          {/* Latency / Engine Status Badge */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#C5E033]" />
              <span className="font-mono text-xs text-white/70 font-bold uppercase tracking-wider">
                Engine: Deepgram Nova-2 + Azure Neural + GPT-4o
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-[#C5E033]">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Sub-300ms Response Stream
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Equalizer / Visualizer Ring */}
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
                className={`w-28 h-28 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-2xl ${
                  status === "active"
                    ? "bg-[#C5E033] text-[#050505] shadow-[0_0_50px_rgba(197,224,51,0.5)] scale-105"
                    : status === "connecting"
                    ? "bg-white/10 text-white/60 border border-white/20"
                    : "bg-[#12151f] text-white/80 border border-white/15 hover:border-[#C5E033]/50 cursor-pointer"
                }`}
                onClick={status === "idle" ? startCall : undefined}
              >
                <span className="material-symbols-outlined text-4xl mb-1">
                  {status === "active" ? "graphic_eq" : status === "connecting" ? "hourglass_empty" : "mic"}
                </span>

                {/* Live Equalizer Spectrum Bars */}
                {status === "active" && (
                  <div className="flex items-center gap-1 h-3 mt-1">
                    <span className="w-1 bg-[#050505] rounded-full animate-[bounce_1s_infinite_100ms]" style={{ height: '100%' }} />
                    <span className="w-1 bg-[#050505] rounded-full animate-[bounce_1s_infinite_300ms]" style={{ height: '70%' }} />
                    <span className="w-1 bg-[#050505] rounded-full animate-[bounce_1s_infinite_200ms]" style={{ height: '100%' }} />
                    <span className="w-1 bg-[#050505] rounded-full animate-[bounce_1s_infinite_400ms]" style={{ height: '50%' }} />
                  </div>
                )}
              </div>
            </div>

            {/* Status Label */}
            <div className="mb-8">
              {status === "idle" && (
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white font-display">Ready for Executive Voice Session</h3>
                  <p className="text-sm text-white/50">Click below to start high-speed neural conversation</p>
                </div>
              )}
              {status === "connecting" && (
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-[#C5E033] font-display animate-pulse">Initializing Stream…</h3>
                  <p className="text-sm text-white/50">Connecting Deepgram Speech-to-Text & Neural Voice Engine</p>
                </div>
              )}
              {status === "active" && (
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-[#C5E033] font-display flex items-center justify-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5E033] animate-pulse" />
                    Live Audio Stream Active
                  </h3>
                  <p className="text-sm text-white/60">AI is listening — speak naturally at any time</p>
                </div>
              )}
            </div>

            {/* Error Diagnostics Alert */}
            {errorMessage && (
              <div className="mb-6 max-w-md w-full p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono text-left flex items-start gap-2">
                <span className="material-symbols-outlined text-base shrink-0 mt-0.5">error</span>
                <div>
                  <strong>Connection Alert:</strong> {errorMessage}
                </div>
              </div>
            )}

            {/* Control Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {status === "idle" && (
                <button
                  onClick={startCall}
                  className="px-9 py-4 rounded-full bg-[#C5E033] text-[#050505] font-display font-extrabold text-base tracking-wide hover:bg-[#d4ed45] active:scale-95 transition-all shadow-[0_0_35px_rgba(197,224,51,0.35)] flex items-center gap-3 cursor-pointer group"
                >
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">call</span>
                  Start High-Speed Voice Call
                </button>
              )}

              {status === "connecting" && (
                <button
                  disabled
                  className="px-9 py-4 rounded-full bg-white/10 text-white/40 font-display font-bold text-base cursor-not-allowed flex items-center gap-3"
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

          {/* REAL-TIME EXECUTIVE TRANSCRIPT LOG */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white/70 uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-[#C5E033]">subtitles</span>
                Real-Time Audio Transcript Stream
              </h4>
              <span className="text-xs text-white/40 font-mono">
                {transcript.length > 0 ? `${transcript.length} turns recorded` : "Awaiting user input…"}
              </span>
            </div>

            <div
              ref={chatScrollRef}
              className="bg-[#05060a] border border-white/10 rounded-2xl p-4 sm:p-6 h-64 overflow-y-auto font-mono text-sm space-y-3 custom-scrollbar"
            >
              {transcript.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/30 text-center space-y-2">
                  <span className="material-symbols-outlined text-3xl">record_voice_over</span>
                  <p className="text-xs font-sans">Click &quot;Start High-Speed Voice Call&quot; to begin your session.</p>
                </div>
              ) : (
                transcript.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl max-w-[85%] text-xs sm:text-sm leading-relaxed ${
                      item.role === "AI Receptionist"
                        ? "bg-[#C5E033]/10 border border-[#C5E033]/25 text-[#C5E033] font-sans font-medium mr-auto"
                        : "bg-white/10 border border-white/10 text-white font-sans font-medium ml-auto text-right"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/40 mb-1 font-mono gap-4">
                      <span>{item.role}</span>
                      <span>{item.time}</span>
                    </div>
                    {item.text}
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>

        {/* ENTERPRISE HIGHLIGHT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0c0e14]/70 border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#C5E033]/10 border border-[#C5E033]/30 flex items-center justify-center text-[#C5E033] mb-4">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display mb-2">Deepgram Nova-2 STT</h4>
            <p className="text-sm text-white/60 leading-relaxed font-body">
              Instant speech-to-text recognition under 100ms for immediate conversational comprehension.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0e14]/70 border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#C5E033]/10 border border-[#C5E033]/30 flex items-center justify-center text-[#C5E033] mb-4">
              <span className="material-symbols-outlined">record_voice_over</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display mb-2">Sub-300ms Stream</h4>
            <p className="text-sm text-white/60 leading-relaxed font-body">
              Deterministic inference with 1-word instant interruption sensitivity for natural human dialogue.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0e14]/70 border border-white/10 backdrop-blur-md">
            <div className="w-10 h-10 rounded-xl bg-[#C5E033]/10 border border-[#C5E033]/30 flex items-center justify-center text-[#C5E033] mb-4">
              <span className="material-symbols-outlined">sync_alt</span>
            </div>
            <h4 className="text-lg font-bold text-white font-display mb-2">ServiceTitan & CRM Sync</h4>
            <p className="text-sm text-white/60 leading-relaxed font-body">
              Direct API integration with ServiceTitan, Jobber, Housecall Pro, and Salesforce for automatic job dispatch.
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
