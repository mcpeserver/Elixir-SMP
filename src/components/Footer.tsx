/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { siteConfig } from "../config/site";
import { Heart, ShieldCheck } from "lucide-react";
import logo from "../assets/images/logo.jpg";
import { useDeveloper } from "../context/DeveloperContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { config } = useDeveloper();

  const whatsappUrl = `https://wa.me/62${config.contact.whatsapp.replace(/^0/, "")}`;

  return (
    <footer className="bg-[#06020d] border-t border-brand-500/10 py-12 px-4 relative overflow-hidden">
      {/* Absolute background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-brand-500/20 bg-[#12071f]">
            <img 
              src={logo} 
              alt="ELIXIR SMP Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm text-white tracking-wider text-glow">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </span>
          </div>
        </div>

        {/* Center: Minecraft disclaimer banner */}
        <div className="text-center max-w-sm">
          <p className="text-[9px] sm:text-[10px] text-slate-500 leading-normal font-mono">
            NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.
          </p>
        </div>

        {/* Right Side: Developer Watermark & Contacts */}
        <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <span>Website dikembangkan oleh <strong className="text-white">{config.name}</strong> • WhatsApp {config.contact.phone}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold font-mono text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider bg-cyan-950/20 border border-cyan-500/15 px-2.5 py-0.5 rounded-full hover:shadow-[0_0_10px_rgba(34,211,238,0.15)] flex items-center gap-1"
          >
            <ShieldCheck size={11} />
            <span>KONTAK {config.name.toUpperCase()}</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

