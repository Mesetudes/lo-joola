export default function SkipToContent({ locale }: { locale: string }) {
  const text = locale === "fr" ? "Aller au contenu principal" : locale === "en" ? "Skip to main content" : "تخطي إلى المحتوى الرئيسي";
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sea-blue focus:text-off-white focus:font-bold focus:rounded-md transition-all"
    >
      {text}
    </a>
  );
}