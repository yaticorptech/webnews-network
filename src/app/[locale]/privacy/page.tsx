import { JsonLd } from "@/components/ui/primitives";
import { LegalPage, type LegalClause } from "@/components/ui/LegalPage";
import { site } from "@/content/site";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/privacy",
  title: { en: "Privacy policy", kn: "ಗೌಪ್ಯತಾ ನೀತಿ" },
  description: {
    en: "What WebNews Network collects, why, how long we keep it, and the rights you have under India's Digital Personal Data Protection Act and the GDPR.",
    kn: "WEBNEWS ಯಾವ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ, ಏಕೆ, ಎಷ್ಟು ಕಾಲ ಮತ್ತು ನಿಮ್ಮ ಹಕ್ಕುಗಳೇನು.",
  },
});

/**
 * TEMPLATE — reviewed by counsel before launch. The structure maps to the
 * DPDP Act 2023 (India) and GDPR Chapter III so both regimes are covered.
 */
const clauses: LegalClause[] = [
  {
    heading: { en: "1. Summary", kn: "೧. ಸಾರಾಂಶ" },
    body: [
      {
        en: "We collect the minimum needed to run a newsroom: anonymous analytics to know what is read, an email address if you subscribe, and account details if you register as an advertiser. We do not sell personal data, and we do not run third-party tracking pixels.",
        kn: "ಸುದ್ದಿಮನೆ ನಡೆಸಲು ಬೇಕಾದ ಕನಿಷ್ಠ ಮಾಹಿತಿಯನ್ನಷ್ಟೇ ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. ವೈಯಕ್ತಿಕ ದತ್ತಾಂಶ ಮಾರಾಟ ಮಾಡುವುದಿಲ್ಲ.",
      },
    ],
  },
  {
    heading: { en: "2. What we collect", kn: "೨. ನಾವು ಸಂಗ್ರಹಿಸುವುದು" },
    body: [
      {
        en: "Usage data: pages viewed, referring source, approximate region derived from IP, device type and language preference. This is aggregated and not used to build a profile of an identifiable person.",
        kn: "ಬಳಕೆ ದತ್ತಾಂಶ: ನೋಡಿದ ಪುಟಗಳು, ಮೂಲ, ಅಂದಾಜು ಪ್ರದೇಶ, ಸಾಧನದ ಪ್ರಕಾರ ಮತ್ತು ಭಾಷಾ ಆಯ್ಕೆ.",
      },
      {
        en: "Information you give us: your email address for the newsletter; your name, business details and GSTIN if you register as an advertiser; and whatever you include when you contact a desk.",
        kn: "ನೀವು ನೀಡುವ ಮಾಹಿತಿ: ಸುದ್ದಿಪತ್ರಕ್ಕೆ ಇಮೇಲ್; ಜಾಹೀರಾತುದಾರರಾದರೆ ಹೆಸರು, ವ್ಯಾಪಾರ ವಿವರ ಮತ್ತು ಜಿಎಸ್‌ಟಿಐಎನ್.",
      },
      {
        en: "Preference cookies: your language and colour theme, stored locally so the site remembers them. These are strictly functional.",
        kn: "ಆದ್ಯತಾ ಕುಕೀಗಳು: ನಿಮ್ಮ ಭಾಷೆ ಮತ್ತು ಬಣ್ಣದ ಶೈಲಿ, ಸ್ಥಳೀಯವಾಗಿ ಸಂಗ್ರಹಿತ.",
      },
    ],
  },
  {
    heading: { en: "3. Why we process it", kn: "೩. ಸಂಸ್ಕರಣೆಯ ಕಾರಣ" },
    body: [
      {
        en: "To deliver the service you asked for (contract), to understand what our readers find useful (legitimate interest), to meet tax and invoicing obligations (legal obligation), and to send the newsletter (consent, withdrawable at any time).",
        kn: "ನೀವು ಕೇಳಿದ ಸೇವೆ ಒದಗಿಸಲು, ಓದುಗರ ಆಸಕ್ತಿ ಅರಿಯಲು, ತೆರಿಗೆ ಬಾಧ್ಯತೆ ಪೂರೈಸಲು ಮತ್ತು ಸುದ್ದಿಪತ್ರ ಕಳುಹಿಸಲು.",
      },
    ],
  },
  {
    heading: { en: "4. Advertising", kn: "೪. ಜಾಹೀರಾತು" },
    body: [
      {
        en: "Advertising on WebNews is contextual: creative is matched to the section and language you are reading, not to a behavioural profile. Impression and click counting happens on our own infrastructure. We do not permit third-party tracking scripts in ad creative.",
        kn: "ನಮ್ಮ ಜಾಹೀರಾತು ಸಂದರ್ಭೋಚಿತ — ನೀವು ಓದುತ್ತಿರುವ ವಿಭಾಗ ಮತ್ತು ಭಾಷೆಗೆ ಹೊಂದಿಕೆ, ವರ್ತನೆ ಆಧಾರಿತವಲ್ಲ.",
      },
    ],
  },
  {
    heading: { en: "5. Sharing", kn: "೫. ಹಂಚಿಕೆ" },
    body: [
      {
        en: "We share data only with processors that run the service — hosting, email delivery and payments — each under a written data processing agreement. We do not sell or rent personal data to anyone, for any purpose.",
        kn: "ಸೇವೆ ನಡೆಸುವ ಸಂಸ್ಕಾರಕರೊಂದಿಗೆ ಮಾತ್ರ ಹಂಚಿಕೆ. ಯಾವುದೇ ಉದ್ದೇಶಕ್ಕೂ ದತ್ತಾಂಶ ಮಾರಾಟವಿಲ್ಲ.",
      },
      {
        en: "We disclose data to authorities only against a valid legal order, and we will tell the affected person unless the order prohibits it.",
        kn: "ಮಾನ್ಯ ಕಾನೂನು ಆದೇಶದ ಮೇರೆಗೆ ಮಾತ್ರ ಪ್ರಾಧಿಕಾರಗಳಿಗೆ ಮಾಹಿತಿ ನೀಡುತ್ತೇವೆ.",
      },
    ],
  },
  {
    heading: { en: "6. Retention", kn: "೬. ಸಂಗ್ರಹಣಾ ಅವಧಿ" },
    body: [
      {
        en: "Analytics are retained in aggregate for 26 months. Newsletter addresses are kept until you unsubscribe. Advertiser and invoicing records are kept as long as tax law requires, then deleted.",
        kn: "ಒಟ್ಟುಗೂಡಿಸಿದ ವಿಶ್ಲೇಷಣೆ ೨೬ ತಿಂಗಳು. ಸುದ್ದಿಪತ್ರ ವಿಳಾಸ ರದ್ದುಗೊಳಿಸುವವರೆಗೆ.",
      },
    ],
  },
  {
    heading: { en: "7. Your rights", kn: "೭. ನಿಮ್ಮ ಹಕ್ಕುಗಳು" },
    body: [
      {
        en: "You may request access to your data, correction, erasure, a portable copy, or withdrawal of consent. Write to us and we will respond within 30 days. If you are unsatisfied you may complain to the Data Protection Board of India, or your local supervisory authority in the EU or UK.",
        kn: "ನಿಮ್ಮ ದತ್ತಾಂಶ ಪಡೆಯಲು, ತಿದ್ದಲು, ಅಳಿಸಲು ಅಥವಾ ಸಮ್ಮತಿ ಹಿಂಪಡೆಯಲು ಕೋರಬಹುದು. ೩೦ ದಿನಗಳಲ್ಲಿ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ.",
      },
    ],
  },
  {
    heading: { en: "8. Children", kn: "೮. ಮಕ್ಕಳು" },
    body: [
      {
        en: "The service is not directed at children under 18, and we do not knowingly collect their personal data. If you believe we have, tell us and we will delete it.",
        kn: "ಈ ಸೇವೆ ೧೮ ವರ್ಷಕ್ಕಿಂತ ಕೆಳಗಿನವರಿಗೆ ಉದ್ದೇಶಿತವಲ್ಲ.",
      },
    ],
  },
  {
    heading: { en: "9. Security and contact", kn: "೯. ಭದ್ರತೆ ಮತ್ತು ಸಂಪರ್ಕ" },
    body: [
      {
        en: `Data is encrypted in transit, access is role-restricted and audited, and we will notify affected users and the regulator of any breach that presents a risk. For any privacy question, write to ${site.email}.`,
        kn: `ದತ್ತಾಂಶ ಸಾಗಣೆಯಲ್ಲಿ ಎನ್‌ಕ್ರಿಪ್ಟ್ ಆಗಿರುತ್ತದೆ ಮತ್ತು ಪ್ರವೇಶ ನಿಯಂತ್ರಿತ. ಪ್ರಶ್ನೆಗಳಿಗೆ ${site.email}.`,
      },
    ],
  },
];

export default async function PrivacyPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy" },
        ])}
      />
      <LegalPage
        locale={locale}
        eyebrow={locale === "kn" ? "ಗೌಪ್ಯತೆ" : "Privacy"}
        title={
          locale === "kn"
            ? "ನಾವು ಸಂಗ್ರಹಿಸುವುದು ಕಡಿಮೆ. ಇಲ್ಲಿ ಪೂರ್ಣ ವಿವರ."
            : "We collect little. Here is exactly what and why."
        }
        lede={
          locale === "kn"
            ? "ಓದುಗರು ಸರಕಲ್ಲ. ಈ ನೀತಿ ಕಾನೂನು ರಕ್ಷಣೆಗಿಂತ ಹೆಚ್ಚಾಗಿ ಸ್ಪಷ್ಟತೆಗಾಗಿ ಬರೆದಿದೆ."
            : "Readers are not inventory. This policy is written to be understood rather than to shield us."
        }
        updated="8 August 2026"
        clauses={clauses}
      />
    </>
  );
}
