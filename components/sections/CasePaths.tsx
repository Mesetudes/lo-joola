import SourceBadge from "@/components/narrative/SourceBadge";
import type { EditorialEntity } from "@/types/editorial";
import pathsData from "@/data/case-paths.json";

const entries = pathsData as EditorialEntity[];

const paths = [
  { key: "state", icon: "🏛️", title: "الدولة", subtitle: "المواقف الرسمية" },
  { key: "judiciary", icon: "⚖️", title: "القضاء", subtitle: "المسار القضائي" },
  { key: "families", icon: "👨‍👩‍👧‍👦", title: "العائلات", subtitle: "المطالبات والأسئلة" },
];

export default function CasePaths() {
  return (
    <section className="flex flex-col items-center gap-10 bg-sand px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">ثلاثة مسارات</h2>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        {paths.map((path) => (
          <div key={path.key} className="flex flex-col gap-4 rounded-2xl border border-charcoal/20 bg-off-white p-6">
            <span className="text-3xl">{path.icon}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-deep-navy">{path.title}</h3>
              <p className="text-sm text-charcoal/70">{path.subtitle}</p>
            </div>
            {entries.filter((entry) => entry.type === path.key).map((entry) => (
              <div key={entry.id} className="flex flex-col gap-2 border-t border-charcoal/15 pt-4">
                <p className="text-sm font-bold">{entry.titre}</p>
                <p className="text-sm text-charcoal/80">{entry.description}</p>
                <p className="text-xs text-charcoal/60">{entry.source ? `المصدر: ${entry.source}` : "المصدر: لم يُحدَّد بعد"}</p>
                <div>
                  <SourceBadge status={entry.statut_verification} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}