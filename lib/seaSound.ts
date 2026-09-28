type SeaAudio = {
  ctx: AudioContext;
  gain: GainNode;
  swellDepth: GainNode;
  filter: BiquadFilterNode;
};

let audio: SeaAudio | null = null;
let level = 0;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function apply() {
  if (!audio) return;
  const now = audio.ctx.currentTime;
  const target = level <= 0 ? 0 : 0.03 + 0.35 * level;
  audio.gain.gain.setTargetAtTime(target, now, 0.4);
  audio.swellDepth.gain.setTargetAtTime(target * 0.15, now, 0.4);
  audio.filter.frequency.setTargetAtTime(250 + 1100 * level, now, 0.4);
}

export function subscribeSeaSound(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function isSeaSoundOn() {
  return audio !== null;
}

export function setSeaIntensity(value: number) {
  level = Math.min(1, Math.max(0, value));
  apply();
}

export function startSeaSound() {
  if (audio) return;
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
  gain.gain.value = 0;
  const swell = ctx.createOscillator();
  swell.frequency.value = 0.12;
  const swellDepth = ctx.createGain();
  swellDepth.gain.value = 0;
  swell.connect(swellDepth);
  swellDepth.connect(gain.gain);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  source.start();
  swell.start();
  audio = { ctx, gain, swellDepth, filter };
  apply();
  notify();
}

export function stopSeaSound() {
  if (!audio) return;
  audio.ctx.close();
  audio = null;
  notify();
}