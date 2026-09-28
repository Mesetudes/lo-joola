import React from "react";
import SourceBadge from "@/components/narrative/SourceBadge";

export default function MuseumSection() {
  return (
    <section id="museum" className="flex flex-col items-center gap-10 bg-off-white px-6 py-24 text-charcoal">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-deep-navy mb-2">🏛️ حين أصبحت الذاكرة مكانًا</h2>
      </div>
      
      <div className="w-full max-w-5xl flex flex-col gap-8">
        <div className="aspect-video w-full bg-charcoal/10 rounded-2xl border border-charcoal/20 flex flex-col items-center justify-center overflow-hidden relative">
           <span className="text-charcoal/50">صورة كبيرة للمتحف (قيد الإضافة)</span>
        </div>
        
        <div className="bg-sand p-8 rounded-2xl border border-charcoal/15">
          <h3 className="text-2xl font-bold text-sea-blue mb-4">متحف لو جولا</h3>
          <p className="text-lg leading-relaxed mb-6">
            معلومات مختصرة عن تأسيس المتحف، موقعه، والهدف من إنشائه. (تُضاف النصوص النهائية لاحقاً).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold text-deep-navy">ماذا يعرض؟</h4>
              <p className="text-sm text-charcoal/80">تفاصيل المعروضات، الأرشيف، والأغراض المستخرجة من السفينة.</p>
              <div className="aspect-video bg-charcoal/10 rounded-lg flex items-center justify-center mt-2 border border-charcoal/20">
                <span className="text-xs text-charcoal/50">صور من الداخل</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-bold text-deep-navy">ماذا يعني للعائلات؟</h4>
              <p className="text-sm text-charcoal/80">مساحة للتأمل والحداد، ومكان يضمن عدم نسيان الضحايا.</p>
              <blockquote className="border-r-4 border-sea-blue pr-4 mt-2 italic text-charcoal/70">
                "شهادة حية من أحد أفراد العائلات حول أهمية وجود مكان مادي للذاكرة."
              </blockquote>
              <div className="mt-2">
                 <SourceBadge status="unverified" label="الشهادة والصور قيد التحقق" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}