import Navbar from "@/components/ui/Navbar";
import SkipToContent from "@/components/ui/SkipToContent";
import "@/styles/globals.css";

// Génération dynamique des métadonnées SEO selon la langue
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const titles: Record<string, string> = {
    ar: "لو جولا | ذاكرة لا تغرق",
    fr: "Le Joola | Une mémoire qui ne sombre pas",
    en: "Le Joola | A memory that does not sink",
  };
  const descriptions: Record<string, string> = {
    ar: "أرشيف صحفي تفاعلي يوثق كارثة غرق عبارة لو جولا",
    fr: "Archives journalistiques interactives documentant la tragédie du naufrage du Joola",
    en: "Interactive journalistic archive documenting the tragedy of the Joola sinking",
  };

  return {
    title: titles[locale] || titles.ar,
    description: descriptions[locale] || descriptions.ar,
    openGraph: {
      title: titles[locale] || titles.ar,
      description: descriptions[locale] || descriptions.ar,
      url: "https://lejoola.example.com", // À remplacer par ton vrai nom de domaine plus tard
      siteName: titles[locale] || titles.ar,
      locale: locale === "ar" ? "ar_SN" : locale === "fr" ? "fr_SN" : "en_US",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="bg-off-white text-charcoal font-sans min-h-screen flex flex-col">
        <SkipToContent locale={locale} />
        <Navbar locale={locale} />
        {/* L'ID main-content est ciblé par le composant SkipToContent */}
        <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}