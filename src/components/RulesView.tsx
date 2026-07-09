import { Check, X, Clock, Sun, Moon, AlertCircle } from 'lucide-react';
import { RuleItem, ServerInfo } from '../types';

interface RulesViewProps {
  rulesList: RuleItem[];
  serverInfo: ServerInfo;
}

export default function RulesView({ rulesList, serverInfo }: RulesViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider block mb-1">REGULASI</span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark-text tracking-tight">
          Peraturan Penting Server
        </h1>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-dark-text/60 font-sans">
          Demi kenyamanan, keamanan, dan ketertiban bermain bersama, seluruh warga OZI STAR wajib mematuhi aturan berikut.
        </p>
      </div>

      {/* Rules Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Column 1: Hal yang Diperbolehkan */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-md mc-shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Check className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-xl text-emerald-800">
                Hal yang Diperbolehkan
              </h2>
            </div>
            <div className="space-y-6">
              {rulesList.filter(r => r.type === 'allowed').map((rule, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs font-bold flex items-center justify-center font-mono">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-dark-text text-base">{rule.text}</h3>
                    <p className="text-xs sm:text-sm text-dark-text/60 font-sans leading-relaxed mt-0.5">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Hal yang Tidak Diperbolehkan */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-red-100 shadow-md mc-shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500" />
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-100">
                <X className="w-6 h-6" />
              </div>
              <h2 className="font-display font-bold text-xl text-red-800">
                Hal yang Dilarang (Sanksi BANNED)
              </h2>
            </div>
            <div className="space-y-6">
              {rulesList.filter(r => r.type === 'forbidden').map((rule, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-600 border border-red-100 text-xs font-bold flex items-center justify-center font-mono">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-dark-text text-base text-red-700">{rule.text}</h3>
                    <p className="text-xs sm:text-sm text-dark-text/60 font-sans leading-relaxed mt-0.5">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* HORIZONTAL PVP TIMELINE */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-black/5 shadow-md mc-shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-4 border-b border-black/5 gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-accent-orange border border-amber-100">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-dark-text">Jadwal Jam PvP Bebas</h2>
              <p className="text-xs text-dark-text/50 font-sans">Siklus waktu keamanan dan pertarungan warga server.</p>
            </div>
          </div>
          <div className="text-xs font-mono font-bold uppercase px-3 py-1 bg-amber-50 text-accent-orange rounded-full border border-amber-100">
            {serverInfo.pvpHours.start} - {serverInfo.pvpHours.end} {serverInfo.pvpHours.timezone} (Setiap Hari)
          </div>
        </div>

        {/* Timeline UI */}
        <div className="relative pt-6 pb-4">
          {/* Central Timeline Line */}
          <div className="absolute top-[52px] left-8 right-8 h-1 bg-slate-100 rounded-full z-0 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            
            {/* Pagi - Siang */}
            <div className="flex md:flex-col items-center md:text-center space-x-4 md:space-x-0 group">
              <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-accent-orange mb-3 z-10 group-hover:scale-110 transition-transform">
                <Sun className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold text-dark-text/40 uppercase tracking-wider">06:00 - 18:59</span>
                <h4 className="font-display font-bold text-base text-dark-text">Pagi & Siang: Zona Aman</h4>
                <p className="text-xs text-dark-text/60 mt-1 max-w-[240px] font-sans leading-relaxed">
                  PvP mati total. Waktunya fokus melakukan penambangan, perdagangan, bercocok tanam, dan pembangunan kastil tanpa takut dibegal.
                </p>
              </div>
            </div>

            {/* PvP Jam Bebas */}
            <div className="flex md:flex-col items-center md:text-center space-x-4 md:space-x-0 group">
              <div className="w-12 h-12 rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center text-red-600 mb-3 z-10 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider">
                  {serverInfo.pvpHours.start} - {serverInfo.pvpHours.end} WIB
                </span>
                <h4 className="font-display font-bold text-base text-red-700">Jam Bebas PvP (High Risk)</h4>
                <p className="text-xs text-red-600/80 mt-1 max-w-[240px] font-sans leading-relaxed">
                  Aturan PvP diizinkan di luar wilayah spawn resmi. Pemain diperbolehkan beradu skill bertarung. Siapkan armor besi atau diamond terbaikmu!
                </p>
              </div>
            </div>

            {/* Malam */}
            <div className="flex md:flex-col items-center md:text-center space-x-4 md:space-x-0 group">
              <div className="w-12 h-12 rounded-full bg-indigo-100 border-2 border-indigo-500 flex items-center justify-center text-indigo-600 mb-3 z-10 group-hover:scale-110 transition-transform">
                <Moon className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[10px] font-mono font-bold text-dark-text/40 uppercase tracking-wider">21:01 - 05:59</span>
                <h4 className="font-display font-bold text-base text-dark-text">Larut Malam: Gencatan Senjata</h4>
                <p className="text-xs text-dark-text/60 mt-1 max-w-[240px] font-sans leading-relaxed">
                  PvP dinonaktifkan kembali. Waktu istirahat malam, mengorganisasi item di gudang peti, dekorasi interior, dan bersosialisasi damai.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
