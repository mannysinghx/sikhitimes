export interface SikhGuru {
  id: number;
  name: string;
  nameGurmukhi: string;
  born: string;
  died: string;
  birthPlace: string;
  gurushipStart: string;
  gurushipEnd: string;
  keyTeaching: string;
  biography: string;
  contributions: string[];
  famousWords: string;
  imageUrl?: string;
}

export const SIKH_GURUS: SikhGuru[] = [
  {
    id: 1,
    name: "Guru Nanak Dev Ji",
    nameGurmukhi: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ",
    born: "April 15, 1469",
    died: "September 22, 1539",
    birthPlace: "Rai Bhoi Ki Talvandi (now Nankana Sahib, Pakistan)",
    gurushipStart: "1499",
    gurushipEnd: "1539",
    keyTeaching: "Ik Onkar — There is One God",
    biography:
      "Guru Nanak Dev Ji was the founder of Sikhism and the first of the ten Sikh Gurus. Born in 1469 in what is now Pakistan, he spent his life traveling across South Asia and the Middle East spreading the message of equality, love, and devotion to one God. His teachings emphasized that there is no Hindu, no Muslim — only God's children.",
    contributions: [
      "Founded Sikhism",
      "Composed 974 hymns in the Guru Granth Sahib",
      "Established the concept of Langar (community kitchen)",
      "Taught against caste discrimination",
      "Traveled (udasis) to spread God's message across Asia",
    ],
    famousWords: "ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ — Truth is His Name, the Creator",
  },
  {
    id: 2,
    name: "Guru Angad Dev Ji",
    nameGurmukhi: "ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ",
    born: "March 31, 1504",
    died: "March 29, 1552",
    birthPlace: "Harike, Punjab",
    gurushipStart: "1539",
    gurushipEnd: "1552",
    keyTeaching: "Serving others is serving God",
    biography:
      "Guru Angad Dev Ji was the second Sikh Guru. He was chosen by Guru Nanak himself and is credited with standardizing the Gurmukhi script used to write Punjabi. He also expanded the Langar tradition and promoted physical fitness alongside spiritual growth.",
    contributions: [
      "Standardized the Gurmukhi script",
      "Collected and preserved Guru Nanak's writings",
      "Established akharas (gymnasiums) for youth",
      "Expanded the Langar system",
    ],
    famousWords: "Serve others as you would serve God himself",
  },
  {
    id: 3,
    name: "Guru Amar Das Ji",
    nameGurmukhi: "ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ",
    born: "May 5, 1479",
    died: "September 1, 1574",
    birthPlace: "Basarke, Punjab",
    gurushipStart: "1552",
    gurushipEnd: "1574",
    keyTeaching: "Equality of all human beings",
    biography:
      "Guru Amar Das Ji was the third Sikh Guru. He was a vocal opponent of the caste system and the practice of purdah (veil for women). He instituted the Anand Karaj marriage ceremony and organized Sikhs into 22 manji (dioceses) for community administration.",
    contributions: [
      "Abolished the practice of purdah and sati",
      "Instituted Anand Karaj (Sikh marriage ceremony)",
      "Organized Sikh community into 22 manjis",
      "Composed Anand Sahib — the prayer of bliss",
      "Welcomed all castes and faiths to Langar",
    ],
    famousWords: "Pehle Pangat, Phir Sangat — First eat together, then sit in congregation",
  },
  {
    id: 4,
    name: "Guru Ram Das Ji",
    nameGurmukhi: "ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ",
    born: "September 24, 1534",
    died: "September 1, 1581",
    birthPlace: "Chuna Mandi, Lahore",
    gurushipStart: "1574",
    gurushipEnd: "1581",
    keyTeaching: "Humility and service",
    biography:
      "Guru Ram Das Ji was the fourth Sikh Guru and the son-in-law of Guru Amar Das Ji. He founded the city of Ramdaspur, which later became Amritsar. He began construction of the sacred pool (sarovar) that would eventually hold the Golden Temple.",
    contributions: [
      "Founded the city of Amritsar (originally Ramdaspur)",
      "Began excavation of the sacred sarovar",
      "Composed Laavan — the Sikh wedding hymns",
      "Institutionalized hereditary Guruship",
      "Composed 638 hymns in Guru Granth Sahib",
    ],
    famousWords: "The Name of God is the true treasure",
  },
  {
    id: 5,
    name: "Guru Arjan Dev Ji",
    nameGurmukhi: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ",
    born: "April 15, 1563",
    died: "May 30, 1606",
    birthPlace: "Goindval, Punjab",
    gurushipStart: "1581",
    gurushipEnd: "1606",
    keyTeaching: "Peace, compassion, and surrender to God's will",
    biography:
      "Guru Arjan Dev Ji was the fifth Sikh Guru and the first Sikh martyr. He completed the construction of Harmandir Sahib (Golden Temple) and compiled the Adi Granth, the first version of the Sikh holy scripture. He was tortured and killed by the Mughal Emperor Jahangir for refusing to convert to Islam.",
    contributions: [
      "Completed Harmandir Sahib (Golden Temple)",
      "Compiled the Adi Granth (first Guru Granth Sahib)",
      "Became the first Sikh martyr",
      "Introduced the Dasvandh (10% tithe) system",
      "Composed over 2,000 hymns — the most of any Guru",
    ],
    famousWords: "ਤੇਰਾ ਕੀਆ ਮੀਠਾ ਲਾਗੈ — Whatever You do, Lord, seems sweet to me",
  },
  {
    id: 6,
    name: "Guru Hargobind Ji",
    nameGurmukhi: "ਗੁਰੂ ਹਰਗੋਬਿੰਦ ਜੀ",
    born: "June 19, 1595",
    died: "February 28, 1644",
    birthPlace: "Wadali, Punjab",
    gurushipStart: "1606",
    gurushipEnd: "1644",
    keyTeaching: "Miri-Piri — temporal and spiritual sovereignty",
    biography:
      "Guru Hargobind Ji was the sixth Sikh Guru, son of the martyr Guru Arjan Dev Ji. He transformed Sikhism by introducing the concept of Miri-Piri (political and spiritual authority) and established the Akal Takht — the seat of Sikh temporal authority. He wore two swords symbolizing both powers.",
    contributions: [
      "Established the Akal Takht",
      "Introduced Miri-Piri concept (two swords)",
      "Built Lohgarh Fort",
      "Founded Kiratpur Sahib",
      "Fought and won four battles against Mughal forces",
    ],
    famousWords: "Sikhs must be soldiers as well as saints",
  },
  {
    id: 7,
    name: "Guru Har Rai Ji",
    nameGurmukhi: "ਗੁਰੂ ਹਰ ਰਾਇ ਜੀ",
    born: "January 16, 1630",
    died: "October 6, 1661",
    birthPlace: "Kiratpur Sahib, Punjab",
    gurushipStart: "1644",
    gurushipEnd: "1661",
    keyTeaching: "Compassion for all living beings",
    biography:
      "Guru Har Rai Ji was the seventh Sikh Guru, known for his compassion and love for nature. He maintained a large army but used it defensively. He established a free herbal medicine hospital and was known for treating his garden with such care that he would never let his robes brush against flowers unnecessarily.",
    contributions: [
      "Established a free hospital with herbal medicines",
      "Maintained Sikh sovereignty through diplomacy",
      "Protected natural beauty and wildlife",
      "Helped heal Prince Dara Shikoh with Sikh medicine",
    ],
    famousWords: "Show compassion to all living creatures",
  },
  {
    id: 8,
    name: "Guru Har Krishan Ji",
    nameGurmukhi: "ਗੁਰੂ ਹਰ ਕ੍ਰਿਸ਼ਨ ਜੀ",
    born: "July 7, 1656",
    died: "March 30, 1664",
    birthPlace: "Kiratpur Sahib, Punjab",
    gurushipStart: "1661",
    gurushipEnd: "1664",
    keyTeaching: "Serve the sick and suffering",
    biography:
      "Guru Har Krishan Ji became the eighth Sikh Guru at just five years old, making him the youngest Guru in Sikh history. During a smallpox epidemic in Delhi, he selflessly served the sick, contracting the disease himself and passing away at only seven years old. His last words pointed toward Baba Bakala, indicating the next Guru.",
    contributions: [
      "Served cholera and smallpox victims in Delhi",
      "Demonstrated that age is no barrier to wisdom",
      "Showed ultimate sacrifice in service to humanity",
    ],
    famousWords: "Baba Bakala — (pointing to the next Guru's location)",
  },
  {
    id: 9,
    name: "Guru Tegh Bahadur Ji",
    nameGurmukhi: "ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦੁਰ ਜੀ",
    born: "April 21, 1621",
    died: "November 11, 1675",
    birthPlace: "Amritsar, Punjab",
    gurushipStart: "1665",
    gurushipEnd: "1675",
    keyTeaching: "Defend the right of all people to practice their faith",
    biography:
      "Guru Tegh Bahadur Ji was the ninth Sikh Guru, known as 'Hind di Chadar' (Shield of India). He gave his life to protect the freedom of religion for Kashmiri Hindus who were being forcibly converted to Islam by the Mughal Emperor Aurangzeb. His martyrdom in Delhi is remembered as one of history's greatest acts of sacrifice for religious freedom.",
    contributions: [
      "Martyred to protect Hindu religious freedom — 'Hind di Chadar'",
      "Composed 115 hymns in Guru Granth Sahib",
      "Founded Anandpur Sahib",
      "Traveled extensively preaching equality and devotion",
    ],
    famousWords: "Bhay kaahu ko det nahi, nahi bhay manat aan — Fear no one, frighten no one",
  },
  {
    id: 10,
    name: "Guru Gobind Singh Ji",
    nameGurmukhi: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ",
    born: "December 22, 1666",
    died: "October 7, 1708",
    birthPlace: "Patna Sahib, Bihar",
    gurushipStart: "1675",
    gurushipEnd: "1708",
    keyTeaching: "The Khalsa — the Pure Ones — are the embodiment of God",
    biography:
      "Guru Gobind Singh Ji was the tenth and final human Sikh Guru. He founded the Khalsa Panth on Vaisakhi 1699, creating the order of initiated Sikhs with the Panj Kakaars (5 Ks). A brilliant poet, philosopher, and warrior, he declared the Guru Granth Sahib as the eternal living Guru after him. He lost all four sons to Mughal persecution but never wavered.",
    contributions: [
      "Founded the Khalsa Panth on Vaisakhi 1699",
      "Instituted the Panj Kakaars (5 K's)",
      "Declared Guru Granth Sahib as the eternal Guru",
      "Finalized and compiled the Guru Granth Sahib",
      "Composed Nitnem Banis including Jaap Sahib and Chaupai Sahib",
      "Sacrificed his four sons for Sikh faith",
    ],
    famousWords: "ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਹਿ — The Khalsa belongs to God, Victory belongs to God",
  },
];
