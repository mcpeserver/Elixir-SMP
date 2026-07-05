/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { siteConfig } from "../config/site";

export default function DeveloperBanner() {
  return (
    <div className="w-full bg-[#160c26]/90 backdrop-blur-md border-b border-brand-500/10 py-2 px-4 text-center z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs tracking-wider font-mono">
        <div className="flex items-center gap-2 text-brand-300 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>{siteConfig.developer.bannerText}</span>
        </div>
        <div className="flex items-center gap-2.5 justify-center">
          <span className="text-slate-600 hidden sm:inline">•</span>
          <a 
            href={siteConfig.developer.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold underline decoration-dotted"
          >
            Hubungi WA
          </a>
          <span className="text-slate-600">•</span>
          <a 
            href="https://sfl.gl/x2ic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-all duration-200 font-bold flex items-center gap-1 bg-yellow-400/10 hover:bg-yellow-400/20 px-2 py-0.5 rounded-md border border-yellow-400/25 shadow-[0_0_10px_rgba(250,204,21,0.1)] hover:scale-102"
          >
            <span>Website Server Lain</span>
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse inline-block"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
