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
import butterfly5 from "../assets/btf5.gif";


function EventDetails() {
  const mapLink =  "https://www.google.com/maps/place/4%C2%B004'37.3%22N+101%C2%B020'44.8%22E/@4.077024,101.345767,950m";
  const wazeLink = "https://waze.com/ul?ll=4.077024,101.345767&navigate=yes";

  return (
    <section className="scroll-section">
      <div className="scroll-card floral-card relative flex min-h-[100svh] w-full max-w-[440px] flex-col items-center justify-between overflow-hidden px-6 py-10 shadow-[0_24px_80px_rgba(57,91,119,0.10)] sm:max-w-[620px] sm:px-11 md:max-w-[760px] md:px-16">

        <div className="soft-overlay" />

        {/* butterfly content */}
        <div className="butterfly-group">

          {/* LEFT SIDE */}

          <div className="flutter f1">
            <img src={butterfly1} alt="" />
          </div>

          <div className="flutter f2">
            <img src={butterfly2} alt="" />
          </div>

          <div className="flutter f3">
            <img src={butterfly4} alt="" />
          </div>

          <div className="flutter f4">
            <img src={butterfly1} alt="" />
          </div>

          <div className="flutter f15">
            <img src={butterfly5} alt="" />
          </div>

          <div className="flutter f17">
            <img src={butterfly5} alt="" />
          </div>

          {/* LOWER LEFT */}

          <div className="flutter f9">
            <img src={butterfly3} alt="" />
          </div>

          <div className="flutter f10">
            <img src={butterfly1} alt="" />
          </div>

          <div className="flutter f13">
            <img src={butterfly3} alt="" />
          </div>

          <div className="flutter f19">
            <img src={butterfly5} alt="" />
          </div>


          {/* RIGHT SIDE */}

          <div className="flutter f5">
            <img src={butterfly2} alt="" />
          </div>

          <div className="flutter f6">
            <img src={butterfly3} alt="" />
          </div>

          <div className="flutter f7">
            <img src={butterfly2} alt="" />
          </div>

          <div className="flutter f8">
            <img src={butterfly1} alt="" />
          </div>

          <div className="flutter f16">
            <img src={butterfly4} alt="" />
          </div>

          <div className="flutter f18">
            <img src={butterfly4} alt="" />
          </div>

          {/* LOWER RIGHT */}

          <div className="flutter f11">
            <img src={butterfly4} alt="" />
          </div>

          <div className="flutter f12">
            <img src={butterfly3} alt="" />
          </div>

          <div className="flutter f14">
            <img src={butterfly1} alt="" />
          </div>

          <div className="flutter f20">
            <img src={butterfly2} alt="" />
          </div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center text-center text-ink">


          {/* DATE & ACTIVITIES*/}
          <div className="event-main-card mt-10 w-full max-w-[620px]">

          {/* DATE HEADER */}
          <div className="event-date-showcase">

          <div className="pt-12 sm:pt-16">
            <p className="font-invite text-[1.05rem] sm:text-[1.2rem] font-bold uppercase tracking-[0.45em] text-[#a63a57]">
              Atur Cara Majlis
            </p>
          </div>

          {/* top line layout */}
          <div className="event-date-row">

            {/* MONTH */}
            <div className="event-date-side">
              <div className="event-side-line" />
              <span>Jun</span>
              <div className="event-side-line" />
            </div>

            {/* BIG DATE */}
            <div className="event-date-middle">
              <p className="event-big-date">06</p>
            </div>

            {/* TIME */}
            <div className="event-date-side">
              <div className="event-side-line" />
              <span>11:00 AM</span>
              <div className="event-side-line" />
            </div>

          </div>

          {/* lower details */}
          <div className="event-lower-details">

            <p className="event-year">
              Sabtu • 2026
            </p>

            <p className="event-hijri-date">
              20 Zulhijjah 1447H
            </p>

          </div>

          {/* time pill */}
          <div className="event-time-pill">
            <Clock className="h-5 w-5" />
            <span>11:00 AM • 4:00 PM</span>
          </div>

          </div>

          {/* divider */}
          <div className="event-divider" />

          <div className="flex flex-col items-center text-center">

          <div className="location-icon-wrap">
            <MapPin className="h-8 w-8 text-[#b71349]" strokeWidth={1.7} />
          </div>

          {/* <p className="location-label">
            Lokasi
          </p> */}

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
          {/* activities */}
          {/*　
            <div className="event-grid">

              <div className="event-item">
                <Gem className="h-5 w-5" />
                <span>Sarung Cincin</span>
              </div>

              <div className="event-item">
                <HeartHandshake className="h-5 w-5" />
                <span>Doa Kesyukuran</span>
              </div>

              <div className="event-item">
                <UtensilsCrossed className="h-5 w-5" />
                <span>Jamuan Makan</span>
              </div>

            </div>
          */}

          </div>

          {/* LOCATION CARD */}
          {/* <div className="location-card mt-10 w-full max-w-[620px]">

          <div className="flex flex-col items-center text-center">

            <div className="location-icon-wrap">
              <MapPin className="h-8 w-8 text-[#b71349]" strokeWidth={1.7} />
            </div>

            <p className="location-label">
              Lokasi
            </p>

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

          </div> */}

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