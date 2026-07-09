/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { siteConfig, Feature } from "../config/site";

// Dynamic icon resolver mapping
const getIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  if (IconComponent) {
    return <IconComponent size={24} className="text-brand-300" />;
  }
  return <Icons.HelpCircle size={24} className="text-brand-300" />;
};

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-[#07030f] relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-brand-400 uppercase font-semibold">
            FITUR UTAMA SERVER
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4">
            Eksplorasi Keajaiban Server
          </h2>
          <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Temukan berbagai sistem petualangan kustom yang dirancang khusus untuk meningkatkan keseruan bermain Anda di ELIXIR SMP.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.features.map((feature: Feature, index: number) => {
            const isComingSoon = feature.id === "arena";
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`glass-panel rounded-2xl p-6 flex flex-col justify-between border-brand-500/10 hover:border-brand-400/30 transition-all duration-300 relative group ${
                  isComingSoon ? "bg-slate-900/10 border-slate-800/40" : "glass-panel-hover"
                }`}
              >
                {/* Coming soon subtle badge */}
                {isComingSoon && (
                  <span className="absolute top-4 right-4 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full">
                    SOON
                  </span>
                )}

                <div>
                  {/* Icon Wrapper */}
                  <div className={`p-3 rounded-xl inline-flex mb-5 border transition-colors duration-300 ${
                    isComingSoon 
                      ? "bg-slate-900/30 border-slate-800/50 text-slate-500" 
                      : "bg-brand-600/10 border-brand-500/20 text-brand-300 group-hover:bg-brand-500/20 group-hover:border-brand-400/40 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                  }`}>
                    {getIcon(feature.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className={`font-display font-bold text-lg mb-2 transition-colors duration-300 ${
                    isComingSoon ? "text-slate-400" : "text-white group-hover:text-brand-300"
                  }`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle decorative element at bottom-right of active cards */}
                {!isComingSoon && (
                  <div className="mt-6 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-400">
                    <Icons.ChevronRight size={14} className="transform translate-x-1 group-hover:translate-x-0 transition-transform" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
