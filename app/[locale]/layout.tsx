import Navbar from "@/components/ui/Navbar";
import "@/styles/globals.css"; // Assure-toi que ce chemin correspond à ton fichier CSS global

export const metadata = {
  title: "لو جولا | ذاكرة لا تغرق",
  description: "أرشيف صحفي تفاعلي يوثق كارثة غرق عبارة لو جولا",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Gestion dynamique du sens de lecture
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="bg-off-white text-charcoal font-sans min-h-screen flex flex-col">
        <Navbar locale={locale} />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}