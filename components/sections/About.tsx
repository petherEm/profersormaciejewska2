import React from "react";

const About = () => {
  return (
    <section className="py-12 dark:bg-black lg:py-24">
      <div className="container">
        <div
          className="flex flex-col items-center gap-5 lg:flex-row"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex-none lg:max-w-[130px]">
            <div className="grid grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-1">
              <div className="rounded-[10px] bg-white py-4 px-6 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white/10 sm:py-[19px]">
                <span>
                  <img
                    src="/assets/images/consulting/about-icon1.svg"
                    className="mx-auto"
                    alt=""
                  />
                </span>
                <p className="text-b mt-2 font-semibold text-black dark:text-white sm:text-xl">
                  Vision
                </p>
              </div>
              <div className="rounded-[10px] bg-white py-4 px-6 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white/10 sm:py-[19px]">
                <span>
                  <img
                    src="/assets/images/consulting/about-icon2.svg"
                    className="mx-auto"
                    alt=""
                  />
                </span>
                <p className="mt-2 font-semibold text-black dark:text-white sm:text-xl">
                  Missions
                </p>
              </div>
              <div className="rounded-[10px] bg-white py-4 px-6 text-center shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:bg-white/10 sm:py-[19px]">
                <span>
                  <img
                    src="/assets/images/consulting/about-icon3.svg"
                    className="mx-auto"
                    alt=""
                  />
                </span>
                <p className="mt-2 font-semibold text-black dark:text-white sm:text-xl">
                  Goals
                </p>
              </div>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <img
                src="/assets/images/consulting/about-img.png"
                className="mx-auto"
                alt=""
              />
            </div>
            <div className="space-y-4 text-center ltr:md:text-left rtl:md:text-right">
              <h3 className="text-3xl font-black uppercase text-black dark:text-white sm:text-[40px] sm:leading-[60px]">
                Benefits of <span className="text-secondary">wellbein</span> and
                positive <span className="text-primary">employee</span>
              </h3>
              <p className="text-lg font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <button
                type="button"
                className="btn rounded-md text-white shadow-[10px_15px_30px_rgba(119,128,161,0.2)]"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
