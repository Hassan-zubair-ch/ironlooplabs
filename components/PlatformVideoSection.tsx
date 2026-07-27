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

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch(() => {});
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

      {/* Video Container (1080p High Quality + Custom Poster Thumbnail) */}
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
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Custom Premium Thumbnail Poster (Shown before playback starts) */}
        {!hasStarted && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 bg-[#090b10] flex flex-col items-center justify-center p-6 text-center cursor-pointer z-20 group/poster"
          >
            {/* Background Texture & Glow */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                backgroundSize: `20px 20px`,
              }}
            />
            <div className="absolute w-[350px] h-[350px] bg-[#C5E033]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-xl space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5E033]/30 bg-[#C5E033]/10 text-xs font-mono font-bold text-[#C5E033] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#C5E033] animate-pulse" />
                PLATFORM DEMO • 1080P HD
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-display">
                Here&apos;s Exactly What We Build.
              </h3>

              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
                Watch how IronLoop AI handles incoming calls, books appointments, and drives revenue 24/7.
              </p>

              {/* Big Pulsing Play Button */}
              <div className="pt-2 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C5E033] text-[#050608] flex items-center justify-center shadow-[0_0_50px_rgba(197,224,51,0.6)] group-hover/poster:shadow-[0_0_70px_rgba(197,224,51,0.8)] transition-all"
                >
                  <span className="material-symbols-outlined text-4xl sm:text-5xl ml-1.5 font-black">
                    play_arrow
                  </span>
                </motion.div>
              </div>

              <p className="text-[11px] font-mono text-white/40 pt-1">
                Click anywhere to play video • HD 1080p
              </p>
            </div>
          </div>
        )}

        {/* Center Pause/Play overlay when video is active but paused */}
        {hasStarted && !isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer z-20"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-[#C5E033] text-[#050608] flex items-center justify-center shadow-[0_0_40px_rgba(197,224,51,0.6)]"
            >
              <span className="material-symbols-outlined text-4xl ml-1 font-bold">
                play_arrow
              </span>
            </motion.button>
          </div>
        )}

        {/* Custom Video Controls Bar */}
        {hasStarted && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 z-30 ${
              showControls || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Seek Bar */}
            <div className="relative w-full mb-3 flex items-center">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C5E033]"
              />
            </div>

            <div className="flex items-center justify-between">
              {/* Play/Pause & Time */}
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-[#C5E033] transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">
                    {isPlaying ? "pause" : "play_arrow"}
                  </span>
                </button>

                {/* Volume Slider */}
                <div className="hidden sm:flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {isMuted || volume === 0
                        ? "volume_off"
                        : volume < 0.5
                        ? "volume_down"
                        : "volume_up"}
                    </span>
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C5E033]"
                  />
                </div>

                <span className="text-xs font-mono text-white/70">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Title & Fullscreen */}
              <div className="flex items-center gap-3">
                <span className="hidden md:block text-xs font-mono text-[#C5E033] uppercase tracking-wider">
                  1080P HD QUALITY
                </span>

                <button
                  onClick={toggleFullscreen}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {isFullscreen ? "fullscreen_exit" : "fullscreen"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      <p className="text-center font-mono text-xs text-white/40 mt-4">
        ~10 min — worth every second
      </p>
    </section>
  );
}
