"use client";

import { useEffect, useState, useRef } from "react";

// --- Confetti Piece ---
interface ConfettiItem {
  id: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  shape: "circle" | "square" | "triangle";
}

function Confetti() {
  const [pieces, setPieces] = useState<ConfettiItem[]>([]);
  const colors = [
    "#ff6b9d", "#ffb347", "#ffe66d", "#6bffb8",
    "#6bbdff", "#c06bff", "#ff6b6b", "#ffd700",
  ];

  useEffect(() => {
    const generated: ConfettiItem[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 10 + 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 8,
      shape: (["circle", "square", "triangle"] as const)[
        Math.floor(Math.random() * 3)
      ],
    }));
    setPieces(generated);
  }, []);

  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor:
              p.shape === "triangle" ? "transparent" : p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            borderLeft:
              p.shape === "triangle"
                ? `${p.size / 2}px solid transparent`
                : undefined,
            borderRight:
              p.shape === "triangle"
                ? `${p.size / 2}px solid transparent`
                : undefined,
            borderBottom:
              p.shape === "triangle" ? `${p.size}px solid ${p.color}` : undefined,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

// --- Balloon ---
function Balloon({
  color,
  x,
  delay,
  size = 56,
}: {
  color: string;
  x: number;
  delay: number;
  size?: number;
}) {
  return (
    <div
      className="animate-balloon absolute bottom-0 select-none pointer-events-none"
      style={{ left: `${x}%`, animationDelay: `${delay}s`, zIndex: 1 }}
    >
      <div
        style={{
          width: size,
          height: size * 1.3,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          backgroundColor: color,
          boxShadow: `inset -8px -8px 20px rgba(0,0,0,0.15), inset 6px 6px 15px rgba(255,255,255,0.4)`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -2,
            left: "50%",
            transform: "translateX(-50%)",
            width: 6,
            height: 6,
            backgroundColor: color,
            borderRadius: "0 0 50% 50%",
          }}
        />
      </div>
      <div
        style={{
          width: 1,
          height: size * 1.5,
          backgroundColor: "rgba(100,100,100,0.4)",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

// --- Cake Candle ---
function Candle({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Flame */}
      <div className="animate-candle" style={{ transformOrigin: "bottom center" }}>
        <div
          style={{
            width: 10,
            height: 16,
            borderRadius: "50% 50% 30% 30%",
            background: "linear-gradient(to top, #ff6600, #ffcc00, #fff9c4)",
            boxShadow: "0 0 8px 3px rgba(255,165,0,0.6)",
          }}
        />
      </div>
      {/* Candle body */}
      <div
        style={{
          width: 12,
          height: 40,
          borderRadius: "3px",
          backgroundColor: color,
          boxShadow: `inset -3px 0 6px rgba(0,0,0,0.15)`,
        }}
      />
    </div>
  );
}

// --- Cake ---
function BirthdayCake() {
  const candleColors = ["#ff6b9d", "#6bbdff", "#ffe66d", "#6bffb8", "#c06bff"];
  return (
    <div className="flex flex-col items-center select-none">
      {/* Candles */}
      <div className="flex gap-3 mb-1">
        {candleColors.map((c, i) => (
          <Candle key={i} color={c} />
        ))}
      </div>
      {/* Top tier */}
      <div
        style={{
          width: 140,
          height: 50,
          borderRadius: "12px 12px 0 0",
          background: "linear-gradient(135deg, #ff9eb5, #ff6b9d)",
          boxShadow: "0 4px 15px rgba(255,107,157,0.4)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Frosting drips */}
        {[15, 35, 55, 75, 95].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: `${x}%`,
              width: 14,
              height: 18,
              borderRadius: "0 0 8px 8px",
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 20,
          }}
        >
          🌸
        </div>
      </div>
      {/* Separator */}
      <div
        style={{
          width: 160,
          height: 10,
          background: "linear-gradient(90deg, #ffe66d, #ffb347, #ffe66d)",
          borderRadius: 4,
        }}
      />
      {/* Middle tier */}
      <div
        style={{
          width: 200,
          height: 60,
          borderRadius: "4px",
          background: "linear-gradient(135deg, #c06bff, #9b59b6)",
          boxShadow: "0 4px 15px rgba(192,107,255,0.4)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[20, 50, 80].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: `${x}%`,
              width: 18,
              height: 22,
              borderRadius: "0 0 10px 10px",
              backgroundColor: "rgba(255,255,255,0.6)",
            }}
          />
        ))}
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", letterSpacing: 2 }}>
          ✦ ✦ ✦ ✦ ✦
        </span>
      </div>
      {/* Separator */}
      <div
        style={{
          width: 220,
          height: 10,
          background: "linear-gradient(90deg, #6bffb8, #6bbdff, #6bffb8)",
          borderRadius: 4,
        }}
      />
      {/* Bottom tier */}
      <div
        style={{
          width: 260,
          height: 70,
          borderRadius: "4px 4px 20px 20px",
          background: "linear-gradient(135deg, #6bbdff, #3a9bd5)",
          boxShadow: "0 8px 25px rgba(107,189,255,0.5)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 20px",
        }}
      >
        {[10, 30, 50, 70, 90].map((x, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: `${x}%`,
              width: 22,
              height: 26,
              borderRadius: "0 0 12px 12px",
              backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
        ))}
        {["🌟", "💎", "🌟"].map((e, i) => (
          <span key={i} style={{ fontSize: 20, zIndex: 1 }}>
            {e}
          </span>
        ))}
      </div>
      {/* Plate */}
      <div
        style={{
          width: 300,
          height: 16,
          borderRadius: "50%",
          background: "linear-gradient(90deg, #e8e8e8, #fff, #e8e8e8)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
}

// --- Sparkle Star ---
function Sparkle({
  x,
  y,
  size,
  delay,
  color,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
}) {
  return (
    <div
      className="animate-sparkle absolute pointer-events-none select-none"
      style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path
          d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

// --- Main Page ---
export default function HappyBirthday() {
  const [showContent, setShowContent] = useState(false);
  const [playingMusic, setPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      // Simple beep melody using Web Audio API
      const ctx = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
      const melody = [
        [523, 0.3], [523, 0.3], [587, 0.6], [523, 0.6], [698, 0.6], [659, 1.2],
        [523, 0.3], [523, 0.3], [587, 0.6], [523, 0.6], [784, 0.6], [698, 1.2],
        [523, 0.3], [523, 0.3], [1047, 0.6], [880, 0.6], [698, 0.6], [659, 0.6], [587, 1.0],
        [932, 0.3], [932, 0.3], [880, 0.6], [698, 0.6], [784, 0.6], [698, 1.2],
      ] as [number, number][];

      let time = ctx.currentTime + 0.1;
      melody.forEach(([freq, dur]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.3, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + dur - 0.05);
        osc.start(time);
        osc.stop(time + dur);
        time += dur;
      });
      setPlayingMusic(true);
      setTimeout(() => setPlayingMusic(false), time * 1000 - ctx.currentTime * 1000);
    }
  };

  const balloons = [
    { color: "#ff6b9d", x: 2, delay: 0, size: 60 },
    { color: "#ffe66d", x: 8, delay: 0.5, size: 50 },
    { color: "#6bffb8", x: 85, delay: 1, size: 55 },
    { color: "#6bbdff", x: 92, delay: 0.3, size: 65 },
    { color: "#c06bff", x: 96, delay: 0.8, size: 48 },
    { color: "#ffb347", x: 4, delay: 1.2, size: 45 },
  ];

  const sparkles = [
    { x: 5, y: 10, size: 16, delay: 0, color: "#ffd700" },
    { x: 90, y: 15, size: 20, delay: 0.5, color: "#ff6b9d" },
    { x: 15, y: 60, size: 14, delay: 1, color: "#6bbdff" },
    { x: 80, y: 55, size: 18, delay: 0.3, color: "#6bffb8" },
    { x: 50, y: 5, size: 12, delay: 0.7, color: "#c06bff" },
    { x: 25, y: 85, size: 16, delay: 1.3, color: "#ffb347" },
    { x: 70, y: 80, size: 14, delay: 0.9, color: "#ffd700" },
    { x: 95, y: 40, size: 10, delay: 0.2, color: "#ff6b9d" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fff0f8 0%, #f0f4ff 50%, #f8f0ff 100%)",
      }}
    >
      {/* Confetti */}
      <Confetti />

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}

      {/* Balloons */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {balloons.map((b, i) => (
          <Balloon key={i} {...b} />
        ))}
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center w-full max-w-3xl mx-auto px-4 py-10 gap-8"
      >
        {/* Title */}
        <div
          className={`text-center transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-6xl mb-2 animate-bounce-slow">🎉</div>
          <h1
            className="animate-shimmer font-extrabold leading-tight mb-1"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            Happy Birthday
          </h1>
          <h2
            className="font-black animate-rainbow"
            style={{
              fontSize: "clamp(3rem, 10vw, 6.5rem)",
              textShadow: "0 4px 20px rgba(255,107,157,0.3)",
            }}
          >
            Surekha! 🎂
          </h2>
        </div>

        {/* Cake */}
        <div
          className={`animate-bounce-slow transition-all duration-700 delay-200 ${showContent ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <BirthdayCake />
        </div>

        {/* Message card */}
        <div
          className={`glass-card rounded-3xl p-8 shadow-2xl w-full max-w-xl text-center transition-all duration-700 delay-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ border: "2px solid rgba(255,107,157,0.3)" }}
        >
          <p className="text-2xl mb-4">🌸</p>
          <p
            className="text-lg leading-relaxed font-medium"
            style={{ color: "#5a2d6b" }}
          >
            Wishing you a day as bright, beautiful, and joyful as you are!
            May this year bring you endless happiness, love, laughter, and
            all your dreams come true. 💖
          </p>
          <p className="text-2xl mt-4">🌸</p>
        </div>

        {/* Emoji row */}
        <div
          className={`flex flex-wrap justify-center gap-4 text-5xl transition-all duration-700 delay-400 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {["🎁", "🎈", "🌺", "💐", "🦋", "✨", "🎊", "🌟"].map((e, i) => (
            <span
              key={i}
              className="animate-float"
              style={{ animationDelay: `${i * 0.3}s`, display: "inline-block" }}
            >
              {e}
            </span>
          ))}
        </div>

        {/* Wishes grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 w-full transition-all duration-700 delay-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { emoji: "💖", title: "Love", text: "May love surround you always" },
            { emoji: "✨", title: "Joy", text: "May every moment sparkle bright" },
            { emoji: "🌟", title: "Dreams", text: "May all your dreams come true" },
          ].map((card, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 text-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-default"
              style={{ border: "1.5px solid rgba(192,107,255,0.25)" }}
            >
              <div className="text-4xl mb-2 animate-heart" style={{ animationDelay: `${i * 0.4}s` }}>
                {card.emoji}
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: "#7b2d9b" }}>
                {card.title}
              </h3>
              <p className="text-sm" style={{ color: "#6b4f7b" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Play music button */}
        <button
          onClick={toggleMusic}
          className={`px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            background: "linear-gradient(135deg, #ff6b9d, #c06bff)",
            boxShadow: "0 8px 25px rgba(255,107,157,0.5)",
            transitionDelay: "0.6s",
          }}
          disabled={playingMusic}
        >
          {playingMusic ? "🎵 Playing..." : "🎵 Play Birthday Song"}
        </button>

        {/* Footer */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${showContent ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-2xl animate-heart" style={{ color: "#ff6b9d" }}>
            ❤️ Have a wonderful birthday, Surekha! ❤️
          </p>
          <p className="mt-2 text-sm" style={{ color: "#a07ab0" }}>
            🎂 November 5 🎂
          </p>
        </div>
      </div>
    </div>
  );
}
