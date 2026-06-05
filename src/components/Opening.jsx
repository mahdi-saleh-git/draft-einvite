import { useState } from "react";
import bgopening from "../assets/bgopen.jpeg";

function Opening({ onOpen }) {
  const [isLeaving, setIsLeaving] = useState(false);

  const handleOpen = () => {
    if (isLeaving) return;

    setIsLeaving(true);
    onOpen({ delay: 950 });
  };

  return (
    <section
      className={`opening-screen relative flex h-svh min-h-svh cursor-pointer items-center justify-center overflow-hidden px-3 py-3 text-center sm:px-6 sm:py-6 ${isLeaving ? "is-leaving" : ""}`}
      aria-label="Buka jemputan"
      onClick={handleOpen}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#fdf7f8]" />

      <div
        className="opening-card relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[1.5rem] px-6 py-8 shadow-[0_24px_80px_rgba(57,91,119,0.10)] transition-all duration-700 ease-out sm:rounded-[2rem] sm:px-11 md:px-16"
        style={{ backgroundImage: `url(${bgopening})` }}
      >
        <div className="opening-soft-overlay" />

        <div className="opening-content relative z-10 flex w-full flex-col items-center text-center">
          <div className="opening-name-pair">
            <p className="opening-name-text">Noor Fahanah</p>
            <div className="opening-name-connector" aria-hidden="true">
              <span className="opening-name-line" />
              <span className="opening-name-text">&</span>
              <span className="opening-name-line" />
            </div>
            <p className="opening-name-text">Syafiq Farhan</p>
          </div>

            <button
              type="button"
            className="opening-button mx-auto mt-10 font-invite text-sm font-semibold uppercase tracking-[0.16em] sm:mt-12 sm:text-base"
              onClick={(event) => {
                event.stopPropagation();
                handleOpen();
              }}
            >
              Unlock The Invitation 🤍
            </button>
        </div>
      </div>

      <style>{`
        .opening-card {
          aspect-ratio: 736 / 1308;
          width: min(calc((100svh - 1.5rem) * 736 / 1308), calc(100vw - 1.5rem), 44rem);
          background-color: #fffdfd;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          isolation: isolate;
          container-type: inline-size;
          transition-property: opacity, transform, filter;
        }

        .opening-soft-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.10),
              rgba(255, 255, 255, 0.22)
            );
        }

        .opening-content {
          transform: translateY(13%);
        }

        .opening-name-pair {
          display: grid;
          justify-items: center;
          gap: clamp(0.75rem, 2vw, 1.05rem);
        }

        .opening-name-text {
          color: #2f3f2c;
          font-family: "Playwrite IN", cursive;
          font-size: clamp(2.05rem, 11cqw, 2.75rem);
          font-weight: 300;
          line-height: 1.2;
          text-align: center;
          white-space: nowrap;
          text-shadow: 0 2px 12px rgba(255, 255, 255, 0.72);
        }

        .opening-name-connector {
          display: grid;
          width: min(100%, 15rem);
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 0.7rem;
          color: #2f3f2c;
        }

        .opening-name-line {
          height: 2px;
          background: #2f3f2c;
          opacity: 0.78;
          box-shadow: 0 2px 10px rgba(255, 255, 255, 0.42);
        }

        .opening-name-label {
          font-family: "Cormorant Upright", serif;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          line-height: 0.8;
          color: #2f3f2c;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.72);
        }

        .opening-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 3.35rem;
          border: 1px solid rgba(110, 128, 83, 0.38);
          border-radius: 999px;
          background:
            linear-gradient(135deg, rgba(255, 253, 253, 0.92), rgba(247, 226, 232, 0.92)),
            linear-gradient(135deg, #8b9c69, #d69caf);
          color: #2f3f2c;
          text-shadow: 0 1px 8px rgba(255, 255, 255, 0.62);
          padding: 0.95rem 1.45rem;
          white-space: nowrap;
          box-shadow:
            0 18px 38px rgba(57, 91, 119, 0.12),
            inset 0 0 0 1px rgba(255, 255, 255, 0.55);
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
          .opening-card {
            width: min(calc(100vw - 1.5rem), 24rem);
            background-size: cover;
            background-position: center;
          }

          .opening-content {
            transform: translateY(12%);
          }

          .opening-name-text {
            font-size: clamp(2.15rem, 11cqw, 2.7rem) !important;
            padding-inline: clamp(1rem, 4vw, 3rem) !important;
          }

          .opening-name-pair {
            display: grid;
            justify-items: center;
            gap: clamp(0.75rem, 2vw, 1.05rem);
            padding-inline: clamp(1rem, 4vw, 3rem) !important;
          }

          .opening-name-connector {
            width: min(72%, 13rem);
          }

          .opening-button {
            max-width: calc(100vw - 3rem);
            padding: 0.85rem 1rem;
            font-size: 0.75rem;
            letter-spacing: 0.1em;
            white-space: nowrap;
          }

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
