import { ServerInfo, StaffMember, Donator, RuleItem, CommunityLink } from './types';

export const SERVER_INFO: ServerInfo = {
  ip: "lite-6.astrixhost.web.id",
  port: 5035,
  javaVersion: "lite-6.astrixhost.web.id:5035",
  status: "Online",
  playerCount: {
    online: 48,
    max: 100
  },
  owner: "skyzoreVanc",
  admin: ["null", "Udin", "BrayOFRion"],
  streamer: ["@ozicuyy", "@kizey393", "@syipalanyong"],
  pvpHours: {
    start: "19:00",
    end: "21:00",
    timezone: "WIB"
  }
};

export const STAFF_MEMBERS: StaffMember[] = [
  {
    name: "skyzoreVanc",
    role: "Owner",
    skinUuid: "skyzoreVanc"
  },
  {
    name: "null",
    role: "Admin",
    skinUuid: "MHF_Steve"
  },
  {
    name: "Udin",
    role: "Admin",
    skinUuid: "Udin"
  },
  {
    name: "BrayOFRion",
    role: "Admin",
    skinUuid: "BrayOFRion"
  },
  {
    name: "@ozicuyy",
    role: "Streamer",
    skinUuid: "ozicuyy"
  },
  {
    name: "@kizey393",
    role: "Streamer",
    skinUuid: "kizey393"
  },
  {
    name: "@syipalanyong",
    role: "Streamer",
    skinUuid: "syipalanyong"
  }
];

export const DONATORS: Donator[] = [
  {
    name: "Rian_Gamerz",
    amount: 500000,
    rank: "OZI CHIEF",
    tier: "gold"
  },
  {
    name: "Ahmad_MC",
    amount: 350000,
    rank: "OZI CHAMP",
    tier: "silver"
  },
  {
    name: "Siti_Chuu",
    amount: 250000,
    rank: "OZI WARRIOR",
    tier: "bronze"
  },
  {
    name: "Budi_GriefStopper",
    amount: 100000,
    rank: "OZI SOLDIER",
    tier: "normal"
  },
  {
    name: "Laras_Builder",
    amount: 50000,
    rank: "OZI CITIZEN",
    tier: "normal"
  }
];

export const RULES_LIST: RuleItem[] = [
  // Hal yang Diperbolehkan (Allowed)
  {
    text: "Bermain Jujur & Adil",
    description: "Selalu tunjukkan sikap ramah, suportif, dan saling menghormati antar sesama pemain OZI STAR.",
    type: "allowed"
  },
  {
    text: "Membangun di Area Bebas",
    description: "Bangun rumah, pertanian, dan markas kamu di lahan kosong yang tidak diklaim oleh pemain lain.",
    type: "allowed"
  },
  {
    text: "Berdagang dengan Damai",
    description: "Gunakan mata uang server untuk transaksi barang, jasa, dan sewa lahan secara adil.",
    type: "allowed"
  },
  {
    text: "Kolaborasi Konstruksi",
    description: "Bergabung bersama komunitas dalam membangun proyek besar seperti kastil, jembatan, atau kota.",
    type: "allowed"
  },
  {
    text: "Melaporkan Pelanggaran",
    description: "Laporkan bug atau pemain yang melakukan griefing secara langsung kepada Staf melalui Discord.",
    type: "allowed"
  },

  // Hal yang Tidak Diperbolehkan (Forbidden)
  {
    text: "Hacking, Cheating, X-Ray",
    description: "Dilarang menggunakan modifikasi klien ilegal seperti X-ray, Fly, Forcefield, atau cheat lainnya.",
    type: "forbidden"
  },
  {
    text: "Griefing (Merusak)",
    description: "Dilarang merusak, mengubah, atau menghancurkan properti/bangunan milik pemain lain tanpa izin.",
    type: "forbidden"
  },
  {
    text: "Stealing (Mencuri)",
    description: "Dilarang mengambil item dari chest, tungku, atau kebun milik pemain lain tanpa persetujuan.",
    type: "forbidden"
  },
  {
    text: "SARA & Toksisitas",
    description: "Dilarang berkata kasar, menghina suku/ras/agama, memprovokasi, atau melakukan spam di chat.",
    type: "forbidden"
  },
  {
    text: "PvP di Luar Jam Bebas",
    description: "Dilarang menyerang atau membunuh pemain lain kecuali pada jam bebas PvP (19:00 - 21:00 WIB).",
    type: "forbidden"
  }
];

export const COMMUNITY_LINKS: CommunityLink[] = [
  {
    platform: "Discord",
    url: "https://discord.gg/9KUN2byKRM",
    handle: "Ozi Star Community",
    active: true
  },
  {
    platform: "WhatsApp",
    url: "https://chat.whatsapp.com/ErlYzPear5YDXvHxneA0sS",
    handle: "OZI STAR SMP Group",
    active: true
  },
  {
    platform: "TikTok",
    url: "https://tiktok.com/@ozistarsmp",
    handle: "@ozistarsmp",
    active: true
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@ozigaming",
    handle: "Ozi Gaming",
    active: true
  }
];
