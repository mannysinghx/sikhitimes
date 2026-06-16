export interface GurdwaraFeedData {
  id: string;
  name: string;
  location: string;
  country: string;
  youtubeUrl?: string;
  streamUrl?: string;
  thumbnail?: string;
}

export const GURDWARA_FEEDS: GurdwaraFeedData[] = [
  {
    id: "golden-temple",
    name: "Sri Harmandir Sahib (Golden Temple)",
    location: "Amritsar, Punjab",
    country: "India",
    youtubeUrl: "https://www.youtube.com/watch?v=zNfcGGCILwQ",
    thumbnail: "/feeds/golden-temple.jpg",
  },
  {
    id: "akal-takht",
    name: "Sri Akal Takht Sahib",
    location: "Amritsar, Punjab",
    country: "India",
    youtubeUrl: "https://www.youtube.com/watch?v=zNfcGGCILwQ",
    thumbnail: "/feeds/akal-takht.jpg",
  },
  {
    id: "anandpur-sahib",
    name: "Sri Anandpur Sahib",
    location: "Anandpur Sahib, Punjab",
    country: "India",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "/feeds/anandpur.jpg",
  },
  {
    id: "patna-sahib",
    name: "Takht Sri Patna Sahib",
    location: "Patna, Bihar",
    country: "India",
    thumbnail: "/feeds/patna-sahib.jpg",
  },
  {
    id: "hazur-sahib",
    name: "Takht Sri Hazur Sahib",
    location: "Nanded, Maharashtra",
    country: "India",
    thumbnail: "/feeds/hazur-sahib.jpg",
  },
  {
    id: "gurdwara-ontario",
    name: "Gurdwara Guru Nanak Darbar",
    location: "Toronto, Ontario",
    country: "Canada",
    thumbnail: "/feeds/toronto.jpg",
  },
  {
    id: "gurdwara-southall",
    name: "Gurdwara Sri Guru Singh Sabha",
    location: "Southall, London",
    country: "United Kingdom",
    thumbnail: "/feeds/southall.jpg",
  },
  {
    id: "gurdwara-fremont",
    name: "Fremont Gurdwara",
    location: "Fremont, California",
    country: "USA",
    thumbnail: "/feeds/fremont.jpg",
  },
  {
    id: "gurdwara-melbourne",
    name: "Sikh Temple Victoria",
    location: "Melbourne, Victoria",
    country: "Australia",
    thumbnail: "/feeds/melbourne.jpg",
  },
];
