export interface NotableSikh {
  id: string;
  name: string;
  field: string;
  nationality: string;
  born?: string;
  achievement: string;
  description: string;
  imageUrl?: string;
  tags: string[];
}

export const NOTABLE_SIKHS: NotableSikh[] = [
  // ─── POLITICS / LEADERSHIP ────────────────────────────────────────────────
  {
    id: "manmohan-singh",
    name: "Dr. Manmohan Singh",
    field: "Politics / Economics",
    nationality: "Indian",
    born: "1932",
    achievement: "14th Prime Minister of India (2004–2014)",
    description:
      "Manmohan Singh served as Prime Minister of India for a decade and is widely credited with liberalizing India's economy in 1991 as Finance Minister, transforming it into a global powerhouse. A trained economist from Oxford and Cambridge, he guided India through the 2008 global financial crisis with remarkable steadiness. He was the first Sikh — and first member of a religious minority — to hold India's highest office, a landmark for the community worldwide.",
    tags: ["politics", "economics", "india", "prime minister"],
  },
  {
    id: "navdeep-bains",
    name: "Navdeep Bains",
    field: "Politics",
    nationality: "Canadian",
    born: "1977",
    achievement: "Former Canadian Cabinet Minister, Innovation & Industry",
    description:
      "Navdeep Bains served as a senior minister in Justin Trudeau's cabinet, responsible for Innovation, Science and Industry. During his tenure he championed Canada's digital and AI strategy, attracting billions in tech investment. A proud member of Canada's thriving Sikh community, he remains a role model for Canadians of South Asian heritage.",
    tags: ["politics", "canada", "government"],
  },
  {
    id: "jagmeet-singh",
    name: "Jagmeet Singh",
    field: "Politics",
    nationality: "Canadian",
    born: "1979",
    achievement: "Leader of Canada's New Democratic Party (NDP)",
    description:
      "Jagmeet Singh made history as the first person of a visible minority to lead a major federal political party in Canada. Known for his passion for social justice, universal healthcare, and workers' rights, he entered Parliament wearing his trademark dastar (turban) with pride. His visibility as a turbaned Sikh politician has inspired an entire generation of South Asian Canadians.",
    tags: ["politics", "canada", "ndp", "turban"],
  },
  {
    id: "nikki-haley",
    name: "Nikki Haley",
    field: "Politics",
    nationality: "American",
    born: "1972",
    achievement: "Former US Ambassador to the UN, Governor of South Carolina",
    description:
      "Nimrata Nikki Randhawa Haley is the daughter of Sikh immigrants from Amritsar. She served as the 116th Governor of South Carolina and as the US Ambassador to the United Nations under President Trump, where she became one of the most outspoken voices on the world stage. She ran a significant campaign for the 2024 Republican presidential nomination, cementing her place as one of America's most influential politicians.",
    tags: ["politics", "usa", "ambassador", "governor"],
  },
  {
    id: "preet-bharara",
    name: "Preet Bharara",
    field: "Law",
    nationality: "American",
    born: "1968",
    achievement: "Former US Attorney for Southern District of New York",
    description:
      "Preet Bharara served as one of the most powerful federal prosecutors in US history, known for fearlessly taking on Wall Street corruption, organized crime, and public corruption cases. Named one of Time magazine's 100 Most Influential People, he prosecuted over 80 public officials without a single loss at trial. After leaving office he became a prominent media commentator on law and democracy.",
    tags: ["law", "usa", "prosecutor", "justice"],
  },
  {
    id: "dalip-singh-saund",
    name: "Dalip Singh Saund",
    field: "Politics",
    nationality: "American",
    born: "1899",
    achievement: "First Sikh and first Asian elected to the US Congress (1956)",
    description:
      "Dalip Singh Saund emigrated from Punjab to the United States in 1920 and, after decades of political activism and farming in California's Imperial Valley, became the first Asian American and first Sikh ever elected to the United States Congress in 1956. He served three terms in the House of Representatives, advocating for civil rights and Indian-American relations. His victory — at a time when Asian Americans faced severe discrimination — remains one of the most remarkable political breakthroughs in American history.",
    tags: ["politics", "usa", "congress", "history", "pioneer"],
  },
  {
    id: "taranjit-singh-sandhu",
    name: "Taranjit Singh Sandhu",
    field: "Diplomacy",
    nationality: "Indian",
    born: "1964",
    achievement: "US Ambassador to India (2020–2023)",
    description:
      "Taranjit Singh Sandhu served as India's Ambassador to the United States and later as the US Ambassador to India — one of the world's most critical bilateral postings. A career Indian Foreign Service officer, he helped steer the India-US relationship through the COVID-19 pandemic and strengthened defence and technology ties between the two countries. His appointment as US Ambassador to India was confirmed by the US Senate in 2020.",
    tags: ["diplomacy", "india", "usa", "ambassador"],
  },
  {
    id: "anita-anand",
    name: "Anita Anand",
    field: "Politics",
    nationality: "Canadian",
    born: "1967",
    achievement: "Canadian Minister of National Defence, then Finance Minister",
    description:
      "Anita Anand rose to international prominence as Canada's Minister of National Defence, spearheading Canada's military aid to Ukraine following Russia's 2022 invasion — coordinating billions of dollars in equipment and support. A law professor before entering politics, she brought rigorous expertise to the defence file and later served as Minister of Finance. She is one of the most consequential cabinet ministers in Canada's recent history.",
    tags: ["politics", "canada", "defence", "finance", "ukraine"],
  },
  {
    id: "harjit-sajjan",
    name: "Harjit Sajjan",
    field: "Politics / Military",
    nationality: "Canadian",
    born: "1970",
    achievement: "Canadian Minister of National Defence, Afghanistan war veteran",
    description:
      "Harjit Sajjan served as Canada's Minister of National Defence under Prime Minister Justin Trudeau, becoming the first Sikh to hold that portfolio. A decorated veteran of the Afghanistan War, he served in Bosnia and three tours in Afghanistan, earning recognition as a master intelligence operative credited with disrupting a major insurgent network. His combination of frontline military service and political leadership made him a singular figure in Canadian public life.",
    tags: ["politics", "canada", "defence", "military", "afghanistan"],
  },
  {
    id: "inderjit-singh-baron",
    name: "Lord Inderjit Singh (Baron Singh of Wimbledon)",
    field: "Politics / Religion",
    nationality: "British",
    born: "1932",
    achievement: "First Sikh life peer in the UK House of Lords",
    description:
      "Baron Singh of Wimbledon became the first Sikh to be appointed a life peer in the United Kingdom's House of Lords, where he has championed interfaith dialogue, human rights, and Sikh representation for decades. He is the founder of the Network of Sikh Organisations and regularly addresses the Lords on issues ranging from religious freedom to poverty. His tireless advocacy has made him one of the most respected Sikh voices in British public life.",
    tags: ["politics", "uk", "house of lords", "interfaith", "pioneer"],
  },

  // ─── SCIENCE & TECHNOLOGY ─────────────────────────────────────────────────
  {
    id: "narinder-singh-kapany",
    name: "Dr. Narinder Singh Kapany",
    field: "Science / Technology",
    nationality: "American/Indian",
    born: "1926",
    achievement: "Father of Fiber Optics — invented fiber optic technology in the 1950s",
    description:
      "Dr. Narinder Singh Kapany, born in Moga, Punjab, is widely regarded as the 'Father of Fiber Optics' for his pioneering experiments at Imperial College London in the 1950s that demonstrated light could be transmitted through thin glass fibers. His inventions underpinned the global telecommunications revolution, making modern internet infrastructure possible. Fortune magazine named him one of seven 'Unsung Heroes' of the 20th century and he was nominated for TIME magazine's Person of the Century, yet he remains one of science's most underappreciated giants.",
    tags: ["science", "technology", "fiber optics", "invention", "india", "usa"],
  },
  {
    id: "har-gobind-khorana",
    name: "Dr. Har Gobind Khorana",
    field: "Science / Medicine",
    nationality: "American/Indian",
    born: "1922",
    achievement: "Nobel Prize in Physiology or Medicine 1968 — cracked the genetic code",
    description:
      "Born in the small village of Raipur in what is now Pakistan, Har Gobind Khorana earned the 1968 Nobel Prize in Physiology or Medicine for his monumental work in deciphering the genetic code and demonstrating how nucleotides in nucleic acids control protein synthesis. His research formed a cornerstone of molecular biology and opened the door to genetic engineering. He later became the first scientist to chemically synthesize a gene and pioneered the study of the rhodopsin system, transforming our understanding of vision at the molecular level.",
    tags: ["science", "medicine", "nobel prize", "genetics", "india", "usa"],
  },
  {
    id: "gurdev-singh-khush",
    name: "Dr. Gurdev Singh Khush",
    field: "Science / Agriculture",
    nationality: "American/Indian",
    born: "1935",
    achievement: "Developed IR8 'miracle rice' that fed billions during the Green Revolution",
    description:
      "Dr. Gurdev Singh Khush spent more than three decades at the International Rice Research Institute (IRRI) in the Philippines, where he led the development of IR8 — dubbed 'miracle rice' — which dramatically increased rice yields and is credited with saving hundreds of millions of people from famine during the Green Revolution. He developed over 300 rice varieties adopted by farmers across Asia and Africa. Among his many honours are the Japan Prize, the World Food Prize, and the Padma Shri, cementing his place among the greatest agricultural scientists in history.",
    tags: ["science", "agriculture", "green revolution", "rice", "india", "usa"],
  },
  {
    id: "amar-sawhney",
    name: "Dr. Amar Sawhney",
    field: "Science / Medical Devices",
    nationality: "American/Indian",
    born: "1966",
    achievement: "Inventor with 100+ patents in medical devices and drug delivery",
    description:
      "Dr. Amar Sawhney is a serial medical innovator and entrepreneur who holds more than 100 patents in areas including surgical adhesives, drug delivery systems, and minimally invasive surgical tools. He founded multiple companies — including Incept LLC and Augmenix — whose products have been used in millions of surgeries worldwide, improving patient outcomes significantly. His SpaceOAR hydrogel, which protects healthy tissue during prostate cancer radiation, is now used by leading cancer centres globally and stands as one of the most meaningful medical inventions of the 21st century.",
    tags: ["science", "medical devices", "invention", "patents", "india", "usa"],
  },

  // ─── MILITARY HEROES ──────────────────────────────────────────────────────
  {
    id: "banda-singh-bahadur",
    name: "Banda Singh Bahadur",
    field: "Military / History",
    nationality: "Indian",
    born: "1670",
    achievement: "Sikh military commander who conquered Sirhind; pioneered land reform in South Asia",
    description:
      "Banda Singh Bahadur was a disciple of Guru Gobind Singh Ji and became the first Sikh military commander to establish a sovereign Sikh territory. After Guru Gobind Singh's passing, he led a series of stunning military campaigns against the Mughal Empire, capturing the city of Sirhind in 1710 — the seat of the governor responsible for the martyrdom of Guru Gobind Singh's sons. Crucially, he distributed land from Mughal landlords directly to the peasants who tilled it, making him the pioneer of the earliest recorded land-reform movement in South Asia; he was eventually captured and martyred by the Mughals in 1716 but his legacy shaped the future Sikh Empire.",
    tags: ["military", "history", "sikh empire", "martyrdom", "land reform"],
  },
  {
    id: "bhai-mani-singh",
    name: "Bhai Mani Singh",
    field: "Religion / History",
    nationality: "Indian",
    born: "1644",
    achievement: "Scholar-martyr who compiled the final form of Guru Granth Sahib",
    description:
      "Bhai Mani Singh was one of the most learned Sikhs of his era, appointed by Guru Gobind Singh Ji to serve as the head granthi (custodian) of Harmandir Sahib (the Golden Temple) in Amritsar. He is credited with compiling and standardising the text of Guru Granth Sahib Ji in consultation with the Guru, ensuring the scripture would be preserved in its authentic form for all time. In 1737, he was arrested by the Mughal Governor of Lahore on a trumped-up charge and, refusing to convert to Islam, was tortured and executed by being cut limb by limb — a martyrdom that profoundly reinforced Sikh resilience and faith.",
    tags: ["religion", "history", "martyrdom", "guru granth sahib", "scholarship"],
  },
  {
    id: "hari-singh-nalwa",
    name: "Hari Singh Nalwa",
    field: "Military / History",
    nationality: "Indian",
    born: "1791",
    achievement: "Greatest general of the Sikh Empire; conquered Peshawar and Afghanistan regions",
    description:
      "Hari Singh Nalwa is regarded as the most formidable military commander of the Sikh Empire and one of the greatest generals of 19th-century Asia. As Commander-in-Chief of the Khalsa Army under Maharaja Ranjit Singh, he led the successful conquest of the Attock Fort, Peshawar, and regions of modern-day Afghanistan — expanding the Sikh Empire to its greatest territorial extent. So feared was he on the northwest frontier that Afghan mothers reportedly used his name to quieten crying children; he was killed in action at the Battle of Jamrud in 1837 while successfully defending the Khyber Pass against a much larger Afghan force.",
    tags: ["military", "history", "sikh empire", "peshawar", "afghanistan"],
  },
  {
    id: "havildar-ishar-singh",
    name: "Havildar Ishar Singh",
    field: "Military",
    nationality: "Indian/British",
    born: "1870",
    achievement: "One of 21 Sikhs at the Battle of Saragarhi (1897), IOM recipient",
    description:
      "Havildar Ishar Singh was the commanding soldier of the 21 men of the 36th Sikh Regiment who held Fort Saragarhi on 12 September 1897 against an estimated 10,000 Pashtun tribesman on the North-West Frontier. For seven hours, the 21 Sikhs fought to the last man in what military historians consider one of history's greatest last stands. The Indian Parliament observed a minute of silence when news reached them; all 21 soldiers were posthumously awarded the Indian Order of Merit (the equivalent of the Victoria Cross), and the Battle of Saragarhi is commemorated as Saragarhi Day every year by Sikhs worldwide.",
    tags: ["military", "history", "saragarhi", "bravery", "india"],
  },
  {
    id: "subedar-richpal-ram",
    name: "Subedar Richpal Ram VC",
    field: "Military",
    nationality: "Indian",
    born: "1899",
    achievement: "Victoria Cross, World War II — extraordinary gallantry in Eritrea",
    description:
      "Subedar Richpal Ram was awarded the Victoria Cross — the British Commonwealth's highest award for valour — for his extraordinary heroism during the East Africa Campaign in Eritrea in February 1941. When his company's attack stalled under withering fire, he led repeated charges against enemy machine-gun positions, drawing fire onto himself to allow his comrades to advance, and continued fighting after being severely wounded. He died of his wounds but his selfless bravery captured two critical objectives and is honoured across India and the Sikh community.",
    tags: ["military", "victoria cross", "world war ii", "india", "bravery"],
  },
  {
    id: "lt-col-dhan-singh-thapa",
    name: "Lt. Col. Dhan Singh Thapa PVC",
    field: "Military",
    nationality: "Indian",
    born: "1928",
    achievement: "Param Vir Chakra — highest Indian gallantry award, 1962 Sino-Indian War",
    description:
      "Lt. Col. Dhan Singh Thapa was awarded the Param Vir Chakra — India's highest military honour — for his extraordinary bravery during the 1962 Sino-Indian War. His post at Sirijap was overrun by vastly superior Chinese forces on 20 October 1962; despite being gravely wounded and believing all his men had fallen, he continued to fight until he was captured. He survived captivity and returned to India in 1963 as a celebrated hero, later rising to command his regiment and inspiring generations of Indian soldiers with his indomitable spirit.",
    tags: ["military", "param vir chakra", "india", "1962 war", "bravery"],
  },
  {
    id: "subedar-joginder-singh",
    name: "Subedar Joginder Singh PVC",
    field: "Military",
    nationality: "Indian",
    born: "1921",
    achievement: "Param Vir Chakra — fought to the last man in the 1962 Sino-Indian War",
    description:
      "Subedar Joginder Singh of the 1st Sikh Regiment is one of India's most revered military martyrs. During the 1962 Sino-Indian War, when his platoon's position at Tongpeng La was attacked by overwhelming Chinese forces, he single-handedly repulsed three consecutive waves of enemy soldiers despite being wounded twice. He continued to fight until his last three men were all that remained, at which point the survivors were captured; Joginder Singh died in Chinese captivity. He was posthumously awarded the Param Vir Chakra and is commemorated annually across the Sikh community as a symbol of ultimate sacrifice.",
    tags: ["military", "param vir chakra", "india", "1962 war", "martyrdom"],
  },

  // ─── SPORTS ───────────────────────────────────────────────────────────────
  {
    id: "milkha-singh",
    name: "Milkha Singh",
    field: "Athletics",
    nationality: "Indian",
    born: "1929",
    achievement: "The Flying Sikh — Commonwealth Games gold, 4x Asian Games champion",
    description:
      "Milkha Singh overcame the trauma of the 1947 Partition — witnessing the murder of his family — to become India's greatest sprinter. Known as 'The Flying Sikh,' he won gold at the 1958 Commonwealth Games and four Asian Games gold medals, and came agonizingly close to a bronze medal at the 1960 Rome Olympics (finishing fourth in a then-world-record time). His life inspired the blockbuster Bollywood film Bhaag Milkha Bhaag (2013) and he remains an enduring symbol of resilience and national pride.",
    tags: ["sports", "athletics", "india", "running", "olympic"],
  },
  {
    id: "fauja-singh",
    name: "Fauja Singh",
    field: "Athletics",
    nationality: "British/Indian",
    born: "1911",
    achievement: "Oldest marathon runner in the world — completed marathon aged 100+",
    description:
      "Fauja Singh, the 'Turbaned Tornado,' began running marathons at age 89 after personal tragedy left him searching for purpose. He became a global icon of human potential, completing the 2011 Toronto Waterfront Marathon at the age of 100 and becoming the first centenarian to finish a marathon. Adidas featured him in a major advertising campaign, making him one of the most recognisable Sikh sportspeople in the world at an age when most have long retired.",
    tags: ["sports", "running", "inspiration", "record", "uk"],
  },
  {
    id: "harbhajan-singh",
    name: "Harbhajan Singh",
    field: "Cricket",
    nationality: "Indian",
    born: "1980",
    achievement: "Indian cricket legend — 700+ international wickets, 2011 World Cup winner",
    description:
      "Harbhajan Singh from Jalandhar, Punjab, is one of India's greatest off-spin bowlers and the first Indian to take a hat-trick in Test cricket (against Australia in 2001 — one of the most celebrated performances in Test history). Known as the 'Turbanator,' he took over 700 international wickets across formats and played a key role in India's iconic 2011 World Cup victory on home soil. A proud Punjabi, he wore his patka with pride throughout a 17-year international career.",
    tags: ["sports", "cricket", "india", "punjab", "world cup"],
  },
  {
    id: "balbir-singh-sr",
    name: "Balbir Singh Sr.",
    field: "Sports / Field Hockey",
    nationality: "Indian",
    born: "1924",
    achievement: "3x Olympic gold medallist (1948, 1952, 1956); scored 5 goals in an Olympic final",
    description:
      "Balbir Singh Sr. is considered the greatest field hockey player in history and one of independent India's first sporting legends. He won three consecutive Olympic gold medals with the Indian national team in 1948, 1952, and 1956, during the golden era of Indian hockey. At the 1952 Helsinki Games he scored five goals in an Olympic final — a record that still stands today. The International Olympic Committee named him one of the 16 'Olympic Icons' of all time, placing him alongside greats like Muhammad Ali and Pele.",
    tags: ["sports", "field hockey", "india", "olympic gold", "record", "legend"],
  },
  {
    id: "pargat-singh",
    name: "Pargat Singh",
    field: "Sports / Field Hockey",
    nationality: "Indian",
    born: "1965",
    achievement: "Indian field hockey Olympian (1992 & 1996), twice World Cup team member",
    description:
      "Pargat Singh is one of India's most celebrated field hockey defenders and captains, representing India at two Olympic Games (Barcelona 1992 and Atlanta 1996) and two World Cups. Known for his commanding on-field presence and leadership, he captained the Indian team during a challenging era for Indian hockey. After retiring from sport he entered politics in Punjab and remains a respected voice on sports development in the state.",
    tags: ["sports", "field hockey", "india", "olympic", "punjab", "politics"],
  },
  {
    id: "arshdeep-singh",
    name: "Arshdeep Singh",
    field: "Sports / Cricket",
    nationality: "Indian",
    born: "2000",
    achievement: "Key player in India's T20 World Cup 2024 victory; leading T20I wicket-taker",
    description:
      "Arshdeep Singh from Gidderbaha, Punjab, emerged as one of India's most dangerous left-arm fast bowlers in the early 2020s. He was a critical member of the Indian team that won the ICC T20 World Cup 2024 in the West Indies, where he became India's highest wicket-taker in T20 Internationals. His ability to bowl skillfully in the death overs — under extreme pressure — has made him one of the most valuable limited-overs bowlers in world cricket, and he wears his Punjabi heritage with pride.",
    tags: ["sports", "cricket", "india", "punjab", "t20", "world cup"],
  },
  {
    id: "shubman-gill",
    name: "Shubman Gill",
    field: "Sports / Cricket",
    nationality: "Indian",
    born: "2000",
    achievement: "Indian cricket vice-captain, one of the world's best young batsmen",
    description:
      "Shubman Gill from Fazilka, Punjab, has risen meteorically to become one of the brightest batting talents in world cricket, combining elegant technique with extraordinary stroke play. Named India's vice-captain while still in his early twenties, he has already scored multiple centuries in both Test and ODI cricket and was the leading run-scorer in the 2023 IPL season. Widely regarded as a future captain of the Indian team, Gill carries the hopes of a billion fans with remarkable composure for his age.",
    tags: ["sports", "cricket", "india", "punjab", "batting", "vice captain"],
  },
  {
    id: "gurbaaz-mann",
    name: "Gurbaaz Mann",
    field: "Sports / Cricket",
    nationality: "Canadian",
    born: "1999",
    achievement: "Canada cricket captain and star batsman; ICC Cricket World Cup 2024",
    description:
      "Gurbaaz Mann became a household name across the global Sikh diaspora when he captained Canada's cricket team at the ICC T20 World Cup 2024, the country's first appearance at the tournament in 19 years. An aggressive opening batsman born in Punjab and raised in Canada, he scored consistently at the highest level and helped put Canadian cricket on the international map. His journey from a Punjabi immigrant family to captaining his adopted country on the world stage is an inspirational story resonating deeply in Sikh communities across North America.",
    tags: ["sports", "cricket", "canada", "punjab", "diaspora", "captain"],
  },

  // ─── MUSIC & ARTS ─────────────────────────────────────────────────────────
  {
    id: "gurinder-chadha",
    name: "Gurinder Chadha OBE",
    field: "Film / Arts",
    nationality: "British",
    born: "1960",
    achievement: "Acclaimed film director — Bend It Like Beckham, Bride & Prejudice",
    description:
      "Gurinder Chadha is a BAFTA-winning British-Sikh film director best known for Bend It Like Beckham (2002), which grossed over $76 million worldwide and became a global cultural touchstone about immigrant identity, female empowerment, and sport. Her work consistently celebrates South Asian identity and Punjabi culture for mainstream audiences, from Bollywood-inspired Bride & Prejudice to the Partition drama Viceroy's House. Awarded an OBE for services to the British film industry, she is one of the most important female directors in British cinema history.",
    tags: ["film", "arts", "uk", "director", "punjab"],
  },
  {
    id: "lilly-singh",
    name: "Lilly Singh",
    field: "Entertainment / Media",
    nationality: "Canadian",
    born: "1988",
    achievement: "YouTube megastar, NBC late-night host, actress and author",
    description:
      "Lilly Singh (IISuperwomanII) rose from YouTube to become the first woman and first person of South Asian descent to host a major US network late-night show — NBC's A Little Late with Lilly Singh. A proud Punjabi Sikh from Scarborough, Ontario, she built one of YouTube's largest channels before transitioning to mainstream television, film, and publishing. She advocates fiercely for gender equality, mental health awareness, and diversity in media.",
    tags: ["entertainment", "youtube", "canada", "media", "punjab"],
  },
  {
    id: "diljit-dosanjh",
    name: "Diljit Dosanjh",
    field: "Music / Film",
    nationality: "Indian",
    born: "1984",
    achievement: "Bollywood superstar, Punjabi music icon, first turbaned Sikh at Coachella",
    description:
      "Diljit Dosanjh from Dosanjh Kalan, Punjab, is one of India's biggest entertainment stars, having conquered Bollywood films (Udta Punjab, Good Newwz, Amar Singh Chamkila), international music charts, and iconic global stages. In April 2024, he became the first Indian artist to headline the Coachella Valley Music and Arts Festival wearing his dastar — a moment that made global headlines and was celebrated as a watershed for Punjabi and Sikh culture. His ability to stay rooted in his Sikh identity while achieving global stardom has made him a source of immense pride across the diaspora.",
    tags: ["music", "film", "punjab", "coachella", "bollywood", "icon"],
  },
  {
    id: "gurdas-maan",
    name: "Gurdas Maan",
    field: "Music / Arts",
    nationality: "Indian",
    born: "1957",
    achievement: "Most celebrated Punjabi singer and actor — the Elvis of Punjab, 40+ year career",
    description:
      "Gurdas Maan is universally regarded as the greatest Punjabi singer-songwriter of all time, often called the 'Elvis of Punjab' for his unmatched magnetism and enduring popularity across four decades. His songs — from Ki Banu Duniya Da to Dildarian — captured the soul of Punjab and its diaspora in a way no artist has matched before or since. A deeply spiritual man who draws on Sikh philosophy and Punjabi folklore, he has sold out stadium concerts worldwide and received the Padma Shri from the Government of India, with his influence woven into the cultural identity of every Punjabi family.",
    tags: ["music", "punjab", "india", "legend", "padma shri", "folk"],
  },
  {
    id: "satinder-sartaj",
    name: "Satinder Sartaj",
    field: "Music / Arts",
    nationality: "Indian",
    born: "1984",
    achievement: "Acclaimed Punjabi poet-singer, PhD in music, known for soulful poetry-based compositions",
    description:
      "Satinder Sartaj is a uniquely intellectual figure in Punjabi music — a classically trained vocalist who holds a PhD in music from Punjabi University, Patiala, and whose compositions are deeply rooted in Sufi and Sikh philosophy. His debut album Sai reached audiences far beyond traditional Punjabi music listeners, and he became one of the first Punjabi artists to perform at the prestigious Sydney Opera House. He appeared in the critically acclaimed British-Sikh film The Black Prince (2017) as Maharaja Duleep Singh, bringing his artistry to an international cinematic audience.",
    tags: ["music", "poetry", "sufi", "punjab", "india", "academia"],
  },
  {
    id: "bhai-harbans-singh",
    name: "Bhai Harbans Singh Jagadhri Wale",
    field: "Music / Kirtan",
    nationality: "Indian",
    achievement: "Legendary Gurbani kirtan singer",
    description:
      "Bhai Harbans Singh Ji is revered as one of the greatest Gurbani kirtan singers of the 20th century, whose mellifluous voice and deeply devotional style of singing have touched Sikhs across generations and continents. His recordings of Sikh prayers, shabads, and banis have reached millions of Sikh households worldwide and are played at gurudwaras daily. He received the Padma Shri for his extraordinary contribution to Sikh sacred music and the preservation of classical kirtan tradition.",
    tags: ["music", "kirtan", "spirituality", "india", "gurbani"],
  },
  {
    id: "rabbi-shergill",
    name: "Rabbi Shergill",
    field: "Music",
    nationality: "Indian",
    born: "1974",
    achievement: "Rock-folk musician who brought Punjabi music to Indian mainstream with 'Bullah Ki Jaana'",
    description:
      "Rabbi Shergill is a Punjabi rock and folk musician whose debut single Bullah Ki Jaana (2004) — a rock adaptation of verses by the Sufi saint Bulleh Shah — became one of the most culturally significant songs in modern Indian music history, crossing linguistic, religious, and generational boundaries. Blending Sufi mysticism with contemporary rock instrumentation, he created a genre-defying sound that attracted audiences with little prior interest in Punjabi music. His work is notable for its deeply spiritual quality and intellectual depth, rooted in the same devotional tradition that Sikhism honours.",
    tags: ["music", "punjab", "rock", "sufi", "india"],
  },
  {
    id: "daler-mehndi",
    name: "Daler Mehndi",
    field: "Music",
    nationality: "Indian",
    born: "1967",
    achievement: "Global pop star; 'Tunak Tunak Tun' became one of the earliest viral music videos worldwide",
    description:
      "Daler Mehndi is India's most exuberant pop star and one of Punjabi music's greatest entertainers, famous for his high-energy Bhangra-pop style, signature turban, and powerful voice. His 1998 song Tunak Tunak Tun and its music video became one of the first truly viral internet phenomena of the pre-YouTube era, shared around the world and cementing Punjabi music's place in global pop culture. A Sikh with deep spiritual roots, Daler Mehndi has consistently used his platform to celebrate Punjabi and Sikh identity across a career spanning more than three decades.",
    tags: ["music", "punjab", "bhangra", "pop", "india", "viral"],
  },
  {
    id: "nooran-sisters",
    name: "Nooran Sisters (Jyoti & Sultana Nooran)",
    field: "Music",
    nationality: "Indian",
    achievement: "Award-winning Punjabi folk and Sufi singers; National Film Award winners",
    description:
      "Jyoti and Sultana Nooran are sisters from Jalandhar who have electrified Punjabi folk and Sufi music with their raw, powerful vocal style rooted in the traditional tappa and kafi genres inherited from their father, the legendary folk singer Ustad Gulshan Mir. Their performance of Allah Waariyan in the film Jab Tak Hai Jaan (2012) introduced them to a national audience, and they have since won the National Film Award for Best Female Playback Singer. Though from a Muslim Sufi background, they are beloved across Punjab's religious communities and have frequently performed at Sikh religious gatherings, embodying the syncretic spirit of Punjabi culture.",
    tags: ["music", "folk", "sufi", "punjab", "india", "national award"],
  },

  // ─── ENTREPRENEURSHIP & BUSINESS ─────────────────────────────────────────
  {
    id: "ajaypal-singh-banga",
    name: "Ajaypal Singh Banga",
    field: "Business / Finance",
    nationality: "American/Indian",
    born: "1959",
    achievement: "President of the World Bank; former CEO of Mastercard",
    description:
      "Ajaypal Singh Banga, known as AJ Banga, transformed Mastercard from a credit-card company into a global technology platform during his decade as CEO, growing its market cap dramatically and championing financial inclusion for the world's unbanked. In 2023, the United States nominated him to lead the World Bank — one of the world's most powerful financial institutions — and he was confirmed as its 14th President, tasked with redirecting the Bank's mission toward climate change and global poverty. A proud Sikh and graduate of IIM Ahmedabad, his ascent to the pinnacle of global finance is a landmark for the community.",
    tags: ["business", "finance", "world bank", "mastercard", "india", "usa"],
  },
  {
    id: "punit-renjen",
    name: "Punit Renjen",
    field: "Business / Consulting",
    nationality: "American/Indian",
    born: "1963",
    achievement: "Global CEO of Deloitte (2015–2022)",
    description:
      "Punit Renjen from Rohtak, Haryana, became the Global CEO of Deloitte in 2015 — leading the world's largest professional services firm, with over 300,000 employees and revenues exceeding $50 billion, through a period of transformative growth. He championed purpose-led leadership, diversity, and corporate responsibility, and under his watch Deloitte expanded significantly in emerging markets. A graduate of Willamette University in Oregon, he has been recognised by Forbes as one of the world's most influential business leaders and is an inspirational figure for Indian-American professionals globally.",
    tags: ["business", "consulting", "deloitte", "india", "usa", "ceo"],
  },
  {
    id: "bob-dhillon",
    name: "Bob Dhillon",
    field: "Business / Real Estate",
    nationality: "Canadian",
    born: "1968",
    achievement: "Canadian real estate billionaire, CEO of Mainstreet Equity Corp",
    description:
      "Bob Dhillon is one of Canada's most successful self-made entrepreneurs, building Mainstreet Equity Corp from a small real estate firm into one of Canada's largest publicly traded residential real estate companies, with thousands of units across Alberta, British Columbia, and Saskatchewan. Born in India and raised partly in Africa before emigrating to Canada, his rise from modest means to billionaire status is a quintessential immigrant success story. He is also a major philanthropist supporting Sikh and South Asian community initiatives, arts, and education across Canada.",
    tags: ["business", "real estate", "canada", "billionaire", "philanthropy"],
  },

  // ─── SOCIAL WORK & HUMANITARIANS ──────────────────────────────────────────
  {
    id: "bhai-ghanaiya",
    name: "Bhai Kanhaiya Ji (Bhai Ghanaiya)",
    field: "Humanitarianism / History",
    nationality: "Indian",
    born: "1648",
    achievement: "Forefather of the humanitarian movement; gave water to all wounded soldiers regardless of side",
    description:
      "Bhai Kanhaiya Ji — also known as Bhai Ghanaiya — served in the Sikh army during battles in the late 17th century and became famous for carrying water and offering aid to all wounded soldiers on the battlefield, regardless of which side they fought on. When enemy soldiers complained to Guru Gobind Singh Ji that Bhai Kanhaiya was tending their wounded, the Guru summoned him — and upon hearing his explanation that he saw the Guru's own face in every human being, publicly praised him and gave him medicines to accompany his water. This act of universal compassion is widely cited as a forerunner to the modern Red Cross humanitarian movement, and the Seva (service) organisation he founded continues to this day.",
    tags: ["humanitarian", "history", "seva", "compassion", "guru gobind singh"],
  },
  {
    id: "united-sikhs",
    name: "United Sikhs",
    field: "Humanitarianism / Social Work",
    nationality: "International",
    achievement: "Global Sikh humanitarian organisation providing disaster relief, legal aid, and advocacy worldwide",
    description:
      "United Sikhs is an international non-profit organisation accredited by the United Nations that has provided critical disaster relief, legal aid, and community services to people of all faiths across more than 30 countries. Founded in New York, United Sikhs was among the first organisations to provide large-scale community support after 9/11, Hurricane Katrina, and the 2004 Indian Ocean tsunami, as well as COVID-19 pandemic relief. Embodying the Sikh principle of Seva (selfless service), the organisation also fights discrimination against Sikhs and turbaned individuals through its legal wing, defending the right to wear the dastar in schools, workplaces, and the military.",
    tags: ["humanitarian", "un", "seva", "disaster relief", "advocacy", "international"],
  },
  {
    id: "bibi-jagir-kaur",
    name: "Bibi Jagir Kaur",
    field: "Politics / Social Work",
    nationality: "Indian",
    born: "1953",
    achievement: "President of the Shiromani Gurdwara Parbandhak Committee (SGPC); first woman to hold this position",
    description:
      "Bibi Jagir Kaur is one of the most powerful women in Sikh religious and political life, having served multiple terms as President of the Shiromani Gurdwara Parbandhak Committee (SGPC) — the apex body governing Sikh gurdwaras in India — making her the first woman to hold this historically significant position. As SGPC President she oversees a major religious, educational, and charitable institution that manages hundreds of gurdwaras, hospitals, and schools. She has been a significant advocate for the rights of Sikh women and a prominent voice in Punjabi politics for over three decades.",
    tags: ["politics", "social work", "sgpc", "women", "sikh institutions", "india"],
  },

  // ─── SPIRITUALITY / RELIGION ──────────────────────────────────────────────
  {
    id: "bhai-harbans-singh-longowal",
    name: "Sant Harchand Singh Longowal",
    field: "Religion / Politics",
    nationality: "Indian",
    born: "1932",
    achievement: "President of Shiromani Akali Dal; signed the Rajiv-Longowal Accord (1985) for Punjab peace",
    description:
      "Sant Harchand Singh Longowal was a deeply respected Sikh religious leader who became President of the Shiromani Akali Dal during the turbulent 1980s in Punjab. Committed to peaceful dialogue over violence, he signed the historic Rajiv Gandhi–Longowal Accord in 1985, which sought to resolve the Punjab crisis and restore democracy to the state. He was assassinated shortly after signing the accord, his life a testament to the Sikh commitment to seeking justice through righteous means rather than vengeance.",
    tags: ["religion", "politics", "india", "peace", "akali dal", "martyrdom"],
  },

  // ─── BEAUTY & ENTERTAINMENT ───────────────────────────────────────────────
  {
    id: "harnaaz-sandhu",
    name: "Harnaaz Sandhu",
    field: "Beauty / Entertainment",
    nationality: "Indian",
    born: "2000",
    achievement: "Miss Universe 2021 — ending India's 21-year wait for the crown",
    description:
      "Harnaaz Kaur Sandhu from Chandigarh, Punjab, became Miss Universe 2021 — ending India's 21-year wait for the title. A gifted actress and model who had already won Miss Diva India and Miss Max Emerging Star, she captivated the international judging panel with her poise and eloquence. She is a proud Punjabi who credits her confidence and values to her Sikh upbringing, and her victory sparked celebration across Punjab and in Sikh communities around the world.",
    tags: ["beauty", "entertainment", "india", "punjab", "miss universe"],
  },
];
