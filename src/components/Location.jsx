import { Heart, MapPin, Navigation, Route } from "lucide-react";

function Location() {
  const mapLink = "https://maps.app.goo.gl/wfRdNT3M9tthFKb77";

  return (
    <section className="scroll-section scroll-section-last">
      <div className="scroll-card invite-card invite-panel relative flex min-h-[72svh] w-full max-w-[440px] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center shadow-[0_24px_80px_rgba(57,91,119,0.16)] sm:min-h-[680px] sm:max-w-[620px] sm:px-12 md:max-w-[760px]">
        <div className="paper-grain" />
        <div className="botanical-frame" aria-hidden="true" />
        <span className="butterfly butterfly-a" aria-hidden="true" />
        <span className="butterfly butterfly-b" aria-hidden="true" />
        <span className="butterfly butterfly-c" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-rose-950">
          <div className="ornament-line mx-auto" aria-hidden="true" />

          <p className="mt-5 font-invite text-xs font-bold uppercase tracking-[0.34em] text-leaf sm:text-sm">
            Lokasi
          </p>

          <h2 className="location-title mt-3 font-corinthia font-bold leading-none">
            Bertempat di
          </h2>

          <MapPin className="mt-6 h-12 w-12 text-pastel-pink sm:h-14 sm:w-14" strokeWidth={1.25} />

          <div className="mt-6 space-y-3 font-invite">
            <p className="text-2xl font-semibold leading-tight sm:text-4xl">
              Lokasi Majlis
            </p>
            <p className="mx-auto max-w-md text-base font-medium leading-7 text-rose-950/80 sm:text-xl sm:leading-8">
              Sila tekan butang peta untuk membuka lokasi majlis yang telah dikongsikan.
            </p>
          </div>

          <div className="mt-8 grid w-full max-w-md grid-cols-2 gap-3">
            <a
              className="invite-action"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation className="h-4 w-4" />
              Google Maps
            </a>
            <a
              className="invite-action"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
            >
              <Route className="h-4 w-4" />
              Arah Jalan
            </a>
          </div>

          <Heart className="mt-9 h-9 w-9 rotate-12 text-pastel-pink opacity-80" strokeWidth={1.25} />
          <p className="mt-4 font-invite text-sm font-semibold tracking-[0.16em] text-leaf sm:text-base">
            #goingFARwithHANA
          </p>
        </div>
      </div>
    </section>
  );
}

export default Location;
