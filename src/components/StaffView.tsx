import { StaffMember } from '../types';

interface StaffViewProps {
  staffMembers: StaffMember[];
}

export default function StaffView({ staffMembers }: StaffViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider block mb-1">STRUKTUR TIM</span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark-text tracking-tight">
          Tim Staf OZI STAR
        </h1>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-3 mb-4" />
        <p className="text-sm sm:text-base text-dark-text/60 font-sans">
          Tim pengembang, moderator, dan administrator berdedikasi tinggi yang siap membantu kelancaran bermain para warga.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
        {staffMembers.map((staff, i) => (
          <div 
            key={i} 
            className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm mc-shadow-sm flex flex-col items-center text-center group hover:-translate-y-1 transition-all hover:border-primary/20"
          >
            {/* 3D Minecraft Head Avatar rendering using Minotar */}
            <div className="w-16 h-16 rounded-xl bg-bg-custom border-2 border-black/5 p-1 mb-3 relative overflow-hidden group-hover:scale-105 transition-transform">
              <img 
                src={`https://minotar.net/helm/${staff.skinUuid}/128.png`} 
                alt={`${staff.name} Skin Head`} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback in case skin API is down
                  (e.currentTarget as HTMLImageElement).src = `https://minotar.net/helm/MHF_Steve/128.png`;
                }}
              />
            </div>
            <h3 className="font-display font-bold text-sm sm:text-base text-dark-text leading-tight truncate w-full">
              {staff.name}
            </h3>
            <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mt-2.5 border ${
              staff.role === 'Owner' 
                ? 'bg-amber-50 text-amber-700 border-amber-200' 
                : staff.role === 'Admin'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-red-50 text-red-700 border-red-200'
            }`}>
              {staff.role}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
