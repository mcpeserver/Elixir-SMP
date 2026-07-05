/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Check, MessageSquare, ArrowRight, Star } from "lucide-react";
import { siteConfig, Rank } from "../config/site";

export default function Ranks() {
  return (
    <section id="ranks" className="py-24 px-4 bg-[#07030f] relative overflow-hidden">
      {/* Decorative gradient glowing effect */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-700/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-700/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-cyan-400 uppercase font-semibold">
            DONASI RANK OFFICIAL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4">
            Dukung Kami & Dapatkan Rank
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Berikan dukungan donasi terbaik Anda untuk keberlangsungan server, dan nikmati gelar kustom (Prefix) serta fitur istimewa di dalam game.
          </p>
        </div>

        {/* Ranks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {siteConfig.ranks.map((rank: Rank, index: number) => {
            return (
              <motion.div
                key={rank.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  rank.isPopular 
                    ? "border-brand-400/50 bg-[#190c2f]/50 shadow-[0_0_25px_rgba(168,85,247,0.15)] md:-translate-y-2" 
                    : "border-brand-500/10 hover:border-brand-400/25 hover:bg-[#150a26]/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                }`}
              >
                {/* Popular Badge */}
                {rank.isPopular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md shadow-brand-500/20">
                    <Star size={8} className="fill-white" />
                    POPULER
                  </div>
                )}

                <div>
                  {/* Rank Title & Price */}
                  <span className="text-[10px] font-mono text-brand-400 tracking-widest block mb-1">OFFICIAL RANK</span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wide text-glow">
                    {rank.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 mt-3 mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold font-display text-cyan-400 text-glow-cyan">Rp{rank.price}</span>
                    <span className="text-slate-500 text-xs sm:text-sm font-medium">/ Selamanya</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 pb-6 border-b border-brand-500/10">
                    {rank.description}
                  </p>

                  {/* Benefits Title */}
                  <p className="text-[10px] font-mono text-slate-400 tracking-wider uppercase mb-3">Keuntungan Istimewa:</p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-2.5 mb-8">
                    {rank.benefits.map((benefit: string, bIndex: number) => (
                      <li key={bIndex} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={`${siteConfig.links.whatsappContact}?text=Halo%20Admin%20ELIXIR%20SMP,%20saya%20tertarik%20untuk%20berdonasi%20dan%20membeli%20Rank%20${rank.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                    rank.isPopular
                      ? "bg-gradient-to-r from-brand-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white shadow-lg shadow-brand-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]"
                      : "bg-[#160c26] hover:bg-brand-600/20 text-brand-300 hover:text-white border border-brand-500/20 hover:border-brand-400/40"
                  }`}
                >
                  <MessageSquare size={14} />
                  <span>HUBUNGI WHATSAPP</span>
                  <ArrowRight size={12} className="opacity-60" />
                </a>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Payment Info */}
        <div className="mt-16 text-center text-xs text-slate-400 max-w-xl mx-auto bg-[#10061f]/40 border border-brand-500/10 rounded-2xl p-5">
          <p className="leading-relaxed">
            Metode Pembayaran yang tersedia meliputi <span className="text-cyan-300 font-semibold">QRIS, Dana, OVO, GoPay, LinkAja,</span> dan <span className="text-cyan-300 font-semibold">Transfer Bank</span>. Proses verifikasi donasi dilakukan secara aman dan cepat langsung oleh Admin Owner melalui nomor resmi di atas.
          </p>
        </div>

      </div>
    </section>
  );
}
