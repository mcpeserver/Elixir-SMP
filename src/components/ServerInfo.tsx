/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, Terminal, Smartphone, Shuffle, Hash } from "lucide-react";
import { siteConfig } from "../config/site";

export default function ServerInfo() {
  const [copyState, setCopyState] = useState<{ [key: string]: boolean }>({});

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setCopyState((prev) => ({ ...prev, [key]: false }));
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin:", err);
    }
  };

  return (
    <section id="connection" className="py-24 px-4 bg-[#0a0413] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-cyan-400 uppercase font-semibold">
            INFORMASI KONEKSI
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4">
            Sambungkan Ke Server
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Gunakan informasi alamat IP di bawah ini sesuai perangkat Anda untuk langsung mulai bermain di dunia fantasi ELIXIR SMP.
          </p>
        </div>

        {/* Java vs Bedrock Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* JAVA EDITION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-brand-500/15 relative overflow-hidden group"
          >
            {/* Top decorative gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-brand-400" />
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-brand-600/20 text-brand-400 border border-brand-500/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Minecraft Java Edition
                  </h3>
                  <p className="text-xs text-brand-400 font-mono">Untuk PC / MacOS / Linux</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Gunakan IP utama atau IP alternatif di bawah ini jika Anda bermain menggunakan Minecraft Java Edition (Komputer). Kompatibel dengan launcher resmi maupun launcher pihak ketiga.
              </p>

              {/* Java Connection Fields */}
              <div className="space-y-4">
                
                {/* Main Java IP */}
                <div className="bg-[#10061e] border border-brand-500/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/field">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-brand-400 uppercase tracking-widest">Alamat IP Utama</span>
                    <span className="text-sm sm:text-base font-mono font-medium text-white">{siteConfig.javaIp}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.javaIp, "java_main")}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono border transition-all duration-300 cursor-pointer ${
                      copyState["java_main"]
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                        : "bg-brand-600/10 hover:bg-brand-600/30 border-brand-500/20 text-brand-300 group-hover/field:border-brand-400"
                    }`}
                  >
                    {copyState["java_main"] ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>TERSALIN</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>SALIN Alamat</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Alternative Java IP */}
                <div className="bg-[#10061e] border border-brand-500/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/field">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <Shuffle size={11} className="text-cyan-400" />
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">IP Alternatif</span>
                    </div>
                    <span className="text-sm sm:text-base font-mono font-medium text-white">{siteConfig.altJavaIp}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.altJavaIp, "java_alt")}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono border transition-all duration-300 cursor-pointer ${
                      copyState["java_alt"]
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                        : "bg-[#180d28]/60 hover:bg-brand-600/20 border-brand-500/10 text-brand-300 group-hover/field:border-brand-500/30"
                    }`}
                  >
                    {copyState["java_alt"] ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>TERSALIN</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>SALIN Alamat</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status: Online</span>
              <span>Port Default: 25565</span>
            </div>
          </motion.div>

          {/* BEDROCK EDITION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border-cyan-500/15 relative overflow-hidden group"
          >
            {/* Top decorative gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-brand-500" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    Minecraft Bedrock Edition
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">Untuk HP Android / iOS / Win10 / Konsol</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Bagi Anda yang bermain dari HP (Pocket Edition), tablet, Windows 10 Edition, maupun konsol, silakan gunakan Alamat IP dan nomor Port kustom berikut untuk bergabung.
              </p>

              {/* Bedrock Connection Fields */}
              <div className="space-y-4">
                
                {/* Bedrock IP */}
                <div className="bg-[#050f1b]/80 border border-cyan-500/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/field">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Alamat IP Bedrock</span>
                    <span className="text-sm sm:text-base font-mono font-medium text-white">{siteConfig.bedrockIp}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.bedrockIp, "bedrock_ip")}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono border transition-all duration-300 cursor-pointer ${
                      copyState["bedrock_ip"]
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                        : "bg-cyan-500/10 hover:bg-cyan-500/35 border-cyan-500/20 text-cyan-300 group-hover/field:border-cyan-400"
                    }`}
                  >
                    {copyState["bedrock_ip"] ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>TERSALIN</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>SALIN Alamat</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Bedrock Port */}
                <div className="bg-[#050f1b]/80 border border-cyan-500/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/field">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <Hash size={11} className="text-cyan-400" />
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Port Bedrock</span>
                    </div>
                    <span className="text-sm sm:text-base font-mono font-semibold text-cyan-300">{siteConfig.bedrockPort}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(siteConfig.bedrockPort.toString(), "bedrock_port")}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold font-mono border transition-all duration-300 cursor-pointer ${
                      copyState["bedrock_port"]
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                        : "bg-[#061524] hover:bg-cyan-500/20 border-cyan-500/10 text-cyan-300 group-hover/field:border-cyan-500/30"
                    }`}
                  >
                    {copyState["bedrock_port"] ? (
                      <>
                        <Check size={14} className="text-emerald-400" />
                        <span>TERSALIN</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>SALIN Port</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-cyan-500/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status: Online</span>
              <span>Port Kustom Bedrock</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
