import Link from "next/link";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-deep-navy text-off-white border-b border-charcoal/20 z-50 relative">
      <div className="font-bold text-lg tracking-wide">
        <Link href={`/${locale}`}>لو جولا | ذاكرة لا تغرق</Link>
      </div>
      
      <div className="hidden lg:flex items-center gap-6 text-sm">
        <Link href={`/${locale}`} className="hover:text-sea-blue transition-colors">الرئيسية</Link>
        <Link href={`/${locale}/khaarij-al-hisban`} className="hover:text-sea-blue transition-colors">خارج الحسبان</Link>
        <Link href={`/${locale}/laylat-lo-joola`} className="hover:text-sea-blue transition-colors">ليلة لو جولا</Link>
        <Link href={`/${locale}/ayna-aladala`} className="hover:text-sea-blue transition-colors">أين العدالة؟</Link>
        <Link href={`/${locale}/alladhina-baqou`} className="hover:text-sea-blue transition-colors">الذين بقوا</Link>
        <Link href={`/${locale}/aldhakira`} className="hover:text-sea-blue transition-colors">الذاكرة</Link>
      </div>
      
      <div className="flex items-center gap-3 text-sm font-semibold" dir="ltr">
        <Link href="/ar" className={locale === "ar" ? "text-sea-blue" : "text-off-white/70 hover:text-off-white"}>AR</Link>
        <span className="text-off-white/30">|</span>
        <Link href="/fr" className={locale === "fr" ? "text-sea-blue" : "text-off-white/70 hover:text-off-white"}>FR</Link>
        <span className="text-off-white/30">|</span>
        <Link href="/en" className={locale === "en" ? "text-sea-blue" : "text-off-white/70 hover:text-off-white"}>EN</Link>
      </div>
    </nav>
  );
}