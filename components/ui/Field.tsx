export default function Field({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-charcoal/60">{label}</span>
      <p className="text-sm">{value ?? "لم يُحدَّد بعد"}</p>
    </div>
  );
}