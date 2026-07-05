/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, ExternalLink, ChevronDown } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.javaIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin IP:", err);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-[#07030e]"
    >
      {/* Background Image with Dark Purple Radial Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0514]/90 via-[#0b0514]/70 to-[#0b0514] z-0" />
        {/* Magic radial gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.25)_0%,transparent_70%)] z-0" />
      </div>

      {/* Floating Magic Particles Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-brand-400 rounded-full animate-ping opacity-30" style={{ animationDuration: "3s" }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-brand-300 rounded-full animate-pulse opacity-40" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-25" style={{ animationDuration: "5s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-30" style={{ animationDuration: "6.5s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Server Logo Container with floating & scaling effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 cursor-pointer drop-shadow-[0_0_35px_rgba(109,40,217,0.5)] group"
        >
          {/* External rotating decorative magic frame */}
          <div className="absolute inset-0 rounded-full border border-dashed border-brand-400/40 animate-[spin_40s_linear_infinite] pointer-events-none scale-105" />
          <div className="absolute inset-2 rounded-full border border-brand-500/20 animate-[spin_20s_linear_infinite_reverse] pointer-events-none" />

          {/* Floating Logo Element */}
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-500/35 bg-[#120720]/80 p-1 group-hover:border-brand-400 group-hover:scale-102 transition-all duration-500 animate-floating">
            <img
              src="/logo.png"
              alt="ELIXIR SMP Official Logo"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Server Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="text-[11px] sm:text-xs tracking-[0.3em] font-mono font-bold text-brand-300 uppercase bg-brand-500/10 border border-brand-500/20 px-3 py-1 rounded-full text-glow">
            {siteConfig.tagline}
          </span>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white mt-4 mb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] text-glow">
            {siteConfig.name}
          </h1>
        </motion.div>

        {/* Short Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mt-2 mb-10 px-4"
        >
          {siteConfig.description}
        </motion.p>

        {/* Action Buttons (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:w-auto"
        >
          {/* Copy IP CTA */}
          <button
            onClick={handleCopyIp}
            className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-mono text-sm font-bold tracking-wider border cursor-pointer transition-all duration-300 shadow-xl ${
              copied
                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-emerald-500/5"
                : "bg-brand-600/30 hover:bg-brand-600/65 border-brand-500/40 hover:border-brand-300 text-brand-100 hover:text-white shadow-purple-900/10"
            }`}
          >
            {copied ? (
              <>
                <Check size={18} className="text-emerald-400" />
                <span>IP TERSALIN!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>SALIN IP SERVER</span>
              </>
            )}
          </button>

          {/* Discord CTA */}
          <a
            href={siteConfig.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all duration-300 shadow-xl shadow-indigo-900/10 hover:shadow-[0_0_25px_rgba(88,101,242,0.45)]"
          >
            GABUNG DISCORD
            <ExternalLink size={16} />
          </a>

          {/* View Rank CTA */}
          <a
            href="#ranks"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300"
          >
            LIHAT RANK
          </a>
        </motion.div>

      </div>

      {/* Down arrow link */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-widest font-mono text-slate-400">INFO KONEKSI</span>
        <a href="#connection" className="animate-bounce">
          <ChevronDown size={20} className="text-brand-400" />
        </a>
      </div>
    </section>
  );
}
