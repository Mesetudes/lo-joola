import Image from "next/image";

type PortraitProps = {
  photo: string | null;
  alt: string;
  className?: string;
};

export default function Portrait({ photo, alt, className = "" }: PortraitProps) {
  if (photo) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={photo} alt={alt} fill sizes="(min-width: 640px) 250px, 50vw" className="object-cover" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className={`flex items-center justify-center bg-sea-blue/10 text-4xl text-sea-blue/60 ${className}`}>؟</div>
  );
}