function Hero() {
  return (
    <section className="scroll-section">
      <div className="scroll-card floral-card relative flex w-full max-w-[390px] flex-col items-center justify-between overflow-hidden px-6 py-10 shadow-[0_24px_80px_rgba(57,91,119,0.10)] sm:max-w-[620px] sm:px-11 md:max-w-[760px] md:px-16">

        <div className="soft-overlay" />
        
        {/* butterfly content */}

        <div className="mt-12">
          <div className="relative floral-content hero-inner-spacing flex w-full flex-1 flex-col items-center mt-14 text-center text-ink text-yellow">

          <h3 class="mt-8 mb-4 font-serif text-5xl leading-none sm:text-6xl text-yellow-50">﷽ </h3>

            <p className="mt-12 mb-6 font-invite text-2xl sm:text-4xl font-semibold  tracking-[0.02em] leading-tight text-center text-white">
              Majlis Pertunangan | Doa Kesyukuran <br/>
            </p>

            <p className="mx-auto mt-8 mb-12 max-w-xl font-invite text-lg font-medium leading-7 sm:text-2xl sm:leading-8 text-yellow-50">
              Dengan penuh rasa syukur,
              <br />
              Encik Saleh Bin Abd Hadi &amp;
              Puan Jamaliah Binti Nordin
              <br />
              dengan segala hormatnya menjemput anda
              <br/>
              untuk hadir ke majlis pertunangan
              <br />
              puteri sulung
              kesayangan mereka.
            </p>

            <div className="name-pair mt-12 mb-12 sm:mt-10">

              <p className="name-pair-text my-0 pt-12 pb-0">
                Noor Fahanah
              </p>

              <div className="name-pair-connector  my-0 py-0" aria-hidden="true">
                <span className="name-pair-line" />
                <span className="name-pair-ring-left" />
                <span className="name-pair-ring-right" />
                <span className="name-pair-text">&</span>
                <span className="name-pair-line" />
              </div>

              <p className="name-pair-text my-0 py-0">
              Syafiq Farhan
              </p>

            </div>
          </div>
        </div>

        <div className="relative mt-12">
          <p className="mx-auto mt-12 max-w-xl font-invite text-[1.25rem] font-normal leading-8 sm:text-2xl sm:leading-8 text-yellow-50">
          Sebentuk Cincin Tanda Muafakat,
            <br/>Dua Bentuk Cincin Tanda Terikat.
          </p>
        </div>
        <div className="relative z-10 pt-10">
          <p className="font-invite font-semibold tracking-[0.16em] text-yellow-50">
            #goingFARwithHANA
          </p>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
