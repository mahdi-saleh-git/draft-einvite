import bismillahImage from "../assets/bsm_3.png";
import butterfly1 from "../assets/btf1.gif";
import butterfly2 from "../assets/btf2.gif";
import butterfly3 from "../assets/btf3.gif";
import butterfly4 from "../assets/btf4.gif";
import butterfly5 from "../assets/btf5.gif";

function Hero() {
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

        <div className="relative floral-content hero-inner-spacing flex w-full flex-1 flex-col items-center justify-center text-center text-ink">

          <img
            src={bismillahImage}
            alt="Dengan Nama Allah"
            className="mt-12 w-50 mb-12 max-w-full opacity-70 sm:w-60"
          />

          <p className="mt-4 mb-8 font-invite text-lg sm:text-xl font-bold uppercase tracking-[0.35em] text-rose-900 leading-relaxed text-center">
            Majlis Pertunangan <br />
            & <br />
            Doa Kesyukuran<br />
          </p>

          <p className="mx-auto mt-4 mb-6 max-w-xl font-invite text-[1.05rem] font-medium leading-7 text-rose-950/80 sm:text-2xl sm:leading-9">
            Dengan penuh kesyukuran,
            <br/>Encik Saleh Bin Abd Hadi &
            Puan Jamaliah Binti Nordin 
            <br/> menjemput anda ke majlis
            pertunangan puteri sulung kesayangan mereka.
          </p>

          <div className="name-pair mt-12 text-rose-950 sm:mt-10">

            <p className="name-pair-text">
              Syafiq Farhan
            </p>

            <div className="name-pair-connector" aria-hidden="true">
              <span className="name-pair-line" />
              <span className="name-pair-ring-left" />
              <span className="name-pair-ring-right" />
              <span className="name-pair-label">&</span>
              <span className="name-pair-line" />
            </div>

            <p className="name-pair-text">
              Noor Fahanah
            </p>

          </div>

          <p className="mx-auto mt-12 max-w-xl font-invite text-[1.05rem] font-normal leading-7 text-rose-950/80 sm:text-2xl sm:leading-9">
          Sebentuk Cincin Tanda Muafakat,
            <br/>Dua Bentuk Cincin Tanda Terikat.
          </p>

        </div>

        <div className="relative z-10 pt-10">
          <p className="font-invite font-semibold tracking-[0.16em] text-[#b71349]">
            #goingFARwithHANA
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;