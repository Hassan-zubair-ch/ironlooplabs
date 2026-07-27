"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function PlatformVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {});
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMute = !isMuted;
    videoRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newVol = parseFloat(e.target.value);
    videoRef.current.volume = newVol;
    setVolume(newVol);
    setIsMuted(newVol === 0);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Chapter markers for progress bar
  const chapterDots = [0.1, 0.25, 0.4, 0.55, 0.7, 0.85];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#C5E033] mb-4">
          SEE THE PLATFORM IN ACTION
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
          Here&apos;s Exactly What We Build.
        </h2>
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          See the full IronLoop AI system — every module, every automation, every AI agent.
        </p>
      </motion.div>

      {/* Crystal Clear 1080p Video Container */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        className="relative group rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.9)] bg-[#050608] aspect-video w-full"
      >
        <video
          ref={videoRef}
          src="https://embed-ssl.wistia.com/deliveries/bf914f7766cf61569471a1eba520cf32.bin"
          poster="/video-poster.jpg"
          playsInline
          preload="metadata"
          onTimeUpdate={() => {
            if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
          }}
          onLoadedMetadata={() => {
            if (videoRef.current) setDuration(videoRef.current.duration);
          }}
          onEnded={() => {
            setIsPlaying(false);
            setHasStarted(false);
          }}
          onClick={handlePlay}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Subtitles Overlay */}
        {showSubtitles && isPlaying && (
          <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-none z-20">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-black/85 text-white font-medium text-sm sm:text-base backdrop-blur-sm border border-white/10 shadow-lg">
              IronLoop AI handles 100% of inbound calls and dispatches appointments in under 3 seconds.
            </span>
          </div>
        )}

        {/* Thumbnail Poster Play Button Overlay */}
        {!isPlaying && (
          <div
            onClick={handlePlay}
            className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center cursor-pointer transition-all z-20 group/poster"
            style={{ backgroundImage: `url('/video-poster.jpg')` }}
          >
            <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors" />
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C5E033] text-[#050608] flex items-center justify-center shadow-[0_0_50px_rgba(197,224,51,0.7)] group-hover/poster:shadow-[0_0_80px_rgba(197,224,51,0.9)] transition-all"
            >
              <span className="material-symbols-outlined text-4xl sm:text-5xl ml-1.5 font-black">
                play_arrow
              </span>
            </motion.div>
          </div>
        )}

        {/* GREEN ACCENT CONTROL BAR (Subtitles [CC], Volume & Fullscreen only) */}
        <div
          className={`absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 z-30 transition-opacity duration-300 ${
            showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#C5E033] text-[#050608] font-bold shadow-[0_8px_35px_rgba(197,224,51,0.4)] border border-[#C5E033]">
            {/* 1. Play/Pause Button */}
            <button
              onClick={handlePlay}
              className="hover:scale-110 active:scale-95 transition-transform flex items-center justify-center text-[#050608] shrink-0"
              aria-label="Play/Pause"
            >
              <span className="material-symbols-outlined text-2xl font-black">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </button>

            {/* 2. Timestamp */}
            <span className="text-xs font-mono font-black text-[#050608] shrink-0">
              {formatTime(currentTime)}
            </span>

            {/* 3. Progress Seek Line with Chapter Dots */}
            <div className="relative flex-1 flex items-center group/range h-4">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-[#050608]/30 rounded-full appearance-none cursor-pointer accent-[#050608] relative z-10"
              />

              {/* Chapter Dot Markers */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-1">
                {chapterDots.map((ratio, idx) => (
                  <span
                    key={idx}
                    className="w-2 h-2 rounded-full bg-[#050608]/60 border border-white/50 shadow-sm"
                  />
                ))}
              </div>
            </div>

            {/* 4. Subtitle (CC) Button */}
            <button
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`px-2 py-0.5 rounded text-[11px] font-black uppercase transition-all ${
                showSubtitles
                  ? "bg-[#050608] text-[#C5E033]"
                  : "bg-[#050608]/20 text-[#050608] hover:bg-[#050608]/30"
              }`}
              title="Subtitle (CC)"
            >
              CC
            </button>

            {/* 5. Volume / Mic Icon */}
            <button
              onClick={toggleMute}
              className="hover:scale-110 transition-transform text-[#050608] shrink-0"
              title="Volume / Mic"
            >
              <span className="material-symbols-outlined text-xl font-bold">
                {isMuted || volume === 0
                  ? "volume_off"
                  : volume < 0.5
                  ? "volume_down"
                  : "volume_up"}
              </span>
            </button>

            {/* 6. Fullscreen / Large Screen Button */}
            <button
              onClick={toggleFullscreen}
              className="hover:scale-110 transition-transform text-[#050608] shrink-0"
              title="Large Screen / Fullscreen"
            >
              <span className="material-symbols-outlined text-xl font-black">
                {isFullscreen ? "fullscreen_exit" : "crop_free"}
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      <p className="text-center font-mono text-xs text-white/40 mt-4">
        ~10 min — worth every second
      </p>
    </section>
  );
}
