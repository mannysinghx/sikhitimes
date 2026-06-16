export interface SikhFact {
  id: string;
  category: string;
  fact: string;
  detail: string;
}

export interface SikhStats {
  worldwideSikhs: string;
  inIndia: string;
  inCanada: string;
  inUK: string;
  inUSA: string;
  inAustralia: string;
  rankAmongWorldReligions: string;
  goldenTempleVisitorsDaily: string;
  goldenTempleMealsDaily: string;
  guruGranthSahibPages: number;
  guruGranthSahibAuthors: number;
  sikhGurusHuman: number;
  khalasFoundedYear: number;
  sikhismFoundedYear: number;
}

export const SIKH_STATS: SikhStats = {
  worldwideSikhs: "~30 million",
  inIndia: "~22 million",
  inCanada: "~770,000+",
  inUK: "~430,000+",
  inUSA: "~500,000+",
  inAustralia: "~210,000+",
  rankAmongWorldReligions: "5th largest",
  goldenTempleVisitorsDaily: "100,000+",
  goldenTempleMealsDaily: "100,000+",
  guruGranthSahibPages: 1430,
  guruGranthSahibAuthors: 36,
  sikhGurusHuman: 10,
  khalasFoundedYear: 1699,
  sikhismFoundedYear: 1469,
};

export const SIKH_FACTS: SikhFact[] = [
  // ─── POPULATION & GEOGRAPHY ────────────────────────────────────────────────
  {
    id: "pop-world-rank",
    category: "Population",
    fact: "Sikhism is the 5th largest religion in the world",
    detail:
      "With approximately 30 million adherents worldwide, Sikhism ranks as the world's fifth largest religion — ahead of Judaism, which has roughly 15 million followers. Despite its relatively young age (founded in 1469), Sikhism's rapid growth and widespread diaspora have made it a global faith with a significant presence on every inhabited continent.",
  },
  {
    id: "pop-punjab-concentration",
    category: "Population",
    fact: "About 75% of all Sikhs live in Punjab, India",
    detail:
      "The Indian state of Punjab remains the spiritual and demographic heartland of Sikhism, home to roughly 75% of the world's Sikh population. Sikhs make up approximately 58% of Punjab's total population, making them the majority community in the state — the only Indian state where they are so. The Golden Temple (Harmandir Sahib) in Amritsar, Punjab, is the holiest shrine in Sikhism.",
  },
  {
    id: "pop-canada",
    category: "Population",
    fact: "Canada has the highest Sikh population outside India",
    detail:
      "Canada is home to over 770,000 Sikhs, making it the country with the largest Sikh diaspora outside India. Cities like Brampton, Surrey, and Vancouver have thriving Sikh communities, and Sikhs have made a profound impact on Canadian political, cultural, and economic life. Canada has had multiple Sikh cabinet ministers, including Harjit Sajjan as Minister of National Defence.",
  },
  {
    id: "pop-uk-diaspora",
    category: "Population",
    fact: "The UK has over 430,000 Sikhs — one of the oldest Western diasporas",
    detail:
      "The UK's Sikh community, concentrated in cities like Southall (London), Birmingham, and Wolverhampton, dates back to post-World War II immigration in the 1950s and 1960s when many Sikh veterans settled in Britain. British Sikhs have achieved prominence in politics (Lords and MPs), business, sports, and the arts, and Britain was among the first countries to legally recognise Sikhs as a distinct ethnic group.",
  },
  {
    id: "pop-usa",
    category: "Population",
    fact: "The USA is home to approximately 500,000 Sikhs",
    detail:
      "Sikh immigration to the United States dates to the early 1900s when Punjabi farmers arrived in California's Central Valley. The community grew rapidly after the Immigration Act of 1965, and today American Sikhs are among the most highly educated and economically successful immigrant groups in the country. Notable concentrations exist in California, New York, New Jersey, and Texas.",
  },

  // ─── GOLDEN TEMPLE & LANGAR ────────────────────────────────────────────────
  {
    id: "golden-temple-meals",
    category: "Golden Temple",
    fact: "The Golden Temple serves 100,000 free meals every single day",
    detail:
      "The Langar at Harmandir Sahib (Golden Temple) in Amritsar operates 24 hours a day, 365 days a year, and serves a minimum of 100,000 free vegetarian meals daily — rising to over 200,000 on weekends and religious festivals. It is one of the largest free community kitchens on earth, run entirely by volunteers performing seva (selfless service). No one — regardless of faith, caste, nationality, or wealth — is turned away.",
  },
  {
    id: "golden-temple-visitors",
    category: "Golden Temple",
    fact: "The Golden Temple receives more daily visitors than the Taj Mahal",
    detail:
      "On any given day, the Harmandir Sahib attracts more than 100,000 visitors, consistently outpacing the Taj Mahal as one of India's most-visited sites. On major Sikh festivals such as Baisakhi and Gurpurab, crowds can swell to over 500,000 people in a single day. The temple is open 24 hours a day to people of all faiths and backgrounds, with no entry fee ever charged.",
  },
  {
    id: "golden-temple-open-all",
    category: "Golden Temple",
    fact: "The Golden Temple has four doors — open to all four directions of humanity",
    detail:
      "Guru Ram Das Ji, who designed the original pool of the Golden Temple, and Guru Arjan Dev Ji, who completed the Harmandir Sahib, deliberately built four doors facing in each cardinal direction as a symbolic statement that people of all four castes, all religions, and all corners of the world are equally welcome. This was a radical architectural statement of equality at a time when temples were restricted by caste and religion.",
  },
  {
    id: "golden-temple-gold",
    category: "Golden Temple",
    fact: "The Golden Temple is covered in approximately 750 kg of pure gold",
    detail:
      "The upper floors of the Harmandir Sahib are plated with approximately 750 kilograms (1,650 pounds) of pure gold, donated by Maharaja Ranjit Singh in the early nineteenth century. The gold plating gives the temple its popular English name and creates the stunning reflection visible in the surrounding sacred pool (Amrit Sarovar). The gold was added to a structure originally completed in marble and white plaster.",
  },

  // ─── MILITARY HISTORY ──────────────────────────────────────────────────────
  {
    id: "military-india-proportion",
    category: "Military",
    fact: "Sikhs represent ~2% of India's population but ~20% of its military",
    detail:
      "Despite being a small minority, Sikhs have historically been disproportionately represented in the Indian armed forces. During the British Raj, Sikh regiments were considered among the finest fighting forces in the subcontinent. This martial tradition continues in independent India, where Sikh officers and soldiers have distinguished themselves in every major conflict, from the 1947–48 Kashmir War to the Kargil War of 1999.",
  },
  {
    id: "military-victoria-cross",
    category: "Military",
    fact: "Sikhs have won more Victoria Crosses per capita than any other group",
    detail:
      "The Victoria Cross, the British Empire's highest military honour, has been awarded to Sikh soldiers at a per-capita rate unmatched by any other community. During the two World Wars, Sikh soldiers serving in the British Indian Army displayed extraordinary valour, earning numerous Victoria Crosses for acts of bravery that went far beyond the call of duty. Their contribution to Allied victory is commemorated in memorials across the UK, France, Belgium, and the Middle East.",
  },
  {
    id: "military-ww1-ww2-deaths",
    category: "Military",
    fact: "83,000 Sikh soldiers died in WWI and WWII fighting for the Allies",
    detail:
      "Sikhs volunteered in extraordinary numbers to fight alongside the Allies in both World Wars, serving in theatres from the Western Front and Gallipoli to North Africa and the jungles of Burma. Approximately 83,000 Sikh soldiers made the ultimate sacrifice — a staggering number from a community that constituted less than 2% of India's population. Many military historians credit Sikh fighting units with decisive roles in critical engagements.",
  },
  {
    id: "military-saragarhi",
    category: "Military",
    fact: "21 Sikhs held off an army of 10,000 at the Battle of Saragarhi (1897)",
    detail:
      "On September 12, 1897, twenty-one soldiers of the 36th Sikh Regiment (now 4 Sikh) defended a small communication post called Saragarhi on the North-West Frontier (now Pakistan) against approximately 10,000 Afghan tribal warriors. Rather than surrender or retreat, the soldiers fought to the last man, each earning the Indian Order of Merit — the highest gallantry award of the time. The British Parliament paid tribute and the day is commemorated as Saragarhi Day. It is considered one of the greatest last stands in military history.",
  },
  {
    id: "military-banda-singh",
    category: "Military",
    fact: "Banda Singh Bahadur implemented the earliest land reform in South Asian history",
    detail:
      "After the execution of Guru Gobind Singh Ji's sons, Banda Singh Bahadur became the Khalsa's military commander and led a remarkable campaign that captured Sirhind and a large swathe of Punjab (1709–1715). Crucially, he abolished the zamindari system in liberated territories and gave land ownership directly to the farmers who tilled it — arguably the first land reform in the history of South Asia, predating similar movements by centuries. He was eventually captured and executed by Mughal forces but his legacy endures.",
  },
  {
    id: "military-sikh-light-brigade",
    category: "Military",
    fact: "Sikh cavalry in the Anglo-Sikh Wars stunned British commanders with their tactics",
    detail:
      "During the First and Second Anglo-Sikh Wars (1845–49), British commanders were so impressed — and alarmed — by the Khalsa Army's discipline, artillery skills, and tactical sophistication that senior officers described the Sikh forces as the finest army they had ever faced. After defeating the Sikh Empire, the British immediately recruited former Khalsa soldiers into the British Indian Army, recognising that their fighting qualities were exceptional.",
  },

  // ─── SAHIBZADE & SACRIFICE ─────────────────────────────────────────────────
  {
    id: "sahibzade-all-four-sons",
    category: "Sacrifice & Martyrdom",
    fact: "Guru Gobind Singh Ji lost all four sons in the fight against tyranny",
    detail:
      "Guru Gobind Singh Ji, the tenth and final human Sikh Guru, lost all four of his sons — the Chaar Sahibzade — during the struggle against Mughal oppression. His two elder sons, Ajit Singh Ji (aged 18) and Jujhar Singh Ji (aged 14), were martyred on the battlefield of Chamkaur in December 1704, fighting alongside their father against overwhelming odds. His two younger sons, Zorawar Singh Ji (aged 9) and Fateh Singh Ji (aged 6), were captured and bricked alive within a wall on the orders of the Mughal governor of Sirhind — refusing to renounce their faith even at their tender ages.",
  },
  {
    id: "sahibzade-young-martyrs",
    category: "Sacrifice & Martyrdom",
    fact: "Guru Gobind Singh's youngest sons were martyred at ages 9 and 6",
    detail:
      "Sahibzada Zorawar Singh Ji (9 years old) and Sahibzada Fateh Singh Ji (6 years old) were handed over to Wazir Khan, the Mughal governor of Sirhind, by a traitor after being separated from the Guru. Despite intense pressure, offers of wealth, and threats of death, both children refused to convert to Islam. On December 26, 1704, they were bricked alive within a wall — a barbaric execution that shocked contemporaries. Their courage is celebrated every year on Shaheedi Divas (Martyrdom Day) and stands as one of history's most profound examples of faith under the most extreme duress.",
  },
  {
    id: "guru-tegh-bahadur-martyr",
    category: "Sacrifice & Martyrdom",
    fact: "Guru Tegh Bahadur Ji gave his life to protect the religious freedom of Hindus",
    detail:
      "Guru Tegh Bahadur Ji, the ninth Sikh Guru, was publicly beheaded by order of Mughal Emperor Aurangzeb in Delhi on November 24, 1675 — not for his own religion, but to defend the right of Kashmiri Pandits (Hindus) to practice their faith freely. Aurangzeb was forcing mass conversions to Islam, and Guru Ji stepped forward as their protector. His martyrdom is commemorated at Gurdwara Sis Ganj Sahib in Delhi, built at the very spot where he was executed.",
  },
  {
    id: "guru-arjan-dev-first-martyr",
    category: "Sacrifice & Martyrdom",
    fact: "Guru Arjan Dev Ji was the first Sikh martyr, tortured to death in 1606",
    detail:
      "Guru Arjan Dev Ji, the fifth Sikh Guru and compiler of the Adi Granth (the first version of the Guru Granth Sahib), was arrested on the orders of Mughal Emperor Jahangir and subjected to extreme torture: made to sit on a burning hot plate while hot sand was poured over his body. He endured these tortures for five days, reciting Gurbani throughout, and attained martyrdom on May 30, 1606. He is revered as the 'Pehla Shaheed' (First Martyr) of the Sikh faith.",
  },

  // ─── GURU GRANTH SAHIB ─────────────────────────────────────────────────────
  {
    id: "ggs-pages-and-hymns",
    category: "Guru Granth Sahib",
    fact: "The Guru Granth Sahib contains 1,430 pages and hymns from 36 different authors",
    detail:
      "The Guru Granth Sahib is not merely a book of Sikh scripture but the living, eternal Guru of the Sikhs — treated with the same reverence as a living person. It comprises 1,430 pages (Ang — literally 'limbs') of poetic hymns (Shabads) composed by six of the ten Sikh Gurus, as well as 30 other saints, mystics, and poets from Hindu and Muslim backgrounds, including Kabir Ji, Namdev Ji, Ravidas Ji, and Sheikh Farid Ji. This unprecedented inclusion of voices from different faiths makes the Guru Granth Sahib among the most diverse religious scriptures in the world.",
  },
  {
    id: "ggs-interreligious",
    category: "Guru Granth Sahib",
    fact: "The Guru Granth Sahib contains hymns from Muslim and Hindu saints alongside Sikh Gurus",
    detail:
      "A unique feature of the Guru Granth Sahib is its deliberate inclusion of hymns from saints of different religious backgrounds — Sheikh Farid (Muslim Sufi), Kabir (believed to be Muslim-born), Namdev and Trilochan (Hindu Vaishnav saints), Ravidas (from the 'untouchable' cobbler caste), and Beni, among others. This was a radical theological statement by Guru Arjan Dev Ji that divine truth transcends religious boundaries and that God speaks through the holy regardless of their birth religion.",
  },
  {
    id: "ggs-installed-as-guru",
    category: "Guru Granth Sahib",
    fact: "The Guru Granth Sahib was installed as the eternal living Guru in 1708",
    detail:
      "Before his death in 1708, Guru Gobind Singh Ji declared that the Guru Granth Sahib would be the eternal, living Guru for Sikhs after him — ending the line of human Gurus. This act, called 'Gurgaddi' (bestowing of Guruship), means that Sikhs believe the divine light of the ten Gurus is present within the scripture itself. The Guru Granth Sahib is given a bedroom to 'sleep' in at night, taken in procession each morning, and 'seated' on a throne (Manji Sahib) during the day — treated as a living being.",
  },
  {
    id: "ggs-multiple-languages",
    category: "Guru Granth Sahib",
    fact: "The Guru Granth Sahib is written in 22 different languages and scripts",
    detail:
      "The Guru Granth Sahib contains hymns composed in Punjabi, Hindi, Sanskrit, Persian, Arabic, Marathi, Sindhi, and several local dialects — all transcribed in the Gurmukhi script for consistency. This linguistic diversity reflects both the Gurus' extensive travels across the Indian subcontinent and their intentional outreach to people of all backgrounds. The musical framework (Raag) within which each hymn is set means that the scripture is also a sophisticated musicological document, organized into 31 classical Raags.",
  },

  // ─── SCIENCE & FIRSTS ──────────────────────────────────────────────────────
  {
    id: "science-fiber-optics",
    category: "Science & Innovation",
    fact: "Dr. Narinder Singh Kapany invented fiber optics",
    detail:
      "Dr. Narinder Singh Kapany, a Sikh scientist born in Moga, Punjab in 1926, is widely credited as the 'Father of Fiber Optics' for his pioneering research in the 1950s that demonstrated light could be transmitted through glass fibers. His work laid the foundation for the global internet infrastructure, modern medical endoscopy, and countless telecommunications technologies. In 1999, Fortune Magazine named him one of 'Seven Unsung Heroes of the 20th Century.' He also founded the Sikh Foundation in the USA to promote Sikh arts and culture.",
  },
  {
    id: "science-green-revolution",
    category: "Science & Innovation",
    fact: "Punjab's Sikh farmers were at the heart of India's Green Revolution",
    detail:
      "In the 1960s and 1970s, Punjabi farmers — predominantly Sikh — adopted new high-yield seed varieties and modern irrigation methods that transformed India from a food-deficit nation to self-sufficiency in grain production. Punjab, comprising only 1.5% of India's land area, at one point produced over 50% of India's wheat crop. This agricultural revolution, which saved hundreds of millions from famine, was driven in large part by the industrious and innovative spirit of Punjabi Sikh farming communities.",
  },
  {
    id: "dalip-singh-saund-congress",
    category: "Political Firsts",
    fact: "Dalip Singh Saund was the first Sikh — and first Asian-American — elected to the US Congress (1956)",
    detail:
      "Dalip Singh Saund, born in Amritsar, Punjab in 1899, became the first person of Asian heritage and the first Sikh to be elected to the United States Congress when he won a seat in the House of Representatives in 1956 representing California's 29th congressional district. He was reelected twice and served on the Foreign Affairs Committee, advocating for stronger US ties with India and Asia. His story is a landmark chapter in both American and Sikh history.",
  },
  {
    id: "first-turban-uk-police",
    category: "Political Firsts",
    fact: "The UK was the first country to allow turbans in police and military uniform",
    detail:
      "After years of campaigning by the Sikh community, the United Kingdom legally permitted Sikhs to wear their turban instead of the standard police helmet and later military headgear, recognising the dastar as a religious obligation. This was a watershed moment for religious accommodation in Western institutions and set a precedent that was followed by many other countries. Today, Sikhs serve in police forces, fire brigades, and armed forces across the UK wearing their turbans as part of official uniform.",
  },
  {
    id: "first-sikh-pm-india",
    category: "Political Firsts",
    fact: "Dr. Manmohan Singh was India's first Sikh Prime Minister, serving for a decade",
    detail:
      "Dr. Manmohan Singh served as India's 14th Prime Minister from 2004 to 2014, becoming the first Sikh to hold that office. An economist of global repute, he is credited with liberalizing India's economy in 1991 as Finance Minister, a set of reforms that transformed India into one of the world's fastest-growing major economies. His decade as Prime Minister saw India's GDP nearly triple, and he was widely respected for his integrity, humility, and intellectual depth.",
  },
  {
    id: "first-sikh-astronaut",
    category: "Political Firsts",
    fact: "Wing Commander Rakesh Sharma was the first Indian in space — and carried Sikh prayers",
    detail:
      "Although not Sikh himself, India's first astronaut Rakesh Sharma's 1984 mission in a Soviet spacecraft became a source of national and Punjabi pride. More recently, Sikh heritage has been represented in space programs globally. Closer to Sikh history, the Guru Granth Sahib's hymns about the infinite, boundless nature of the cosmos have been cited as poetic anticipations of a universe far larger than the medieval mind imagined.",
  },

  // ─── EQUALITY & SOCIAL REFORM ──────────────────────────────────────────────
  {
    id: "equality-caste",
    category: "Equality & Social Reform",
    fact: "Guru Nanak rejected the caste system in 1469 — centuries before modern movements",
    detail:
      "At a time when caste hierarchy was an unquestioned feature of South Asian society, Guru Nanak Dev Ji openly challenged caste discrimination, declaring all human beings equal before God. He ate with people of all castes, refused to conduct rituals that reinforced caste hierarchy, and established the Langar where people of all backgrounds sat and ate together as equals. This was a revolutionary social act in fifteenth-century India, anticipating by centuries the equality movements that would reshape the world.",
  },
  {
    id: "equality-women",
    category: "Equality & Social Reform",
    fact: "Sikh women have had equal spiritual rights since the faith's founding in 1469",
    detail:
      "From the very beginning, Guru Nanak Dev Ji declared women spiritually equal to men, condemning female infanticide, sati (widow-burning), and purdah (enforced veiling). Sikh women can lead prayers, read the Guru Granth Sahib, perform kirtan (devotional music), and participate in all religious ceremonies on equal footing with men — a level of spiritual equality that many world religions are still debating today. Guru Amar Das Ji specifically abolished purdah and sati within the Sikh community in the sixteenth century.",
  },
  {
    id: "equality-langar-tradition",
    category: "Equality & Social Reform",
    fact: "The Langar tradition broke caste barriers in India centuries before independence",
    detail:
      "The practice of Langar — where all people sit together on the floor (pangat) and eat the same food — was a direct and practical challenge to caste-based dining restrictions that governed Indian society for millennia. When Emperor Akbar visited Guru Amar Das Ji, he was required to sit on the floor and eat in the Langar before having an audience with the Guru — a powerful statement that even emperors were equal before God. This tradition continues unchanged today.",
  },
  {
    id: "equality-no-purdah",
    category: "Equality & Social Reform",
    fact: "Guru Amar Das Ji abolished purdah for Sikh women in the 16th century",
    detail:
      "Guru Amar Das Ji, the third Sikh Guru, formally prohibited purdah (the practice of women covering themselves and being excluded from public life) within the Sikh community, arguing that it was contrary to the teaching of equality before God. He also condemned sati (the practice of widows immolating themselves on their husbands' funeral pyres) and encouraged widows to remarry. These reforms placed Sikhism centuries ahead of broader South Asian and global movements for women's rights.",
  },

  // ─── KHALSA & HISTORY ──────────────────────────────────────────────────────
  {
    id: "khalsa-founding",
    category: "Khalsa & History",
    fact: "The Khalsa was founded on Vaisakhi, April 13, 1699 — a watershed moment in Sikh history",
    detail:
      "On the festival of Vaisakhi in 1699, Guru Gobind Singh Ji called together the Sikh community at Anandpur Sahib and, in a dramatic ceremony, initiated the first five Sikhs — the Panj Pyare (Beloved Five) — into a new order called the Khalsa ('the Pure'). He gave them a new identity with surnames (Singh for men, Kaur for women), the Panj Kakaars (five articles of faith), and a code of conduct (Rehat Maryada). In a remarkable act of humility, Guru Ji then asked the Panj Pyare to initiate him — recognising the community's authority over the Guru.",
  },
  {
    id: "khalsa-panj-pyare",
    category: "Khalsa & History",
    fact: "The first five Khalsa members came from five different castes across India",
    detail:
      "The Panj Pyare (Five Beloved Ones) — Bhai Daya Singh, Bhai Dharam Singh, Bhai Himmat Singh, Bhai Mohkam Singh, and Bhai Sahib Singh — came from five different regions of India and five different occupational castes, ranging from a Kshatriya to a barber and a water-carrier. This was a deliberate and powerful statement by Guru Gobind Singh Ji that the Khalsa transcended all caste divisions, drawing warriors of the spirit from across the social hierarchy.",
  },
  {
    id: "sikh-empire",
    category: "Khalsa & History",
    fact: "Maharaja Ranjit Singh built a Sikh Empire that stretched from the Khyber Pass to Kashmir",
    detail:
      "Maharaja Ranjit Singh (1780–1839) united the fragmented Sikh Misls and built the powerful Sikh Empire (Sarkar-e-Khalsa) that at its height stretched from the Khyber Pass in the west to the Sutlej River in the east, and from Kashmir in the north to Sindh in the south. His was a secular court that employed Hindus, Muslims, Europeans, and Sikhs alike in high positions. He is remembered as 'Sher-e-Punjab' (Lion of Punjab) and is one of the most consequential rulers in South Asian history.",
  },
  {
    id: "kohinoor-diamond",
    category: "Khalsa & History",
    fact: "The Kohinoor diamond was once in the treasury of the Sikh Empire",
    detail:
      "The Kohinoor ('Mountain of Light'), one of the largest cut diamonds in the world, passed through the hands of the Mughal Empire, Afghan rulers, and eventually the Sikh Empire, where it was kept by Maharaja Ranjit Singh. After the British conquest of Punjab in 1849 and the annexation of the Sikh Empire, the Kohinoor was seized and presented to Queen Victoria as part of the spoils of war. It now sits in the British Crown Jewels and remains a subject of ongoing repatriation debates between India and the UK.",
  },
  {
    id: "akal-takht",
    category: "Khalsa & History",
    fact: "Akal Takht is the highest seat of temporal Sikh authority, established in 1606",
    detail:
      "Akal Takht ('Throne of the Timeless One') was established by Guru Hargobind Ji in 1606 directly opposite the Harmandir Sahib (Golden Temple) in Amritsar, symbolizing the dual concepts of Miri (temporal power) and Piri (spiritual power). It is the highest seat of religious authority in Sikhism, from which Hukamnamas (edicts) are issued binding on all Sikhs. The Akal Takht was desecrated during Operation Blue Star in 1984 and subsequently rebuilt, an event that caused deep trauma within the global Sikh community.",
  },

  // ─── RELIGION & SCRIPTURE ──────────────────────────────────────────────────
  {
    id: "religion-no-conversions",
    category: "Religion",
    fact: "Sikhism does not proselytize — no missionaries are sent to convert others",
    detail:
      "Unlike several other major world religions, Sikhism has no tradition of proselytizing or sending missionaries to convert non-Sikhs. The faith teaches that all genuine paths to God are valid, and that the goal is to live righteously and serve others rather than to grow the religion's numbers through conversion. People can and do choose to embrace Sikhism, but they are never actively recruited or pressured. This non-proselytizing stance sets Sikhism apart as a uniquely tolerant and non-expansionist faith.",
  },
  {
    id: "religion-meditation-music",
    category: "Religion",
    fact: "Sikh worship is centered on devotional music (Kirtan), not rituals or idols",
    detail:
      "Sikh worship centers on Kirtan — the singing of Gurbani (Guru's words) set to classical Indian Raag music — rather than idol worship, rituals, or sacrifices. Guru Nanak Dev Ji was himself a musician who traveled with a rabab player (Bhai Mardana Ji), and the Guru Granth Sahib is organized into 31 classical Raags. The continuous recitation of the Guru Granth Sahib (Akhand Path) and daily Kirtan in the Golden Temple represent an unbroken musical offering to God that has continued for centuries.",
  },
  {
    id: "religion-nitnem",
    category: "Religion",
    fact: "Devout Sikhs recite five sets of prayers daily at specific times",
    detail:
      "The Sikh Nitnem (daily prayer routine) prescribes five sets of Banis (prayers) to be recited at specific times: Japji Sahib, Jaap Sahib, and Tav-Prasad Savaiye in the early morning before dawn; Rehras Sahib at sunset; and Kirtan Sohila before sleeping. These prayers are drawn entirely from the Guru Granth Sahib and Dasam Granth and are memorized by devout Sikhs. The practice of Amrit Vela (the ambrosial hour before dawn) for morning prayer is considered especially spiritually powerful.",
  },
  {
    id: "religion-one-god",
    category: "Religion",
    fact: "Sikhism is strictly monotheistic — God has no physical form and no gender",
    detail:
      "Sikh theology is uncompromisingly monotheistic: there is exactly One God (Ik Onkar), who is formless (Nirankar), timeless (Akal), self-created (Swayambhu), and beyond all human comprehension. Uniquely, Sikhism uses both masculine and feminine pronouns for God in the Guru Granth Sahib, rejecting the idea that God is gendered. God is not found in temples, forests, or pilgrimages but within the human heart — accessible to all through meditation, service, and an honest life.",
  },
  {
    id: "religion-concept-of-seva",
    category: "Religion",
    fact: "Seva (selfless service) is considered a form of worship equal to prayer",
    detail:
      "In Sikhism, performing Seva — selfless service to others — carries the same spiritual merit as prayer and meditation. The Guru Granth Sahib repeatedly emphasizes that God is found in the faces of the poor and the needy, and that serving them is serving God directly. This theology of active compassion has driven Sikhs to establish hospitals, schools, and community kitchens across the world and to respond first and most generously to humanitarian crises globally, from the COVID-19 pandemic to earthquake relief in Turkey and Morocco.",
  },

  // ─── DIASPORA & CULTURE ────────────────────────────────────────────────────
  {
    id: "diaspora-legal-kirpan",
    category: "Diaspora & Rights",
    fact: "Sikhs have the legal right to wear the Kirpan in many countries worldwide",
    detail:
      "Through decades of advocacy and landmark legal cases, Sikhs have secured the right to wear the Kirpan as a religious article in Canada, the USA, the UK, and many other countries. The US Supreme Court has upheld religious accommodation for Sikhs in schools and workplaces, and Canadian courts have consistently protected the right to wear the Kirpan in public institutions. These legal victories have established important precedents for religious freedom that benefit many minority communities.",
  },
  {
    id: "diaspora-turban-rights",
    category: "Diaspora & Rights",
    fact: "Sikh turban rights cases have set landmark religious freedom precedents globally",
    detail:
      "From Canadian schools to French laicité laws to the US military, Sikhs have fought — and often won — the right to wear their dastar in public institutions. The US Army began allowing Sikh soldiers to serve in uniform with turbans in 2017 after years of individual accommodations and legal battles. These cases have shaped religious freedom law in multiple jurisdictions and created important protections for all religious minorities who express their faith through distinctive appearance.",
  },
  {
    id: "diaspora-covid-seva",
    category: "Diaspora & Rights",
    fact: "Sikh volunteers fed millions of people globally during the COVID-19 pandemic",
    detail:
      "During the COVID-19 pandemic of 2020–2021, Sikh organizations — including the United Sikhs, Sikh Coalition, Khalsa Aid, and thousands of local Gurdwaras — mobilized to provide free meals, emergency supplies, and financial aid to communities across the USA, UK, Canada, India, and beyond. In India alone, Sikh volunteers served tens of millions of meals to daily-wage workers stranded by lockdowns, demonstrating on a global scale the Sikh tradition of seva in times of crisis.",
  },
  {
    id: "diaspora-khalsa-aid",
    category: "Diaspora & Rights",
    fact: "Khalsa Aid provides disaster relief in conflict and crisis zones worldwide",
    detail:
      "Khalsa Aid International, a UK-based Sikh humanitarian organization founded in 1999, has provided relief in over 25 countries including Iraq, Syria, the Philippines, Haiti, Nepal, and Bangladesh. Operating on the Sikh principle of Seva without discrimination, Khalsa Aid serves people of all faiths and nationalities in disaster zones and refugee crises. Its orange-turbaned volunteers have become a recognized symbol of compassionate, faith-driven humanitarian action on the world stage.",
  },
  {
    id: "culture-bhangra",
    category: "Culture",
    fact: "Bhangra — the vibrant Punjabi folk dance — originated as a Sikh harvest celebration",
    detail:
      "Bhangra is a traditional Punjabi folk dance that originated as a celebration of the Vaisakhi harvest festival, performed by farmers in Punjab to give thanks for a bountiful crop. Deeply rooted in Sikh and Punjabi culture, Bhangra has evolved into a global art form performed at weddings, festivals, and competitions worldwide, influencing pop music and dance from the UK charts to Bollywood. The energetic drumming of the dhol and the exuberant movements of Bhangra have become one of Sikhism's most joyful cultural exports.",
  },
  {
    id: "culture-names",
    category: "Culture",
    fact: "Sikh names are chosen by opening the Guru Granth Sahib at random",
    detail:
      "In the Sikh naming ceremony (Naam Karan), a child's name is chosen by opening the Guru Granth Sahib at a random page and reading the first letter of the first word of the hymn on the left-hand page. The child's name begins with that letter, and the parent chooses a name from the Sikh tradition starting with it. This practice ensures that God's word is the source of the child's identity from their very first day. The suffix 'Singh' (lion) is added for boys and 'Kaur' (princess/lioness) for girls.",
  },
  {
    id: "culture-sikh-new-year",
    category: "Culture",
    fact: "The Sikh calendar (Nanakshahi) was reformed in 2003 and begins in March",
    detail:
      "The Nanakshahi calendar, the official Sikh solar calendar, was formally adopted by the Shiromani Gurdwara Parbandhak Committee (SGPC) in 2003, with year 1 corresponding to 1469 CE — the birth year of Guru Nanak Dev Ji. The Sikh New Year begins on Chet 1 (around March 14), and the calendar fixes all major Sikh festivals to consistent solar dates rather than the variable dates of the lunar calendar, ending the confusion of different communities celebrating the same festival on different days.",
  },

  // ─── UNIQUE THEOLOGICAL POINTS ─────────────────────────────────────────────
  {
    id: "theology-no-heaven-hell",
    category: "Theology",
    fact: "Sikhism does not believe in a conventional heaven or hell — only the cycle of rebirth",
    detail:
      "Sikh theology teaches that the soul transmigrates through many lives (reincarnation) based on the accumulated karma of past actions, but that the ultimate goal is not heaven but Mukti (liberation) — breaking free from the cycle of birth and death entirely through union with God. There is no eternal punishment or eternal paradise; rather, the soul eventually merges back into the Divine Ocean from which it came, losing individual ego but gaining universal consciousness.",
  },
  {
    id: "theology-no-clergy",
    category: "Theology",
    fact: "Sikhism has no ordained clergy — any Sikh can lead prayers or read the Guru Granth Sahib",
    detail:
      "Unlike many major religions, Sikhism has no ordained priestly class. Any Sikh — male or female — who has learned to read Gurmukhi can perform religious ceremonies, read the Guru Granth Sahib, lead prayers, and conduct naming ceremonies, weddings (Anand Karaj), and funerals. Granthi (readers of the Guru Granth Sahib) in Gurdwaras are employed staff, not a clerical caste — they have no sacramental authority above any other Sikh.",
  },
  {
    id: "theology-hukamnama",
    category: "Theology",
    fact: "Every Gurdwara takes a 'Hukamnama' — a divine command — from the Guru Granth Sahib each day",
    detail:
      "Each morning, after the ceremonial 'awakening' of the Guru Granth Sahib (Prakash), a Granthi opens the scripture at random and reads the first complete hymn on the left-hand page — this is the Hukamnama (divine order) for the day. The Hukamnama from the Golden Temple is broadcast worldwide and is considered the Guru's guidance for all Sikhs for that day. This daily practice reinforces the concept that the Guru Granth Sahib is a living, responsive Guru rather than a static historical text.",
  },
  {
    id: "theology-waheguru",
    category: "Theology",
    fact: "'Waheguru' is the most common Sikh name for God, meaning 'Wondrous Enlightener'",
    detail:
      "The word 'Waheguru' (ਵਾਹਿਗੁਰੂ) is the most widely used Sikh name for God and combines 'Wahe' (an exclamation of wonder and awe) and 'Guru' (the one who dispels darkness and brings light). It expresses the spontaneous sense of awe and gratitude that arises when the soul recognizes the presence of the Divine. The Guru Granth Sahib uses many names for God drawn from Hindu, Muslim, and Sikh traditions, reflecting the theology that God transcends any single name or religion.",
  },
];
