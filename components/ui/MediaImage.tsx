import Image from "next/image";

type MediaImageProps = {
  image: string | null;
  alt: string;
  usageRights: string | null;
  className?: string;
};

export default function MediaImage({ image, alt, usageRights, className = "" }: MediaImageProps) {
  if (image && usageRights) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={image} alt={alt} fill sizes="(min-width: 640px) 320px, 80vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center border border-dashed border-charcoal/30 bg-white/50 p-3 text-center text-xs text-charcoal/60 ${className}`}>
      {image ? "الصورة بانتظار التحقق من حقوق الاستخدام" : "لا توجد صورة بعد"}
    </div>
  );
}