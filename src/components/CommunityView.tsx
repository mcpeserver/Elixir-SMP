import { MessageSquare, Phone, Sparkles, Youtube, ExternalLink } from 'lucide-react';
import { CommunityLink } from '../types';

interface CommunityViewProps {
  communityLinks: CommunityLink[];
}

export default function CommunityView({ communityLinks }: CommunityViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider block mb-1">KOMUNIKASI</span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark-text tracking-tight">
          Tautan Media Sosial Komunitas
        </h1>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-dark-text/60 font-sans">
          Masuk ke grup diskusi komunitas, tonton siaran video, dan ikuti update tren terbaru dari OZI STAR SMP.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {communityLinks.filter(c => c.active).map((link, i) => {
          const renderIcon = () => {
            switch(link.platform) {
              case 'Discord':
                return <MessageSquare className="w-8 h-8 text-indigo-500" />;
              case 'WhatsApp':
                return <Phone className="w-8 h-8 text-emerald-500" />;
              case 'TikTok':
                return <Sparkles className="w-8 h-8 text-purple-500" />;
              case 'YouTube':
                return <Youtube className="w-8 h-8 text-red-500" />;
              default:
                return <ExternalLink className="w-8 h-8 text-primary" />;
            }
          };

          const renderColorClass = () => {
            switch(link.platform) {
              case 'Discord': return 'hover:border-indigo-200 hover:shadow-indigo-100/50';
              case 'WhatsApp': return 'hover:border-emerald-200 hover:shadow-emerald-100/50';
              case 'TikTok': return 'hover:border-purple-200 hover:shadow-purple-100/50';
              case 'YouTube': return 'hover:border-red-200 hover:shadow-red-100/50';
              default: return 'hover:border-primary/20';
            }
          };

          return (
            <a 
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`bg-white rounded-2xl p-6 border border-black/5 shadow-sm mc-shadow-sm flex flex-col justify-between group transition-all duration-350 ${renderColorClass()} hover:-translate-y-1 hover:shadow-lg`}
            >
              <div>
                <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                  {renderIcon()}
                </div>
                <h3 className="font-display font-bold text-lg text-dark-text mb-1">{link.platform}</h3>
                <p className="text-xs text-dark-text/50 font-sans">{link.handle}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-primary font-display group-hover:text-secondary">
                <span>Gabung Sekarang</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          );
        })}
      </div>

    </div>
  );
}
