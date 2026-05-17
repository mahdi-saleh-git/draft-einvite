import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Location from "./components/Location";

function App() {
  return (
    <main className="invite-shell min-h-screen scroll-smooth">
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <Hero />
        <EventDetails />
        <Location />
      </div>
    </main>
  );
}

export default App;
