import bismillahImage from "../assets/bsm_3.png";
import butterfly1 from "../assets/btf1.gif";
import butterfly2 from "../assets/btf2.gif";
import butterfly3 from "../assets/btf3.gif";
import butterfly4 from "../assets/btf4.gif";
import butterfly5 from "../assets/btf5.gif";

function Hero() {
  return (
    <section className="scroll-section">
      <div className="scroll-card floral-card relative flex w-full max-w-[440px] flex-col items-center justify-between overflow-hidden px-6 py-10 shadow-[0_24px_80px_rgba(57,91,119,0.10)] sm:max-w-[620px] sm:px-11 md:max-w-[760px] md:px-16">

        <div className="soft-overlay" />
        
        {/* butterfly content */}

        <div className="relative floral-content hero-inner-spacing flex w-full flex-1 flex-col items-center justify-center text-center text-ink">

          <img
            src={bismillahImage}
            alt="Dengan Nama Allah"
            className="mt-12 mb-12 w-80 max-w-full opacity-70 sm:w-80"
          />

          <p className="mt-4 mb-8 font-invite text-lg sm:text-xl font-bold uppercase tracking-[0.35em] text-rose-900 leading-tight text-center">
            Majlis Pertunangan <br />
            & <br />
            Doa Kesyukuran<br />
          </p>

          <p className="mx-auto mt-4 mb-6 max-w-xl font-invite text-[0.90rem] font-medium leading-5 text-rose-950/80 sm:text-2xl sm:leading-6">
            Dengan penuh kesyukuran,
            <br/>Encik Saleh Bin Abd Hadi &
            Puan Jamaliah Binti Nordin 
            <br/> menjemput anda ke majlis
            pertunangan puteri sulung kesayangan mereka.
          </p>

          <div className="name-pair mt-12 text-rose-950 sm:mt-10">

            <p className="name-pair-text">
              Noor Fahanah
            </p>

            <div className="name-pair-connector" aria-hidden="true">
              <span className="name-pair-line" />
              <span className="name-pair-ring-left" />
              <span className="name-pair-ring-right" />
              <span className="name-pair-label">&</span>
              <span className="name-pair-line" />
            </div>

            <p className="name-pair-text">
            Syafiq Farhan
            </p>

          </div>

          <p className="mx-auto mt-12 max-w-xl font-invite text-[1.05rem] font-normal leading-5 text-rose-950/80 sm:text-2xl sm:leading-7">
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
