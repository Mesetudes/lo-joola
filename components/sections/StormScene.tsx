"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import ShipSilhouette from "@/components/narrative/ShipSilhouette";
import WaterLine from "@/components/narrative/WaterLine";

export default function StormScene() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const background = useTransform(scrollYProgress, [0, 1], ["#0b1f33", "#050d16"]);
  const tilt = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -14]);
  const waveHeight = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 2.6]);
  const secondLayer = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const thirdLayer = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const messageOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);

  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<{ ctx: AudioContext; gain: GainNode; filter: BiquadFilterNode } | null>(null);

  function applyIntensity(value: number) {
    const audio = audioRef.current;
    if (!audio) return;
    const now = audio.ctx.currentTime;
    audio.gain.gain.setTargetAtTime(0.03 + 0.35 * value, now, 0.4);
    audio.filter.frequency.setTargetAtTime(250 + 1100 * value, now, 0.4);
  }

  useMotionValueEvent(scrollYProgress, "change", (value) => applyIntensity(value));

  function stopSound() {
    audioRef.current?.ctx.close();
    audioRef.current = null;
    setSoundOn(false);
  }

  function startSound() {
    const ctx = new AudioContext();
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    const gain = ctx.createGain();
    gain.gain.value = 0.03;
    const swell = ctx.createOscillator();
    swell.frequency.value = 0.12;
    const swellDepth = ctx.createGain();
    swellDepth.gain.value = 0.04;
    swell.connect(swellDepth);
    swellDepth.connect(gain.gain);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();
    swell.start();
    audioRef.current = { ctx, gain, filter };
    applyIntensity(scrollYProgress.get());
    setSoundOn(true);
  }

  useEffect(() => {
    return () => {
      audioRef.current?.ctx.close();
      audioRef.current = null;
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[250vh]">
      <motion.div style={{ backgroundColor: background }} className="sticky top-0 flex h-screen flex-col items-center justify-center gap-8 overflow-hidden px-6 text-center text-off-white">
        <h2 className="sr-only">العاصفة</h2>
        <button type="button" aria-pressed={soundOn} onClick={soundOn ? stopSound : startSound} className="absolute end-6 top-6 z-10 rounded-full border border-off-white/30 px-4 py-2 text-xs font-medium">
          {soundOn ? "🔊 إيقاف صوت البحر" : "🔈 تشغيل صوت البحر"}
        </button>
        <motion.div style={{ rotate: tilt }} className="w-full max-w-md">
          <motion.div animate={shouldReduceMotion ? undefined : { y: [0, -8, 0], rotate: [-2, 2, -2] }} transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}>
            <ShipSilhouette className="w-full fill-off-white/90" />
          </motion.div>
        </motion.div>
        <motion.p style={{ opacity: messageOpacity }} className="max-w-md text-xl font-medium sm:text-2xl">ومع اشتداد الظروف البحرية، بدأت السفينة تفقد استقرارها.</motion.p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <motion.div style={{ scaleY: waveHeight, transformOrigin: "bottom" }} className="relative h-24">
            <WaterLine className="absolute bottom-0 text-sea-blue" />
            <motion.div style={{ opacity: secondLayer }} className="absolute bottom-4 w-full">
              <WaterLine className="text-sea-blue/70" />
            </motion.div>
            <motion.div style={{ opacity: thirdLayer }} className="absolute bottom-8 w-full">
              <WaterLine className="text-sea-blue/40" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}