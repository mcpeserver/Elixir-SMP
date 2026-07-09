export interface DeveloperConfig {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

export type ServerStatusType = 'Online' | 'Offline' | 'Maintenance' | 'Update';

export interface ServerInfo {
  ip: string;
  port: number;
  javaVersion: string;
  status: ServerStatusType;
  playerCount: {
    online: number;
    max: number;
  };
  owner: string;
  admin: string[];
  streamer: string[];
  pvpHours: {
    start: string;
    end: string;
    timezone: string;
  };
}

export interface StaffMember {
  name: string;
  role: 'Owner' | 'Admin' | 'Streamer';
  skinUuid?: string; // We can use Crafatar or Minotar to fetch dynamic Minecraft skin avatars!
}

export interface Donator {
  name: string;
  amount: number;
  rank: string;
  tier: 'gold' | 'silver' | 'bronze' | 'normal';
}

export interface RuleItem {
  text: string;
  description: string;
  type: 'allowed' | 'forbidden';
}

export interface CommunityLink {
  platform: 'Discord' | 'WhatsApp' | 'TikTok' | 'YouTube';
  url: string;
  handle: string;
  active: boolean;
}
