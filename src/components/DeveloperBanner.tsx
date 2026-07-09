/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useDeveloper } from "../context/DeveloperContext";
import { Phone, ExternalLink, Globe, MessageSquare } from "lucide-react";

export default function DeveloperBanner() {
  const { config } = useDeveloper();

  const whatsappUrl = `https://wa.me/62${config.contact.whatsapp.replace(/^0/, "")}`;

  return (
    <div className="w-full bg-[#12071e]/95 backdrop-blur-md border-b border-brand-500/15 py-1.5 px-3 z-50 relative select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-xs font-mono">
        
        {/* Left Side: Contact / WhatsApp Info */}
        <div className="flex items-center gap-1.5 text-slate-300">
          <div className="flex items-center gap-1 bg-cyan-950/40 border border-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-400">
            <Phone size={10} className="sm:w-3 sm:h-3" />
            <span className="font-semibold tracking-wider">{config.contact.phone}</span>
          </div>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold underline decoration-dotted hidden xs:inline"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Center/Right Side: Portfolio & Community Info */}
        <div className="flex items-center gap-2">
          <a 
            href={config.website.portfolio} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-all duration-200 font-bold flex items-center gap-1 bg-yellow-400/10 hover:bg-yellow-400/20 px-1.5 py-0.5 rounded border border-yellow-400/20 hover:scale-102 text-[9px] sm:text-xs"
          >
            <Globe size={10} className="sm:w-3 sm:h-3 text-yellow-500" />
            <span>Website Server Lain</span>
          </a>

          {/* Community Info (Desktop only to prevent clutter on mobile) */}
          <span className="text-slate-700 hidden sm:inline">|</span>

          <div className="hidden sm:flex items-center gap-2 bg-[#1b0d30] border border-brand-500/10 px-1.5 py-0.5 rounded">
            <span className="text-brand-300 font-medium text-[10px]">Komunitas</span>
            <span className="text-slate-700">/</span>
            <a 
              href={config.community.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors font-medium hover:underline flex items-center gap-0.5"
            >
              <span>Web</span>
              <ExternalLink size={8} />
            </a>
            <span className="text-slate-700">•</span>
            <a 
              href={config.community.discord} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-bold hover:underline flex items-center gap-0.5"
            >
              <span>Discord</span>
              <MessageSquare size={8} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

