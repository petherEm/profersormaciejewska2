"use client";
import Link from "next/link";

import CountUp from "react-countup";

const HelpBusiness = () => {
  return (
    <section className="bg-black bg-[url(/assets/images/consulting/business-img.png)] bg-cover bg-center bg-no-repeat py-12 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 text-center lg:grid-cols-2 lg:gap-20 ltr:lg:text-left rtl:lg:text-right">
          <div>
            <h3 className="text-3xl font-black uppercase text-white sm:text-[40px] sm:leading-[50px]">
              Współpracuję z{" "}
              <span className="text-primary">
                Uczelniami Wyższymi, Samorządami i Firmami
              </span>
            </h3>
            <p className="mt-[18px] text-lg">
              We help managing asset, provide financial advise. leave money
              issue with us and focus on your core business.
            </p>
            <div className="mt-[18px] flex justify-center gap-6 lg:justify-start">
              <div>
                <Link
                  href="/contact-us"
                  className="btn rounded-md bg-secondary text-white shadow-[10px_15px_30px_rgba(199,128,161,0.2)] hover:bg-primary"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-2 items-center gap-3 sm:gap-7"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="border border-transparent bg-gray/20 py-10 px-5 text-center duration-200 hover:border-secondary sm:py-[52px]">
              <div className="text-[34px] font-black text-white">
                <CountUp start={0} end={20} duration={6} suffix="+"></CountUp>
              </div>
              <p className="mt-2.5 font-bold">Ekspertyz</p>
            </div>
            <div className="border border-transparent bg-gray/20 py-10 px-5 text-center duration-200 hover:border-secondary sm:py-[52px]">
              <div className="text-[34px] font-black text-white">
                <CountUp start={0} end={12} duration={6} suffix="+"></CountUp>
              </div>
              <p className="mt-2.5 font-bold">Projektów samorządowych</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpBusiness;
