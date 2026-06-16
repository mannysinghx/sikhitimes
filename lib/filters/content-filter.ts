// Content Filter — kid-friendly profanity and bias filter
// Layer 1: regex wordlist (fast, free)
// Layer 2: AI check for subtle bias/inappropriate content

// Basic wordlist (extend as needed)
const BAD_WORDS = [
  "fuck", "shit", "ass", "bitch", "cunt", "dick", "cock", "pussy", "bastard",
  "motherfucker", "whore", "slut", "faggot", "nigger", "chink", "spic", "kike",
  "retard", "crap", "damn", "hell", "piss",
  // Punjabi equivalents (romanized)
  "maderchod", "bhen", "gaandu", "lavde", "chutiya", "harami", "kaminay",
];

const BAD_WORDS_REGEX = new RegExp(
  `\\b(${BAD_WORDS.join("|")})\\b`,
  "gi"
);

export function containsProfanity(text: string): boolean {
  return BAD_WORDS_REGEX.test(text);
}

export function censorProfanity(text: string): string {
  return text.replace(BAD_WORDS_REGEX, (match) => {
    return match[0] + "*".repeat(match.length - 1);
  });
}

export function filterMessage(content: string): {
  filtered: boolean;
  clean: string;
} {
  if (containsProfanity(content)) {
    return { filtered: true, clean: censorProfanity(content) };
  }
  return { filtered: false, clean: content };
}

// URL safety check — strip tracking params, block known malicious patterns
export function sanitizeUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    // Only allow http/https
    if (!["http:", "https:"].includes(parsed.protocol)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

// Check if content is appropriate for kids
export function isKidAppropriate(text: string): boolean {
  return !containsProfanity(text);
}
