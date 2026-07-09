import { Award, Sparkles } from 'lucide-react';
import { Donator } from '../types';

interface DonaturViewProps {
  donators: Donator[];
  formatIDR: (num: number) => string;
}

export default function DonaturView({ donators, formatIDR }: DonaturViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider block mb-1">DEDIKASI</span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark-text tracking-tight">
          Top Donatur Leaderboard
        </h1>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-dark-text/60 font-sans">
          Penghargaan tertinggi bagi para donatur setia yang telah menyumbang untuk pemeliharaan infrastruktur dan pengembangan server OZI STAR.
        </p>
      </div>

      {/* Donation Leaderboard layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Gold Highlight First Place Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-6 md:p-8 text-white shadow-lg mc-shadow-lg relative overflow-hidden group hover:scale-[1.01] transition-transform">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Award className="w-48 h-48 text-white rotate-12" />
          </div>
          
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 border border-white/20 text-xs font-mono font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 fill-current" /> TOP #1 DONATUR
              </span>
              
              {/* Minotar avatar of top donor */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 p-1.5 border border-white/25">
                  <img 
                    src={`https://minotar.net/helm/${donators[0].name}/128.png`} 
                    alt="Top Donor Avatar" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://minotar.net/helm/MHF_Steve/128.png`;
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl truncate max-w-[200px]">{donators[0].name}</h3>
                  <span className="font-mono text-xs text-white/85 font-semibold block">{donators[0].rank} RANK</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 mt-8 flex justify-between items-end">
              <div>
                <span className="block text-[10px] font-mono uppercase text-white/70 tracking-wider">Total Kontribusi</span>
                <span className="text-3xl font-display font-bold">{formatIDR(donators[0].amount)}</span>
              </div>
              <div className="bg-white/20 border border-white/25 text-xs font-mono font-bold uppercase px-3 py-1.5 rounded-xl">
                EMAS TIER
              </div>
            </div>
          </div>
        </div>

        {/* Other Donors Grid */}
        <div className="lg:col-span-7 space-y-4">
          {donators.slice(1).map((donator, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-4 md:p-5 border border-black/5 shadow-sm mc-shadow-sm flex items-center justify-between group hover:border-primary/15 transition-all"
            >
              <div className="flex items-center space-x-4 min-w-0">
                {/* Rank counter */}
                <span className="font-mono text-sm font-bold text-dark-text/40 w-5 flex-shrink-0">
                  #{i + 2}
                </span>
                
                {/* Tiny skin helm */}
                <div className="w-10 h-10 rounded-xl bg-bg-custom p-1 border border-black/5 flex-shrink-0">
                  <img 
                    src={`https://minotar.net/helm/${donator.name}/64.png`} 
                    alt="Donor head" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://minotar.net/helm/MHF_Steve/64.png`;
                    }}
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm sm:text-base text-dark-text truncate">{donator.name}</h4>
                  <span className="text-[10px] font-mono text-dark-text/50 uppercase font-semibold block">{donator.rank}</span>
                </div>
              </div>

              <div className="text-right flex-shrink-0 ml-4">
                <span className="block text-sm sm:text-base font-display font-bold text-primary">{formatIDR(donator.amount)}</span>
                <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border inline-block mt-0.5 ${
                  donator.tier === 'silver' 
                    ? 'bg-slate-50 text-slate-700 border-slate-200' 
                    : donator.tier === 'bronze'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-black/5 text-dark-text/60 border-black/5'
                }`}>
                  {donator.tier}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
