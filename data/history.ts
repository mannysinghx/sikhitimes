export interface HistoricalEvent {
  id: string;
  year: string;
  date?: string;
  title: string;
  description: string;
  category: "founding" | "battle" | "martyrdom" | "institution" | "modern" | "diaspora" | "persecution";
  significance: string;
  location?: string;
}

export const SIKH_HISTORY: HistoricalEvent[] = [
  // ─── GURU NANAK ERA (1469–1539) ───────────────────────────────────────────
  {
    id: "1469-nanak-birth",
    year: "1469",
    date: "April 15, 1469",
    title: "Birth of Guru Nanak Dev Ji — Sikhism Founded",
    description:
      "Guru Nanak Dev Ji is born in Rai Bhoi Ki Talvandi (modern-day Nankana Sahib, Pakistan) to Mehta Kalu and Mata Tripta. From childhood he displayed a profound spiritual wisdom that astonished scholars, priests, and rulers alike. His birth marks the beginning of the Sikh faith and a new spiritual movement that would transform South Asia and eventually the world. Gurdwara Janam Asthan stands today at the site of his birth and draws pilgrims from across the globe.",
    category: "founding",
    significance: "Foundation of Sikhism and the beginning of the Guru period",
    location: "Nankana Sahib, Pakistan",
  },
  {
    id: "1499-enlightenment",
    year: "1499",
    title: "Guru Nanak's Enlightenment at Sultanpur Lodhi",
    description:
      "Guru Nanak disappears into the Bein River near Sultanpur Lodhi for three days and emerges with a divine experience, proclaiming 'There is no Hindu, there is no Muslim — so whose path shall I follow? I shall follow God's path.' He receives the calling to spread the message of Ik Onkar — the Oneness of God — and begins his spiritual journeys across the known world. This moment of enlightenment is regarded as the true founding moment of the Sikh religion. The declaration cut through the religious divisions of the age and laid the groundwork for a faith rooted in universal equality and love of God.",
    category: "founding",
    significance: "The spiritual calling that launched Sikhism as a distinct faith",
    location: "Sultanpur Lodhi, Punjab",
  },
  {
    id: "1500-udasi-east",
    year: "1500",
    title: "Guru Nanak Begins His First Udasi (Journey) to the East",
    description:
      "Accompanied by his Muslim companion Bhai Mardana, Guru Nanak embarks on his first great udasi (spiritual journey), travelling east through the length of the Indian subcontinent, visiting pilgrimage sites, debating scholars, and singing kirtan in the divine praise of God. He visited places such as Haridwar, Varanasi, Gaya, Puri, and Assam, engaging Hindus, Muslims, Jains, and yogis along the way and challenging empty ritual with the message of love, equality, and honest living. Over the course of his life Guru Nanak completed four major journeys, covering thousands of miles on foot. These udasis seeded Sikh communities and sangats (congregations) across South Asia and beyond.",
    category: "founding",
    significance: "The journeys that spread Guru Nanak's message across the subcontinent and established Sikh sangats",
    location: "Indian Subcontinent",
  },
  {
    id: "1518-mecca-medina",
    year: "~1518",
    title: "Guru Nanak Travels to Mecca and Medina",
    description:
      "Guru Nanak undertakes a remarkable westward journey — crossing deserts to reach Mecca and Medina, the holiest cities of Islam — dressed as a Muslim pilgrim but carrying the universal message of God's oneness. The famous story recounts that when he was sleeping with his feet toward the Kaaba, a qazi demanded he turn them away; Guru Nanak replied that God is everywhere, so turn my feet in the direction where God is not. The encounter left a deep impression on Muslim scholars, several of whom became his followers. The journey demonstrated Guru Nanak's commitment to engaging every faith tradition from within, on its own terms.",
    category: "founding",
    significance: "Demonstrated Sikhism's universal, interfaith message at the heart of Islam's holiest sites",
    location: "Mecca and Medina, Arabia",
  },
  {
    id: "1521-kartarpur",
    year: "1521",
    title: "Guru Nanak Founds Kartarpur — First Sikh Settlement",
    description:
      "After completing his four great udasis, Guru Nanak settles at Kartarpur on the banks of the Ravi River, establishing the first permanent Sikh community. Farmers, artisans, and scholars gathered around the Guru, living together and practising three pillars: Naam Japna (meditating on God's name), Kirat Karni (honest labour), and Vand Chakna (sharing with others). Kartarpur became the model for every future Sikh institution — a place where all castes, creeds, and genders were equal. Guru Nanak spent the last 18 years of his life at Kartarpur, farming, composing sacred poetry, and nurturing the young faith.",
    category: "founding",
    significance: "The first Sikh settlement and the living model of Sikh communal life",
    location: "Kartarpur, Pakistan",
  },
  {
    id: "1521-langar",
    year: "1521",
    title: "Guru Nanak Establishes the Langar — Free Community Kitchen",
    description:
      "At Kartarpur, Guru Nanak institutionalises the Langar — a free communal kitchen where everyone, regardless of caste, religion, gender, or wealth, must sit together on the floor as equals before receiving food. The practice directly challenged the caste system by requiring Brahmins to sit alongside Dalits, kings alongside peasants. Mata Sulakhni (Guru Nanak's wife) and early Sikh women played a central role in running the Langar from its earliest days. The Langar continues to this day in every gurdwara worldwide and remains one of the most powerful expressions of Sikh equality and seva (selfless service).",
    category: "institution",
    significance: "Established the Langar as a cornerstone of Sikh practice and the world's largest ongoing act of humanitarian feeding",
    location: "Kartarpur, Pakistan",
  },

  // ─── EARLY GURU PERIOD (1539–1606) ───────────────────────────────────────
  {
    id: "1539-angad-guruship",
    year: "1539",
    title: "Guruship Passes to Guru Angad Dev Ji",
    description:
      "Before his passing in 1539, Guru Nanak passes the divine light of Guruship to Lahina Ji, renaming him Angad — meaning 'my own limb' — signifying that the Guru's spirit was seamlessly transferred. Guru Angad Dev Ji systematised and standardised the Gurmukhi script, ensuring that the Guru's sacred hymns could be written, taught, and preserved for all time. He also collected and expanded the Guru's Bani (sacred compositions) and instituted regular kirtan (devotional music) as a central Sikh practice. His 13-year Guruship consolidated the early community and ensured the faith's continuity after Guru Nanak's passing.",
    category: "founding",
    significance: "Establishes the succession of Sikh Gurus and standardises the Gurmukhi script",
    location: "Khadur Sahib, Punjab",
  },
  {
    id: "1540-gurmukhi",
    year: "~1540",
    title: "Guru Angad Dev Ji Standardises the Gurmukhi Script",
    description:
      "Guru Angad Dev Ji formalises and standardises the Gurmukhi script ('from the mouth of the Guru') so that the Guru's sacred hymns can be written down, taught to ordinary people, and preserved with accuracy. Before this standardisation, the Bani of Guru Nanak had circulated largely through oral tradition, which risked distortion over time. By giving the Panth a script of its own — distinct from Sanskrit (monopolised by Brahmin priests) and Persian (the language of Mughal courts) — Guru Angad democratised literacy and religious knowledge for all Sikhs. Gurmukhi remains the script of the Punjabi language and the Guru Granth Sahib to this day.",
    category: "institution",
    significance: "Created a distinct Sikh literary identity and democratised access to the Guru's teachings",
    location: "Khadur Sahib, Punjab",
  },
  {
    id: "1553-amar-das-reforms",
    year: "~1553",
    title: "Guru Amar Das Ji Abolishes Purdah and Sati",
    description:
      "Guru Amar Das Ji, the third Sikh Guru, launches sweeping social reforms that directly challenge the oppressive practices of the age: he forbids his Sikh followers from following purdah (the veiling of women) and the practice of sati (widows being burned alive on their husband's funeral pyres). He instituted the manji system — appointing 146 preaching districts supervised by both men and women preachers — which made Sikh women equal participants in spreading the faith. He also established a well at Goindwal (Baoli Sahib) where pilgrims of all castes could drink together, demolishing yet another pillar of caste discrimination. These reforms placed women's dignity and equality at the heart of Sikh doctrine centuries before such ideas gained wider acceptance.",
    category: "institution",
    significance: "Pioneering gender equality and social reform within the Sikh Panth",
    location: "Goindwal, Punjab",
  },
  {
    id: "1567-akbar-langar",
    year: "1567",
    title: "Emperor Akbar Eats in the Langar Before Meeting Guru Amar Das Ji",
    description:
      "Mughal Emperor Akbar visits Guru Amar Das Ji at Goindwal to pay his respects, but the Guru's attendants require that all visitors — regardless of rank — must first sit and eat in the Langar with the congregation before being granted an audience. Akbar, to his credit, complies without hesitation, sitting on the floor and eating simple food alongside peasants and artisans. Deeply moved by the practice of equality, Akbar reportedly offered land grants to the Guru, which were directed toward the community. The meeting illustrates the Sikh Panth's foundational insistence on social equality even before the most powerful ruler of the age.",
    category: "founding",
    significance: "A landmark assertion of Sikh equality before worldly power",
    location: "Goindwal, Punjab",
  },
  {
    id: "1577-amritsar",
    year: "1577",
    title: "City of Amritsar Founded by Guru Ram Das Ji",
    description:
      "The fourth Sikh Guru, Guru Ram Das Ji, obtains land and begins excavation of the sacred sarovar (pool of nectar) and founds the city of Ramdaspur, which grows into Amritsar — meaning 'Pool of Nectar of Immortality.' The city quickly becomes a major centre of commerce, pilgrimage, and Sikh spiritual life, drawing traders, craftsmen, and devotees from across the subcontinent. Guru Ram Das Ji also composed the Laavan — four verses recited during the Sikh marriage ceremony (Anand Karaj) — giving Sikhs their own unique rite of matrimony. Amritsar remains the spiritual capital of Sikhism to this day.",
    category: "institution",
    significance: "Birth of the spiritual capital of Sikhism",
    location: "Amritsar, Punjab",
  },
  {
    id: "1601-golden-temple",
    year: "1601",
    title: "Harmandir Sahib (Golden Temple) Completed by Guru Arjan Dev Ji",
    description:
      "Guru Arjan Dev Ji, the fifth Sikh Guru, completes construction of Harmandir Sahib (the Abode of God) at the centre of the sacred sarovar in Amritsar, and invites the Muslim Sufi saint Mian Mir of Lahore to lay the foundation stone — an act of profound interfaith respect. Uniquely, the temple has four doors facing all four directions, symbolising its welcome to people of every faith, caste, and direction. The temple sits lower than the surrounding landscape, a deliberate architectural message that the humble shall enter before the proud. Today the golden-clad Harmandir Sahib is one of the most visited holy sites in the world, receiving hundreds of thousands of pilgrims daily.",
    category: "institution",
    significance: "Construction of the holiest Sikh shrine and enduring symbol of the faith",
    location: "Amritsar, Punjab",
  },
  {
    id: "1604-granth",
    year: "1604",
    title: "Guru Arjan Dev Ji Compiles the Adi Granth",
    description:
      "Guru Arjan Dev Ji compiles the Adi Granth at Harmandir Sahib, creating the first authoritative scripture of the Sikh faith. The scripture includes the hymns of the first five Sikh Gurus as well as compositions by 15 Hindu and Muslim saints including Kabir, Farid, Namdev, and Ravidas — a remarkable act of religious pluralism unique in the world's scriptures. The Adi Granth is first installed at Harmandir Sahib on September 1, 1604, with Baba Buddha Ji appointed as its first custodian (Granthi). It later becomes the Guru Granth Sahib, the eternal living Guru of the Sikhs.",
    category: "institution",
    significance: "The birth of the Sikh holy scripture — a landmark of religious inclusivity",
    location: "Amritsar, Punjab",
  },

  // ─── MUGHAL PERSECUTION (1606–1699) ──────────────────────────────────────
  {
    id: "1606-arjan-martyrdom",
    year: "1606",
    date: "May 30, 1606",
    title: "Martyrdom of Guru Arjan Dev Ji — First Sikh Martyr",
    description:
      "Mughal Emperor Jahangir orders the arrest of Guru Arjan Dev Ji after jealous courtiers and Hindu priests complain that the Guru's growing influence threatens their power. The Guru is tortured for five consecutive days — made to sit on a burning iron plate while boiling sand is poured over him — and finally dies in the Ravi River at Lahore after refusing to alter a single word of the Adi Granth or convert to Islam. He is the first of the Sikh Gurus to be martyred and his sacrifice is remembered as the spark that transformed Sikhism from a purely spiritual movement into one prepared to take up arms in defence of righteousness. His son and successor, Guru Hargobind Ji, would don two swords — Miri and Piri — immediately after ascending to the Guruship.",
    category: "martyrdom",
    significance: "First Sikh martyrdom — the event that sparked the militarisation of Sikhism",
    location: "Lahore, Pakistan",
  },
  {
    id: "1606-akal-takht",
    year: "1606",
    title: "Guru Hargobind Ji Establishes the Akal Takht",
    description:
      "Immediately after succeeding to the Guruship, Guru Hargobind Ji establishes the Akal Takht ('Throne of the Timeless') directly opposite Harmandir Sahib in Amritsar, representing the Sikh concept of Miri-Piri — the inseparable union of temporal (worldly) and spiritual authority. He wears two swords, one representing spiritual sovereignty and one representing temporal sovereignty, signalling that Sikhs must be prepared to defend the faith with arms. The sixth Guru raised an army and fought the Mughals in four battles, winning three. The Akal Takht remains the supreme seat of Sikh religious authority to this day.",
    category: "institution",
    significance: "Birth of Sikh political and spiritual governance — the doctrine of Miri-Piri",
    location: "Amritsar, Punjab",
  },
  {
    id: "1619-gwalior-fort",
    year: "1619",
    title: "Guru Hargobind Ji Imprisoned at Gwalior Fort — Bandi Chhor Divas",
    description:
      "Mughal Emperor Jahangir, pressured by jealous courtiers, imprisons Guru Hargobind Ji at Gwalior Fort, where 52 Hindu princes are also being held as political prisoners. After lengthy imprisonment, Emperor Jahangir — perhaps influenced by the Sufi saint Mian Mir or by his own affection for the Guru — orders the Guru's release. Guru Hargobind refuses to leave unless all 52 princes are also freed, and the Emperor ultimately agrees; he also insists that each prince must hold on to his cloak as he walks out, so that all 52 are released simultaneously. This event is celebrated as Bandi Chhor Divas — 'Day of Liberation' — which coincides with Diwali and is observed by Sikhs worldwide as a festival of freedom.",
    category: "persecution",
    significance: "Gave rise to Bandi Chhor Divas and demonstrated the Sikh commitment to justice for all, not just their own",
    location: "Gwalior Fort, Madhya Pradesh",
  },
  {
    id: "1666-gobind-singh-birth",
    year: "1666",
    date: "December 22, 1666",
    title: "Birth of Guru Gobind Singh Ji",
    description:
      "Gobind Rai (later Guru Gobind Singh Ji) is born in Patna, Bihar, to Guru Tegh Bahadur Ji and Mata Gujri Ji. Even as a young child in Patna he showed extraordinary courage, leadership, and spiritual wisdom, organising children into a mock army and studying Sanskrit, Persian, Braj, and Punjabi simultaneously. He would go on to become the tenth and last human Guru of the Sikhs — the creator of the Khalsa, the father of four sons who all gave their lives for the faith, and a poet, warrior, and philosopher of the highest order. Gurdwara Takht Sri Patna Sahib stands today at the site of his birth.",
    category: "founding",
    significance: "Birth of the tenth Guru, creator of the Khalsa and shaper of modern Sikhism",
    location: "Patna, Bihar",
  },
  {
    id: "1675-tegh-bahadur",
    year: "1675",
    date: "November 11, 1675",
    title: "Martyrdom of Guru Tegh Bahadur Ji — Hind di Chadar",
    description:
      "Mughal Emperor Aurangzeb, pursuing a policy of forced conversion, orders the Kashmiri Pandits (Hindu priests) to convert to Islam or face death. A delegation of Kashmiri Pandits reaches the young Gobind Rai, who advises them that only Guru Tegh Bahadur can save them. The ninth Guru travels to Delhi knowing the likely consequence and is arrested, tortured for three days, and publicly beheaded at Chandni Chowk on November 11, 1675 — refusing to either convert or perform a miracle to save himself, saying he would give his head but not his faith. He is revered as 'Hind di Chadar' — the Shield of India — because he died not just for Sikhs but for the right of all people to practise their faith. Gurdwara Sis Ganj Sahib stands at the site of his martyrdom.",
    category: "martyrdom",
    significance: "Ultimate sacrifice for universal religious freedom — the catalyst for Guru Gobind Singh's creation of the Khalsa",
    location: "Chandni Chowk, Delhi",
  },

  // ─── KHALSA ERA (1699–1708) ───────────────────────────────────────────────
  {
    id: "1699-khalsa",
    year: "1699",
    date: "April 13, 1699",
    title: "Guru Gobind Singh Ji Founds the Khalsa Panth",
    description:
      "On the festival of Vaisakhi, Guru Gobind Singh Ji assembles a vast congregation at Anandpur Sahib, draws his sword, and asks who among the tens of thousands present is willing to offer their head to the Guru. One by one, five men from different castes and regions of India step forward — the Panj Pyare (Five Beloved Ones) — and are initiated as the first members of the Khalsa ('the Pure'). Guru Gobind Singh then takes Amrit (nectar stirred with a double-edged sword) from the Panj Pyare himself, bowing before them and taking initiation — one of history's most radical acts of egalitarianism by a religious leader. The Panj Kakaars (Five K's — Kesh, Kangha, Kara, Kachera, Kirpan) are instituted as the uniform of the Khalsa, and the surnames Singh (Lion, for men) and Kaur (Princess, for women) are given to all Sikhs, abolishing caste surnames forever.",
    category: "founding",
    significance: "The most transformative event in Sikh history — the creation of the Khalsa as a sovereign, saint-soldier community",
    location: "Anandpur Sahib, Punjab",
  },
  {
    id: "1704-anandpur-evacuation",
    year: "1704",
    title: "Siege and Evacuation of Anandpur Sahib",
    description:
      "After months under siege by a combined Mughal and Rajput force, Guru Gobind Singh Ji's forces evacuate Anandpur Sahib in December 1704 under a false promise of safe passage from the besieging commanders. The promise is immediately broken: the Mughal army attacks the retreating Sikhs as they cross the rain-swollen Sirsa River, and the Guru's family is separated — his mother Mata Gujri and his two youngest sons are captured by a treacherous Brahmin cook and handed over to the Nawab of Sirhind. The evacuation is one of the most painful chapters in Sikh history, leading directly to the martyrdoms of the Sahibzade.",
    category: "battle",
    significance: "Led directly to the greatest sacrifice of the Sahibzade and galvanised the Sikh Panth's will to fight",
    location: "Anandpur Sahib, Punjab",
  },
  {
    id: "1704-chamkaur",
    year: "1704",
    date: "December 22, 1704",
    title: "Battle of Chamkaur — Sahibzade's Supreme Sacrifice",
    description:
      "After the evacuation of Anandpur Sahib, Guru Gobind Singh Ji and approximately 40 exhausted Sikhs make a last stand against a massive Mughal army at the mud fortress of Chamkaur. In a battle of extraordinary bravery, the Guru's two elder sons — Sahibzada Ajit Singh (age 18) and Sahibzada Jujhar Singh (age 16) — both request their father's permission to join the battle, and both are killed fighting. The 40 Sikhs held off a force numbered in the thousands until the Guru was ordered by the Panj Pyare (his own Khalsa) to escape to fight another day. The battle of Chamkaur stands as one of history's most heroic last stands.",
    category: "battle",
    significance: "The supreme sacrifice of the elder Sahibzade and one of history's most heroic last stands",
    location: "Chamkaur Sahib, Punjab",
  },
  {
    id: "1704-younger-sahibzade",
    year: "1704",
    date: "December 27, 1704",
    title: "Sahibzada Zorawar Singh and Fateh Singh Bricked Alive at Sirhind",
    description:
      "Guru Gobind Singh Ji's two younger sons — Sahibzada Zorawar Singh (age 9) and Sahibzada Fateh Singh (age 7) — are taken prisoner along with their grandmother Mata Gujri Ji and brought before Wazir Khan, the Nawab of Sirhind. Offered their lives, wealth, and release if they would convert to Islam, both boys refuse without hesitation, reportedly saying 'We are the sons of Guru Gobind Singh and the grandsons of Guru Tegh Bahadur — we do not fear death.' The Nawab orders them to be bricked alive within a wall; they are entombed alive on December 27, 1704, and Mata Gujri Ji passes away upon hearing the news. Their martyrdom is remembered as 'Shaheedi Sahibzadyan Da Divas' and is among the most sacred events in the Sikh calendar.",
    category: "martyrdom",
    significance: "The martyrdom of the younger Sahibzade — one of the most poignant and defining events in Sikh history",
    location: "Sirhind (Fatehgarh Sahib), Punjab",
  },
  {
    id: "1708-guru-granth-eternal",
    year: "1708",
    title: "Guru Granth Sahib Declared the Eternal Living Guru",
    description:
      "Before his passing at Nanded in 1708, Guru Gobind Singh Ji performs a final ceremony in which he bows before the Guru Granth Sahib and declares it to be the eternal, living, and perpetual Guru of the Sikhs — ending the line of human Gurus. His exact words — 'Sab Sikhan ko hukam hai Guru maanio Granth' (It is the command to all Sikhs that they should accept the Granth as their Guru) — set the Sikh scripture at the centre of all religious life for all time. The Guru Granth Sahib is thereafter treated not as a book but as a living presence: installed on a throne, fanned with a chauri, and given a bedroom at night. This declaration gave Sikhism a unique, text-centred religious authority that could never be corrupted by human leaders.",
    category: "institution",
    significance: "The Guru Granth Sahib becomes the permanent, living spiritual guide for all Sikhs — a foundational act of the faith",
    location: "Nanded, Maharashtra",
  },
  {
    id: "1708-gobind-singh-passing",
    year: "1708",
    date: "October 7, 1708",
    title: "Passing of Guru Gobind Singh Ji",
    description:
      "Guru Gobind Singh Ji passes from this world at Hazur Sahib (Nanded, Maharashtra) on October 7, 1708, after being wounded by an assassin's attack and subsequently reopening the wound during physical exertion. He had led the Sikhs through their most brutal persecution, created the Khalsa, lost all four sons to martyrdom, and transformed the Sikh community into a sovereign spiritual-military order that would go on to establish an empire. His vast literary output — including the Jaap Sahib, Tav Prasad Savaiye, Chaupai Sahib, and the Zafarnama (Epistle of Victory, a letter of moral defiance sent to Emperor Aurangzeb) — remains part of Sikh daily prayer. Takht Sri Hazur Sahib in Nanded is one of the five Takhts (supreme seats of Sikh authority) and marks his resting place.",
    category: "founding",
    significance: "The passing of the last human Guru, who transformed Sikhism into the Khalsa Panth",
    location: "Nanded, Maharashtra",
  },

  // ─── BANDA SINGH BAHADUR ERA (1708–1716) ─────────────────────────────────
  {
    id: "1708-banda-sent-to-punjab",
    year: "1708",
    title: "Banda Singh Bahadur Sent to Punjab by Guru Gobind Singh Ji",
    description:
      "Shortly before his passing, Guru Gobind Singh Ji meets Madho Das Bairagi — a Hindu ascetic living near Nanded — and transforms him into a Sikh warrior, giving him the name Banda Singh Bahadur and a Hukamnama (royal decree) to the Sikh Panth in Punjab. The Guru equips Banda Singh with five arrows from his own quiver, a drum of sovereignty, and a Nishan Sahib (Sikh banner) and instructs him to go to Punjab, punish those who wronged the Sahibzade, and fight oppression. Banda Singh arrives in Punjab in 1709 and in less than a year assembles a force of thousands of peasants, low-caste Sikhs, and dispossessed farmers who had suffered under Mughal and feudal oppression. His arrival would electrify the Punjab.",
    category: "battle",
    significance: "The appointment of Banda Singh Bahadur launched the first military campaign to avenge the Sahibzade and overturn Mughal power in Punjab",
    location: "Nanded, Maharashtra / Punjab",
  },
  {
    id: "1710-wazir-khan-sirhind",
    year: "1710",
    title: "Banda Singh Bahadur Defeats and Executes Wazir Khan at Sirhind",
    description:
      "On May 12, 1710, Banda Singh Bahadur's army defeats Wazir Khan — the Nawab of Sirhind who had ordered the bricking alive of the young Sahibzade — at the Battle of Chappar Chiri near Sirhind, and Wazir Khan is killed in the fighting. Banda Singh Bahadur then captures the city of Sirhind, demolishes the wall in which the Sahibzade had been entombed, and executes the officials responsible for their deaths. The capture of Sirhind within just a few months of Banda Singh's arrival in Punjab sent shockwaves through the Mughal Empire. Fatehgarh Sahib — the sacred memorial to the younger Sahibzade — stands at Sirhind today.",
    category: "battle",
    significance: "Justice was served for the martyrdom of the Sahibzade and Mughal authority in Punjab was shattered",
    location: "Sirhind (Fatehgarh Sahib), Punjab",
  },
  {
    id: "1710-sikh-state-zamindari",
    year: "1710",
    title: "Banda Singh Bahadur Establishes First Sikh State and Abolishes Zamindari",
    description:
      "After a series of stunning military victories, Banda Singh Bahadur establishes a short-lived but historically revolutionary Sikh state in the eastern Punjab, with his capital at Lohgarh, and issues coins and a royal seal in the name of Guru Nanak and Guru Gobind Singh. Most remarkably, he abolishes the zamindari (feudal landlord) system across the territories he controls, redistributing land directly to the peasant farmers who had tilled it for generations — a radical agrarian reform centuries ahead of its time. For the first time in living memory, ordinary Punjabi peasants — many of them low-caste — owned the land they farmed. The Mughal Empire viewed this not merely as a military threat but as an existential challenge to the social order.",
    category: "institution",
    significance: "The first Sikh sovereign state and a pioneering land reform that empowered Punjab's peasantry",
    location: "Lohgarh, Punjab",
  },
  {
    id: "1716-banda-martyrdom",
    year: "1716",
    title: "Banda Singh Bahadur Captured, Tortured, and Martyred in Delhi",
    description:
      "After years of guerrilla resistance, Banda Singh Bahadur and approximately 700 Sikh fighters are besieged at Gurdas Nangal, starved into submission, and captured by Mughal forces in 1715. They are paraded through the streets of Delhi in a cruel spectacle — caged, with the heads of slain Sikhs displayed on spears — before being brought before the Mughal Emperor Farrukhsiyar. Banda Singh Bahadur is offered his life in exchange for conversion to Islam; he refuses with complete calm. He is forced to watch his infant son Ajai Singh being killed before him and then is himself tortured and executed limb by limb on June 9, 1716. Over 700 of his companions are executed over the following days, yet they reportedly met death singing praises of God.",
    category: "martyrdom",
    significance: "The martyrdom of Banda Singh Bahadur — the first Sikh ruler — whose sacrifice hardened Sikh resistance against Mughal rule",
    location: "Delhi",
  },

  // ─── SIKH MISLS & PERSECUTION ERA (1716–1799) ────────────────────────────
  {
    id: "1746-chhota-ghallughara",
    year: "1746",
    title: "Chhota Ghallughara — First Sikh Holocaust",
    description:
      "In June 1746, Yahiya Khan — the Mughal Governor of Lahore — launches a massive military assault on the Sikh Dal Khalsa as they shelter in the forests and marshes near Kahnuwan in Gurdaspur district. Between 7,000 and 10,000 Sikhs are killed in what becomes known as the Chhota Ghallughara (Small Holocaust), along with thousands more taken prisoner and executed in Lahore. The Mughal Empire declared an open season on Sikhs — a price was placed on every Sikh head — and for several years Sikhs could not even openly wear their turbans or travel the roads by day. The massacre failed in its objective: Sikh numbers and resolve only grew in response.",
    category: "persecution",
    significance: "A catastrophic persecution that tested the survival of the Sikh Panth and ultimately deepened its resolve",
    location: "Gurdaspur, Punjab",
  },
  {
    id: "1748-dal-khalsa",
    year: "1748",
    title: "Formation of the Dal Khalsa — United Sikh Army",
    description:
      "To better coordinate resistance to Mughal and Afghan invasions, the scattered Sikh fighting groups (misls) unite under a single military command called the Dal Khalsa (Army of the Khalsa), meeting at Amritsar during Vaisakhi and Diwali to take collective decisions through the Sarbat Khalsa (assembly of the entire Khalsa). The Dal Khalsa is divided into two wings — the Buddha Dal (veteran fighters) and the Taruna Dal (younger fighters) — and its decisions are made collectively in the presence of the Guru Granth Sahib through a process called Gurmata (a resolution passed in God's name). This innovative system of decentralised, consultative military-political organisation would prove remarkably resilient against far larger and more centralised forces.",
    category: "institution",
    significance: "Created the organisational framework that allowed the Sikh Panth to survive sustained persecution and ultimately conquer Punjab",
    location: "Amritsar, Punjab",
  },
  {
    id: "1762-wadda-ghallughara",
    year: "1762",
    date: "February 5, 1762",
    title: "Wadda Ghallughara — The Great Sikh Holocaust",
    description:
      "On his sixth invasion of India, Afghan ruler Ahmad Shah Abdali launches a surprise dawn attack on a column of Sikhs escorting tens of thousands of Hindu pilgrims to safety near Kup-Rahira in Ludhiana district. In a single day of slaughter, between 20,000 and 30,000 Sikhs are killed — including women, children, and elderly — in what is remembered as the Wadda Ghallughara (Great Holocaust), the worst single-day loss of life in Sikh history. Ahmad Shah Abdali then advances on Amritsar and destroys Harmandir Sahib, filling the sacred sarovar with cow blood and sand. Remarkably, within months the Sikhs had regrouped, expelled Abdali's garrisons, and begun rebuilding Harmandir Sahib.",
    category: "persecution",
    significance: "The greatest single tragedy in Sikh history — yet the Panth's survival demonstrated the Khalsa's extraordinary resilience",
    location: "Kup-Rahira, Punjab",
  },
  {
    id: "1764-amritsar-recaptured",
    year: "1764",
    title: "Sikhs Permanently Recapture Amritsar and Rebuild Harmandir Sahib",
    description:
      "By 1764, the Sikh misls have permanently expelled Afghan and Mughal forces from Amritsar and regained full control of Harmandir Sahib. The sacred sarovar is cleaned and the shrine is rebuilt with even greater magnificence than before. Simultaneously, the Sikh misl army captures Sirhind — the city associated with the martyrdom of the younger Sahibzade — and installs Sikh administration there. These victories mark the decisive turning of the tide: from hunted and persecuted minorities, the Sikhs have become the dominant military and political power in Punjab. The gold plating of Harmandir Sahib, which gave it the name 'Golden Temple,' would come during the reign of Maharaja Ranjit Singh.",
    category: "battle",
    significance: "The permanent restoration of Sikh sovereignty over their holiest shrine after decades of persecution",
    location: "Amritsar, Punjab",
  },
  {
    id: "1762-sikh-misls",
    year: "1748",
    title: "The Twelve Sikh Misls Control Punjab",
    description:
      "By the mid-18th century, twelve independent Sikh confederacies (misls) — including the Sukerchakia, Bhangi, Ramgarhia, Ahluwalia, Kanhaiya, and Phulkian misls — together control most of Punjab, each governed by a sardaar (chief) but all meeting collectively at Amritsar during Vaisakhi and Diwali under the Sarbat Khalsa system. The misl system reflects the deeply egalitarian and decentralised character of the Khalsa — each misl chief, regardless of his caste background, governed by the same moral code as the humblest Sikh soldier. Women leaders also emerged within the misl system: Sada Kaur of the Kanhaiya misl was one of the most astute political and military figures of the age. The misl era ended with Ranjit Singh's unification of Punjab under the Sikh Empire.",
    category: "institution",
    significance: "The misl era transformed Punjab into a Sikh-majority political domain and laid the foundations of the Sikh Empire",
    location: "Punjab",
  },

  // ─── SIKH EMPIRE (1799–1849) ──────────────────────────────────────────────
  {
    id: "1799-ranjit-singh",
    year: "1799",
    title: "Maharaja Ranjit Singh Captures Lahore and Founds the Sikh Empire",
    description:
      "Ranjit Singh, chief of the Sukerchakia misl and son-in-law of the formidable Sada Kaur, captures Lahore on July 7, 1799 at the age of just 19, uniting the warring Sikh misls under his leadership and founding the Sikh Empire — the last great empire to be established in South Asia before the final British consolidation. Known as the 'Lion of Punjab' (Sher-e-Punjab), Ranjit Singh was a master of diplomacy, military strategy, and statecraft who built the most powerful army in Asia outside British India — the Sikh Khalsa Army (Fauj-i-Khas), trained by French and Italian Napoleonic veterans. His court in Lahore was a dazzling cosmopolitan centre where Sikhs, Muslims, Hindus, and Europeans served as ministers, generals, and artists. He never allowed caste discrimination in his court or army.",
    category: "institution",
    significance: "The Sikh Empire — the only Sikh-ruled sovereign kingdom in history and the last independent empire in South Asia",
    location: "Lahore, Pakistan",
  },
  {
    id: "1818-hari-singh-nalwa",
    year: "1818",
    title: "Hari Singh Nalwa Extends the Sikh Empire to the Afghan Border",
    description:
      "General Hari Singh Nalwa — Commander-in-Chief of the Khalsa Army and arguably the greatest Sikh general in history — leads a series of campaigns from 1818 to 1837 that conquer Multan, Kashmir, Peshawar, and the Khyber Pass, extending the Sikh Empire to the borders of Afghanistan and making it the largest political entity in South Asia north of the Deccan. Nalwa's very name became so feared along the North-West Frontier that Afghan mothers would reportedly warn restless children to 'Sleep or Hari Singh Nalwa will come.' He built the fort of Jamrud at the mouth of the Khyber Pass in 1836, and when he was killed defending it in 1837, Nalwa's last order was to keep his death secret until reinforcements arrived — which they did, holding the fort. His campaigns secured Punjab's northern and western frontiers for the remainder of Ranjit Singh's reign.",
    category: "battle",
    significance: "Extended Sikh sovereignty to the Afghan border and established the Sikh Empire as the dominant power in northwest South Asia",
    location: "Peshawar / Khyber Pass, Pakistan",
  },
  {
    id: "1839-ranjit-singh-death",
    year: "1839",
    date: "June 27, 1839",
    title: "Death of Maharaja Ranjit Singh — Political Instability Follows",
    description:
      "Maharaja Ranjit Singh passes away on June 27, 1839 after a series of strokes, plunging the Sikh Empire into a decade of disastrous political instability. In the ten years following his death, five different rulers briefly occupied the Lahore throne as competing court factions, the Dogra ministers, and the British East India Company manoeuvred against one another. Four of the five rulers were murdered. The Khalsa Army — the empire's greatest military asset — became increasingly politicised and difficult to control, while British forces steadily built up along Punjab's borders. The 40-year reign of Ranjit Singh, during which Punjab prospered and no man was executed for any crime, was followed by a decade that ended in conquest.",
    category: "modern",
    significance: "The end of the Ranjit Singh era and the beginning of the political collapse that led to British annexation",
    location: "Lahore, Pakistan",
  },
  {
    id: "1845-first-anglo-sikh-war",
    year: "1845",
    title: "First Anglo-Sikh War — British Treachery Weakens the Empire",
    description:
      "The First Anglo-Sikh War (December 1845 – March 1846) is fought between the Sikh Khalsa Army and the British East India Company after British forces cross the Sutlej River into Sikh territory. Despite winning several individual engagements and fighting with extraordinary bravery, the Khalsa Army is ultimately defeated — historians have documented strong evidence that key Sikh commanders (Lal Singh and Tej Singh) were secretly in contact with British officials and deliberately sabotaged the Sikh war effort. The Treaty of Lahore (March 1846) forces the Sikh Empire to cede territories, pay an indemnity of 1.5 crore rupees, and accept a British Resident at Lahore — making the empire a virtual protectorate. Kashmir is sold to Gulab Singh (a Dogra traitor) for 75 lakh rupees.",
    category: "battle",
    significance: "Critically weakened the Sikh Empire through battlefield treachery and unjust treaties, setting the stage for final annexation",
    location: "Punjab",
  },
  {
    id: "1848-second-anglo-sikh-war",
    year: "1848",
    title: "Second Anglo-Sikh War and Annexation of Punjab",
    description:
      "When a Sikh uprising breaks out against British interference in Multan and the broader Punjab in April 1848, the East India Company uses it as a pretext for a final war of conquest. The Second Anglo-Sikh War (1848–1849) includes the fierce battles of Ramnagar, Chilianwala (where the British suffered severe casualties despite ultimately winning), and Gujrat. On February 21, 1849, the Sikh Army surrenders at Rawalpindi, and on March 29, 1849, Governor-General Lord Dalhousie formally announces the annexation of the Punjab to British India. The 10-year-old Maharaja Duleep Singh is deposed, separated from his mother, and sent to England — where he would be baptised as a Christian and later struggle for the rest of his life to reclaim his heritage.",
    category: "battle",
    significance: "The end of the Sikh Empire — after which Sikhs would not hold sovereign political power over Punjab for nearly a century",
    location: "Punjab",
  },
  {
    id: "1849-koh-i-noor",
    year: "1849",
    title: "Koh-i-Noor Diamond Seized by the British",
    description:
      "Under the terms of the Last Treaty of Lahore (1849), the British East India Company seizes the Koh-i-Noor ('Mountain of Light') diamond — one of the largest cut diamonds in the world and one of the Sikh Empire's most prized treasures — from the deposed 10-year-old Maharaja Duleep Singh and presents it to Queen Victoria. The Koh-i-Noor had changed hands through conquest many times before Ranjit Singh acquired it, and its seizure by the British was met with outrage. Now set in the Queen Mother's Crown and kept in the Tower of London, the Koh-i-Noor has been the subject of ongoing campaigns for restitution by India, Pakistan, and the Sikh community. Maharaja Duleep Singh spent much of his adult life petitioning for its return, in vain.",
    category: "modern",
    significance: "Symbol of the dispossession of Sikh sovereignty and a continuing focus of calls for colonial restitution",
    location: "Lahore, Pakistan / Tower of London, UK",
  },

  // ─── COLONIAL ERA (1849–1947) ─────────────────────────────────────────────
  {
    id: "1873-singh-sabha",
    year: "1873",
    title: "Singh Sabha Movement Founded — Sikh Religious Revival",
    description:
      "The Singh Sabha Movement is founded in Amritsar in 1873 in response to fears that Sikhism was being eroded by Christian missionary activity, the influence of the Hindu Arya Samaj movement, and general social decay under colonial rule. Scholar-reformers like Bhai Vir Singh, Bhai Kahn Singh Nabha, and Professor Gurmukh Singh launched campaigns to revive Gurmukhi literacy, establish Sikh schools and colleges, publish Sikh literature, clarify Sikh doctrine and identity, and reform corrupt practices that had crept into gurdwaras. The Singh Sabha produced the landmark text 'Hum Hindu Nahin' (We Are Not Hindus) and established Khalsa College in Amritsar (1892), laying the intellectual foundation for 20th-century Sikh identity and political consciousness.",
    category: "institution",
    significance: "A renaissance that revived Sikh religious consciousness and established the intellectual basis for modern Sikh identity",
    location: "Amritsar, Punjab",
  },
  {
    id: "1909-anand-marriage-act",
    year: "1909",
    title: "Anand Marriage Act Passed — Sikh Marriage Ceremony Legally Recognised",
    description:
      "After decades of lobbying by the Singh Sabha Movement, the British Indian government passes the Anand Marriage Act in 1909, legally recognising the Sikh Anand Karaj (ceremony of bliss) as a distinct and valid form of marriage — separate from the Hindu Marriage Act. Before this Act, Sikhs had been legally required to marry under Hindu rites, undermining their distinct religious identity. The Anand Karaj — in which the couple circles the Guru Granth Sahib four times while the Laavan of Guru Ram Das Ji are recited — is a ceremony rooted in Sikh scripture and emphasises spiritual union rather than contractual obligation. The Act was a landmark legal recognition of Sikh distinctiveness within the colonial framework.",
    category: "institution",
    significance: "Legal recognition of Sikh religious identity and the Anand Karaj marriage ceremony",
    location: "India (British colonial legislation)",
  },
  {
    id: "1919-jallianwala",
    year: "1919",
    date: "April 13, 1919",
    title: "Jallianwala Bagh Massacre — Vaisakhi Bloodbath",
    description:
      "On the sacred festival of Vaisakhi — the same date as the founding of the Khalsa in 1699 — British General Reginald Dyer orders his troops to open fire without warning on a peaceful, unarmed gathering of tens of thousands of people inside the walled garden of Jallianwala Bagh in Amritsar. Firing continues for ten minutes until ammunition is exhausted; official British figures admit to 379 dead and over 1,000 wounded, while Indian estimates place the death toll far higher. Many died jumping into a central well to escape the bullets. Dyer later told a British parliamentary inquiry that he had no regrets and would have used more force if he had been able to bring artillery. The massacre — and the British government's initial reluctance to fully condemn it — transformed moderate Indian opinion and accelerated the independence movement, with Rabindranath Tagore renouncing his British knighthood in protest.",
    category: "martyrdom",
    significance: "The massacre that galvanised the Indian independence movement and irrevocably damaged British moral authority in India",
    location: "Amritsar, Punjab",
  },
  {
    id: "1920-sgpc",
    year: "1920",
    title: "SGPC Formed — Sikh Community Takes Control of Their Shrines",
    description:
      "The Shiromani Gurdwara Parbandhak Committee (SGPC) is established on November 15, 1920, as the apex body for managing Sikh gurdwaras and religious affairs, replacing the corrupt British-era mahant system in which non-Sikh hereditary custodians had exploited the shrines for personal profit. The SGPC's formation is the direct institutional fruit of the Akali Movement and represents the Sikh community asserting democratic self-governance over their most sacred institutions. The SGPC has since become one of the most powerful religious bodies in South Asia, managing hundreds of historic gurdwaras, running hospitals and schools, and publishing the Guru Granth Sahib. It is often described as the 'Sikh Parliament.'",
    category: "institution",
    significance: "Democratic Sikh self-governance over their holy shrines — a foundational institution of modern Sikh political life",
    location: "Amritsar, Punjab",
  },
  {
    id: "1920-akali-movement",
    year: "1920",
    title: "Akali Movement — Gurdwara Reform Movement",
    description:
      "The Akali Movement (1920–1925) is a mass non-violent campaign by the Sikh Panth to wrest control of their historic gurdwaras from corrupt mahants (hereditary custodians), many of whom had been installed by the British and had turned the holy shrines into sites of moral and financial corruption. Thousands of Akali (meaning 'of the Timeless God') volunteers — called Jathas — courted arrest by peacefully marching to gurdwaras and offering themselves for imprisonment; the Guru ka Bagh agitation (1922) saw hundreds of Akalis beaten by police with lathis (batons) while refusing to retaliate — their non-violence impressing even their opponents. The movement was ultimately successful, resulting in the Sikh Gurdwaras Act of 1925.",
    category: "modern",
    significance: "A landmark mass non-violent campaign that restored Sikh community control over their most sacred institutions",
    location: "Punjab",
  },
  {
    id: "1925-gurdwara-act",
    year: "1925",
    title: "Sikh Gurdwaras Act — Legal Control of Shrines Established",
    description:
      "The British Indian government passes the Sikh Gurdwaras Act in 1925, legally transferring control of over 200 historic Sikh gurdwaras to the Shiromani Gurdwara Parbandhak Committee (SGPC) and definitively ending the mahant system. The Act also established the Shiromani Akali Dal as the recognised political party of the Sikh Panth. For the first time in decades, the sacred shrines of Sikhism — including Harmandir Sahib, Takht Sri Kesgarh Sahib, and Hazur Sahib — were under the management of elected Sikh representatives rather than corrupt individuals imposed by or complicit with colonial authority. The Act is regarded as one of the greatest legislative victories of the Sikh community.",
    category: "institution",
    significance: "A landmark legal victory giving the Sikh community permanent democratic control over their holy shrines",
    location: "Punjab (British India)",
  },
  {
    id: "1931-bhagat-singh",
    year: "1931",
    date: "March 23, 1931",
    title: "Bhagat Singh — Sikh Revolutionary Executed by British",
    description:
      "Sardar Bhagat Singh, a young Sikh revolutionary and committed socialist from Lyallpur (Faisalabad), is hanged by the British colonial government on March 23, 1931, alongside Rajguru and Sukhdev, for his role in resisting colonial oppression — including the killing of British police officer John Saunders in retaliation for the death of Lala Lajpat Rai, and a symbolic (non-lethal) bomb explosion in the Central Legislative Assembly in Delhi in 1929. Only 23 years old at his execution, Bhagat Singh was the most popular revolutionary in British India — his fame crossing all religious and regional boundaries. He was an atheist who drew inspiration from both the Sikh martyr tradition and international socialist thought. His last words were reported to be: 'Inquilab Zindabad!' (Long live the revolution!)",
    category: "martyrdom",
    significance: "The most iconic martyr of the Indian independence struggle — whose execution galvanised anti-British sentiment across India",
    location: "Lahore, Pakistan",
  },

  // ─── PARTITION & MODERN ERA (1947–present) ───────────────────────────────
  {
    id: "1947-partition",
    year: "1947",
    title: "Partition of India — Punjab Divided, Millions of Sikhs Displaced",
    description:
      "The British partition of India in August 1947 divides Punjab along the Radcliffe Line, separating the Sikh community's most sacred sites — including Nankana Sahib (birthplace of Guru Nanak), Panja Sahib, Kartarpur, and the seat of Sikh temporal authority at Lahore — from the new Indian state. Approximately 2.5 million Sikhs are forced to abandon their homes, farms, and businesses in West Punjab (now Pakistan) and migrate east, while millions of Muslims move in the opposite direction. The Punjab Partition is one of history's largest and most violent forced migrations: an estimated 200,000–500,000 people are killed in communal violence and hundreds of thousands of women are abducted. Sikh refugee families lost ancestral lands, businesses, and community structures built over generations and had to rebuild entirely from nothing in Indian Punjab.",
    category: "modern",
    significance: "The greatest displacement of the Sikh community — which nevertheless rebuilt Punjab into India's most prosperous state",
    location: "Punjab, India and Pakistan",
  },
  {
    id: "1966-punjabi-suba",
    year: "1966",
    title: "Punjabi Suba Created — Punjab State with Sikh Majority",
    description:
      "After nearly two decades of the Punjabi Suba Movement led by the Shiromani Akali Dal, the Indian government reorganises the states of Punjab and Haryana on November 1, 1966, creating a Punjabi-speaking, Sikh-majority state of Punjab with Chandigarh as its capital (shared with the new state of Haryana). The movement — which included peaceful marches, hunger strikes, and mass arrests — was rooted in the principle that the Punjabi-speaking Sikh community deserved a state where they constituted a majority, as other linguistic communities in India already had. The reorganisation was incomplete in important respects: Chandigarh was designated a Union Territory (rather than given to Punjab outright), and the Sikh Akalis continued to press for fuller implementation of the States Reorganisation Commission's recommendations.",
    category: "modern",
    significance: "Creation of a Sikh-majority Punjab state within the Indian Union — a milestone in Sikh political self-determination",
    location: "Punjab, India",
  },
  {
    id: "1966-green-revolution",
    year: "1966",
    title: "Green Revolution — Punjab Becomes India's Breadbasket",
    description:
      "Through the 1960s and 1970s, Punjab — home to some of India's most enterprising farmers, largely Sikh Jat families — leads the Green Revolution, adopting high-yielding varieties of wheat and rice, modern irrigation techniques, and mechanised farming on a massive scale. By the 1970s, Punjab was producing approximately 70% of India's foodgrain surplus and had become the most prosperous state in the country by per-capita income, transforming from a land of refugees and displaced farmers in 1947 to the engine of India's food security within a generation. This agricultural transformation was built on the famous Punjabi work ethic — 'Utte Rabb, Hettey Haath' (God above, hands below) — and resulted in dramatic improvements in living standards across the state. The Green Revolution later created environmental challenges including depleting water tables that Punjab continues to grapple with.",
    category: "modern",
    significance: "Punjab's Sikh farmers rebuilt the state after Partition and turned it into India's agricultural powerhouse",
    location: "Punjab, India",
  },
  {
    id: "1984-golden-temple",
    year: "1984",
    date: "June 3–8, 1984",
    title: "Operation Blue Star — Indian Army Storms the Golden Temple",
    description:
      "Indian Prime Minister Indira Gandhi orders the Indian Army to storm Harmandir Sahib (Golden Temple) in Amritsar from June 3–8, 1984, to dislodge Sikh militant leader Jarnail Singh Bhindranwale and his armed followers who had fortified the Akal Takht. The assault — launched on the anniversary of the martyrdom of Guru Arjan Dev Ji — results in massive casualties and the near-total destruction of the historic Akal Takht; military estimates acknowledge several hundred dead, while other estimates place the toll in the thousands, including many unarmed pilgrims who were present for the sacred anniversary. The operation — which many Sikhs regard as a sacrilege equivalent to an assault on the Vatican — profoundly wounded Sikh sentiment worldwide and triggered a crisis of trust between the Sikh community and the Indian state. Two months later, Prime Minister Indira Gandhi was assassinated by her two Sikh bodyguards.",
    category: "modern",
    significance: "A defining and deeply painful moment in modern Sikh history that permanently altered the relationship between Sikhs and the Indian state",
    location: "Amritsar, Punjab",
  },
  {
    id: "1984-anti-sikh-riots",
    year: "1984",
    date: "November 1–4, 1984",
    title: "1984 Anti-Sikh Pogroms — Thousands Killed Across India",
    description:
      "Following the assassination of Prime Minister Indira Gandhi by her Sikh bodyguards on October 31, 1984, organised mobs — widely documented to have been led by Congress Party leaders and members — descend upon Sikh neighbourhoods across India, particularly in Delhi, Kanpur, and Bokaro, killing Sikh men and boys, burning gurdwaras, and looting Sikh homes and businesses over four days of violence. Official death tolls acknowledge over 3,000 Sikhs killed in Delhi alone; survivor testimony and independent investigations suggest the true toll may be significantly higher. The Indian government's failure to adequately prosecute the perpetrators for over three decades has been a continuing source of grief and anger for the Sikh diaspora. The events of 1984 — Operation Blue Star in June and the November pogroms together — remain the most traumatic chapter in post-independence Sikh history.",
    category: "persecution",
    significance: "The worst violence against Sikhs since Partition — a trauma that reshaped Sikh identity and galvanised the global diaspora",
    location: "Delhi and multiple cities across India",
  },
  {
    id: "2019-kartarpur-corridor",
    year: "2019",
    date: "November 9, 2019",
    title: "Kartarpur Corridor Opened — Visa-Free Pilgrimage to Guru Nanak's Final Resting Place",
    description:
      "On November 9, 2019 — the 550th birth anniversary of Guru Nanak Dev Ji — the governments of India and Pakistan jointly inaugurate the Kartarpur Corridor, a 4.7-kilometre paved road connecting the Indian side of the border to Kartarpur Sahib (Gurdwara Darbar Sahib) in Pakistan — the very place where Guru Nanak spent the last 18 years of his life and where he passed away in 1539. For the first time since Partition in 1947, Sikh pilgrims can travel to Kartarpur Sahib on a visa-free basis with just a valid passport. The opening of the corridor was a rare moment of diplomatic cooperation between India and Pakistan and was met with overwhelming emotion by Sikh pilgrims who had only been able to view the shrine from the Indian side through binoculars for generations.",
    category: "modern",
    significance: "Restored access for Sikhs worldwide to Guru Nanak's most sacred site after 72 years of separation",
    location: "Kartarpur, Pakistan / Dera Baba Nanak, India",
  },
  {
    id: "2000s-diaspora",
    year: "2000s",
    title: "Global Sikh Diaspora Flourishes",
    description:
      "The Sikh diaspora — numbering over 25 million people worldwide with the largest concentrations in Canada, the United Kingdom, the United States, and Australia — has become one of the most successful and visible diaspora communities in the world, producing prime ministers (Manmohan Singh in India, Jagmeet Singh in Canadian federal politics), cabinet ministers, military generals, business leaders, academics, and artists. Sikh politicians have held high office in multiple countries: the UK's first Sikh MP Piara Singh Khabra was elected in 1992, Canada elected its first Sikh Prime Minister when Justin Trudeau's cabinet included four Sikh ministers, and Nikki Haley and Vivek Ramaswamy — both of Indian Sikh descent — ran major US political campaigns. Langar halls in gurdwaras worldwide distributed millions of meals during the COVID-19 pandemic, demonstrating the living relevance of the Sikh tradition of seva.",
    category: "diaspora",
    significance: "Sikhs have become a global force for good — excelling in every field while maintaining their faith and culture worldwide",
    location: "Worldwide",
  },
  {
    id: "2022-sikh-representation",
    year: "2022",
    title: "Historic Sikh Political Representation Worldwide",
    description:
      "In 2022, Rishi Sunak became Prime Minister of the United Kingdom — a grandson of Punjabi immigrants and a practising Hindu of Sikh cultural heritage — while Canada's Jagmeet Singh led the federal NDP as the first non-white major party leader in Canadian history and the first person of Sikh faith to lead a major Western political party. In the United States, Sikhs continued to serve in Congress, the judiciary, and the military at historically high levels. In India, Hardeep Singh Puri served as a Union Cabinet minister. These political milestones reflect the broader success of the Sikh diaspora in entering and shaping the public life of their adopted countries — combining fierce professional ambition with a commitment to Sikh values of equality, justice, and service.",
    category: "diaspora",
    significance: "Sikhs reaching the highest levels of political leadership across the democratic world",
    location: "United Kingdom, Canada, United States",
  },
];
