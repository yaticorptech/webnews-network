import { JsonLd } from "@/components/ui/primitives";
import { LegalPage, type LegalClause } from "@/components/ui/LegalPage";
import { site } from "@/content/site";
import { pageMetadata, resolveLocale, type PageParams } from "@/lib/page";
import { breadcrumbJsonLd } from "@/lib/seo";

export const generateMetadata = pageMetadata({
  path: "/terms",
  title: { en: "Terms of use", kn: "ಬಳಕೆಯ ನಿಯಮಗಳು" },
  description: {
    en: "The terms governing use of WebNews, including copyright, quoting and citation rules, advertiser obligations and liability.",
    kn: "WEBNEWS ಬಳಕೆಯ ನಿಯಮಗಳು — ಹಕ್ಕುಸ್ವಾಮ್ಯ, ಉಲ್ಲೇಖ ನಿಯಮ ಮತ್ತು ಜಾಹೀರಾತುದಾರರ ಬಾಧ್ಯತೆ.",
  },
});

/** TEMPLATE — have counsel review before launch. */
const clauses: LegalClause[] = [
  {
    heading: { en: "1. Acceptance", kn: "೧. ಒಪ್ಪಿಗೆ" },
    body: [
      {
        en: "By using WebNews you agree to these terms. If you do not agree, please do not use the service. We may update these terms; material changes are announced on this page with a new effective date.",
        kn: "WEBNEWS ಬಳಸುವ ಮೂಲಕ ಈ ನಿಯಮಗಳಿಗೆ ಒಪ್ಪುತ್ತೀರಿ. ಬದಲಾವಣೆಗಳನ್ನು ಈ ಪುಟದಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗುತ್ತದೆ.",
      },
    ],
  },
  {
    heading: { en: "2. Copyright and quoting", kn: "೨. ಹಕ್ಕುಸ್ವಾಮ್ಯ ಮತ್ತು ಉಲ್ಲೇಖ" },
    body: [
      {
        en: "All original reporting, photography and design on WebNews is our copyright. You may quote a short extract with attribution and a link to the original article in the same language. Republishing a full article, or systematic scraping, requires a written licence.",
        kn: "ಎಲ್ಲ ಮೂಲ ವರದಿ, ಛಾಯಾಚಿತ್ರ ಮತ್ತು ವಿನ್ಯಾಸ ನಮ್ಮ ಹಕ್ಕುಸ್ವಾಮ್ಯ. ಸಣ್ಣ ಉಲ್ಲೇಖಕ್ಕೆ ಮೂಲ ಲೇಖನದ ಕೊಂಡಿ ನೀಡಿ.",
      },
      {
        en: "Training a machine-learning model on our archive requires a separate licence. Write to us — we would rather have a commercial conversation than a legal one.",
        kn: "ನಮ್ಮ ಆರ್ಕೈವ್ ಮೇಲೆ ಮಾದರಿ ತರಬೇತಿಗೆ ಪ್ರತ್ಯೇಕ ಪರವಾನಗಿ ಬೇಕು.",
      },
    ],
  },
  {
    heading: { en: "3. Acceptable use", kn: "೩. ಸ್ವೀಕಾರಾರ್ಹ ಬಳಕೆ" },
    body: [
      {
        en: "Do not attempt to breach, overload or probe the service; do not impersonate our staff; and do not use the site to distribute malware or unlawful content. We may suspend accounts that do.",
        kn: "ಸೇವೆಯನ್ನು ಭೇದಿಸಲು ಅಥವಾ ಅತಿಯಾಗಿ ಲೋಡ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಬೇಡಿ; ನಮ್ಮ ಸಿಬ್ಬಂದಿಯಂತೆ ನಟಿಸಬೇಡಿ.",
      },
    ],
  },
  {
    heading: { en: "4. Advertiser obligations", kn: "೪. ಜಾಹೀರಾತುದಾರರ ಬಾಧ್ಯತೆ" },
    body: [
      {
        en: "Advertisers warrant that their creative is lawful, holds the necessary rights, and is not misleading. Booking a placement grants no influence over editorial content. We may reject or withdraw creative that breaches our advertising policy, with a pro-rata refund.",
        kn: "ಜಾಹೀರಾತು ಕಾನೂನುಬದ್ಧವಾಗಿರಬೇಕು ಮತ್ತು ದಾರಿತಪ್ಪಿಸಬಾರದು. ಬುಕಿಂಗ್ ವರದಿಗಾರಿಕೆಯ ಮೇಲೆ ಯಾವುದೇ ಪ್ರಭಾವ ನೀಡುವುದಿಲ್ಲ.",
      },
    ],
  },
  {
    heading: { en: "5. Accuracy and corrections", kn: "೫. ನಿಖರತೆ ಮತ್ತು ತಿದ್ದುಪಡಿ" },
    body: [
      {
        en: "We report carefully but we are not infallible. Content is provided for information, not as professional advice. If you believe something is wrong, tell us — our corrections process is published and we use it.",
        kn: "ನಾವು ಎಚ್ಚರಿಕೆಯಿಂದ ವರದಿ ಮಾಡುತ್ತೇವೆ, ಆದರೆ ದೋಷರಹಿತರಲ್ಲ. ವಿಷಯ ಮಾಹಿತಿಗಾಗಿ, ವೃತ್ತಿಪರ ಸಲಹೆಯಲ್ಲ.",
      },
    ],
  },
  {
    heading: { en: "6. Third-party links", kn: "೬. ಮೂರನೇ ವ್ಯಕ್ತಿಯ ಕೊಂಡಿಗಳು" },
    body: [
      {
        en: "We link to external sites for evidence and further reading. We do not control them and are not responsible for their content or their privacy practices.",
        kn: "ನಾವು ಬಾಹ್ಯ ತಾಣಗಳಿಗೆ ಕೊಂಡಿ ನೀಡುತ್ತೇವೆ; ಅವುಗಳ ವಿಷಯಕ್ಕೆ ನಾವು ಜವಾಬ್ದಾರರಲ್ಲ.",
      },
    ],
  },
  {
    heading: { en: "7. Liability", kn: "೭. ಹೊಣೆಗಾರಿಕೆ" },
    body: [
      {
        en: "To the extent permitted by law, our liability arising from use of the service is limited to the amount you have paid us in the preceding twelve months. Nothing here limits liability for fraud or for anything that cannot lawfully be limited.",
        kn: "ಕಾನೂನು ಅನುಮತಿಸುವ ಮಟ್ಟಿಗೆ, ನಮ್ಮ ಹೊಣೆಗಾರಿಕೆ ಹಿಂದಿನ ಹನ್ನೆರಡು ತಿಂಗಳಲ್ಲಿ ನೀವು ಪಾವತಿಸಿದ ಮೊತ್ತಕ್ಕೆ ಸೀಮಿತ.",
      },
    ],
  },
  {
    heading: { en: "8. Governing law", kn: "೮. ಅನ್ವಯವಾಗುವ ಕಾನೂನು" },
    body: [
      {
        en: `These terms are governed by the laws of India, and the courts of India have exclusive jurisdiction. Questions: ${site.email}.`,
        kn: `ಈ ನಿಯಮಗಳು ಭಾರತದ ಕಾನೂನಿಗೆ ಒಳಪಟ್ಟಿವೆ; ಭಾರತದ ನ್ಯಾಯಾಲಯಗಳಿಗೆ ಪೂರ್ಣ ವ್ಯಾಪ್ತಿ. ಪ್ರಶ್ನೆಗಳಿಗೆ ${site.email}.`,
      },
    ],
  },
];

export default async function TermsPage({ params }: PageParams) {
  const locale = await resolveLocale(params);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: "Home", path: "/" },
          { name: "Terms of use", path: "/terms" },
        ])}
      />
      <LegalPage
        locale={locale}
        eyebrow={locale === "kn" ? "ನಿಯಮಗಳು" : "Terms"}
        title={
          locale === "kn"
            ? "ಬಳಕೆಯ ನಿಯಮಗಳು, ಸರಳ ಭಾಷೆಯಲ್ಲಿ."
            : "Terms of use, in plain language."
        }
        lede={
          locale === "kn"
            ? "ಇವು ನಮ್ಮನ್ನೂ ನಿಮ್ಮನ್ನೂ ರಕ್ಷಿಸಲು ಇವೆ. ಗೊಂದಲವಿದ್ದರೆ ಬರೆಯಿರಿ."
            : "These exist to protect both of us. If anything is unclear, write and ask."
        }
        updated="8 August 2026"
        clauses={clauses}
      />
    </>
  );
}
