export interface SikhFestival {
  id: number;
  name: string;
  nameGurmukhi: string;
  date: string;
  type: "gurpurab" | "cultural" | "religious" | "anniversary";
  significance: string;
  description: string;
  howCelebrated: string;
  relatedGuru?: string;
}

export const SIKH_FESTIVALS: SikhFestival[] = [
  {
    id: 1,
    name: "Vaisakhi",
    nameGurmukhi: "ਵਿਸਾਖੀ",
    date: "April 13 or 14",
    type: "religious",
    significance:
      "Marks the creation of the Khalsa Panth by Guru Gobind Singh Ji in 1699 and is the Sikh New Year — the most important day in the Sikh calendar",
    description:
      "Vaisakhi, celebrated on April 13 or 14 each year (depending on the solar calendar), commemorates one of the most transformative moments in Sikh and world history: the founding of the Khalsa Panth by Guru Gobind Singh Ji on Vaisakhi 1699 at Anandpur Sahib. On that historic day, the Guru called thousands of Sikhs to assembly and asked for a volunteer willing to offer his head; five extraordinary men — the Panj Pyaras (Five Beloved Ones) — stepped forward one by one, and the Guru initiated them into the new order of the Khalsa with the ceremony of Amrit Sanchar (baptism with the sacred nectar). The Guru then took Amrit from the Panj Pyaras himself, completing the egalitarian revolution that dissolved caste, social hierarchy, and previous identities under the single shared identity of the Khalsa. Vaisakhi is also the Sikh New Year, marking the start of the new solar year, and has been celebrated as a harvest festival in Punjab since ancient times, making it a day of both spiritual and cultural joy.",
    howCelebrated:
      "Vaisakhi is celebrated with Nagar Kirtans (procession of the Guru Granth Sahib through the streets with kirtan), Amrit Sanchars (Khalsa baptism ceremonies), special Gurdwara programmes including Akhand Paths (continuous reading of Guru Granth Sahib), langar (community meals), and cultural programmes. Large Vaisakhi melas (fairs) are held across Punjab, and the Harmandir Sahib in Amritsar draws hundreds of thousands of pilgrims. Sikhs around the world hold parades and community events.",
    relatedGuru: "Guru Gobind Singh Ji",
  },
  {
    id: 2,
    name: "Bandi Chhor Divas",
    nameGurmukhi: "ਬੰਦੀ ਛੋੜ ਦਿਵਸ",
    date: "Coincides with Diwali (October/November, varies by lunar calendar)",
    type: "religious",
    significance:
      "Commemorates the release of Guru Hargobind Ji from Gwalior Fort in 1619, where he had been imprisoned by the Mughal Emperor Jahangir, along with 52 Hindu kings he refused to leave behind",
    description:
      "Bandi Chhor Divas — the Day of Liberation — is one of the most joyful celebrations in the Sikh calendar, coinciding with the date of Diwali. In 1619, Guru Hargobind Ji had been imprisoned for over two years in Gwalior Fort by Mughal Emperor Jahangir on false pretexts. When pressure from Sufi saint Mian Mir and public sentiment compelled Jahangir to release the Guru, Guru Hargobind Ji refused to leave unless all 52 Hindu kings imprisoned with him were also freed. The Emperor agreed on the condition that only those who could hold onto the Guru's cloak could leave — Guru Hargobind Ji had a specially designed cloak made with 52 tassels, enabling all the kings to hold on and walk free. The Guru arrived in Amritsar on the night of Diwali, and the city was illuminated with lamps to celebrate his return — a tradition that continues to this day. Sikhs thus celebrate their own distinct meaning on Diwali night: not the return of Ram from Lanka, but the liberation of the Guru and the deliverance of the innocent.",
    howCelebrated:
      "Gurdwaras and Sikh homes are illuminated with thousands of lights, candles, and fireworks. The Harmandir Sahib (Golden Temple) at Amritsar is beautifully lit, and its reflection in the sacred pool creates an unforgettable sight. Sikhs attend Gurdwara, listen to kirtan, share langar, and participate in community celebrations. Fireworks displays are common, and the mood is one of joyful thanksgiving.",
    relatedGuru: "Guru Hargobind Ji",
  },
  {
    id: 3,
    name: "Hola Mohalla",
    nameGurmukhi: "ਹੋਲਾ ਮਹੱਲਾ",
    date: "Day after Holi (February/March, varies by lunar calendar)",
    type: "cultural",
    significance:
      "A festival of martial arts, Sikh military tradition, and poetry founded by Guru Gobind Singh Ji as a Sikh alternative to Holi, celebrated at Anandpur Sahib",
    description:
      "Hola Mohalla was established by Guru Gobind Singh Ji in 1701, the year after the formation of the Khalsa, as a uniquely Sikh gathering that channelled the spirit of Holi into martial training, military exercises, and poetic competitions. The Guru organised mock battles and military manoeuvres among his Sikh soldiers to maintain combat readiness and warrior spirit, while also holding kirtan and poetic compositions celebrating courage, sacrifice, and devotion. The word 'Hola' is the masculine form of 'Holi' suggesting active martial engagement rather than passive celebration, and 'Mohalla' refers to a procession of armed Sikhs. Today Hola Mohalla at Anandpur Sahib is one of the most spectacular events in the Sikh calendar, drawing hundreds of thousands of devotees and featuring Nihangs (Sikh warriors) demonstrating extraordinary feats of traditional martial arts, horsemanship, and weaponry in honour of the Guru's vision.",
    howCelebrated:
      "The three-day festival at Anandpur Sahib features Nihang Singhs performing gatka (Sikh martial arts), tent-pegging, bareback horse riding, and mock battles with historical weapons. There are kirtan diwans, kavi darbars (poetry competitions), and langar on a massive scale. Processions with the Guru Granth Sahib are carried through the streets. Nihangs in their distinctive blue and saffron attire, armed with traditional weapons, are a defining visual of the event.",
    relatedGuru: "Guru Gobind Singh Ji",
  },
  {
    id: 4,
    name: "Gurpurab of Guru Nanak Dev Ji",
    nameGurmukhi: "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ",
    date: "Full moon of Kartik (October/November, varies)",
    type: "gurpurab",
    significance:
      "Birth anniversary of Guru Nanak Dev Ji, the founder of Sikhism, born on April 15, 1469 — celebrated on the full moon of Kartik as the most widely observed Gurpurab in the Sikh world",
    description:
      "The Gurpurab of Guru Nanak Dev Ji is the most joyous and widely celebrated festival in the Sikh calendar, marking the birth of the first Sikh Guru who founded a religion of love, equality, and devotion to the One Creator. Guru Nanak Dev Ji was born on April 15, 1469 in Rai Bhoi Ki Talvandi (now Nankana Sahib, Pakistan), but his birth anniversary is traditionally celebrated on the full moon of the month of Kartik (Pooranmashi) in October or November. The Guru spent his life travelling on four great journeys (Udasis) across South Asia, Tibet, the Middle East, and Central Asia, spreading his universal message of Ik Onkar (One God) and rejecting caste, ritual, and religious exclusivity. His 974 hymns, compiled in the Guru Granth Sahib, represent one of the most profound spiritual contributions in human history, and his establishment of the practices of naam (name of God), dasvandh (tithing), and seva (selfless service) created the foundation of Sikh life.",
    howCelebrated:
      "Celebrations begin two days before Gurpurab with an Akhand Path (48-hour continuous reading of the entire Guru Granth Sahib). The morning of Gurpurab itself begins with Amrit Vela (pre-dawn) prayers, followed by a Nagar Kirtan (singing procession) through streets with the Guru Granth Sahib carried in a palki. Gurdwaras are decorated with lights and flowers. Katha (discourses), kirtan, and langar continue throughout the day and night. Nankana Sahib in Pakistan, the Guru's birthplace, draws enormous international Sikh pilgrimages.",
    relatedGuru: "Guru Nanak Dev Ji",
  },
  {
    id: 5,
    name: "Gurpurab of Guru Gobind Singh Ji",
    nameGurmukhi: "ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ",
    date: "Poh Sudi 7 (December/January, varies)",
    type: "gurpurab",
    significance:
      "Birth anniversary of Guru Gobind Singh Ji, the tenth and final human Sikh Guru, who created the Khalsa and completed the Sikh scriptural canon",
    description:
      "The Gurpurab of Guru Gobind Singh Ji celebrates the birth of the tenth Sikh Guru, born on Poh Sudi 7, 1723 Bikrami (December 22, 1666) in Patna Sahib, Bihar. Guru Gobind Singh Ji was one of the most extraordinary figures in human history — warrior, poet, philosopher, spiritual master, and the creator of the Khalsa Panth. Under his guidance, the Sikh community was transformed into a sovereign brotherhood of saint-soldiers, identifiable by the Five Ks (Panj Kakars) and bound by a code of discipline and self-sacrifice. He composed vast amounts of devotional and inspirational poetry, collected in the Dasam Granth, and before his passing in 1708, conferred eternal Guruship upon the Guru Granth Sahib Ji. Despite unimaginable personal losses — the martyrdom of all four of his sons and the deaths of his mother — his spirit remained unbroken, epitomised in the famous declaration, 'In chaukian, in chauri varchhey, in nefee in palkian, Raja meri eh karo, main na udaasi rahon' — Thou who givest kingdoms, give me this boon that I may never cease from doing good deeds.",
    howCelebrated:
      "The Gurpurab begins with an Akhand Path at Gurdwara Sahib, concluding in the morning of the Gurpurab. Nagar Kirtans with Five Panj Pyaras leading the procession and the Guru Granth Sahib on a decorated float are held in cities around the world. Gurdwaras hold special kirtan programmes and katha. The birthplace Gurdwara Patna Sahib in Bihar draws large pilgrimages from across India. Sikhs sing shabads from the Dasam Granth and recite Chaupai Sahib in special remembrance.",
    relatedGuru: "Guru Gobind Singh Ji",
  },
  {
    id: 6,
    name: "Gurpurab of Guru Tegh Bahadur Ji (Shaheedi Divas)",
    nameGurmukhi: "ਗੁਰੂ ਤੇਗ ਬਹਾਦੁਰ ਜੀ ਦਾ ਸ਼ਹੀਦੀ ਦਿਵਸ",
    date: "Maghar Sudi 5 (November/December, varies)",
    type: "gurpurab",
    significance:
      "Martyrdom anniversary of Guru Tegh Bahadur Ji, the ninth Sikh Guru, who sacrificed his life in Delhi in 1675 to defend the religious freedom of Hindus persecuted by Aurangzeb",
    description:
      "The Shaheedi Divas (Martyrdom Day) of Guru Tegh Bahadur Ji commemorates one of the most selfless acts of religious sacrifice in human history. Guru Tegh Bahadur Ji, the ninth Sikh Guru, was approached by a delegation of Kashmiri Pandits who were being forcibly converted to Islam by Mughal Emperor Aurangzeb. The Guru, moved by their plight even though they were of a different faith, offered to intercede. He travelled to Delhi and was arrested, imprisoned, and subjected to extreme torture. When commanded to perform a miracle or convert to Islam, the Guru refused both options; he was publicly beheaded at Chandni Chowk in Delhi on November 11, 1675. He had been brought to the execution ground after watching three of his companions — Bhai Mati Das, Bhai Sati Das, and Bhai Dayala — being tortured and killed before him in attempts to break his resolve. He is remembered as 'Hind di Chadar' — the Shield of India — for sacrificing himself for the right of all people to practice their faith freely. Gurdwara Sis Ganj Sahib stands at the site of his martyrdom.",
    howCelebrated:
      "Akhand Paths are held at Gurdwaras concluding on the Gurpurab. Special diwan (congregation) programmes are held with kirtan and katha recounting the Guru's sacrifice. Gurdwara Sis Ganj Sahib and Gurdwara Rakab Ganj Sahib in Delhi hold large commemorations. Sikhs reflect on the values of religious freedom and the duty to stand up for the oppressed, regardless of their own faith. Community service and langar are offered.",
    relatedGuru: "Guru Tegh Bahadur Ji",
  },
  {
    id: 7,
    name: "Gurpurab of Guru Arjan Dev Ji (Shaheedi Divas)",
    nameGurmukhi: "ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦਾ ਸ਼ਹੀਦੀ ਦਿਵਸ",
    date: "Jeth Sudi 4 (May/June, varies)",
    type: "gurpurab",
    significance:
      "Martyrdom anniversary of Guru Arjan Dev Ji, the first Sikh martyr, who was tortured and killed by Mughal Emperor Jahangir in 1606 for refusing to alter the Guru Granth Sahib",
    description:
      "The Shaheedi Divas of Guru Arjan Dev Ji commemorates the martyrdom of the fifth Sikh Guru, the first Sikh to die for the faith and thus the first martyr (shaheed) in Sikh history. Guru Arjan Dev Ji compiled the Adi Granth (the original Guru Granth Sahib) in 1604, enshrining the hymns of the first four Gurus alongside compositions of Muslim and Hindu saints, reflecting the Guru's inclusive vision of spirituality. Mughal Emperor Jahangir, urged on by hostile factions at court and jealous religious leaders, ordered Guru Arjan Dev Ji's arrest and demanded he pay an enormous fine and alter the Adi Granth to remove passages that conflicted with orthodox Islam. The Guru refused both demands, was subjected to severe torture in the heat of June in Lahore — made to sit on a burning hot iron plate (tatti tavi) while hot sand was poured over him — and was eventually allowed to bathe in the Ravi River, from which he was not seen to emerge again. His composure throughout his ordeal, reflected in his final shabad 'Tera kiya meetha laage' (Thy doings taste sweet to me, O Lord), remains a pinnacle of spiritual courage.",
    howCelebrated:
      "Given the martyrdom occurred in the intense summer heat, Sikh communities set up Chhabeel stalls (free cold water, sherbat, and sometimes food) at roadsides in service of the Guru's memory. Akhand Paths and kirtan programmes are held at Gurdwaras. Special programmes at Gurdwara Dera Sahib in Lahore (the site of martyrdom) are held, though access for Sikh pilgrims is limited. Katha recounting the Guru's composure and sacrifice is delivered. Langar is served to all who come.",
    relatedGuru: "Guru Arjan Dev Ji",
  },
  {
    id: 8,
    name: "Gurpurab of Guru Ram Das Ji",
    nameGurmukhi: "ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ",
    date: "Asu Sudi 2 (September/October, varies)",
    type: "gurpurab",
    significance:
      "Birth anniversary of Guru Ram Das Ji, the fourth Sikh Guru, who founded the city of Amritsar and composed the Laavan — the Sikh wedding hymns",
    description:
      "The Gurpurab of Guru Ram Das Ji celebrates the birth of the fourth Sikh Guru, born Jetha Ji in Lahore in 1534 and later given the name Ram Das (Servant of God) by Guru Amar Das Ji who selected him as successor. Guru Ram Das Ji made indelible contributions to Sikhism and to Punjab: he founded the city of Amritsar — originally called Guru Da Chakk — in 1574 by beginning the excavation of the sacred sarovar (pool) that would later become the site of the Harmandir Sahib (Golden Temple). He composed the beautiful Laavan, the four-stanza hymn that forms the basis of the Anand Karaj (Sikh wedding ceremony), in which the soul's journey toward union with the Divine is compared to the bride's journey toward the groom. He also institutionalised the system of masands (appointed representatives) to spread the Sikh faith across the subcontinent. Guru Ram Das Ji composed 638 hymns recorded in the Guru Granth Sahib, many in Raga Suhi.",
    howCelebrated:
      "Akhand Paths and special Gurdwara programmes are held to mark the Gurpurab. The Harmandir Sahib at Amritsar — the city Guru Ram Das Ji founded — holds particularly significant celebrations. Kirtan featuring the Guru's own compositions, especially the Laavan, is performed. Community langar is served, and Sikhs reflect on the Guru's teachings of humble service (seva) and devotion. Programmes emphasise the founding of Amritsar and its role as the spiritual home of the Sikhs.",
    relatedGuru: "Guru Ram Das Ji",
  },
  {
    id: 9,
    name: "Prakash Purab of Guru Granth Sahib Ji",
    nameGurmukhi: "ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ",
    date: "Bhadon Sudi 1 (August/September, varies)",
    type: "religious",
    significance:
      "Commemorates the first installation (Prakash) of the Adi Granth in Harmandir Sahib in 1604 by Guru Arjan Dev Ji, marking the Sikh scripture's place as the eternal Guru",
    description:
      "The Prakash Purab of Guru Granth Sahib Ji celebrates the first installation of the Adi Granth at Harmandir Sahib on Bhadon Sudi 1, 1661 Bikrami (September 1604). Guru Arjan Dev Ji had spent years compiling the hymns of the first four Gurus and his own compositions, along with the bani of fifteen Hindu and Muslim saints, into a single volume. The Adi Granth was installed with great ceremony in the newly completed Harmandir Sahib, with Baba Budha Ji appointed as the first Granthi (reader). Guru Gobind Singh Ji, before his passing in 1708, conferred permanent Guruship upon the Guru Granth Sahib Ji, declaring that the Sikh community would have no more human Gurus — the Word (Shabad) itself was the eternal Guru. The Guru Granth Sahib Ji contains 1,430 pages, 5,894 shabads (hymns), and is written in 31 ragas. It is the only scripture in the world to be treated as a living Guru, installed on a throne (takht), fanned with a chauri (fly whisk), and put to rest ceremonially each night.",
    howCelebrated:
      "Akhand Paths and Sehaj Paths (slower readings) are completed across Gurdwaras. Programmes of kirtan, katha, and paath celebrate the scripture's primacy. Special processions (nagar kirtans) carry the Guru Granth Sahib. Sikhs reflect on the unique status of the Guru Granth Sahib as the living, eternal Guru. Gurdwaras are decorated, and langar is served to all.",
    relatedGuru: "Guru Arjan Dev Ji",
  },
  {
    id: 10,
    name: "Maghi",
    nameGurmukhi: "ਮਾਘੀ",
    date: "January 14 (Makar Sankranti)",
    type: "religious",
    significance:
      "Commemorates the martyrdom of the Chali Mukte (Forty Liberated Ones) at Khidrana (now Muktsar Sahib) and the forgiveness granted by Guru Gobind Singh Ji",
    description:
      "Maghi, celebrated on January 14 each year on the occasion of Makar Sankranti, is one of the most emotionally resonant occasions in the Sikh calendar. The festival commemorates the sacrifice of the Chali Mukte — the Forty Liberated Ones — who gave their lives at the Battle of Muktsar (then called Khidrana) in 1705. These forty Sikh soldiers had previously signed a disclaimer (bedawa) abandoning Guru Gobind Singh Ji at Anandpur, but under the inspiration of the heroic woman warrior Mai Bhago Ji, they returned to fight and die in defence of their Guru. Guru Gobind Singh Ji tore up the bedawa of each dying soldier, blessing them as liberated souls. The site was renamed Muktsar — 'Pool of Liberation' — and Maghi (the month of Magh in the Sikh calendar) became the annual occasion to honour their supreme sacrifice and reflect on the transformative power of devotion and courage. The Maghi Mela at Muktsar Sahib is one of the largest annual Sikh gatherings in the world.",
    howCelebrated:
      "The Maghi Mela at Sri Muktsar Sahib draws hundreds of thousands of devotees who take a sacred bath at the sarovar of Gurdwara Tibbi Sahib. Akhand Paths, kirtan diwans, and katha programmes are held at Gurdwaras dedicated to the Chali Mukte. Sikhs reflect on the message of redemption, courage, and the power of returning to the Guru's path. Community langar on a vast scale is a central feature of the mela.",
    relatedGuru: "Guru Gobind Singh Ji",
  },
  {
    id: 11,
    name: "Gurpurab of Guru Angad Dev Ji",
    nameGurmukhi: "ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਪੁਰਬ",
    date: "Vaisakh Vadi 1 (March/April, varies)",
    type: "gurpurab",
    significance:
      "Birth anniversary of Guru Angad Dev Ji, the second Sikh Guru, who standardised the Gurmukhi script and expanded the Langar tradition",
    description:
      "The Gurpurab of Guru Angad Dev Ji celebrates the birth of the second Sikh Guru, born as Lehna Ji on March 31, 1504 in Harike, Punjab. Guru Nanak Dev Ji renamed him Angad (part of me) to indicate their spiritual unity and chose him as his successor above his own sons, recognising his complete selflessness and devotion. Guru Angad Dev Ji's most enduring contribution to the Sikh faith and to Punjabi culture was his standardisation and promotion of the Gurmukhi script, which he used to systematically write down Guru Nanak's hymns and compose his own 63 shabads. By establishing Gurmukhi as the written form of Punjabi, he gave the common people a script that was not controlled by Brahmin or priestly classes, democratising literacy in an era when knowledge was jealously guarded by elites. He also greatly expanded the Langar (free community kitchen) tradition, making it mandatory for all visitors — even Emperor Humayun, who visited him — to eat langar before seeking an audience, breaking the rigid customs of social hierarchy.",
    howCelebrated:
      "Gurdwaras hold Akhand Paths, kirtan, and katha programmes highlighting Guru Angad Dev Ji's immense contribution to Gurmukhi and the Langar. Programmes at Khadur Sahib (where the Guru resided and established his seat of Guruship) are particularly significant. Sikhs are encouraged to learn Gurmukhi in honour of the Guru's legacy. Langar is served throughout the day.",
    relatedGuru: "Guru Angad Dev Ji",
  },
  {
    id: 12,
    name: "Sangrand",
    nameGurmukhi: "ਸੰਗਰਾਂਦ",
    date: "First day of each month in the Nanakshahi calendar",
    type: "religious",
    significance:
      "Monthly observance marking the first day of each new month in the Nanakshahi Sikh solar calendar, a time for reflection and the reading of Barah Maha",
    description:
      "Sangrand is observed on the first day of each month in the Nanakshahi calendar, the distinctly Sikh solar calendar introduced in 2003 and based on the Sikh scripture and tradition. On Sangrand, Sikhs gather at Gurdwaras for the reading of the Barah Maha (Twelve Months) — a beautiful composition by Guru Nanak Dev Ji in Raga Majh and by Guru Arjan Dev Ji in Raga Tukhari, which describe the spiritual yearning of the soul through the imagery of the changing seasons. Each verse of the Barah Maha corresponds to a month and describes the appropriate spiritual state and longing for union with the Divine. Sangrand serves as a monthly spiritual checkpoint, a reminder that time is passing and the soul's journey toward God should remain the focus of every month's activities. It is a quieter observance than the major Gurpurabs but occupies an important place in the rhythms of devout Sikh life.",
    howCelebrated:
      "On Sangrand, Gurdwaras read the Barah Maha in the morning. Sangrand is treated as an auspicious day to begin new endeavours, visit the Gurdwara, and perform seva. Some Sikhs fast or take Amrit Vela to mark the occasion. The Nanakshahi calendar aligns Sangrand dates with specific Gregorian dates each year, making it easier for Sikhs worldwide to observe simultaneously.",
  },
  {
    id: 13,
    name: "Sahibzade Shaheedi Divas",
    nameGurmukhi: "ਸਾਹਿਬਜ਼ਾਦੇ ਸ਼ਹੀਦੀ ਦਿਵਸ",
    date: "December 26–27 (Poh Sudi 13–14 in Nanakshahi calendar)",
    type: "anniversary",
    significance:
      "Commemorates the martyrdom of all four Sahibzade (sons) of Guru Gobind Singh Ji — Ajit Singh, Jujhar Singh, Zorawar Singh, and Fateh Singh — who all attained martyrdom within days of each other in December 1704",
    description:
      "Sahibzade Shaheedi Divas is perhaps the most solemn and grief-filled occasion in the Sikh calendar, commemorating the incomprehensible sacrifice of Guru Gobind Singh Ji's four sons — all four of whom attained martyrdom within days of each other in December 1704. Sahibzada Ajit Singh (age 18) and Sahibzada Jujhar Singh (age 14) fought and fell at the Battle of Chamkaur on December 22, 1704, leading sorties against the enormous Mughal army besieging the small garhi. Just days later, on December 26–27, 1704, the two younger Sahibzade — Zorawar Singh (age 9) and Fateh Singh (age 7) — were bricked alive at Sirhind on the orders of Nawab Wazir Khan after refusing to convert to Islam. Their grandmother, Mata Gujri Ji, succumbed to grief and joined Waheguru from the Cold Tower (Thanda Burj) where she had been imprisoned. The four Sahibzade represent the pinnacle of Sikh courage and sacrifice — they lived and died by the values of the Khalsa, choosing death over compromise with tyranny. The Indian government officially declared December 26 as 'Veer Baal Diwas' in 2022 to commemorate their supreme sacrifice.",
    howCelebrated:
      "Gurdwaras hold special programmes of kirtan and katha narrating the events at Chamkaur and Sirhind. The narration of the younger Sahibzade's encounter with Wazir Khan — their fearless responses and refusal to convert — is delivered with great emotion. Programmes are particularly large at Gurdwara Fatehgarh Sahib in Sirhind, where thousands gather. Sikhs express their grief, pride, and gratitude for the sacrifice of the Sahibzade. Candle-lighting vigils and children's programmes highlighting the courage of the Sahibzade are held. Langar continues through the night.",
    relatedGuru: "Guru Gobind Singh Ji",
  },
];
