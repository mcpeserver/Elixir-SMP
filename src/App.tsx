import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ExternalLink, MessageSquare, Phone, Sparkles, Server, Check, Copy
} from 'lucide-react';

import { DeveloperConfig } from './types';
import { SERVER_INFO, STAFF_MEMBERS, DONATORS, RULES_LIST, COMMUNITY_LINKS } from './serverData';

// Import our beautiful generated assets
import minecraftBg from './assets/images/minecraft_pixel_bg_1783376679208.jpg';
import minecraftLogo from './assets/images/ozi_star_logo_with_bg_1783396111407.jpg';

// Import our page views
import HomeView from './components/HomeView';
import ServerView from './components/ServerView';
import RulesView from './components/RulesView';
import StaffView from './components/StaffView';
import DonaturView from './components/DonaturView';
import CommunityView from './components/CommunityView';

const DEFAULT_DEV_CONFIG: DeveloperConfig = {
  name: "Ran Dev",
  contact: {
    phone: "0895602592430",
    whatsapp: "0895602592430"
  },
  community: {
    name: "Ran Dev Community",
    website: "https://community.randev.com",
    discord: "https://discord.gg/9KUN2byKRM"
  },
  website: {
    portfolio: "https://sfl.gl/x2ic"
  }
};

export default function App() {
  // Developer information from API (pre-populated with robust default values)
  const [devConfig, setDevConfig] = useState<DeveloperConfig>(DEFAULT_DEV_CONFIG);
  const [devError, setDevError] = useState(false);
  const [isFetchingDev, setIsFetchingDev] = useState(false);

  // States for copy feedback
  const [copiedIp, setCopiedIp] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active navigation tab (page routing)
  const [activeTab, setActiveTab] = useState('home');

  // Interactive Developer Dropdown state
  const [isDevDropdownOpen, setIsDevDropdownOpen] = useState(false);

  // Header scroll transition state
  const [scrolled, setScrolled] = useState(false);

  // Fetch developer API
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch developer details");
        return res.json();
      })
      .then((data: DeveloperConfig) => {
        if (data && data.name) {
          setDevConfig(data);
        }
      })
      .catch(err => {
        console.warn("Using default local fallback for developer config:", err);
      });
  }, []);

  // Track page scroll to compress and style header dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Copy IP
  const handleCopyIp = () => {
    navigator.clipboard.writeText(SERVER_INFO.ip);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  // Handle Copy Port
  const handleCopyPort = () => {
    navigator.clipboard.writeText(SERVER_INFO.port.toString());
    setCopiedPort(true);
    setTimeout(() => setCopiedPort(false), 2000);
  };

  // SPA navigation to different pages
  const navigateToPage = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Format IDR Currency
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-bg-custom text-dark-text antialiased selection:bg-primary/30">
      
      {/* HEADER: DYNAMIC TRANSITION STICKY NAVIGATION */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-panel border-b border-black/10 shadow-lg py-1.5' 
          : 'bg-white/95 border-b border-black/5 shadow-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo brand */}
          <button 
            onClick={() => navigateToPage('home')} 
            className="flex items-center space-x-3 text-left focus:outline-none group"
            id="brand-logo"
          >
            <img 
              src={minecraftLogo} 
              alt="OZI STAR SMP" 
              className="w-10 h-10 rounded-lg mc-border group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span className="block font-display font-bold text-xl text-primary tracking-tight leading-none group-hover:text-secondary transition-colors">
              OZI STAR
            </span>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-1 font-display text-sm font-semibold relative">
            {[
              { id: 'home', label: 'Home' },
              { id: 'server', label: 'Server' },
              { id: 'rules', label: 'Rules' },
              { id: 'staff', label: 'Staff' },
              { id: 'donatur', label: 'Donatur' },
              { id: 'community', label: 'Community' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigateToPage(tab.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white shadow-sm mc-shadow-sm' 
                    : 'text-dark-text/70 hover:text-primary hover:bg-black/5'
                }`}
                id={`nav-${tab.id}`}
              >
                {tab.label}
              </button>
            ))}

            {/* Interactive Dropdown for Developer & Community Info */}
            {!isFetchingDev && devConfig && (
              <div 
                className="relative ml-2"
                onMouseEnter={() => setIsDevDropdownOpen(true)}
                onMouseLeave={() => setIsDevDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDevDropdownOpen(!isDevDropdownOpen)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 border border-black/5 bg-slate-50 hover:bg-primary/5 hover:text-primary ${
                    isDevDropdownOpen 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'text-dark-text/70'
                  }`}
                  id="nav-dev-dropdown-btn"
                >
                  <span>Developer</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                </button>

                <AnimatePresence>
                  {isDevDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-72 bg-white rounded-2xl p-4 border border-black/5 shadow-xl mc-shadow-lg z-50 text-left font-sans"
                      id="nav-dev-dropdown-menu"
                    >
                      <div className="border-b border-black/5 pb-2.5 mb-3">
                        <span className="text-[10px] font-mono font-bold text-dark-text/40 uppercase tracking-wider block">
                          DEVELOPER PROFILE
                        </span>
                        <span className="font-display font-bold text-base text-dark-text block">
                          {devConfig.name}
                        </span>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div>
                          <span className="text-[9px] font-mono text-dark-text/40 font-bold block uppercase tracking-wider">
                            KONTAK DEVELOPER
                          </span>
                          <div className="flex flex-col gap-1.5 mt-1">
                            <a 
                              href={`https://wa.me/${devConfig.contact.whatsapp}`} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold p-1.5 rounded bg-emerald-50 hover:bg-emerald-100/80 transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Dev
                            </a>
                            <a 
                              href={devConfig.website.portfolio} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold p-1.5 rounded bg-amber-50 hover:bg-amber-100/80 transition-colors"
                            >
                              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Portfolio Website
                            </a>
                          </div>
                        </div>

                        <div className="border-t border-black/5 pt-2.5">
                          <span className="text-[9px] font-mono text-dark-text/40 font-bold block uppercase tracking-wider">
                            KOMUNITAS DEVELOPER
                          </span>
                          <span className="font-semibold text-dark-text block mt-1">
                            {devConfig.community.name}
                          </span>
                          <div className="flex flex-col gap-1.5 mt-1.5">
                            <a 
                              href={devConfig.community.website} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-2 text-sky hover:text-sky-dark font-semibold p-1.5 rounded bg-sky/5 hover:bg-sky/10 transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5 text-sky" /> Website Komunitas
                            </a>
                            <a 
                              href={devConfig.community.discord} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex items-center gap-2 text-indigo-700 hover:text-indigo-800 font-semibold p-1.5 rounded bg-indigo-50 hover:bg-indigo-100/80 transition-colors"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-indigo-600" /> Discord Server
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </nav>

          {/* Mobile Hamburger button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-dark-text/70 hover:text-primary hover:bg-black/5 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white/95 border-b border-black/5 shadow-lg absolute w-full left-0 z-50"
              id="mobile-nav-panel"
            >
              <div className="px-4 py-3 space-y-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'server', label: 'Server Info' },
                  { id: 'rules', label: 'Peraturan' },
                  { id: 'staff', label: 'Daftar Staff' },
                  { id: 'donatur', label: 'Donatur' },
                  { id: 'community', label: 'Komunitas' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => navigateToPage(tab.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold font-display transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-primary text-white' 
                        : 'text-dark-text/80 hover:text-primary hover:bg-black/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}

                {/* Dev & Community Links in Mobile Menu */}
                {!isFetchingDev && devConfig && (
                  <div className="mt-4 pt-4 border-t border-black/5 space-y-2">
                    <span className="block text-[10px] font-mono font-bold text-dark-text/40 uppercase tracking-wider px-2">
                      Developer & Komunitas
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/${devConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 p-2 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-semibold font-sans hover:bg-emerald-100 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
                      </a>
                      <a
                        href={devConfig.website.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 p-2 rounded-lg bg-amber-50 text-amber-800 text-[11px] font-semibold font-sans hover:bg-amber-100 transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Portfolio
                      </a>
                      <a
                        href={devConfig.community.website}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 p-2 rounded-lg bg-sky/10 text-sky-800 text-[11px] font-semibold font-sans hover:bg-sky/20 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-sky" /> Server Lain
                      </a>
                      <a
                        href={devConfig.community.discord}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 p-2 rounded-lg bg-indigo-50 text-indigo-800 text-[11px] font-semibold font-sans hover:bg-indigo-100 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-indigo-600" /> Discord Dev
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DYNAMIC VIEW ROUTER CONTAINER */}
      <main className="flex-grow w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {activeTab === 'home' && (
              <HomeView 
                minecraftBg={minecraftBg}
                minecraftLogo={minecraftLogo}
                serverInfo={SERVER_INFO}
                copiedIp={copiedIp}
                copiedPort={copiedPort}
                handleCopyIp={handleCopyIp}
                handleCopyPort={handleCopyPort}
                navigateToPage={navigateToPage}
              />
            )}

            {activeTab === 'server' && (
              <ServerView 
                serverInfo={SERVER_INFO}
                copiedIp={copiedIp}
                copiedPort={copiedPort}
                handleCopyIp={handleCopyIp}
                handleCopyPort={handleCopyPort}
              />
            )}

            {activeTab === 'rules' && (
              <RulesView 
                rulesList={RULES_LIST}
                serverInfo={SERVER_INFO}
              />
            )}

            {activeTab === 'staff' && (
              <StaffView 
                staffMembers={STAFF_MEMBERS}
              />
            )}

            {activeTab === 'donatur' && (
              <DonaturView 
                donators={DONATORS}
                formatIDR={formatIDR}
              />
            )}

            {activeTab === 'community' && (
              <CommunityView 
                communityLinks={COMMUNITY_LINKS}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-secondary text-white border-t border-black/10 py-12 px-4 relative mt-auto z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          
          {/* Column 1: Brand & Desc */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={minecraftLogo} 
                alt="Logo" 
                className="w-10 h-10 rounded-lg border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="block font-display font-bold text-lg text-white">OZI STAR SMP</span>
                <span className="block text-[10px] font-mono tracking-wider text-white/60">EST. 2026</span>
              </div>
            </div>
            <p className="text-xs text-white/70 max-w-sm font-sans leading-relaxed">
              Sebuah server Minecraft Survival Economy dengan komunitas yang solid dan damai, menghadirkan sistem jual beli dan eksplorasi seru.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm tracking-wide text-white uppercase">Navigasi Cepat</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <button onClick={() => navigateToPage('home')} className="text-white/70 hover:text-white transition-colors text-left focus:outline-none cursor-pointer">› Home</button>
              <button onClick={() => navigateToPage('server')} className="text-white/70 hover:text-white transition-colors text-left focus:outline-none cursor-pointer">› Server Info</button>
              <button onClick={() => navigateToPage('rules')} className="text-white/70 hover:text-white transition-colors text-left focus:outline-none cursor-pointer">› Peraturan</button>
              <button onClick={() => navigateToPage('staff')} className="text-white/70 hover:text-white transition-colors text-left focus:outline-none cursor-pointer">› Tim Staff</button>
              <button onClick={() => navigateToPage('donatur')} className="text-white/70 hover:text-white transition-colors text-left focus:outline-none cursor-pointer">› Donatur</button>
              <button onClick={() => navigateToPage('community')} className="text-white/70 hover:text-white transition-colors text-left focus:outline-none cursor-pointer">› Komunitas</button>
            </div>
          </div>

          {/* Column 3: Developer Info & API integration */}
          <div className="space-y-4 text-xs">
            <h4 className="font-display font-bold text-sm tracking-wide text-white uppercase">Sistem & Developer</h4>
            
            {isFetchingDev ? (
              <p className="animate-pulse text-white/50">Fetching developer data...</p>
            ) : devError || !devConfig ? (
              <p className="text-red-300 font-mono">Developer Information Unavailable</p>
            ) : (
              <div className="space-y-3 font-mono">
                <div>
                  <span className="block text-[10px] text-white/40 uppercase font-bold tracking-wider mb-1">Developer</span>
                  <a 
                    href={devConfig.website.portfolio} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-primary hover:text-white hover:underline font-bold transition-colors inline-flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> {devConfig.name}
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] text-white/40 uppercase font-bold tracking-wider mb-1">Komunitas Dev</span>
                  <a 
                    href={devConfig.community.website} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sky hover:text-white hover:underline transition-colors inline-flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-sky" /> {devConfig.community.name}
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <a 
                    href={`https://wa.me/${devConfig.contact.whatsapp}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold transition-all inline-flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Dev
                  </a>
                  <a 
                    href={devConfig.community.discord} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-2.5 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 font-semibold transition-all inline-flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-indigo-400" /> Discord Dev
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-white/50 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
          <p>&copy; 2026 OZI STAR SMP. Seluruh hak cipta dilindungi. Tidak terafiliasi dengan Mojang Studios.</p>
        </div>
      </footer>

    </div>
  );
}
