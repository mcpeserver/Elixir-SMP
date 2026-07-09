/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Menu, X, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/site";
import logo from "../assets/images/logo.jpg";
import { useDeveloper } from "../context/DeveloperContext";
import { useNavigation, PageId } from "../context/NavigationContext";

export default function Navbar() {
  const { config } = useDeveloper();
  const { currentPage, setCurrentPage } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/62${config.contact.whatsapp.replace(/^0/, "")}`;

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

  const menuItems: { label: string; href: string; pageId: PageId }[] = [
    { label: "Beranda", href: "#home", pageId: "home" },
    { label: "Koneksi", href: "#connection", pageId: "connection" },
    { label: "Fitur", href: "#features", pageId: "features" },
    { label: "Aturan", href: "#rules", pageId: "rules" },
    { label: "Rank", href: "#ranks", pageId: "ranks" },
    { label: "Komunitas", href: "#community", pageId: "community" },
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
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("home");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-brand-500/30 group-hover:border-brand-400 transition-colors bg-[#130722]">
              <img
                src={logo}
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
            {menuItems.map((item) => {
              const isActive = currentPage === item.pageId;
              return (
                <a
                  key={item.pageId}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(item.pageId);
                  }}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 group ${
                    isActive ? "text-brand-300 font-semibold" : "text-slate-300 hover:text-brand-300"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              );
            })}
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
              {menuItems.map((item) => {
                const isActive = currentPage === item.pageId;
                return (
                  <a
                    key={item.pageId}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(item.pageId);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? "bg-brand-600/20 text-white font-semibold border-l-2 border-brand-400 pl-3.5" 
                        : "text-slate-300 hover:text-white hover:bg-brand-600/10"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
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

              {/* Partner & Developer Links for Mobile */}
              <div className="pt-4 mt-2 border-t border-brand-500/10 space-y-2">
                <span className="text-[10px] tracking-widest font-mono text-slate-500 block uppercase px-2">KEMITRAAN & WEB DEVELOPER</span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href={config.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-yellow-400 bg-yellow-400/5 hover:bg-yellow-400/10 border border-yellow-400/10 transition-colors"
                  >
                    <span>Website Server Lain (Portfolio)</span>
                    <ExternalLink size={12} className="text-yellow-500/70" />
                  </a>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400/10 border border-cyan-400/10 transition-colors text-center"
                    >
                      <span>Hubungi Saya</span>
                    </a>
                    <a
                      href={config.community.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium text-indigo-400 bg-indigo-400/5 hover:bg-indigo-400/10 border border-indigo-400/10 transition-colors text-center"
                    >
                      <span>Komunitas</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
