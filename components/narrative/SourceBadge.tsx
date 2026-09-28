type SourceBadgeProps = {
  status: "verified" | "unverified";
  label?: string;
  onDark?: boolean;
};

export default function SourceBadge({ status, label, onDark = false }: SourceBadgeProps) {
  const isVerified = status === "verified";

  let tone = "border-burnt-orange/40 bg-burnt-orange/10 text-burnt-orange";
  if (isVerified) tone = "border-sea-blue/40 bg-sea-blue/10 text-sea-blue";
  if (onDark && isVerified) tone = "border-off-white/40 bg-off-white/10 text-off-white";
  if (onDark && !isVerified) tone = "border-[#f0a58c]/60 bg-[#f0a58c]/10 text-[#f0a58c]";

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${tone}`}>
      {isVerified ? "✓" : "⚠️"} {label ?? (isVerified ? "معلومة موثقة" : "قيد التحقق")}
    </span>
  );
}