import {
  Calendar,
  Clock,
  Gem,
  HeartHandshake,
  UtensilsCrossed,
  Sparkles,
  MapPin,
  Navigation,
  Route,
} from "lucide-react";

import butterfly1 from "../assets/btf1.gif";
import butterfly2 from "../assets/btf2.gif";
import butterfly3 from "../assets/btf3.gif";
import butterfly4 from "../assets/btf4.gif";

function EventDetails() {
  const mapLink =  "https://www.google.com/maps/place/4%C2%B004'37.3%22N+101%C2%B020'44.8%22E/@4.077024,101.345767,950m";
  const wazeLink = "https://waze.com/ul?ll=4.077024,101.345767&navigate=yes";

  return (
    <section className="scroll-section">
      <div className="scroll-card floral-card relative flex min-h-[100svh] w-full max-w-[440px] flex-col items-center justify-between overflow-hidden px-6 py-10 shadow-[0_24px_80px_rgba(57,91,119,0.10)] sm:max-w-[620px] sm:px-11 md:max-w-[760px] md:px-16">

        <div className="soft-overlay" />

        {/* butterflies (soft like hero) */}
        <div className="butterfly-group">
          <div className="flutter f1"><img src={butterfly1} alt="" /></div>
          <div className="flutter f2"><img src={butterfly2} alt="" /></div>
          <div className="flutter f5"><img src={butterfly3} alt="" /></div>
          <div className="flutter f6"><img src={butterfly4} alt="" /></div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center text-center text-ink">

          {/* TITLE */}
          <p className="font-invite text-xs font-bold uppercase tracking-[0.35em] text-rose-900/80">
            Atur Cara Majlis
          </p>

          {/* DATE CARD */}
          <div className="event-date-card mt-8 w-full max-w-[520px]">

            <div className="event-date-lockup">

              <div className="event-date-side">
                <Calendar className="h-4 w-4" strokeWidth={1.5} />
                <span>Jun</span>
              </div>

              <div className="event-date-number">
                <p>06</p>
              </div>

              <div className="event-date-side">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                <span>2026</span>
              </div>

            </div>

            <p className="event-day">Sabtu</p>

            <div className="event-time">
              <Clock className="h-4 w-4" strokeWidth={1.5} />
              <span>11:00 AM - 4:00 PM</span>
            </div>

          </div>

          {/* ACTIVITIES (formal list) */}
          <div className="mt-9 space-y-4 text-[#b71349] font-invite text-[0.95rem] sm:text-lg">

            <div className="flex items-center justify-center gap-3">
              <Gem className="h-4 w-4" />
              <span>Sesi Sarung Cincin</span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <HeartHandshake className="h-4 w-4" />
              <span>Doa Kesyukuran</span>
            </div>

            <div className="flex items-center justify-center gap-3">
              <UtensilsCrossed className="h-4 w-4" />
              <span>Jamuan Makan</span>
            </div>

          </div>

          {/* LOCATION CARD (NEW) */}
          <div className="mt-10 w-full max-w-[520px] rounded-[2rem] border border-rose-200/40 bg-white/60 p-6 backdrop-blur-md shadow-[0_10px_40px_rgba(90,60,70,0.08)]">

            <div className="flex flex-col items-center text-center">

              <MapPin className="h-10 w-10 text-[#b71349]" strokeWidth={1.4} />

              <p className="mt-4 font-invite text-sm font-bold uppercase tracking-[0.3em] text-[#b71349]">
                Lokasi
              </p>

              <p className="mt-2 font-invite text-lg font-semibold text-rose-950">
                Lokasi Majlis
              </p>

              <p className="mt-2 text-sm leading-6 text-rose-950/70">
                Klik butang di bawah untuk navigasi ke lokasi majlis.
              </p>

              {/* buttons */}
              <div className="mt-6 grid w-full grid-cols-2 gap-3">

                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#b71349] px-4 py-3 text-xs font-semibold text-white shadow-md"
                >
                  <Navigation className="h-4 w-4" />
                  Google Maps
                </a>

                <a
                  href={wazeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#b71349] px-4 py-3 text-xs font-semibold text-[#b71349]"
                >
                  <Route className="h-4 w-4" />
                  Waze
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* hashtag */}
        <div className="relative z-10 pt-10">
          <p className="font-invite text-sm font-semibold tracking-[0.16em] text-[#b71349]">
            #goingFARwithHANA
          </p>
        </div>

      </div>
    </section>
  );
}

export default EventDetails;