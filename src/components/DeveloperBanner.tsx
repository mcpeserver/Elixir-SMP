/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useDeveloper } from "../context/DeveloperContext";

export default function DeveloperBanner() {
  const { config } = useDeveloper();

  const whatsappUrl = `https://wa.me/62${config.contact.whatsapp.replace(/^0/, "")}`;

  return (
    <div className="w-full bg-[#160c26]/95 backdrop-blur-md border-b border-brand-500/15 py-2 px-4 text-center z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-2 text-[11px] sm:text-xs tracking-wider font-mono">
        
        {/* Left: Developer & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-300">
          <div className="flex items-center gap-2 text-brand-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Developed by <strong className="text-white font-semibold">{config.name}</strong></span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400">WhatsApp: <span className="text-cyan-400 font-bold">{config.contact.phone}</span></span>
          <span className="text-slate-600">•</span>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold underline decoration-dotted"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Right: Portfolio & Developer Community Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {/* Portfolio link */}
          <a 
            href={config.website.portfolio} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-all duration-200 font-bold flex items-center gap-1 bg-yellow-400/10 hover:bg-yellow-400/20 px-2 py-0.5 rounded-md border border-yellow-400/25 shadow-[0_0_10px_rgba(250,204,21,0.08)] hover:scale-102 text-[10px] sm:text-xs"
          >
            <span>Website Server Lain</span>
            <span className="w-1 h-1 rounded-full bg-yellow-400 animate-pulse"></span>
          </a>

          <span className="text-slate-600 hidden md:inline">•</span>

          {/* Community Group */}
          <div className="flex items-center gap-2 bg-[#1b1030] border border-brand-500/15 px-2 py-0.5 rounded-md text-[10px] sm:text-xs">
            <span className="text-brand-300 font-semibold">{config.community.name}</span>
            <span className="text-slate-600">|</span>
            <a 
              href={config.community.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-dotted font-medium"
            >
              Website
            </a>
            <span className="text-slate-600">•</span>
            <a 
              href={config.community.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-bold"
            >
              Discord
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

