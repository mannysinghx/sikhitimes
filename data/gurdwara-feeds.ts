export interface GurdwaraFeedData {
  id: string;
  name: string;
  location: string;
  country: string;
  /** Direct YouTube watch/live URL — extract embed ID from this */
  youtubeUrl?: string;
  /** YouTube channel URL for "Watch on YouTube" link */
  youtubeChannelUrl?: string;
  description?: string;
  thumbnail?: string;
}

export const GURDWARA_FEEDS: GurdwaraFeedData[] = [
  {
    id: "golden-temple",
    name: "Sri Harmandir Sahib (Golden Temple)",
    location: "Amritsar, Punjab",
    country: "India",
    description: "The holiest shrine in Sikhism — a 24/7 live stream from the SGPC.",
    youtubeUrl: "https://www.youtube.com/watch?v=qHhFWlrg-I0",
    youtubeChannelUrl: "https://www.youtube.com/@SGPCofficial/streams",
    thumbnail: "/feeds/golden-temple.jpg",
  },
  {
    id: "akal-takht",
    name: "Sri Akal Takht Sahib",
    location: "Amritsar, Punjab",
    country: "India",
    description: "The supreme seat of Sikh temporal authority, inside the Golden Temple complex.",
    youtubeChannelUrl: "https://www.youtube.com/@SGPCofficial/streams",
    thumbnail: "/feeds/akal-takht.jpg",
  },
  {
    id: "anandpur-sahib",
    name: "Takht Sri Kesgarh Sahib",
    location: "Anandpur Sahib, Punjab",
    country: "India",
    description: "Site of the founding of the Khalsa Panth in 1699 by Guru Gobind Singh Ji.",
    thumbnail: "/feeds/anandpur.jpg",
  },
  {
    id: "patna-sahib",
    name: "Takht Sri Patna Sahib",
    location: "Patna, Bihar",
    country: "India",
    description: "Birthplace of Guru Gobind Singh Ji — one of the Five Takhts.",
    thumbnail: "/feeds/patna-sahib.jpg",
  },
  {
    id: "hazur-sahib",
    name: "Takht Sri Hazur Sahib",
    location: "Nanded, Maharashtra",
    country: "India",
    description: "Site where Guru Gobind Singh Ji passed the Guruship to the Guru Granth Sahib.",
    thumbnail: "/feeds/hazur-sahib.jpg",
  },
  {
    id: "damdama-sahib",
    name: "Takht Sri Damdama Sahib",
    location: "Talwandi Sabo, Punjab",
    country: "India",
    description: "The 'breathing place' of Guru Gobind Singh Ji — where the final recension of the Guru Granth Sahib was compiled.",
    thumbnail: "/feeds/damdama-sahib.jpg",
  },
  {
    id: "gurdwara-ontario",
    name: "Gurdwara Guru Nanak Darbar",
    location: "Toronto, Ontario",
    country: "Canada",
    description: "One of the largest Gurdwaras in North America, serving the Greater Toronto Area Sangat.",
    thumbnail: "/feeds/toronto.jpg",
  },
  {
    id: "gurdwara-southall",
    name: "Gurdwara Sri Guru Singh Sabha",
    location: "Southall, London",
    country: "United Kingdom",
    description: "The spiritual heart of the largest Punjabi Sikh community outside of India.",
    thumbnail: "/feeds/southall.jpg",
  },
  {
    id: "gurdwara-fremont",
    name: "Fremont Gurdwara",
    location: "Fremont, California",
    country: "USA",
    description: "One of the oldest and most established Gurdwaras on the US West Coast.",
    thumbnail: "/feeds/fremont.jpg",
  },
  {
    id: "gurdwara-melbourne",
    name: "Sikh Temple Victoria",
    location: "Melbourne, Victoria",
    country: "Australia",
    description: "The largest Sikh temple in the Southern Hemisphere.",
    thumbnail: "/feeds/melbourne.jpg",
  },
];
