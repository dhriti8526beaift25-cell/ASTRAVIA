/**
 * Astravia Ambient Sound & Audio Narration Engine
 * High-fidelity Web Audio API procedural environmental soundscapes
 * with smooth cross-fading and browser speech synthesis narration.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.currentNodes = [];
    this.isPlaying = false;
    this.currentProfile = null;
    this.volume = 0.5;
    this.isNarrating = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  stopCurrentSoundscape(fadeTime = 0.6) {
    if (!this.ctx || this.currentNodes.length === 0) return;

    const stopTime = this.ctx.currentTime + fadeTime;
    this.currentNodes.forEach(({ gain, source, intervalId }) => {
      if (intervalId) clearInterval(intervalId);
      if (gain) {
        try {
          gain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, fadeTime / 3);
        } catch {
          // Fade fallback
        }
      }
      if (source) {
        try {
          source.stop(stopTime);
        } catch {
          // Source stop fallback
        }
      }
    });

    setTimeout(() => {
      this.currentNodes = [];
    }, fadeTime * 1000 + 50);
  }

  playProfile(profile = "lake_waters") {
    this.init();
    if (!this.ctx) return;

    if (this.currentProfile === profile && this.isPlaying) {
      return;
    }

    // Smooth fade out previous soundscape
    this.stopCurrentSoundscape(0.6);

    this.currentProfile = profile;
    this.isPlaying = true;

    // Start new procedural soundscape with 0.8s fade in
    setTimeout(() => {
      if (!this.isPlaying) return;
      this.buildSoundscape(profile);
    }, 400);
  }

  buildSoundscape(profile) {
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    const profileGain = this.ctx.createGain();
    profileGain.gain.setValueAtTime(0.001, now);
    profileGain.gain.exponentialRampToValueAtTime(1.0, now + 0.8);
    profileGain.connect(this.masterGain);

    if (profile === "lake_waters" || profile === "water") {
      // 1. Water Lap Swells + Mountain Birds
      this.createNoiseLayer(profileGain, "pink", 350, 0.15, 0.25);
      this.createLfoModulator(profileGain, 0.2, 0.4); // Water rhythm
      this.createBirdTweets(profileGain, 3000, 5000, 0.08);
    } else if (profile === "alpine_wind" || profile === "mountains") {
      // 2. High-Altitude Alpine Wind & Whistling Gusts
      this.createNoiseLayer(profileGain, "brown", 450, 0.25, 0.35);
      this.createLfoModulator(profileGain, 0.12, 0.5); // Gusty wind sweep
      this.createDroneHarmonic(profileGain, 110, 0.04);
    } else if (profile === "city_ambience" || profile === "urban") {
      // 3. Parisian / Tokyo City Hum & Resonance
      this.createNoiseLayer(profileGain, "pink", 500, 0.12, 0.2);
      this.createDroneHarmonic(profileGain, 146.83, 0.05); // D3 chord
      this.createDroneHarmonic(profileGain, 220, 0.03); // A3 chord
    } else if (profile === "temple_zen" || profile === "zen") {
      // 4. Tibetan / Zen Singing Bowl 432Hz Drone
      this.createDroneHarmonic(profileGain, 432, 0.15);
      this.createDroneHarmonic(profileGain, 864, 0.06);
      this.createDroneHarmonic(profileGain, 1296, 0.03);
      this.createNoiseLayer(profileGain, "pink", 250, 0.06, 0.1);
    } else if (profile === "ocean_waves" || profile === "beaches") {
      // 5. Ocean Waves & Foaming Surf Swells
      this.createNoiseLayer(profileGain, "brown", 600, 0.2, 0.4);
      this.createLfoModulator(profileGain, 0.1, 0.7); // 10s wave period
      this.createBirdTweets(profileGain, 2200, 3800, 0.05);
    } else if (profile === "desert_wind") {
      // 6. Warm Desert Breeze
      this.createNoiseLayer(profileGain, "brown", 280, 0.2, 0.3);
      this.createLfoModulator(profileGain, 0.08, 0.4);
    } else if (profile === "palace_ambience" || profile === "palace") {
      // 7. Mughal Palace Echo, Soft Fountain Ripples & Tanpura Harmonics
      this.createNoiseLayer(profileGain, "pink", 300, 0.1, 0.2);
      this.createDroneHarmonic(profileGain, 130.81, 0.08); // C3 fundamental drone
      this.createDroneHarmonic(profileGain, 196.0, 0.05); // G3 fifth harmonic
      this.createLfoModulator(profileGain, 0.15, 0.3); // Fountain ripple cadence
    } else {
      // Default Nature
      this.createNoiseLayer(profileGain, "pink", 400, 0.15, 0.2);
      this.createBirdTweets(profileGain, 2800, 4500, 0.06);
    }
  }

  // Generate continuous procedural noise buffer (Pink/Brown noise)
  createNoiseLayer(destinationNode, type = "pink", cutoff = 400, baseGain = 0.2, resonance = 0.2) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    let lastOut = 0.0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === "pink") {
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      } else {
        // Brown noise
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, this.ctx.currentTime);
    filter.Q.setValueAtTime(resonance, this.ctx.currentTime);

    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(baseGain, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(destinationNode);

    whiteNoise.start();
    this.currentNodes.push({ source: whiteNoise, gain: gainNode });
  }

  // Create smooth Low Frequency Oscillator for wave/wind swells
  createLfoModulator(destinationGain, rate = 0.2, depth = 0.5) {
    if (!this.ctx) return;
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(rate, this.ctx.currentTime);

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(depth, this.ctx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(destinationGain.gain);
    lfo.start();

    this.currentNodes.push({ source: lfo, gain: lfoGain });
  }

  // Create warm resonant singing bowl / chord drone
  createDroneHarmonic(destinationNode, freq = 220, vol = 0.05) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);

    osc.connect(gain);
    gain.connect(destinationNode);
    osc.start();

    this.currentNodes.push({ source: osc, gain });
  }

  // Generate random pleasant birds/chimes at natural intervals
  createBirdTweets(destinationNode, minFreq = 2500, maxFreq = 4500, vol = 0.06) {
    if (!this.ctx) return;

    const intervalId = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime;
        const freq = minFreq + Math.random() * (maxFreq - minFreq);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.3, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.9, now + 0.18);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        osc.connect(gain);
        gain.connect(destinationNode);

        osc.start(now);
        osc.stop(now + 0.24);
      } catch {
        // Osc fallback
      }
    }, 4500 + Math.random() * 4000);

    this.currentNodes.push({ intervalId });
  }

  toggle(profile = "lake_waters") {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.playProfile(profile);
      return true;
    }
  }

  stop() {
    this.isPlaying = false;
    this.currentProfile = null;
    this.stopCurrentSoundscape(0.4);
  }

  // Spoken Voice Narration using Web Speech Synthesis API
  speakNarration(text, onEnd) {
    if (!("speechSynthesis" in window)) {
      if (onEnd) onEnd();
      return;
    }

    window.speechSynthesis.cancel();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92; // Natural storytelling pace
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Pick English voices
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find((v) => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Daniel")));
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    this.isNarrating = true;

    // Lower ambient volume during narration
    this.setVolume(this.volume * 0.35);

    utterance.onend = () => {
      this.isNarrating = false;
      this.setVolume(this.volume / 0.35); // Restore
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isNarrating = false;
      this.setVolume(this.volume / 0.35);
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  stopNarration() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    this.isNarrating = false;
    this.setVolume(this.volume);
  }
}

export const soundEngine = new SoundEngine();
export default soundEngine;
