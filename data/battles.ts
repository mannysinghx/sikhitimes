export interface SikhBattle {
  id: number;
  year: number;
  name: string;
  commander: string;
  opponent: string;
  location: string;
  outcome: "victory" | "defeat" | "stalemate" | "pyrrhic";
  significance: string;
  description: string;
  casualties: string;
  category:
    | "guru-period"
    | "banda-bahadur"
    | "misl-era"
    | "sikh-empire"
    | "anglo-sikh"
    | "colonial";
}

export const SIKH_BATTLES: SikhBattle[] = [
  {
    id: 1,
    year: 1688,
    name: "Battle of Bhangani",
    commander: "Guru Gobind Singh Ji",
    opponent: "Hill Chiefs (Raja Fateh Shah of Garhwal and allies)",
    location: "Bhangani, near Paonta Sahib, Himachal Pradesh",
    outcome: "victory",
    significance:
      "Guru Gobind Singh Ji's first military engagement, proving the Sikh right to self-defence and establishing martial tradition",
    description:
      "The Battle of Bhangani in 1688 was the first major military confrontation in which Guru Gobind Singh Ji personally led Sikh forces against a coalition of jealous Hill Rajas led by Raja Fateh Shah of Garhwal. The hill chiefs, threatened by the growing influence and martial preparations of the Guru at Paonta Sahib, formed an alliance and launched an unprovoked attack. Guru Gobind Singh Ji, then only twenty-two years old, commanded his forces with remarkable tactical brilliance, turning the tide despite being outnumbered. The victory affirmed the Guru's divine right to bear arms in defence of the righteous and was later commemorated in his autobiographical composition, the Bachittar Natak.",
    casualties: "Moderate losses on both sides; several of Guru's key companions including Sango Shah and Jit Mal fell",
    category: "guru-period",
  },
  {
    id: 2,
    year: 1691,
    name: "Battle of Nadaun",
    commander: "Guru Gobind Singh Ji",
    opponent: "Alif Khan (Mughal Governor's representative) and allied Hill Chiefs",
    location: "Nadaun, on the banks of River Beas, Himachal Pradesh",
    outcome: "victory",
    significance:
      "Decisive Sikh victory that temporarily halted Mughal expansion into the Shivalik hills and strengthened Guru's alliance with local Rajas",
    description:
      "The Battle of Nadaun was fought in 1691 when Alif Khan, a general of the Mughal governor of Jammu, advanced to suppress Raja Bhim Chand and other hill chiefs who had refused to pay tribute to the Mughal Empire. Guru Gobind Singh Ji allied himself with Raja Bhim Chand — the same Raja who had previously opposed him at Bhangani — recognising the greater threat of Mughal imperialism. The combined forces routed Alif Khan's army on the banks of the Beas River, sending a clear message to the Mughal court that the hill territories would not be subdued without fierce resistance. Guru Gobind Singh Ji described this engagement in his Bachittar Natak, highlighting the courage of his soldiers and the righteousness of the cause.",
    casualties: "Mughal forces suffered significant losses; Sikh-allied casualties were comparatively light",
    category: "guru-period",
  },
  {
    id: 3,
    year: 1700,
    name: "Battle of Anandpur (First Siege)",
    commander: "Guru Gobind Singh Ji",
    opponent: "Hill Chiefs coalition backed by Mughal Emperor Aurangzeb",
    location: "Anandpur Sahib, Punjab",
    outcome: "victory",
    significance:
      "Demonstrated the defensive military capability of the Khalsa and the resilience of Anandpur as a Sikh stronghold",
    description:
      "The First Siege of Anandpur in 1700 saw a vast coalition of hill chiefs and Mughal forces surround the fortified city of Anandpur Sahib, seeking to crush the growing power of Guru Gobind Singh Ji and the newly formed Khalsa Panth. The Guru had transformed Anandpur into a sophisticated fortress complex with multiple bastions, and the Sikh defenders held their ground with extraordinary discipline and bravery. Despite overwhelming numbers arrayed against them, the Khalsa warriors repeatedly repulsed assaults, forcing the attackers to abandon the siege. This battle was part of a prolonged series of military confrontations around Anandpur that spanned several years, cementing the Khalsa's reputation as fearless soldiers of the Waheguru.",
    casualties: "Considerable losses on the attacking side; Sikh defenders suffered casualties but held the fortress",
    category: "guru-period",
  },
  {
    id: 4,
    year: 1702,
    name: "Battle of Nirmohgarh",
    commander: "Guru Gobind Singh Ji",
    opponent: "Hill Chiefs and Mughal forces under Wazir Khan",
    location: "Nirmohgarh Fort, near Ropar, Punjab",
    outcome: "victory",
    significance:
      "Reinforced Sikh control of the Shivalik foothills and demonstrated Khalsa martial prowess in open field combat",
    description:
      "The Battle of Nirmohgarh in 1702 was part of the sustained campaign by the hill chiefs and their Mughal backers to dislodge Guru Gobind Singh Ji from his strongholds in the Shivalik foothills. Mughal forces under Wazir Khan of Sirhind joined the hill rajas in a coordinated assault on the Sikh positions at Nirmohgarh. The Khalsa warriors engaged the enemy with fierce determination, their training under the Guru's direct guidance manifesting in disciplined battlefield tactics. Guru Gobind Singh Ji's victory here further frustrated Aurangzeb's plans to subdue the Punjab and reinforced the Khalsa's role as protectors of the weak against tyranny.",
    casualties: "Significant Mughal and Hill Chief losses; Sikh casualties recorded but the fort held",
    category: "guru-period",
  },
  {
    id: 5,
    year: 1702,
    name: "Battle of Basoli",
    commander: "Guru Gobind Singh Ji",
    opponent: "Raja of Basoli and allied hill chiefs",
    location: "Basoli region, Jammu",
    outcome: "victory",
    significance:
      "Extended Sikh influence into the Jammu hill region and secured northern approaches to Anandpur",
    description:
      "The Battle of Basoli in 1702 was a military engagement in the hill territories of present-day Jammu in which Guru Gobind Singh Ji's forces confronted the Raja of Basoli and his allies. The hill chiefs of this region had long been hostile to the Guru's growing authority and the spread of the Khalsa ethos, which challenged the feudal hierarchy they depended upon. Khalsa warriors demonstrated exceptional courage in the difficult mountain terrain, adapting their tactics to the challenging landscape. The battle secured the northern frontiers of the Guru's sphere of influence and served as another demonstration of the Khalsa's capability to operate across varied geographies.",
    casualties: "Moderate on both sides; the hill chiefs retreated with losses",
    category: "guru-period",
  },
  {
    id: 6,
    year: 1704,
    name: "Battle of Chamkaur",
    commander: "Guru Gobind Singh Ji",
    opponent:
      "Mughal Army under Wazir Khan (estimated one million strong)",
    location: "Chamkaur Sahib, Punjab (now Rupnagar district)",
    outcome: "pyrrhic",
    significance:
      "One of history's most extraordinary last stands; elder Sahibzade Ajit Singh and Jujhar Singh attained martyrdom; Guru ji escaped under the Panj Pyaras' command",
    description:
      "The Battle of Chamkaur on 7 Poh 1761 Bikrami (December 22, 1704) stands as one of the most heroic and heartbreaking episodes in Sikh history. Guru Gobind Singh Ji, accompanied by only forty Sikhs, took refuge in a raw-brick fortress at Chamkaur after the evacuation of Anandpur — and was pursued by an enormous Mughal army. From this tiny garhi (fortified house), small sorties of five Sikhs at a time rode out to engage the Mughal sea of soldiers. Guru ji's elder sons, Sahibzada Ajit Singh Ji (aged 18) and Sahibzada Jujhar Singh Ji (aged 14), both insisted on leading sorties and attained martyrdom on the battlefield, fighting to the last breath. Acting under the orders of the Panj Pyaras who formed a quorum of the Khalsa, the Guru himself escaped in the night to continue the mission of the Panth. This battle is remembered as a supreme act of sacrifice and courage that inspired generations of Sikhs.",
    casualties: "Sahibzada Ajit Singh and Sahibzada Jujhar Singh and many Sikhs martyred; Mughal losses very high despite their overwhelming numbers",
    category: "guru-period",
  },
  {
    id: 7,
    year: 1705,
    name: "Battle of Muktsar (Khidrana)",
    commander: "Guru Gobind Singh Ji",
    opponent: "Mughal forces under the Nawab of Sirhind",
    location: "Khidrana (now Sri Muktsar Sahib), Punjab",
    outcome: "victory",
    significance:
      "Last battle fought by Guru Gobind Singh Ji in Punjab; forty Sikhs (Chali Mukte) who had earlier abandoned the Guru returned, fought, and attained martyrdom earning liberation",
    description:
      "The Battle of Muktsar, fought at the site then known as Khidrana di Dhab in 1705, was the last major battle Guru Gobind Singh Ji fought on Punjab soil. A group of forty Sikhs, who had previously deserted the Guru at Anandpur and signed a disclaimer disowning him, returned to fight under the leadership of Mai Bhago Ji, a remarkable Sikh woman warrior who shamed them back into battle. These forty soldiers fought with extraordinary valour against the pursuing Mughal forces, sacrificing their lives one by one. When Guru Gobind Singh Ji found them dying on the battlefield, he tore up the disclaimer they had signed and blessed them as the Chali Mukte — the Forty Liberated Ones — granting them spiritual liberation through their supreme sacrifice. The site was renamed Muktsar, meaning 'Pool of Liberation.'",
    casualties: "All forty Sikh heroes (Chali Mukte) attained martyrdom; Mughal forces suffered heavy losses and retreated",
    category: "guru-period",
  },
  {
    id: 8,
    year: 1709,
    name: "Battle of Samana",
    commander: "Banda Singh Bahadur",
    opponent: "Mughal garrison and officers of Samana",
    location: "Samana, Punjab (now Patiala district)",
    outcome: "victory",
    significance:
      "Banda Singh Bahadur's first great military victory; Samana was captured and its Mughal officers, including the executioner of Guru Tegh Bahadur Ji, were punished",
    description:
      "The Battle of Samana in November 1709 marked Banda Singh Bahadur's dramatic entry onto the stage of Sikh military history as an independent commander following Guru Gobind Singh Ji's departure from this world. Banda Singh had received the Guru's blessings and hukamnamas (letters of authority) and marched on Samana, a town whose Mughal kotwal (police chief) Shashal Beg had been among the executioners of Guru Tegh Bahadur Ji in Delhi. The Sikh forces swept aside the Mughal garrison with unstoppable momentum, capturing the town and dispensing justice to those who had persecuted the Sikh Panth. The fall of Samana sent shockwaves through the Mughal administrative apparatus in Punjab and signalled the beginning of a remarkable Sikh military resurgence.",
    casualties: "Mughal garrison largely eliminated; minimal Sikh losses",
    category: "banda-bahadur",
  },
  {
    id: 9,
    year: 1710,
    name: "Battle of Sadhaura",
    commander: "Banda Singh Bahadur",
    opponent: "Mughal forces under Osman Khan",
    location: "Sadhaura, Haryana",
    outcome: "victory",
    significance:
      "Banda Singh Bahadur continued his campaign of justice by capturing Sadhaura, another centre of Mughal oppression of Sikhs",
    description:
      "The Battle of Sadhaura in early 1710 was Banda Singh Bahadur's continuation of his swift campaign across the eastern Punjab plains. Sadhaura had been the site of the martyrdom of Pir Buddhu Shah, a Muslim saint who had supported Guru Gobind Singh Ji and suffered greatly for it, and the town's Mughal authorities had a record of persecuting Sikh sympathisers. Banda Singh's forces descended on the town with speed and purpose, routing the Mughal forces under their local commander. The rapid succession of victories at Samana, Sadhaura, and other towns demonstrated Banda Singh Bahadur's strategic brilliance in using surprise, speed, and the inspiring power of righteous cause to overcome numerically superior Mughal forces.",
    casualties: "Mughal forces defeated with significant losses; Sikh forces suffered light casualties",
    category: "banda-bahadur",
  },
  {
    id: 10,
    year: 1710,
    name: "Battle of Sirhind",
    commander: "Banda Singh Bahadur",
    opponent: "Wazir Khan, Nawab of Sirhind, and his Mughal army",
    location: "Chappar Chiri, near Sirhind, Punjab",
    outcome: "victory",
    significance:
      "Greatest victory of Banda Singh Bahadur; Wazir Khan killed in battle, avenging the martyrdom of Sahibzada Zorawar Singh and Sahibzada Fateh Singh; Sirhind razed to the ground",
    description:
      "The Battle of Sirhind, fought at Chappar Chiri in May 1710, was the defining moment of Banda Singh Bahadur's campaign and one of the most emotionally charged battles in Sikh history. Wazir Khan, the Nawab of Sirhind, was the man directly responsible for ordering the bricking alive of Guru Gobind Singh Ji's younger Sahibzade — Zorawar Singh (age 9) and Fateh Singh (age 7) — at Sirhind in 1704. Banda Singh Bahadur's army, swelled by Sikhs burning with righteous fury, engaged Wazir Khan's forces near Chappar Chiri village. Despite the Nawab's professional army with artillery, the Khalsa warriors fought with such ferocity that the Mughal lines broke entirely; Wazir Khan was killed in the fighting. Sirhind, seat of so much Sikh suffering, was captured and largely demolished, and the Sikh flag flew over the land for the first time, marking the establishment of Sikh political sovereignty.",
    casualties: "Wazir Khan and many Mughal commanders killed; Sikh losses significant but victorious",
    category: "banda-bahadur",
  },
  {
    id: 11,
    year: 1746,
    name: "Chhota Ghallughara (Battle of Kahnuwan)",
    commander: "Sikh Misls (collective leadership)",
    opponent: "Yahiya Khan (Mughal Governor of Lahore) and Lakhpat Rai",
    location: "Kahnuwan forests, near River Ravi, Punjab",
    outcome: "defeat",
    significance:
      "First Sikh Holocaust (Chhota Ghallughara); 7,000–10,000 Sikhs massacred in a coordinated Mughal pogrom; demonstrated Sikh resilience in the face of near-annihilation",
    description:
      "The Chhota Ghallughara (Lesser Holocaust) of 1746 stands as one of the darkest chapters in Sikh history. Yahiya Khan, the Mughal governor of Lahore, and his Hindu minister Lakhpat Rai — driven by personal vengeance after his brother was killed in a Sikh encounter — launched a systematic campaign of extermination against the Sikh population. Lakhpat Rai vowed he would not rest until he had killed or enslaved every Sikh in Punjab, and for several terrible months he hunted the Sikhs with an army of thousands. The Sikhs, caught in the forests near Kahnuwan and the banks of the Ravi, were surrounded and massacred in their thousands; estimates of the dead range from 7,000 to 10,000. Despite the catastrophic loss of life, the Sikh spirit was not broken — survivors regrouped, and the Dal Khalsa continued its resistance, a testament to the extraordinary courage and faith of the Sikh people.",
    casualties: "7,000–10,000 Sikhs killed; thousands captured and enslaved; Mughal losses comparatively light",
    category: "misl-era",
  },
  {
    id: 12,
    year: 1748,
    name: "Battle of Manupur",
    commander: "Jassa Singh Ahluwalia and Sikh Misls",
    opponent: "Mughal forces",
    location: "Manupur, Punjab",
    outcome: "victory",
    significance:
      "Demonstrated the recovery of Sikh military strength after the Chhota Ghallughara and the growing effectiveness of the Misl confederation",
    description:
      "The Battle of Manupur in 1748 was a significant engagement in the ongoing Sikh struggle against Mughal authority in Punjab in the years following the devastation of the Chhota Ghallughara. Under the leadership of Jassa Singh Ahluwalia, who had emerged as a unifying figure of the Dal Khalsa, the Sikh Misls demonstrated their continued military capability and their determination to resist Mughal power. The battle showed that despite the horrific losses of 1746, the Sikh military organisation had recovered its fighting capacity with remarkable speed. This engagement was part of a broader pattern of Sikh assertiveness in the late Mughal period that would eventually lead to the establishment of Sikh political dominance across the Punjab.",
    casualties: "Mughal forces suffered significant losses; Sikh victory consolidated their position",
    category: "misl-era",
  },
  {
    id: 13,
    year: 1759,
    name: "Capture of Lahore",
    commander: "Jassa Singh Ahluwalia (Dal Khalsa)",
    opponent: "Mughal garrison of Lahore",
    location: "Lahore, Punjab (now Pakistan)",
    outcome: "victory",
    significance:
      "Dal Khalsa briefly captured Lahore, struck coin in the name of the Guru, and demonstrated Sikh political ambitions in the heart of Mughal Punjab",
    description:
      "In 1759, the Dal Khalsa under Jassa Singh Ahluwalia accomplished the extraordinary feat of capturing Lahore, the historic capital of Punjab, from its Mughal garrison. The Sikhs entered the city and, in a deeply symbolic act, struck coins bearing the inscription 'Akal Sahai' (God is our Helper) and the words 'Deg Tegh Fateh' — signifying Sikh political sovereignty. Although the Sikhs did not retain control of Lahore for long due to the threat from Afghan forces under Ahmad Shah Abdali, this capture demonstrated that Sikh power had grown to the point where it could challenge control of major cities. The event foreshadowed the eventual permanent Sikh capture of Lahore under Maharaja Ranjit Singh decades later.",
    casualties: "Mughal garrison overcome; Sikh forces entered relatively intact",
    category: "misl-era",
  },
  {
    id: 14,
    year: 1762,
    name: "Wadda Ghallughara (Great Sikh Holocaust)",
    commander: "Sikh Misls (collective)",
    opponent: "Ahmad Shah Abdali (Afghan Emperor) with 100,000+ troops",
    location: "Between Ludhiana and Malerkotla, Punjab",
    outcome: "defeat",
    significance:
      "Greatest catastrophe in Sikh history; 20,000–30,000 Sikhs massacred by Ahmad Shah Abdali in a single day; yet the Panth recovered and declared Abdali's victories ultimately hollow",
    description:
      "The Wadda Ghallughara (Great Holocaust) of February 5, 1762 was the single most devastating day in the history of the Sikh Panth. Ahmad Shah Abdali, on his sixth invasion of the subcontinent, surrounded a large body of Sikhs — including women, children, and elderly who were being escorted to safety — near the area between Ludhiana and Malerkotla. The Sikh fighters formed a protective ring around the non-combatants and fought desperately through the day, but the sheer scale of Abdali's army, estimated at over 100,000 soldiers, made escape nearly impossible. Estimates of those who perished that day range from 20,000 to 30,000 souls. Despite this catastrophic loss, representing perhaps half the Sikh population of the time, the extraordinary resilience of the Khalsa manifested: within months, the Sikhs had reorganised, and by the end of that same year, they had recaptured Amritsar and held a Diwali celebration in the Harimandir Sahib, declaring Abdali's genocide a failure of his true purpose.",
    casualties: "20,000–30,000 Sikhs killed in a single day; among the largest single-day massacres of any community in history",
    category: "misl-era",
  },
  {
    id: 15,
    year: 1762,
    name: "Battle of Amritsar / Kup Rahira",
    commander: "Sikh Misls (collective Dal Khalsa)",
    opponent: "Ahmad Shah Abdali",
    location: "Near Amritsar, Punjab",
    outcome: "defeat",
    significance:
      "Despite the devastating loss of life, the Sikh spirit remained unbroken; Abdali desecrated the Harimandir Sahib but Sikhs recovered and returned within months",
    description:
      "The engagements around Amritsar and Kup Rahira in 1762 were part of the same terrible wave of violence that constituted Ahmad Shah Abdali's most destructive campaign against the Sikhs. Abdali pressed onward to Amritsar after the Wadda Ghallughara, desecrating the Harimandir Sahib and filling the sacred sarovar (pool) with the remains of slaughtered cows. The Sikh Misls regrouped after the initial devastation and attempted to resist Abdali's march, engaging his forces in further battles around the Amritsar region. Though unable to prevent the immediate desecration, the Sikh communities showed extraordinary determination to reclaim their holy sites; by the end of 1762, Sikh forces had recaptured Amritsar and held their traditional Diwali gathering at the Harimandir Sahib, a powerful symbol of defiance and faith.",
    casualties: "Very heavy Sikh losses in the broader campaign; Abdali's forces also suffered significant attrition",
    category: "misl-era",
  },
  {
    id: 16,
    year: 1764,
    name: "Battle of Sirhind (Sikh Capture)",
    commander: "Ala Singh of Patiala and combined Sikh Misls",
    opponent: "Zain Khan, Mughal Governor of Sirhind",
    location: "Sirhind, Punjab",
    outcome: "victory",
    significance:
      "Sikhs permanently captured Sirhind, destroying the seat of Mughal power most associated with the martyrdom of the younger Sahibzade; the city that killed the Guru's children was erased",
    description:
      "The Sikh capture of Sirhind in 1764 was the permanent settling of accounts with the city most infamous in Sikh memory as the place where Sahibzada Zorawar Singh and Sahibzada Fateh Singh were bricked alive in 1704. The combined forces of the Sikh Misls, led in part by Ala Singh of Patiala, converged on Sirhind and defeated the Mughal governor Zain Khan's forces in battle. The city was captured and largely razed, the Mughal administrative centre dismantled, and Sikh political control established over a vast territory. This victory completed what Banda Singh Bahadur had begun in 1710 and signalled that the era of Mughal dominance in the Punjab was effectively over; within decades, the Sikh Misls would consolidate their gains under Maharaja Ranjit Singh.",
    casualties: "Mughal garrison of Sirhind defeated; Zain Khan killed in battle",
    category: "misl-era",
  },
  {
    id: 17,
    year: 1813,
    name: "Battle of Attock",
    commander: "Maharaja Ranjit Singh (commanders: Dewan Mohkam Chand)",
    opponent: "Afghan Durrani forces",
    location: "Attock Fort, Punjab (now Pakistan)",
    outcome: "victory",
    significance:
      "Sikh Empire captured the strategic Attock Fort, securing the northwestern frontier and asserting Sikh control over the key Indus River crossing",
    description:
      "The Battle of Attock in 1813 was a critical engagement in Maharaja Ranjit Singh's systematic campaign to expand the Sikh Empire across the Punjab and beyond the Indus River. Attock Fort, perched on the Indus, was one of the most strategically important fortifications in the subcontinent, controlling the gateway to the Afghan territories. Under Maharaja Ranjit Singh's overall direction, with field command by the capable general Dewan Mohkam Chand, the Sikh forces defeated the Afghan garrison and captured this formidable stronghold. The fall of Attock demonstrated the Sikh Empire's military sophistication, which had evolved to include artillery, disciplined infantry units, and cavalry operating in coordination — a far cry from the guerrilla resistance of the Misl era.",
    casualties: "Afghan garrison defeated; significant Sikh Empire losses in storming the fort",
    category: "sikh-empire",
  },
  {
    id: 18,
    year: 1818,
    name: "Battle of Multan",
    commander: "Misr Diwan Chand (under Maharaja Ranjit Singh)",
    opponent: "Muzaffar Khan, Nawab of Multan, and his forces",
    location: "Multan Fort, Punjab (now Pakistan)",
    outcome: "victory",
    significance:
      "Sikh Empire captured the ancient city of Multan after a prolonged siege, extending Sikh sovereignty over southern Punjab",
    description:
      "The Siege and Battle of Multan in 1818 was one of the most significant military achievements of the Sikh Empire's expansion under Maharaja Ranjit Singh. Multan, an ancient and wealthy city on the Chenab River, had long been a semi-independent principality and was defended by its formidable citadel under Nawab Muzaffar Khan. The Sikh forces, commanded by the gifted general Misr Diwan Chand with artillery support, conducted a methodical siege before storming the defences. Muzaffar Khan died fighting in the final assault, and Multan — with its tremendous commercial and strategic importance — was incorporated into the Sikh Empire. This victory gave Maharaja Ranjit Singh control of the key route between Punjab and Sindh.",
    casualties: "Nawab Muzaffar Khan and much of his garrison killed; Sikh forces suffered significant losses in the siege",
    category: "sikh-empire",
  },
  {
    id: 19,
    year: 1819,
    name: "Campaign and Capture of Kashmir",
    commander: "Maharaja Ranjit Singh (field commanders: Misr Diwan Chand, Prince Kharak Singh)",
    opponent: "Afghan Durrani forces in Kashmir",
    location: "Kashmir Valley",
    outcome: "victory",
    significance:
      "Sikh Empire conquered Kashmir, one of the most prized territories in Asia, ending centuries of Afghan rule and bringing the Kashmir Valley under Sikh sovereignty",
    description:
      "The Sikh conquest of Kashmir in 1819 was a masterpiece of coordinated military planning under Maharaja Ranjit Singh. Kashmir had been under Afghan Durrani rule since 1752 and was a territory of immense beauty, wealth, and strategic significance. Maharaja Ranjit Singh sent a large well-equipped force through the mountain passes and, after defeating the Afghan forces in a series of engagements, entered Srinagar to establish Sikh rule. The conquest of Kashmir was seen as a remarkable achievement given the formidable natural defences of the valley and the difficulties of supplying armies through the mountain passes. Under Sikh rule, Kashmir was administered as a province of the empire, contributing significantly to the Lahore Darbar's revenues.",
    casualties: "Afghan forces defeated and expelled; significant logistical challenges caused losses on the Sikh side",
    category: "sikh-empire",
  },
  {
    id: 20,
    year: 1823,
    name: "Battle of Naushera",
    commander: "Maharaja Ranjit Singh and Hari Singh Nalwa",
    opponent: "Afghan tribal forces (Yusufzai) under Azim Khan",
    location: "Naushera, North-West Frontier (now Khyber Pakhtunkhwa, Pakistan)",
    outcome: "victory",
    significance:
      "Decisive Sikh Empire victory over the Afghans on the northwest frontier; Azim Khan's death shortly after from grief and illness effectively ended Afghan military power in the region",
    description:
      "The Battle of Naushera on March 14, 1823 was one of the most important battles fought by the Sikh Empire on its northwestern frontier. Azim Khan, the Afghan ruler of Kabul, had assembled a vast force of Yusufzai tribesmen and regular soldiers to challenge Sikh expansion beyond the Indus and reclaim territories lost to Maharaja Ranjit Singh. Maharaja Ranjit Singh himself led the Sikh army, with the legendary Hari Singh Nalwa commanding the vanguard. The battle was fiercely contested, with the Afghans fighting with great ferocity, but the superior discipline and firepower of the Sikh forces — which now incorporated European-trained infantry and artillery — carried the day. Azim Khan was said to have died of grief and humiliation shortly after the defeat, and the battle established beyond doubt that the Sikh Empire was the dominant military power on the northwestern frontier of the subcontinent.",
    casualties: "Heavy Afghan losses including many tribal leaders; Sikh Empire suffered notable casualties including some key officers",
    category: "sikh-empire",
  },
  {
    id: 21,
    year: 1837,
    name: "Battle of Jamrud",
    commander: "Hari Singh Nalwa",
    opponent: "Afghan forces under Dost Mohammad Khan",
    location: "Jamrud Fort, Khyber Pass (now Pakistan)",
    outcome: "pyrrhic",
    significance:
      "Hari Singh Nalwa — the greatest general of the Sikh Empire — attained martyrdom while successfully defending Jamrud Fort; his death was a massive blow to the empire",
    description:
      "The Battle of Jamrud on April 30, 1837 was the last battle and martyrdom of Hari Singh Nalwa, widely regarded as the greatest military commander in Sikh history. Nalwa had built Jamrud Fort at the very mouth of the Khyber Pass to assert Sikh control over the strategic gateway to Afghanistan. Dost Mohammad Khan of Afghanistan launched a major assault on Jamrud with a large army, hoping to break through the Khyber Pass and regain lost territory. Hari Singh Nalwa, though wounded early in the fighting, continued to command his troops and refused to leave the battlefield. He reportedly continued directing the defence while mortally wounded, ensuring the fort held until Sikh reinforcements arrived under Prince Nau Nihal Singh. Jamrud Fort was successfully defended, but Hari Singh Nalwa succumbed to his wounds — his death representing perhaps the greatest individual loss suffered by the Sikh Empire.",
    casualties: "Hari Singh Nalwa and significant Sikh casualties; Afghan forces repulsed with heavy losses",
    category: "sikh-empire",
  },
  {
    id: 22,
    year: 1897,
    name: "Battle of Saragarhi",
    commander: "Havildar Ishar Singh, 36th Sikh Regiment",
    opponent: "Afghan and Orakzai tribal forces (estimated 10,000–14,000)",
    location: "Saragarhi signalling post, Tirah, North-West Frontier Province",
    outcome: "defeat",
    significance:
      "21 Sikh soldiers fought to the last man against 10,000+ attackers, refusing to surrender; recognised as one of the greatest last stands in military history; all 21 awarded the Indian Order of Merit (equivalent to the Victoria Cross)",
    description:
      "The Battle of Saragarhi on September 12, 1897 is one of the most extraordinary episodes of military courage in the annals of world history. Twenty-one soldiers of the 36th Sikh Regiment, commanded by Havildar Ishar Singh, were stationed at the small signalling post of Saragarhi between Fort Lockhart and Fort Gulistan in the North-West Frontier when an estimated 10,000 to 14,000 Orakzai and Afridi tribal warriors launched an assault. Every one of the twenty-one defenders knew that relief could not arrive in time; they chose to fight to the death rather than surrender. Havildar Ishar Singh is reported to have sent a final message to his regimental commander: 'We will fight to the last man.' The defenders inflicted estimated casualties of 180–600 dead on the attackers and held the post for several hours before being overwhelmed. All 21 soldiers were posthumously awarded the Indian Order of Merit, then the highest gallantry award available to Indian soldiers. The Sikh community commemorates Saragarhi Day on September 12 each year.",
    casualties: "All 21 Sikh defenders killed; Afghan/Orakzai attackers suffered estimated 180–600 dead and many more wounded",
    category: "colonial",
  },
  {
    id: 23,
    year: 1845,
    name: "Battle of Mudki",
    commander:
      "Lal Singh (Sikh forces); British under Sir Hugh Gough and Sir Henry Hardinge",
    opponent: "British East India Company forces",
    location: "Mudki, Punjab",
    outcome: "defeat",
    significance:
      "Opening battle of the First Anglo-Sikh War; Sikh forces fought with great bravery but were undermined by treachery from their own commanders",
    description:
      "The Battle of Mudki on December 18, 1845 was the opening major engagement of the First Anglo-Sikh War, triggered when Sikh forces crossed the Sutlej River into British-controlled territory. The Khalsa Army — widely regarded as one of the finest armies in Asia at that time, with French and Italian-trained artillery — engaged the British forces in the late afternoon. Despite fighting bravely and inflicting significant British casualties, the Sikh forces under Lal Singh failed to press their advantages, with treachery by Sikh commanders who were secretly corresponding with the British playing a decisive role. The British forces, though shaken, held the field at the end of the day. Mudki set the tragic pattern of the First Anglo-Sikh War: a brave Khalsa Army repeatedly betrayed by treasonous commanders who prioritised personal survival over the Panth.",
    casualties: "British: approximately 872 killed and wounded; Sikh: significant losses with 17 guns lost",
    category: "anglo-sikh",
  },
  {
    id: 24,
    year: 1845,
    name: "Battle of Ferozeshah",
    commander: "Lal Singh and Tej Singh (Sikh); Sir Hugh Gough (British)",
    opponent: "British East India Company forces",
    location: "Ferozeshah, Punjab",
    outcome: "defeat",
    significance:
      "Bloodiest battle of the First Anglo-Sikh War; British came extremely close to total defeat but were saved by treachery of Sikh commanders who withheld reinforcements",
    description:
      "The Battle of Ferozeshah on December 21–22, 1845 was the most intense and nearly catastrophic engagement for the British in the First Anglo-Sikh War. The Sikh entrenchments at Ferozeshah were described by British officers as among the strongest they had ever faced, and the initial British assault on the evening of December 21 was repulsed with devastating losses. Governor-General Hardinge reportedly told Gough that if the battle was lost, he would spike the guns and fight on as a private soldier — such was the desperation of the moment. On the second day, the Sikh commander Tej Singh, who commanded the reinforcing army, inexplicably ordered a withdrawal just as his forces could have completed the destruction of the British army, a act widely interpreted as deliberate treachery. Ferozeshah remains a painful chapter in Sikh history — a battle the Khalsa should have won but for the betrayal of those who were supposed to lead it.",
    casualties: "British: approximately 2,415 killed and wounded; Sikh: estimated 3,000+ casualties",
    category: "anglo-sikh",
  },
  {
    id: 25,
    year: 1846,
    name: "Battle of Sobraon",
    commander: "Tej Singh (Sikh); Sir Hugh Gough (British)",
    opponent: "British East India Company forces",
    location: "Sobraon, on River Sutlej, Punjab",
    outcome: "defeat",
    significance:
      "Decisive British victory that ended the First Anglo-Sikh War; the Khalsa Army's destruction at Sobraon led to the Treaty of Lahore and significant territorial cessions",
    description:
      "The Battle of Sobraon on February 10, 1846 was the decisive and final major engagement of the First Anglo-Sikh War. The Sikh army had established a fortified bridgehead on the Sutlej River, and the British launched a massive coordinated assault across the river. The Sikh soldiers fought with exceptional bravery in a position that should have been impregnable — observers noted that individual Sikh soldiers fought to the death rather than surrender. However, the commander Tej Singh fled across the bridge of boats before the battle was decided, and the bridge was reported to have subsequently collapsed (whether accidentally or deliberately sabotaged remains debated), drowning thousands of Sikh soldiers trying to retreat. The destruction of the Khalsa Army at Sobraon led to the Treaty of Lahore, stripping the Sikh Empire of major territories and placing a British Resident at Lahore. The bravery of the Sikh soldiers was widely acknowledged by their British opponents.",
    casualties: "Sikh: approximately 8,000–10,000 killed or drowned; British: approximately 2,383 casualties",
    category: "anglo-sikh",
  },
  {
    id: 26,
    year: 1848,
    name: "Battle of Ramnagar",
    commander: "Sher Singh Attariwala (Sikh); Lord Gough (British)",
    opponent: "British East India Company forces",
    location: "Ramnagar, on River Chenab, Punjab",
    outcome: "stalemate",
    significance:
      "Opening engagement of the Second Anglo-Sikh War; British cavalry suffered a notable repulse, beginning a war that would ultimately end Sikh independence",
    description:
      "The Battle of Ramnagar on November 22, 1848 opened the Second Anglo-Sikh War, which had been triggered by the revolt of Sikh soldiers and officers who rose against the humiliating terms of the Treaty of Lahore. Sher Singh Attariwala, one of the most capable Sikh commanders, positioned his forces behind the Chenab River in a strong defensive position. A British cavalry charge across the river was repulsed with significant losses, including the death of Brigadier Cureton. The engagement ended inconclusively, with the British unable to force a crossing and the Sikhs unwilling to advance, but it set the stage for the more decisive engagements that followed. The Second Anglo-Sikh War was in many ways a more honourable conflict for the Sikh Army, which this time fought with undivided loyalty.",
    casualties: "British cavalry suffered notable losses including Brigadier Cureton; Sikh losses were light",
    category: "anglo-sikh",
  },
  {
    id: 27,
    year: 1849,
    name: "Battle of Chillianwala",
    commander: "Sher Singh Attariwala (Sikh); Lord Gough (British)",
    opponent: "British East India Company forces",
    location: "Chillianwala, Punjab (now Pakistan)",
    outcome: "stalemate",
    significance:
      "One of the bloodiest battles ever fought by the British in India; Sikh forces inflicted devastating losses on the British and effectively fought them to a standstill in the jungle",
    description:
      "The Battle of Chillianwala on January 13, 1849 was one of the most shocking engagements of the entire Anglo-Sikh conflict and one of the most costly battles in British Indian history. Fighting took place in dense jungle, with the British infantry advancing into withering Sikh artillery and musket fire. Several British regiments broke and fled, abandoned their colours, and left their guns — scenes unprecedented in British Indian military experience. The 24th Regiment of Foot was virtually annihilated. British casualties were so severe — approximately 2,446 killed and wounded — that news of the battle caused a political crisis in Britain, with demands for Lord Gough's replacement. The Sikh army also suffered heavily but held the field, making Chillianwala a fierce and honourable contest that demonstrated the fighting quality of the Khalsa even in the Second Anglo-Sikh War.",
    casualties: "British: approximately 2,446 killed and wounded, 4 guns lost, several colours abandoned; Sikh: heavy losses but held the field",
    category: "anglo-sikh",
  },
  {
    id: 28,
    year: 1849,
    name: "Battle of Gujarat",
    commander: "Sher Singh Attariwala (Sikh); Lord Gough (British)",
    opponent: "British East India Company forces",
    location: "Gujarat, Punjab (now Pakistan)",
    outcome: "defeat",
    significance:
      "Decisive British victory that ended the Second Anglo-Sikh War and extinguished the Sikh Empire; the Punjab was annexed by the British East India Company on March 29, 1849",
    description:
      "The Battle of Gujarat on February 21, 1849 was the final battle of the Second Anglo-Sikh War and one of the most one-sided engagements of the conflict. Lord Gough, having learned from Chillianwala, deployed his superior artillery in a massive preliminary bombardment before advancing, using over 100 guns in what became known as 'the Battle of the Guns.' The Sikh forces, though fighting bravely, were overwhelmed by the British artillery superiority and broke before the subsequent infantry advance. The pursuit of the defeated Sikh army was relentless, and Sher Singh Attariwala surrendered with his remaining troops days later near Rawalpindi. The fall of Gujarat ended the independent Sikh kingdom; on March 29, 1849, the Punjab was formally annexed by the British East India Company, bringing to a close the era of Sikh political sovereignty that had been built over a century of sacrifice and struggle. The Sikh people mourned the loss of their kingdom, a wound that took generations to come to terms with.",
    casualties: "Sikh army effectively destroyed as a fighting force; British casualties relatively light compared to Chillianwala; the Sikh Empire ceased to exist",
    category: "anglo-sikh",
  },
];
