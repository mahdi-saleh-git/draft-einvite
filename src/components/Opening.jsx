import { useEffect, useState } from "react";
import { Flower2, Sparkles } from "lucide-react";
import bismillahImage from "../assets/bsm_3.png";

const flowers = [
  { id: 1, side: "left", startX: -210, startY: -150, endX: -180, endY: -56, size: 26, delay: 0 },
  { id: 2, side: "left", startX: -160, startY: 150, endX: -205, endY: 12, size: 20, delay: 120 },
  { id: 3, side: "left", startX: -55, startY: -210, endX: -148, endY: 88, size: 18, delay: 220 },
  { id: 4, side: "left", startX: -250, startY: 20, endX: -226, endY: 136, size: 24, delay: 320 },
  { id: 5, side: "left", startX: -120, startY: 240, endX: -168, endY: -126, size: 16, delay: 420 },
  { id: 6, side: "right", startX: 210, startY: -160, endX: 180, endY: -46, size: 26, delay: 80 },
  { id: 7, side: "right", startX: 170, startY: 156, endX: 210, endY: 20, size: 20, delay: 180 },
  { id: 8, side: "right", startX: 70, startY: -220, endX: 150, endY: 92, size: 18, delay: 260 },
  { id: 9, side: "right", startX: 245, startY: 30, endX: 230, endY: 138, size: 24, delay: 360 },
  { id: 10, side: "right", startX: 126, startY: 232, endX: 170, endY: -116, size: 16, delay: 460 },
];

function Opening() {
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsSettled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-12 text-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/70 via-white/10 to-rose-100/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.18),_transparent_72%)]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <div className="relative flex h-[540px] w-full max-w-5xl items-center justify-center overflow-hidden">
          {flowers.map((flower) => {
            const x = isSettled ? flower.endX : flower.startX;
            const y = isSettled ? flower.endY : flower.startY;
            const scale = isSettled ? 1 : 0.25;
            const opacity = isSettled ? 0.92 : 0;
            const rotate = isSettled ? (flower.side === "left" ? -10 : 10) : flower.side === "left" ? -180 : 180;

            return (
              <div
                key={flower.id}
                className="pointer-events-none absolute text-rose-500 drop-shadow-[0_6px_18px_rgba(136,19,55,0.18)]"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`,
                  transition: `transform 1400ms cubic-bezier(0.22, 1, 0.36, 1) ${flower.delay}ms, opacity 900ms ease ${flower.delay}ms`,
                  opacity,
                }}
              >
                <Flower2 size={flower.size} strokeWidth={1.8} />
              </div>
            );
          })}

          <div className="pointer-events-none absolute flex items-center justify-center" style={{ transform: `translateY(${isSettled ? 148 : 70}px) scale(${isSettled ? 1 : 0.42})`, transition: "transform 1600ms cubic-bezier(0.22, 1, 0.36, 1) 120ms" }}>
            <div className="relative h-20 w-32">
              <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-[70%] -translate-y-1/2 rounded-full border-[3px] border-amber-300/90 bg-white/20 shadow-[0_0_30px_rgba(251,191,36,0.24)] backdrop-blur-[1px]" />
              <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-[18%] -translate-y-1/2 rounded-full border-[3px] border-amber-400/95 bg-white/20 shadow-[0_0_30px_rgba(251,191,36,0.24)] backdrop-blur-[1px]" />
              <Sparkles className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-200 ring-sparkle" size={18} strokeWidth={2} />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl rounded-[2.5rem] px-6 py-10 backdrop-blur-[2px] transition-all duration-[1600ms] ease-out" style={{ transform: `scale(${isSettled ? 1 : 0.82}) translateY(${isSettled ? 0 : 26}px)`, opacity: isSettled ? 1 : 0.35 }}>
            <img
              src={bismillahImage}
              alt="Dengan Nama Allah"
              className="mx-auto mb-3 w-72 max-w-full md:w-80"
            />

            <p className="mx-auto mb-6 mt-2 max-w-xl font-serif text-sm tracking-[0.32em] text-rose-950 md:text-base">
              With heartfelt gratitude, Mr. Saleh bin Abd Hadi & Mrs. Jamaliah binti Nordin
              <br />
              warmly invite you to celebrate the engagement of their beloved daughter
            </p>

            <div className="space-y-1 text-rose-950">
              <h1 className="font-corinthia text-6xl font-bold leading-none md:text-8xl">
                Noor Fahanah
              </h1>
              <h2 className="text-xl font-light uppercase tracking-[0.45em] text-rose-800 md:text-2xl">
                with
              </h2>
              <h1 className="font-corinthia text-6xl font-bold leading-none md:text-8xl">
                Farhan
              </h1>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ring-sparkle {
          animation: ringGlow 2.6s ease-in-out infinite;
        }

        @keyframes ringGlow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.12);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          section .absolute[style*="translate("] {
            filter: drop-shadow(0 4px 10px rgba(136, 19, 55, 0.12));
          }
        }
      `}</style>
    </section>
  );
}

export default Opening;