/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Globe, MessageSquare, ExternalLink, Link2, Compass } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Community() {
  const communityCards = [
    {
      id: "website",
      name: "Official Website",
      description: "Jelajahi portal web resmi server untuk berita, panduan, dan portal informasi.",
      link: siteConfig.links.website,
      icon: <Globe size={24} className="text-cyan-400 animate-[pulse_2s_infinite]" />,
      actionLabel: "Kunjungi Situs",
      bgHover: "hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
      textColor: "group-hover:text-cyan-300"
    },
    {
      id: "discord",
      name: "Discord Community",
      description: "Bergabunglah dengan ribuan pemain aktif, mengobrol, berkirim meme, dan berdiskusi.",
      link: siteConfig.links.discord,
      icon: <Compass size={24} className="text-[#5865F2]" />,
      actionLabel: "Gabung Discord",
      bgHover: "hover:border-[#5865F2]/30 hover:shadow-[0_0_20px_rgba(88,101,242,0.2)]",
      textColor: "group-hover:text-indigo-400"
    },
    {
      id: "whatsapp",
      name: "WhatsApp Group",
      description: "Dapatkan pemberitahuan terupdate, berinteraksi santai dengan sesama penjelajah.",
      link: siteConfig.links.whatsappGroup,
      icon: <MessageSquare size={24} className="text-emerald-400" />,
      actionLabel: "Gabung Grup WA",
      bgHover: "hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
      textColor: "group-hover:text-emerald-400"
    },
    {
      id: "linktree",
      name: "Linktree Directory",
      description: "Satu tautan untuk semua media sosial, panduan, dan kontak admin terpercaya.",
      link: siteConfig.links.linktree,
      icon: <Link2 size={24} className="text-brand-300" />,
      actionLabel: "Lihat Semua Link",
      bgHover: "hover:border-brand-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]",
      textColor: "group-hover:text-brand-300"
    }
  ];

  return (
    <section id="community" className="py-24 px-4 bg-[#0a0413] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-brand-400 uppercase font-semibold">
            MEDIA & KOMUNITAS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4">
            Bergabunglah Dengan Komunitas
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Terhubunglah dengan petualang lain di luar game melalui jaringan komunikasi resmi kami.
          </p>
        </div>

        {/* Horizontal & Clean Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communityCards.map((card, index) => {
            return (
              <motion.a
                key={card.id}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-panel rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all duration-300 group border-brand-500/10 cursor-pointer ${card.bgHover}`}
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900/40 border border-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-base sm:text-lg text-white transition-colors ${card.textColor}`}>
                      {card.name}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end flex-shrink-0">
                  <span className="text-xs font-bold font-mono tracking-wider text-slate-400 group-hover:text-white transition-colors bg-[#160c26] border border-brand-500/5 group-hover:border-brand-400/20 px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow">
                    <span>{card.actionLabel}</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
