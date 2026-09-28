import React from "react";
import Link from "next/link";

export default function GrandFinale() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-deep-navy text-off-white text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal/90 z-0 flex items-center justify-center">
         <div className="absolute inset-0 bg-[url('/images/calm-sea.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-16 max-w-3xl">
        <div className="flex flex-col gap-6 animate-fade-in">
          <p className="text-2xl md:text-4xl font-light leading-loose text-sand">
            مرت سنوات على الغرق.<br/>
            لكن البحر ما زال يحمل القصة.
          </p>
        </div>
        
        <div className="flex flex-col gap-8 mt-8">
          <p className="text-xl text-off-white/80 transition-opacity duration-1000">ماذا لم يُنسَ؟</p>
          <h1 className="text-4xl md:text-6xl font-bold text-sea-blue tracking-wide">
            لو جولا | ذاكرة لا تغرق
          </h1>
        </div>
        
        <div className="mt-20">
          <Link href="/ar" className="group flex items-center gap-3 text-lg font-medium text-sand/70 hover:text-sea-blue transition-colors duration-300">
            <span className="transform group-hover:-translate-x-2 transition-transform duration-300">←</span>
            <span>العودة إلى البداية</span>
          </Link>
        </div>
      </div>
    </section>
  );
}