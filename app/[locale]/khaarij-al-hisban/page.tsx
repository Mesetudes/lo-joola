import SceneSection from "@/components/narrative/SceneSection";

export default function KhaarijAlHisbanPage() {
  return (
    <main className="flex flex-col">
      <SceneSection className="flex min-h-screen flex-col items-center justify-center gap-4 bg-deep-navy px-6 text-center text-off-white">
        <span className="text-4xl">🎬</span>
        <h1 className="text-4xl font-bold sm:text-6xl">خارج الحسبان</h1>
        <p className="text-lg text-off-white/80">قصة نجاة لم تكن متوقعة</p>
        <p className="mt-4 text-sm tracking-widest text-off-white/60">فيلم قصير | 10 دقائق</p>
        <button className="mt-4 rounded-full bg-sea-blue px-6 py-3 text-sm font-medium text-off-white">
          ▶ مشاهدة الفيلم
        </button>
      </SceneSection>

      <SceneSection className="flex flex-col items-center gap-6 bg-off-white px-6 py-24 text-center text-charcoal">
        <h2 className="text-2xl font-bold text-deep-navy">عن الفيلم</h2>
        <p className="max-w-md text-lg">
          ماذا يحدث عندما ينجو الإنسان من شيء لم يكن يعتقد أنه سينجو منه؟
        </p>
      </SceneSection>

      <SceneSection className="flex flex-col items-center gap-10 bg-sand px-6 py-24 text-center text-charcoal">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-deep-navy">القصة</h3>
          <p className="max-w-md text-sm text-charcoal/80">تفاصيل القصة ستُضاف هنا.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-deep-navy">الشخصية</h3>
          <p className="max-w-md text-sm text-charcoal/80">تفاصيل الشخصية ستُضاف هنا.</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-deep-navy">خلف الكواليس</h3>
          <p className="max-w-md text-sm text-charcoal/80">صور من التصوير ستُضاف هنا.</p>
        </div>
      </SceneSection>

      <SceneSection className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-deep-navy px-6 text-center text-off-white">
        <p className="text-lg text-off-white/80">من النجاة إلى الغرق...</p>
        <a href="/ar/laylat-lo-joola" className="rounded-full border border-off-white/30 px-6 py-3 text-sm font-medium transition hover:border-sea-blue">
          انتقل إلى ليلة لو جولا ←
        </a>
      </SceneSection>
    </main>
  );
}