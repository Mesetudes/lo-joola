import AudioTestimony from "@/components/narrative/AudioTestimony";
import type { Testimony } from "@/types/testimony";
import testimoniesData from "@/data/testimonies.json";

const testimonies = testimoniesData as Testimony[];

export default function FamiliesSection() {
  return (
    <section id="families" className="flex flex-col items-center gap-8 bg-off-white px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">العائلات</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">أصوات من أسر الضحايا. اضغط على زر التشغيل للاستماع.</p>
      <div className="flex w-full max-w-md flex-col gap-5">
        {testimonies.map((item) => (
          <AudioTestimony key={item.id} item={item} />
        ))}
      </div>
      <p className="max-w-md text-center text-xs text-charcoal/60">لا يُنشر أي تسجيل إلا بموافقة صاحبه ومعه نص مكتوب.</p>
    </section>
  );
}