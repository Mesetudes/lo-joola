type SourceBadgeProps = {
  status: "verified" | "unverified";
  label?: string;
};

export default function SourceBadge({ status, label }: SourceBadgeProps) {
  const isVerified = status === "verified";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${
        isVerified
          ? "border-sea-blue/40 bg-sea-blue/10 text-sea-blue"
          : "border-burnt-orange/40 bg-burnt-orange/10 text-burnt-orange"
      }`}
    >
      {isVerified ? "✓" : "⚠️"} {label ?? (isVerified ? "معلومة موثقة" : "قيد التحقق")}
    </span>
  );
}