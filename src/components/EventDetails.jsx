import {
  Clock,
  MapPin,
  Navigation,
  Route,
} from "lucide-react";

function EventDetails() {
  const mapLink =  "https://www.google.com/maps/place/4%C2%B004'37.3%22N+101%C2%B020'44.8%22E/@4.077024,101.345767,950m";
  const wazeLink = "https://waze.com/ul?ll=4.077024,101.345767&navigate=yes";

  return (
    <section className="scroll-section">
      <div className="scroll-card floral-card relative flex w-full max-w-[440px] flex-col items-center justify-between overflow-hidden px-6 py-10 shadow-[0_24px_80px_rgba(57,91,119,0.10)] sm:max-w-[620px] sm:px-11 md:max-w-[760px] md:px-16">

        <div className="soft-overlay" />
        
        <div className="event-details-content relative z-10 flex w-full flex-1 flex-col items-center justify-center text-center text-ink">
          <div className="event-main-card w-full max-w-[620px]">
            <div className="event-date-showcase">
              <p className="event-section-label font-invite">
                Atur Cara Majlis
              </p>

              <div className="event-date-row">
                <div className="event-date-side">
                  <div className="event-side-line" />
                  <span>Jun</span>
                  <div className="event-side-line" />
                </div>

                <div className="event-date-middle">
                  <p className="event-big-date">06</p>
                </div>

                <div className="event-date-side">
                  <div className="event-side-line" />
                  <span>2026</span>
                  <div className="event-side-line" />
                </div>
              </div>

              <div className="event-lower-details">
                <p className="event-year">
                  Sabtu • 20 Zulhijjah 1447H
                </p>
              </div>

              <div className="event-time-pill">
                <Clock className="h-5 w-5" />
                <span>11:00 AM • 4:00 PM</span>
              </div>
            </div>

            <div className="event-divider" />

            <div className="event-location-block">
              <div className="location-icon-wrap">
                <MapPin className="h-8 w-8 text-[#b71349]" strokeWidth={1.7} />
              </div>

              <p className="location-title">
                Lokasi Majlis
              </p>

              <p className="location-desc">
                Klik butang di bawah untuk navigasi ke lokasi majlis
              </p>

              <div className="location-btn-grid">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="location-btn-primary"
                >
                  <Navigation className="h-4 w-4" />
                  Google Maps
                </a>

                <a
                  href={wazeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="location-btn-secondary"
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
          <p className="font-invite font-semibold tracking-[0.16em] text-[#b71349]">
            #goingFARwithHANA
          </p>
        </div>

      </div>
    </section>
  );
}

export default EventDetails;
