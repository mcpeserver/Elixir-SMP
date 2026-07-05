/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Rule {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Rank {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  
  // Connection Details
  javaIp: string;
  altJavaIp: string;
  bedrockIp: string;
  bedrockPort: number;
  
  // Features
  features: Feature[];
  
  // Rules
  rules: Rule[];
  
  // Ranks
  ranks: Rank[];
  
  // Media / Links
  links: {
    website: string;
    discord: string;
    whatsappGroup: string;
    whatsappContact: string; // wa.me/6283837742780
    linktree: string;
  };

  // Developer Watermark
  developer: {
    name: string;
    whatsapp: string;
    whatsappUrl: string;
    bannerText: string;
    footerText: string;
  };
  
  // SEO Meta
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "ELIXIR SMP",
  tagline: "Minecraft Purple Fantasy Survival Server",
  description: "Selamat datang di ELIXIR SMP, dunia survival Minecraft bertema fantasi ungu, sihir, alkimia, dan ramuan ajaib. Nikmati petualangan seru bersama komunitas ramah dan fitur premium.",
  domain: "play.elixirsmp.xyz",
  
  javaIp: "play.elixirsmp.xyz",
  altJavaIp: "elixir.evovoxel.my.id",
  bedrockIp: "play.elixirsmp.xyz",
  bedrockPort: 25640,
  
  features: [
    {
      id: "claim-land",
      title: "Claim Land",
      description: "Lindungi bangunan dan barang berharga Anda dari gangguan pemain lain dengan sistem proteksi wilayah yang mudah digunakan.",
      iconName: "Shield"
    },
    {
      id: "sethome",
      title: "Sethome & Teleport",
      description: "Simpan koordinat rumah atau base Anda dengan sethome dan kembali ke sana secara instan kapan saja diperlukan.",
      iconName: "Home"
    },
    {
      id: "shop",
      title: "Ekonomi & Shop",
      description: "Berdagang dengan pemain lain atau beli kebutuhan survival Anda langsung di toko server menggunakan mata uang di dalam game.",
      iconName: "ShoppingBag"
    },
    {
      id: "gacha",
      title: "Gacha & Crate",
      description: "Dapatkan item langka, senjata legendaris, dan perlengkapan ajaib dengan membuka peti crate menggunakan kunci gacha khusus.",
      iconName: "Sparkles"
    },
    {
      id: "voice-chat",
      title: "Voice Chat (Proximity)",
      description: "Berkomunikasi secara real-time dengan suara langsung bersama pemain di sekitar Anda untuk koordinasi petualangan yang lebih seru.",
      iconName: "Mic"
    },
    {
      id: "veinminer",
      title: "Veinminer",
      description: "Hancurkan seluruh urat bijih tambang (ores) dalam sekali tebas untuk menghemat waktu dan memaksimalkan hasil tambang Anda.",
      iconName: "Pickaxe"
    },
    {
      id: "custom-enchant",
      title: "Custom Enchant",
      description: "Tingkatkan senjata, alat, dan zirah Anda melampaui batas biasa dengan sihir kustom alkimia yang kuat dan unik.",
      iconName: "Flame"
    },
    {
      id: "arena",
      title: "Arena Pertarungan",
      description: "Segera hadir (Coming Soon): Tempat uji nyali, turnamen, dan pertarungan PVP epik di bawah cahaya rembulan.",
      iconName: "Swords"
    }
  ],
  
  rules: [
    {
      id: 1,
      title: "Dilarang Griefing",
      description: "Dilarang merusak, mencuri, atau memodifikasi bangunan dan barang milik pemain lain tanpa izin tertulis dari pemiliknya.",
      iconName: "XCircle"
    },
    {
      id: 2,
      title: "Dilarang Curang (Cheating)",
      description: "Penggunaan klien kustom, mod ilegal, x-ray, eksploitasi bug, atau segala bentuk kecurangan lainnya sangat dilarang keras.",
      iconName: "ZapOff"
    },
    {
      id: 3,
      title: "Saling Menghormati",
      description: "Hormati sesama pemain dan staf server. Dilarang melakukan pelecehan, toksisitas berlebihan, ujaran kebencian, rasisme, atau provokasi.",
      iconName: "Smile"
    },
    {
      id: 4,
      title: "Voice Chat Bijak",
      description: "Gunakan fitur Proximity Voice Chat dengan sopan. Dilarang memutar suara bising, melakukan spam suara, atau mengganggu kenyamanan pemain.",
      iconName: "VolumeX"
    },
    {
      id: 5,
      title: "Dilarang Spam / Promosi",
      description: "Dilarang melakukan spam chat, promosi server Minecraft lain, promosi produk eksternal, atau menyebarkan tautan berbahaya di dalam server.",
      iconName: "MessageSquareOff"
    }
  ],
  
  ranks: [
    {
      name: "ARCHERY",
      price: "15k",
      description: "Rank tingkat awal dengan akses perlengkapan dasar pertahanan diri.",
      benefits: [
        "Prefix & Tag khusus di Chat",
        "Akses perlengkapan kit Archery harian",
        "Maksimal 3 sethome wilayah",
        "Akses prioritas masuk saat server penuh"
      ]
    },
    {
      name: "KNIGHT",
      price: "30k",
      description: "Ksatria perkasa dengan kemampuan eksplorasi yang lebih lincah.",
      benefits: [
        "Prefix Ksatria & Warna Chat Ungu",
        "Akses perlengkapan kit Knight kuat",
        "Maksimal 5 sethome wilayah",
        "Akses perintah /feed harian",
        "Slot lelang barang tambahan di pasar"
      ]
    },
    {
      name: "MONARCH",
      price: "55k",
      description: "Penguasa wilayah berdaulat dengan berbagai fasilitas kemudahan.",
      benefits: [
        "Prefix Monarch & Chat berwarna kustom",
        "Akses kit Monarch dengan perlengkapan Diamond",
        "Maksimal 8 sethome wilayah",
        "Akses perintah /heal (cooldown 1 jam)",
        "Dapat mengabaikan cuaca buruk /condense"
      ],
      isPopular: true
    },
    {
      name: "EMPEROR",
      price: "80k",
      description: "Kekaisaran tertinggi dengan kendali wilayah yang sangat luas.",
      benefits: [
        "Prefix Kaisar mewah dengan efek partikel",
        "Akses kit Emperor magis eksklusif",
        "Maksimal 12 sethome wilayah",
        "Akses perintah /fly di wilayah klaim sendiri",
        "Kunci crate gacha bonus setiap bulan"
      ]
    },
    {
      name: "HENSOKU",
      price: "120k",
      description: "Kekuatan mistis rahasia alkimia kuno dengan keuntungan tak terbatas.",
      benefits: [
        "Prefix Hensoku Mistis bersinar",
        "Akses kit Hensoku legendaris",
        "Maksimal 20 sethome wilayah",
        "Akses perintah /fly di seluruh dunia survival",
        "Diskon khusus di toko server",
        "2x Kunci crate gacha bonus bulanan"
      ]
    },
    {
      name: "DERPFEST",
      price: "180k",
      description: "Gelar petualang legendaris yang dikagumi oleh segenap penjuru negeri.",
      benefits: [
        "Tag Derpfest legendaris bercahaya",
        "Akses perlengkapan kit Derpfest terkuat",
        "Maksimal sethome tanpa batas",
        "Kemampuan menyimpan XP tanpa batas",
        "Semua keuntungan kaisar & mistis disertakan",
        "Warna nama kustom di daftar tab pemain"
      ]
    },
    {
      name: "HALCYON",
      price: "250k",
      description: "Derajat dewa tertinggi, pelindung abadi dari seluruh semesta ELIXIR SMP.",
      benefits: [
        "Gelar Dewa Terkustomisasi secara bebas",
        "Akses kit Halcyon Dewa Terkuat",
        "Akses penuh seluruh perintah eksklusif",
        "Custom item khusus bertanda tangan dewa",
        "Dukungan prioritas langsung dari Owner",
        "Akses ke saluran rahasia di Discord"
      ]
    }
  ],
  
  links: {
    website: "https://play.elixirsmp.xyz",
    discord: "https://discord.gg/elixirsmp",
    whatsappGroup: "https://chat.whatsapp.com/elixirsmp",
    whatsappContact: "https://wa.me/6283837742780",
    linktree: "https://linktr.ee/elixirsmp"
  },
  
  developer: {
    name: "RAN DEV",
    whatsapp: "0895602592430",
    whatsappUrl: "https://wa.me/62895602592430",
    bannerText: "Developed by RAN DEV • WhatsApp 0895602592430",
    footerText: "Website dikembangkan oleh RAN DEV • WhatsApp 0895602592430"
  },
  
  seo: {
    title: "ELIXIR SMP • Official Landing Page",
    description: "Website resmi informasi komunitas Minecraft Survival ELIXIR SMP. Temukan info IP Java & Bedrock, fitur, peraturan, dan rank donatur resmi.",
    keywords: ["Minecraft", "ELIXIR SMP", "Minecraft Indonesia", "Survival Server", "Minecraft Fantasy", "Java IP", "Bedrock IP", "Minecraft Server"],
    author: "RAN DEV",
    ogImage: "/og-image.png"
  }
};
