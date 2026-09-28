export default function ShipSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" role="img" aria-label="رسم تخطيطي لسفينة" className={className}>
      <path d="M40 120 L360 120 L330 165 L80 165 Z" />
      <rect x="120" y="85" width="160" height="35" />
      <rect x="150" y="60" width="100" height="25" />
      <rect x="190" y="35" width="20" height="25" />
      <circle cx="145" cy="102" r="4" className="fill-deep-navy" />
      <circle cx="175" cy="102" r="4" className="fill-deep-navy" />
      <circle cx="205" cy="102" r="4" className="fill-deep-navy" />
      <circle cx="235" cy="102" r="4" className="fill-deep-navy" />
      <circle cx="265" cy="102" r="4" className="fill-deep-navy" />
    </svg>
  );
}