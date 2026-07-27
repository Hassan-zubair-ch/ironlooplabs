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

      {/* Super Fast HTML5 Player with Exact Thumbnail Poster */}
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
          src="/platform-demo-360p.mp4"
          poster="/video-poster.jpg"
          playsInline
          preload="auto"
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

        {/* Thumbnail Poster Play Button Overlay (First Click Plays Immediately) */}
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
                  onClick={handlePlay}
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
                  INSTANT PLAYBACK • NO ADS
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
