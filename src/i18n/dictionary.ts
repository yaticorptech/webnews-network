import type { Locale } from "./config";

/**
 * UI chrome strings. Page copy lives in `src/content/*` alongside the data it
 * describes; only reusable interface labels belong here.
 *
 * NOTE: The site currently ships English-only content — the `kn` entries keep
 * previously translated chrome labels and fall back to English elsewhere, so
 * Kannada copy can be backfilled later without structural changes.
 */
const dictionary = {
  en: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    theme: "Toggle colour theme",
    exploreWebnews: "Explore WebNews",
    partnerWithUs: "Partner with us",
    advertiseWithUs: "Advertise with us",
    joinOurTeam: "Join our team",
    talkToUs: "Talk to us",
    exploreNetwork: "Explore the network",
    seeAll: "See all",
    backHome: "Back to home",
    notFoundTitle: "This page has moved on.",
    notFoundBody:
      "The link you followed no longer points anywhere. WebNews, however, is still very much live.",
    footerBlurb:
      "A technology-driven media company connecting people, communities, institutions and businesses through digital journalism.",
    footerRights: "All rights reserved.",
    company: "Company",
    network: "Network",
    partner: "Partner",
    legal: "Legal",
    contactUs: "Contact",
    lastUpdated: "Last updated",
    onThisPage: "On this page",
    getInTouch: "Get in touch",
  },
  kn: {
    skipToContent: "ವಿಷಯಕ್ಕೆ ತೆರಳಿ",
    openMenu: "ಮೆನು ತೆರೆಯಿರಿ",
    closeMenu: "ಮೆನು ಮುಚ್ಚಿ",
    language: "ಭಾಷೆ",
    theme: "ಬಣ್ಣದ ಶೈಲಿ ಬದಲಿಸಿ",
    exploreWebnews: "Explore WebNews",
    partnerWithUs: "Partner with us",
    advertiseWithUs: "Advertise with us",
    joinOurTeam: "Join our team",
    talkToUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
    exploreNetwork: "Explore the network",
    seeAll: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
    backHome: "ಮುಖಪುಟಕ್ಕೆ",
    notFoundTitle: "This page has moved on.",
    notFoundBody:
      "The link you followed no longer points anywhere. WebNews, however, is still very much live.",
    footerBlurb:
      "A technology-driven media company connecting people, communities, institutions and businesses through digital journalism.",
    footerRights: "ಎಲ್ಲ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    company: "ಕಂಪನಿ",
    network: "Network",
    partner: "ಪಾಲುದಾರಿಕೆ",
    legal: "ಕಾನೂನು",
    contactUs: "ಸಂಪರ್ಕ",
    lastUpdated: "ಕೊನೆಯ ನವೀಕರಣ",
    onThisPage: "ಈ ಪುಟದಲ್ಲಿ",
    getInTouch: "ಸಂಪರ್ಕಿಸಿ",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type Dictionary = (typeof dictionary)["en"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale] as Dictionary;
}
