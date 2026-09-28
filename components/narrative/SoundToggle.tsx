"use client";

import { useEffect, useSyncExternalStore } from "react";
import { isSeaSoundOn, startSeaSound, stopSeaSound, subscribeSeaSound } from "@/lib/seaSound";

export default function SoundToggle({ className = "" }: { className?: string }) {
  const soundOn = useSyncExternalStore(subscribeSeaSound, isSeaSoundOn, () => false);

  useEffect(() => {
    return () => stopSeaSound();
  }, []);

  return (
    <button type="button" aria-pressed={soundOn} onClick={soundOn ? stopSeaSound : startSeaSound} className={`rounded-full border border-off-white/30 px-4 py-2 text-xs font-medium ${className}`}>
      {soundOn ? "🔊 إيقاف صوت البحر" : "🔈 تشغيل صوت البحر"}
    </button>
  );
}