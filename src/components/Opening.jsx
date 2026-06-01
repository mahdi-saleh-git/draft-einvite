import { useState } from "react";
import butterfly from "../assets/btf1.gif";

function Opening({ onOpen }) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleOpen = () => {
    if (isLeaving) return;

    setIsLeaving(true);
    onOpen({ delay: 950 });
  };

  return (
    <section
      className={`opening-screen relative min-h-screen cursor-pointer overflow-hidden px-6 py-12 text-center ${isLeaving ? "is-leaving" : ""}`}
      aria-label="Buka jemputan"
      onClick={handleOpen}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rose-50/70 via-white/10 to-rose-100/60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.18),_transparent_72%)]" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center">
        <div className="relative flex h-[540px] w-full max-w-5xl items-center justify-center overflow-hidden">
          <img
            src={butterfly}
            alt=""
            className="opening-butterfly opening-butterfly-left"
            aria-hidden="true"
          />
          <img
            src={butterfly}
            alt=""
            className="opening-butterfly opening-butterfly-right"
            aria-hidden="true"
          />

          <div className="opening-card relative z-10 mx-auto px-6 py-10 transition-all duration-700 ease-out">
            <button
              type="button"
              className="opening-button mx-auto mt-10 font-invite text-sm font-semibold uppercase tracking-[0.2em] md:text-base"
              onClick={(event) => {
                event.stopPropagation();
                handleOpen();
              }}
            >
              Unlock The Invitation 🤍
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .opening-card {
          transition-property: opacity, transform, filter;
        }

        .opening-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.35rem;
          border: 1px solid rgba(183, 19, 73, 0.18);
          border-radius: 999px;
          background: linear-gradient(135deg, #b71349, #cf4b78);
          color: #fff;
          padding: 0.95rem 1.35rem;
          box-shadow: 0 18px 40px rgba(183, 19, 73, 0.28);
          animation: promptPulse 2.2s ease-in-out infinite;
        }

        .opening-butterfly {
          position: absolute;
          z-index: 20;
          width: clamp(7.8rem, 23vw, 14rem);
          height: auto;
          filter:
            drop-shadow(0 14px 24px rgba(136, 19, 55, 0.18))
            drop-shadow(0 0 18px rgba(255, 192, 203, 0.26));
          pointer-events: none;
          transition: transform 950ms cubic-bezier(0.2, 0.8, 0.18, 1), opacity 620ms ease;
        }

        .opening-butterfly-left {
          left: clamp(0.4rem, 7vw, 7rem);
          top: 50%;
          transform: translateY(-42%) rotate(-13deg);
          animation: bigButterflyLeft 3.1s ease-in-out infinite;
        }

        .opening-butterfly-right {
          right: clamp(0.4rem, 7vw, 7rem);
          top: 49%;
          transform: translateY(-42%) scaleX(-1) rotate(-10deg);
          animation: bigButterflyRight 3.4s ease-in-out infinite;
        }

        .opening-screen.is-leaving .opening-card {
          opacity: 0;
          transform: scale(0.96) translateY(16px) !important;
          filter: blur(2px);
        }

        .opening-screen.is-leaving .opening-butterfly-left {
          opacity: 0;
          transform: translate(-68vw, -48vh) scale(0.72) rotate(-38deg);
          animation: none;
        }

        .opening-screen.is-leaving .opening-butterfly-right {
          opacity: 0;
          transform: translate(68vw, -48vh) scaleX(-1) scale(0.72) rotate(-34deg);
          animation: none;
        }

        @keyframes promptPulse {
          0%, 100% {
            opacity: 0.84;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }

        @keyframes bigButterflyLeft {
          0%, 100% {
            transform: translateY(-42%) rotate(-13deg);
          }
          50% {
            transform: translate(8px, -51%) rotate(-7deg);
          }
        }

        @keyframes bigButterflyRight {
          0%, 100% {
            transform: translateY(-42%) scaleX(-1) rotate(-10deg);
          }
          50% {
            transform: translate(-8px, -51%) scaleX(-1) rotate(-15deg);
          }
        }

        @media (max-width: 768px) {
          .opening-butterfly {
            width: clamp(6.8rem, 32vw, 10rem);
          }

          .opening-butterfly-left {
            left: -1.2rem;
            top: 59%;
          }

          .opening-butterfly-right {
            right: -1.2rem;
            top: 58%;
          }
        }
      `}</style>
    </section>
  );
}

export default Opening;
