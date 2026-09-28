import SourceBadge from "@/components/narrative/SourceBadge";
import type { CoverageSide } from "@/types/coverage";
import comparisonData from "@/data/coverage-comparison.json";

const sides = comparisonData as CoverageSide[];

export default function CoverageComparison() {
  return (
    <section id="comparison" className="flex flex-col items-center gap-8 bg-off-white px-6 py-20 text-charcoal">
      <h2 className="text-2xl font-bold text-deep-navy">🔀 قصة واحدة… روايات مختلفة</h2>
      <p className="max-w-md text-center text-sm text-charcoal/70">اضغط على أي محور لترى كيف تناولته كل تغطية.</p>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {sides.map((side) => (
          <div key={side.id} className="flex flex-col gap-3 rounded-2xl border border-charcoal/20 border-t-4 border-t-sea-blue bg-sand p-5">
            <h3 className="text-xl font-bold text-deep-navy">{side.titre}</h3>
            {side.themes.map((theme) => (
              <details key={theme.id} className="rounded-lg border border-charcoal/15 bg-off-white px-4 py-3">
                <summary className="cursor-pointer text-base font-medium">{theme.titre}</summary>
                <div className="mt-3 flex flex-col gap-2">
                  <p className="text-sm">{theme.resume ?? "لم تُضف نتائج بحث المقارنة بعد."}</p>
                  <p className="text-xs text-charcoal/60">{theme.source ? `المصدر: ${theme.source}` : "المصدر: لم يُحدَّد بعد"}</p>
                  <div>
                    <SourceBadge status={theme.statut_verification} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-2xl font-bold text-deep-navy">القصة واحدة.</p>
        <p className="text-xl">لكن زاوية النظر ليست واحدة.</p>
        <SourceBadge status="unverified" label="مبني على بحث المقارنة الإعلامية — تُضاف مراجعه" />
      </div>
    </section>
  );
}