import { motion } from 'motion/react';
import { 
  Play, ArrowRight, Users, Server, Copy, Check, Sparkles, 
  Shield, Coins, Heart, Star, Compass
} from 'lucide-react';
import { ServerInfo } from '../types';

interface HomeViewProps {
  minecraftBg: string;
  minecraftLogo: string;
  serverInfo: ServerInfo;
  copiedIp: boolean;
  copiedPort: boolean;
  handleCopyIp: () => void;
  handleCopyPort: () => void;
  navigateToPage: (page: string) => void;
}

export default function HomeView({
  minecraftBg,
  minecraftLogo,
  serverInfo,
  copiedIp,
  copiedPort,
  handleCopyIp,
  handleCopyPort,
  navigateToPage
}: HomeViewProps) {
  
  const features = [
    {
      icon: <Coins className="w-6 h-6 text-emerald-600" />,
      title: "Ekonomi Pertanian",
      description: "Bangun pertanian raksasa, kumpulkan sumber daya, dan jual hasil panenmu di toko server untuk menjadi warga terkaya!"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Klaim Wilayah Aman",
      description: "Gunakan fitur proteksi lahan untuk melindungi rumah, gudang chest, dan hasil kerjamu dari gangguan pemain nakal."
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      title: "Eksplorasi Tak Terbatas",
      description: "Jelajahi dunia survival dengan bioma Minecraft yang luas dan temukan tempat terbaik untuk membangun markas impianmu."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Komunitas Solid",
      description: "OZI STAR didukung oleh komunitas pemain Indonesia yang ramah, sopan, dan selalu siap membantumu kapan saja."
    }
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 px-4">
        {/* Background Image Container with blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src={minecraftBg} 
            alt="Minecraft Background" 
            className="w-full h-full object-cover filter blur-[2px] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-bg-custom z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Big Floating Logo */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={minecraftLogo} 
              alt="OZI STAR SMP Logo" 
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain mx-auto filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] hover:rotate-3 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Server Slogan */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-secondary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-orange animate-pulse" />
              Minecraft Survival Economy Indonesia
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-dark-text tracking-tight leading-none">
              OZI STAR SMP
            </h1>
            <p className="font-display font-medium text-lg sm:text-xl md:text-2xl text-secondary max-w-2xl mx-auto italic mt-2">
              "Bangun duniamu. Bermain bersama. Bertahan lebih lama."
            </p>
            <p className="font-sans text-dark-text/70 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Masuki dunia survival yang damai, kembangkan ekonomi pertanianmu, bangun aliansi komunitas, dan rasakan atmosfer Minecraft klasik modern terbaik.
            </p>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full justify-center max-w-md px-4"
          >
            <button
              onClick={() => navigateToPage('server')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-display font-semibold hover:bg-secondary transition-all shadow-md mc-shadow flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" /> Join Server
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigateToPage('community')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-dark-text font-display font-semibold hover:bg-slate-50 transition-all border border-black/10 shadow-sm mc-shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Users className="w-5 h-5 text-primary" /> Komunitas
            </button>
          </motion.div>

        </div>
      </section>

      {/* QUICK IP BAR / STATUS */}
      <section className="max-w-2xl mx-auto px-4 -mt-10 relative z-30 mb-16">
        <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-xl mc-shadow-lg flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center space-x-3 text-left w-full sm:w-auto">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-mono text-dark-text/40 font-bold uppercase block tracking-wider leading-none mb-1">
                Alamat IP Server (Bedrock/Java)
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-dark-text block truncate select-all">
                {serverInfo.ip}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyIp}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-semibold transition-all shadow-sm mc-shadow-sm cursor-pointer whitespace-nowrap"
            >
              {copiedIp ? (
                <>
                  <Check className="w-4 h-4" /> Tersalin!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Salin IP
                </>
              )}
            </button>
            <button
              onClick={handleCopyPort}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-bg-custom hover:bg-black/5 text-dark-text/70 text-xs font-semibold transition-all border border-black/10 shadow-sm cursor-pointer whitespace-nowrap"
            >
              {copiedPort ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" /> Port: {serverInfo.port}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Port: {serverInfo.port}
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider block mb-1">FITUR UNGGULAN</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark-text tracking-tight">
            Kenapa Bermain di OZI STAR?
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm hover:border-primary/20 transition-all flex flex-col group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-black/5">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-dark-text mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-dark-text/60 leading-relaxed font-sans">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Help Card */}
        <div className="mt-12 bg-slate-100 rounded-2xl p-6 md:p-8 border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100 font-mono">
              <Star className="w-3.5 h-3.5 fill-current" /> PEMULA
            </span>
            <h3 className="font-display font-bold text-lg text-dark-text">Baru pertama kali bergabung?</h3>
            <p className="text-xs text-dark-text/60 max-w-xl font-sans">
              Kami menyarankanmu untuk membaca lembar peraturan server dan mempelajari detail teknis IP serta port di tab navigasi di atas sebelum bermain.
            </p>
          </div>
          <button 
            onClick={() => navigateToPage('rules')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-dark-text text-white font-display font-semibold hover:bg-black transition-colors text-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Baca Peraturan <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
