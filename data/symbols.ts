export interface SikhSymbol {
  id: string;
  name: string;
  nameGurmukhi: string;
  symbol?: string;
  type: "emblem" | "article-of-faith" | "flag" | "greeting" | "concept";
  description: string;
  significance: string;
  usedSince: string;
}

export const SIKH_SYMBOLS: SikhSymbol[] = [
  // ─── THE EMBLEM ────────────────────────────────────────────────────────────

  {
    id: "ik-onkar",
    name: "Ik Onkar",
    nameGurmukhi: "ੴ",
    symbol: "ੴ",
    type: "emblem",
    description:
      "Ik Onkar is the opening phrase of the Mool Mantar, the foundational verse of the Guru Granth Sahib, and the most sacred symbol in Sikhism. Composed of the numeral '1' (Ik) and the Gurmukhi word 'Onkar' (representing God), it asserts unequivocally that there is only One God — transcendent, formless, and beyond all human divisions of religion, caste, or creed. Guru Nanak Dev Ji introduced this symbol in 1499 after his divine revelation, making it the cornerstone of the Sikh worldview and a constant reminder that all creation flows from and returns to the One. The symbol appears at the very beginning of the Guru Granth Sahib and is displayed prominently in every Gurdwara as the supreme statement of Sikh theology.",
    significance:
      "The fundamental declaration of Sikh monotheism — that God is One, universal, and beyond all division.",
    usedSince: "1499",
  },
  {
    id: "khanda",
    name: "Khanda",
    nameGurmukhi: "ਖੰਡਾ",
    symbol: "🔱",
    type: "emblem",
    description:
      "The Khanda is the primary emblem of the Sikh faith and consists of three distinct elements, each carrying profound spiritual meaning. At the center is the double-edged sword (also called Khanda) representing the power of God to separate truth from falsehood; encircling it is the Chakkar, a circular throwing weapon symbolizing the eternal, infinite nature of God who has no beginning and no end; flanking both sides are two curved swords (Kirpans) representing Miri and Piri — temporal and spiritual sovereignty. Adopted as the official Sikh symbol by the Shiromani Gurdwara Parbandhak Committee (SGPC) in the twentieth century, the Khanda appears on the Nishan Sahib, Sikh currency, and most Sikh institutions worldwide. Together the three elements teach that a Sikh must balance spiritual devotion with courageous engagement in the world.",
    significance:
      "The official emblem of the Sikh faith, embodying the unity of spiritual and worldly power under God.",
    usedSince: "17th century (formalized 20th century)",
  },
  {
    id: "nishan-sahib",
    name: "Nishan Sahib",
    nameGurmukhi: "ਨਿਸ਼ਾਨ ਸਾਹਿਬ",
    symbol: "🚩",
    type: "flag",
    description:
      "The Nishan Sahib is the triangular flag flown at every Gurdwara, serving as a visible beacon that a house of worship, langar, and sanctuary is available to all people regardless of faith, caste, or background. Traditionally saffron (kesri) or blue in color depending on the tradition, it bears the Khanda emblem at its center and is mounted on a tall flagpole (flagmast) called a flagstaff. The flag was established by Guru Hargobind Ji, the sixth Sikh Guru, who raised two Nishan Sahibs at the Akal Takht to represent Miri (temporal power) and Piri (spiritual power). The daily ritual of changing the flag's fabric reminds the congregation of active devotion and the eternal continuity of the Sikh institution.",
    significance:
      "A visible symbol of sanctuary, welcome, and Sikh sovereignty, marking every Gurdwara as a place open to all humanity.",
    usedSince: "1606",
  },

  // ─── PANJ KAKAARS (5 Articles of Faith) ───────────────────────────────────

  {
    id: "kesh",
    name: "Kesh",
    nameGurmukhi: "ਕੇਸ਼",
    type: "article-of-faith",
    description:
      "Kesh refers to the uncut hair that Sikhs are required to maintain as one of the five mandatory articles of faith initiated by Guru Gobind Singh Ji at the Vaisakhi of 1699. Keeping hair in its natural state is an act of accepting God's creation as perfect and submitting one's ego to the divine will, rejecting the vanity and artificiality of altering what God has given. Sikh men and women typically cover their Kesh with a dastar (turban) or head covering as a mark of dignity, responsibility, and sovereignty. The Kesh is the most visible of the Panj Kakaars and has historically been the source of tremendous sacrifice — thousands of Sikhs have died rather than cut their hair under persecution.",
    significance:
      "Acceptance of God's creation in its natural form and the most visible mark of a committed Sikh identity.",
    usedSince: "1699",
  },
  {
    id: "kara",
    name: "Kara",
    nameGurmukhi: "ਕੜਾ",
    symbol: "⭕",
    type: "article-of-faith",
    description:
      "The Kara is a steel (or iron) bangle worn on the right wrist by all initiated Sikhs as one of the Panj Kakaars prescribed by Guru Gobind Singh Ji. The circular form of the Kara has no beginning and no end, symbolizing the eternal, infinite nature of God and the unbreakable bond between the Sikh and the Divine. Made of steel rather than gold or silver, it emphasizes humility and equality — it is not an ornament of status but a constant reminder of God's presence and the Sikh's commitment to righteousness. Worn on the dominant hand, the Kara is meant to restrain the wearer from committing sinful acts: before any action, the cool touch of the steel reminds them of their duty.",
    significance:
      "An unbreakable circle representing God's infinity and the Sikh's eternal bond to divine righteousness.",
    usedSince: "1699",
  },
  {
    id: "kanga",
    name: "Kanga",
    nameGurmukhi: "ਕੰਘਾ",
    type: "article-of-faith",
    description:
      "The Kanga is a small wooden comb that initiated Sikhs keep in their hair at all times, typically tucked under the dastar. Prescribed as one of the Panj Kakaars by Guru Gobind Singh Ji, the Kanga is used twice daily to comb and care for the Kesh, representing the Sikh value of cleanliness, discipline, and order in both physical and spiritual life. The act of combing the hair is a spiritual practice — just as the comb removes tangles from hair, the Sikh removes the tangles of ego, pride, and impurity from the mind through daily prayer and meditation. The Kanga is a rejection of the ascetic tradition of matted, unkempt hair, asserting that holiness does not require physical neglect.",
    significance:
      "A symbol of spiritual discipline, cleanliness, and the active engagement of a Sikh in both worldly and divine life.",
    usedSince: "1699",
  },
  {
    id: "kachera",
    name: "Kachera",
    nameGurmukhi: "ਕਛਹਿਰਾ",
    type: "article-of-faith",
    description:
      "The Kachera is a specially designed cotton undergarment (shorts) worn by initiated Sikhs as one of the Panj Kakaars. Introduced by Guru Gobind Singh Ji, it replaced the dhoti that was commonly worn and could be loosened quickly, making it a garment of both modesty and practicality — a Sikh soldier needed to be battle-ready at all times. Spiritually, the Kachera represents sexual restraint, marital fidelity, and the disciplined control of base desires, recognizing that moral purity is as essential as physical courage in the life of a Khalsa Sikh. The garment is a constant reminder that a Sikh's body is a temple given by God and must be respected and kept pure.",
    significance:
      "A symbol of modesty, self-restraint, and readiness — embodying the moral and martial discipline of the Khalsa.",
    usedSince: "1699",
  },
  {
    id: "kirpan",
    name: "Kirpan",
    nameGurmukhi: "ਕਿਰਪਾਨ",
    symbol: "⚔️",
    type: "article-of-faith",
    description:
      "The Kirpan is a ceremonial curved sword and the most outwardly symbolic of the five Panj Kakaars. The word 'Kirpan' derives from two Punjabi words — 'kirpa' (mercy/grace) and 'aan' (honour/self-respect) — encoding its dual purpose: to show mercy to the weak while maintaining one's own honour and dignity. Prescribed by Guru Gobind Singh Ji, the Kirpan is not a weapon of aggression but a symbol of the duty to protect the innocent, defend the persecuted, and stand against injustice wherever it is encountered. Sikhs who carry the Kirpan have the right to do so in many countries by law, and it has been the subject of landmark legal cases affirming religious freedom worldwide.",
    significance:
      "A symbol of justice, courage, and the sacred duty to protect all people from tyranny and oppression.",
    usedSince: "1699",
  },

  // ─── GREETINGS & CONCEPTS ──────────────────────────────────────────────────

  {
    id: "waheguru-ji-ka-khalsa",
    name: "Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh",
    nameGurmukhi: "ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖ਼ਾਲਸਾ, ਵਾਹਿਗੁਰੂ ਜੀ ਕੀ ਫ਼ਤਿਹ",
    type: "greeting",
    description:
      "This is the official Sikh salutation established by Guru Gobind Singh Ji when he created the Khalsa Panth in 1699. The phrase means 'The Khalsa belongs to Waheguru (God), and victory belongs to Waheguru,' asserting from the outset that any triumph a Sikh achieves is not their own but God's. It is exchanged between Sikhs as both a greeting and a declaration of faith, replacing the ego-driven idea that human beings are the authors of their own success. The salutation is called out in Gurdwaras after Ardas (prayer) and at Sikh gatherings, ceremonies, and any auspicious occasion, binding the Sikh community in a shared acknowledgment of divine sovereignty.",
    significance:
      "The formal declaration of Sikh identity and humility before God, affirming that all belongs to the divine.",
    usedSince: "1699",
  },
  {
    id: "sat-sri-akal",
    name: "Sat Sri Akal",
    nameGurmukhi: "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ",
    type: "greeting",
    description:
      "Sat Sri Akal is one of the most widely recognized Sikh greetings, particularly popular in Punjab and among Sikh communities worldwide. The phrase translates as 'God (Akal — the Timeless One) is the Eternal Truth,' drawing on two core Sikh concepts: 'Sat' (truth) and 'Akal' (beyond time and death). It is believed to have been popularized by Akali Nihang warriors who used it as a war cry before battle, affirming that God alone is eternal while all mortal things perish. Today it is used as a respectful greeting between Sikhs and is widely recognised by non-Sikhs as associated with Sikh culture and identity.",
    significance:
      "A declaration that God, the Timeless One, is the only eternal truth — used as both greeting and affirmation of faith.",
    usedSince: "17th century",
  },
  {
    id: "fateh",
    name: "Fateh",
    nameGurmukhi: "ਫ਼ਤਿਹ",
    type: "greeting",
    description:
      "Fateh is the Punjabi and Urdu word for 'victory' and forms the concluding word of the primary Sikh salutation. In Sikh usage, it appears in the phrase 'Waheguru Ji Ki Fateh' and is also used on its own as a short, informal greeting among Sikhs who abbreviate the full salutation. The concept of Fateh is important in Sikh theology because it is always attributed to God rather than to human effort — when a Sikh says 'Fateh,' they are recognising that all victories, large and small, are gifts of divine grace. The Sikh calendar era itself is called 'Nanakshahi' and marks dates of Sikh victories as Fateh occasions.",
    significance:
      "A reminder that all victory belongs to God — shorthand for the Sikh acknowledgment that human success flows from divine grace.",
    usedSince: "1699",
  },
  {
    id: "dastar",
    name: "Dastar (Turban)",
    nameGurmukhi: "ਦਸਤਾਰ",
    type: "concept",
    description:
      "The Dastar, or turban, is the head covering worn by Sikh men and many Sikh women to protect and cover the Kesh (uncut hair), and it holds profound significance as a crown of sovereignty, dignity, and spirituality. Unlike in many cultures where a turban is merely a cultural accessory, for Sikhs the Dastar carries deep meaning — Guru Gobind Singh Ji said that the Dastar is the Guru's gift (baksheesh) to the Khalsa, and wearing it is an act of accepting God's grace and shouldering the responsibility of righteousness. The Dastar represents equality — before the Sikh Gurus, only kings and nobles wore head coverings, so giving the turban to all Sikhs was a revolutionary act of democratizing dignity. Sikhs have fought legal battles across the world for the right to wear their Dastar in schools, military service, and workplaces.",
    significance:
      "A crown given by the Guru to all Sikhs, symbolizing equality, sovereignty, and the acceptance of divine responsibility.",
    usedSince: "1699 (formalized)",
  },
  {
    id: "langar",
    name: "Langar",
    nameGurmukhi: "ਲੰਗਰ",
    type: "concept",
    description:
      "Langar is the community kitchen found in every Gurdwara where free vegetarian meals are served to all visitors regardless of religion, caste, gender, wealth, or social status — everyone sits together on the floor (pangat) as equals. The tradition was established by Guru Nanak Dev Ji in the fifteenth century as a practical expression of the core Sikh values of seva (selfless service), equality, and the rejection of caste hierarchy. The Golden Temple in Amritsar serves more than 100,000 free meals every single day of the year, making it one of the largest free kitchens on earth. During natural disasters and humanitarian crises worldwide, Sikh organizations mobilize Langar operations, feeding hundreds of thousands — as seen during the COVID-19 pandemic, the 9/11 relief efforts, and numerous floods and earthquakes.",
    significance:
      "A radical act of equality and love — every person, regardless of background, sits as an equal and shares a meal.",
    usedSince: "1499",
  },
  {
    id: "sangat",
    name: "Sangat",
    nameGurmukhi: "ਸੰਗਤ",
    type: "concept",
    description:
      "Sangat refers to the holy congregation or community of Sikhs who gather together in the presence of the Guru Granth Sahib for worship, prayer, and spiritual discourse. The concept originates with Guru Nanak Dev Ji, who taught that the company of truth-seekers (Sadh Sangat) is among the greatest gifts a person can receive on their spiritual journey. In Sikh theology, the Sangat itself is considered sacred — the collective wisdom, compassion, and spiritual energy of the congregation is believed to bring the individual closer to God than isolated practice alone. The Sangat also functions as the democratic governing body of the Sikh community: important decisions affecting the Panth (Sikh community) are traditionally made through Gurmattas (resolutions) passed by the Sangat in the presence of the Guru Granth Sahib.",
    significance:
      "The holy congregation — the collective body through which Sikhs worship, govern themselves, and collectively experience God's presence.",
    usedSince: "1499",
  },
  {
    id: "seva",
    name: "Seva",
    nameGurmukhi: "ਸੇਵਾ",
    type: "concept",
    description:
      "Seva, meaning selfless service, is one of the three pillars of Sikhism alongside Nam (meditation on God's name) and Dasvandh (giving one-tenth of one's earnings). Rooted in the teachings of Guru Nanak Dev Ji, Seva teaches that serving God's creation — all human beings, animals, and the earth — is the highest form of worship and the surest path to spiritual liberation. There are three forms of Seva recognized in the Sikh tradition: Tann (physical service, such as cooking in the Langar), Mann (mental service, such as using one's intellect to help others), and Dhan (financial service, giving one's wealth for the community). The spirit of Seva has driven Sikhs to build hospitals, schools, and water wells, and to serve on the front lines of disaster relief and social justice causes across the world.",
    significance:
      "Selfless service to others as the highest form of devotion — the practical expression of love for God through love for creation.",
    usedSince: "1499",
  },
  {
    id: "nam-simran",
    name: "Nam Simran",
    nameGurmukhi: "ਨਾਮ ਸਿਮਰਨ",
    type: "concept",
    description:
      "Nam Simran is the meditative practice of continuously remembering and reciting God's name, most commonly 'Waheguru,' and is considered the most fundamental spiritual discipline in Sikhism. Guru Nanak Dev Ji taught that the root of all human suffering is the forgetfulness of God — the ego-driven state called 'Manmukh' — and that liberation comes through constant remembrance of the Divine, transforming the practitioner into a 'Gurmukh' (one who is God-facing). Nam Simran can be practiced silently within the mind, spoken aloud, sung through Kirtan (devotional music), or engaged in through the recitation of Gurbani (the Guru's words) — it is not confined to the Gurdwara but is meant to permeate every moment of daily life. The goal of Nam Simran is to dissolve the ego and experience direct union with the Divine, a state called 'Sahaj' — a natural, effortless spiritual bliss.",
    significance:
      "The core spiritual practice of Sikhism — turning the mind constantly toward God to overcome ego and achieve divine union.",
    usedSince: "1499",
  },
];
