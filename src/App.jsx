import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Opening from "./components/Opening";
// import Location from "./components/Location";

function App() {
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const audioRef = useRef(null);
  const revealTimerRef = useRef(null);

  const openInvite = ({ delay = 0 } = {}) => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.45;
      audio.play().catch(() => {
        // Playback can fail if the music file has not been added yet.
      });
    }

    window.clearTimeout(revealTimerRef.current);
    revealTimerRef.current = window.setTimeout(() => {
      setIsInviteOpen(true);
    }, delay);
  };

  useEffect(() => {
    return () => window.clearTimeout(revealTimerRef.current);
  }, []);

  return (
    <main className="invite-shell min-h-screen scroll-smooth">
      <audio ref={audioRef} src="/music.mp3" preload="auto" loop />

      {!isInviteOpen ? (
        <Opening onOpen={openInvite} />
      ) : (
        <div className="invite-reveal relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
          <Hero />
          <EventDetails />
          {/* <Location /> */}
        </div>
      )}
    </main>
  );
}

export default App;
