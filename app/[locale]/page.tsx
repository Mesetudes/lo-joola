import SourceBadge from "@/components/narrative/SourceBadge";

const stats = [
  { value: "1,863", label: "ضحايا" },
  { value: "64", label: "ناجيًا" },
  { value: "2002", label: "عام الكارثة" },
];

const chapters = [
  { number: "01", icon: "🎬", title: "خارج الحسبان", subtitle: "فيلم قصير", href: "/ar/khaarij-al-hisban" },
  { number: "02", icon: "⚓", title: "ليلة لو جولا", subtitle: "كيف حدث الغرق؟", href: "/ar/laylat-lo-joola" },
  { number: "03", icon: "⚖️", title: "أين العدالة؟", subtitle: "ماذا حدث بعد الكارثة؟", href: "/ar/ayna-aladala" },
  { number: "04", icon: "👥", title: "الذين بقوا", subtitle: "البشر خلف الأرقام", href: "/ar/alladhina-baqou" },
  { number: "05", icon: "🕯️", title: "الذاكرة", subtitle: "ما الذي بقي؟", href: "/ar/aldhakira" },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-deep-navy px-6 text-center text-off-white">
        <p className="text-sm tracking-widest">26 سبتمبر 2002</p>
        <h1 className="text-4xl font-bold sm:text-6xl">لو جولا</h1>
        <p className="text-lg sm:text-2xl">ذاكرة لا تغرق</p>
        <p className="mt-4 max-w-md text-sm text-off-white/80">
          غرقت السفينة في دقائق.
          <br />
          لكن آثار الكارثة استمرت لعقود.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-full bg-sea-blue px-6 py-3 text-sm font-medium text-off-white">
            اكتشف الأرشيف ↓
          </button>
          <button className="rounded-full border border-off-white/30 px-6 py-3 text-sm font-medium">
            شاهد الفيلم القصير ▶
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 bg-off-white px-6 py-20 text-center text-charcoal">
        <p className="max-w-md text-lg font-medium">في ليلة واحدة، تغيّر مصير آلاف الأسر.</p>
        <div className="flex flex-wrap justify-center gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <span className="text-4xl font-bold text-deep-navy">{stat.value}</span>
              <span className="text-sm text-charcoal/70">{stat.label}</span>
            </div>
          ))}
        </div>
        <SourceBadge status="unverified" label="الأرقام النهائية ستُثبت وفق سجل التحقق قبل النشر" />
      </section>

      <section className="flex min-h-[40vh] items-center justify-center bg-sand px-6 text-center">
        <p className="max-w-xl text-xl font-medium text-charcoal sm:text-2xl">
          لو جولا ليست قصة سفينة غرقت.
          <br />
          إنها قصة الذين رحلوا، والذين نجوا، والذين ظلوا يسألون.
        </p>
      </section>

      <section className="flex flex-col items-center gap-10 bg-deep-navy px-6 py-24 text-off-white">
        {chapters.map((chapter) => (
          <a key={chapter.number} href={chapter.href} className="flex w-full max-w-md flex-col items-center gap-2 rounded-2xl border border-off-white/10 px-8 py-6 text-center transition hover:border-sea-blue">
            <span className="text-xs tracking-widest text-off-white/50">{chapter.number}</span>
            <span className="text-3xl">{chapter.icon}</span>
            <span className="text-xl font-bold">{chapter.title}</span>
            <span className="text-sm text-off-white/70">{chapter.subtitle}</span>
          </a>
        ))}
      </section>
    </main>
  );
}