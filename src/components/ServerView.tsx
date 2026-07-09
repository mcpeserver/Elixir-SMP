import { 
  Server, TrendingUp, Sparkles, Award, Shield, Youtube, Clock, Copy, Check 
} from 'lucide-react';
import { ServerInfo } from '../types';

interface ServerViewProps {
  serverInfo: ServerInfo;
  copiedIp: boolean;
  copiedPort: boolean;
  handleCopyIp: () => void;
  handleCopyPort: () => void;
}

export default function ServerView({
  serverInfo,
  copiedIp,
  copiedPort,
  handleCopyIp,
  handleCopyPort
}: ServerViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider block mb-1">DATA TEKNIS</span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark-text tracking-tight">
          Informasi Resmi Server
        </h1>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-dark-text/60 font-sans">
          Segala detail teknis dan data penting server OZI STAR SMP yang perlu kamu ketahui untuk berpetualang dengan lancar.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* IP Card */}
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm flex flex-col justify-between group hover:border-primary/20 transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-text mb-1">IP Server</h3>
            <p className="text-xs text-dark-text/50 mb-3 font-mono leading-relaxed">Hubungkan Minecraft kamu menggunakan IP ini.</p>
            <span className="font-mono text-sm font-semibold text-primary block break-all">{serverInfo.ip}</span>
          </div>
          <button 
            onClick={handleCopyIp}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-bg-custom hover:bg-primary/10 text-xs font-semibold text-secondary transition-colors border border-black/5 cursor-pointer"
          >
            {copiedIp ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Tersalin!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Salin IP
              </>
            )}
          </button>
        </div>

        {/* Port Card */}
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm flex flex-col justify-between group hover:border-primary/20 transition-all">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-text mb-1">Port Server</h3>
            <p className="text-xs text-dark-text/50 mb-3 font-mono leading-relaxed">Default port untuk pemain Pocket Edition / Bedrock.</p>
            <span className="font-mono text-sm font-semibold text-primary block">{serverInfo.port}</span>
          </div>
          <button 
            onClick={handleCopyPort}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-bg-custom hover:bg-primary/10 text-xs font-semibold text-secondary transition-colors border border-black/5 cursor-pointer"
          >
            {copiedPort ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" /> Tersalin!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Salin Port
              </>
            )}
          </button>
        </div>

        {/* Java Version */}
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm group hover:border-primary/20 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-text mb-1">Koneksi Java</h3>
            <p className="text-xs text-dark-text/50 mb-3 font-mono leading-relaxed">Kompatibilitas penuh Java & Bedrock Edition.</p>
            <span className="font-mono text-xs sm:text-sm font-semibold text-primary block bg-primary/5 px-2.5 py-1.5 rounded-md w-fit max-w-full break-all">
              {serverInfo.javaVersion}
            </span>
          </div>
        </div>

        {/* Owner Info */}
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm group hover:border-primary/20 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-text mb-1">Owner</h3>
            <p className="text-xs text-dark-text/50 mb-3 font-mono leading-relaxed">Pendiri dan penanggung jawab utama OZI STAR.</p>
            <span className="font-display text-sm font-bold text-secondary block">{serverInfo.owner}</span>
          </div>
        </div>

        {/* Admin Info */}
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm group hover:border-primary/20 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-text mb-1">Admin Server</h3>
            <p className="text-xs text-dark-text/50 mb-3 font-mono leading-relaxed">Staf pengawas yang memastikan ketertiban dunia.</p>
            <div className="flex flex-wrap gap-1">
              {serverInfo.admin.map((adm, i) => (
                <span key={i} className="text-xs font-semibold font-sans px-2.5 py-0.5 rounded-full bg-black/5 text-dark-text/80">
                  {adm}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Streamer Info */}
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm group hover:border-primary/20 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Youtube className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-text mb-1">Streamer Resmi</h3>
            <p className="text-xs text-dark-text/50 mb-3 font-mono leading-relaxed">Pencipta konten media sosial resmi OZI STAR.</p>
            <div className="flex flex-wrap gap-1">
              {serverInfo.streamer.map((st, i) => (
                <span key={i} className="text-xs font-semibold font-sans px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-100 flex items-center gap-1">
                  <Youtube className="w-3.5 h-3.5 text-red-600 fill-current" /> {st}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Jam Bebas PvP */}
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm group hover:border-primary/20 transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-dark-text mb-1">Jam Bebas PvP</h3>
            <p className="text-xs text-dark-text/50 mb-3 font-mono leading-relaxed">Rentang waktu diperbolehkannya pertempuran antar pemain.</p>
            <span className="font-mono text-xs sm:text-sm font-bold text-accent-orange block bg-amber-50 border border-amber-100 px-3 py-1 rounded-md w-fit">
              {serverInfo.pvpHours.start} - {serverInfo.pvpHours.end} {serverInfo.pvpHours.timezone}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
