/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { siteConfig, Rule } from "../config/site";

const getIcon = (name: string) => {
  const IconComponent = (Icons as any)[name];
  if (IconComponent) {
    return <IconComponent size={20} className="text-red-400" />;
  }
  return <Icons.AlertTriangle size={20} className="text-red-400" />;
};

export default function Rules() {
  return (
    <section id="rules" className="py-24 px-4 bg-[#0a0413] relative overflow-hidden">
      {/* Decorative gradient glowing effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-red-400 uppercase font-semibold">
            PERATURAN KOMUNITAS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4">
            Tata Tertib & Hukum Server
          </h2>
          <div className="h-1 w-20 bg-red-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Demi menjaga kenyamanan dan sportivitas bersama, setiap pemain wajib mematuhi seluruh peraturan resmi di bawah ini.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.rules.map((rule: Rule, index: number) => {
            return (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[#12071d]/50 backdrop-blur-md border border-red-500/10 rounded-2xl p-5 sm:p-6 hover:bg-[#180a26]/70 hover:border-red-500/25 transition-all duration-300 flex gap-4"
              >
                {/* Rule Number & Icon Container */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                    {getIcon(rule.iconName)}
                  </div>
                </div>

                {/* Rule Details */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-red-400 bg-red-950/60 border border-red-500/15 px-2 py-0.5 rounded">
                      PASAL {rule.id}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Alert Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-red-950/20 border border-red-500/20 rounded-2xl p-4 sm:p-6 text-center max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-red-300 text-xs sm:text-sm font-semibold">
            <Icons.AlertTriangle className="text-red-400 animate-pulse" size={20} />
            <span>Sanksi keras berupa BANNED permanen menanti pelanggar yang sengaja merusak keharmonisan server!</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
