/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Menu, X, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.javaIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin IP:", err);
    }
  };

  const menuItems = [
    { label: "Beranda", href: "#home" },
    { label: "Koneksi", href: "#connection" },
    { label: "Fitur", href: "#features" },
    { label: "Aturan", href: "#rules" },
    { label: "Rank", href: "#ranks" },
    { label: "Komunitas", href: "#community" },
  ];

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0514]/90 backdrop-blur-lg shadow-lg shadow-black/40 py-2.5 border-b border-brand-500/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-brand-500/30 group-hover:border-brand-400 transition-colors bg-[#130722]">
              <img
                src="/logo.png"
                alt="ELIXIR SMP Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-brand-300 transition-colors text-glow">
              {siteConfig.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-brand-300 transition-colors duration-200 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Actions Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopyIp}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-mono tracking-wider border transition-all duration-300 ${
                copied
                  ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                  : "bg-brand-600/30 hover:bg-brand-600/50 border-brand-500/40 hover:border-brand-400 text-brand-200 hover:text-white cursor-pointer"
              }`}
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span>TERSALIN!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>SALIN IP</span>
                </>
              )}
            </button>
            <a
              href={siteConfig.links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(88,101,242,0.4)]"
            >
              DISCORD
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleCopyIp}
              className={`flex items-center justify-center p-2 rounded-lg border transition-all duration-300 ${
                copied
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                  : "bg-[#180c29] border-brand-500/20 text-brand-300"
              }`}
              title="Salin IP Address"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#180c29] border border-brand-500/20 text-brand-300 hover:text-brand-200 hover:bg-[#201035] transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden w-full bg-[#0d0617]/95 border-b border-brand-500/20 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-600/10 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-500/10">
                <button
                  onClick={() => {
                    handleCopyIp();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold border border-brand-500/30 bg-brand-600/20 text-brand-200"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? "TERSALIN" : "SALIN IP"}</span>
                </button>
                <a
                  href={siteConfig.links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white"
                >
                  DISCORD
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
