import React from "react";

const WhatWeDo = () => {
  return (
    <section className="relative bg-black py-12 dark:bg-white/5 lg:py-24">
      <div className="container relative z-[1]">
        <div className="heading text-center text-white">
          <h4 className="mb-2 !font-black uppercase !text-white">
            Główne <span className="text-secondary">obszary badań</span>
          </h4>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            ratione! Ab, sint laborum.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-2 animate-rotate-y animate-once animate-ease-in">
          <div className="group">
            <div className="overflow-hidden">
              <img
                src="/assets/images/consulting/soil-1.jpg"
                className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
              <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">
                Wpływ czynników antropogenicznych na zmiany w ekosystemach
              </h5>
              <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
              <p className="pb-[60px] text-lg font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam aperiam quo quisquam dolor mollitia quaerat nobis
                itaque distinctio beatae cupiditate.
              </p>
            </div>
          </div>
          <div className="group">
            <div className="overflow-hidden">
              <img
                src="/assets/images/consulting/green-1.jpg"
                className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
              <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">
                Znaczenie Aspektów Ekologicznych I Krajobrazowych Istotnych W
                Opracowaniach Planistycznych
              </h5>
              <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
              <p className="pb-[60px] text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                tempora maiores aspernatur eum
              </p>
            </div>
          </div>
          <div className="group">
            <div className="overflow-hidden">
              <img
                src="/assets/images/consulting/soil-2.jpg"
                className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
              <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">
                Rewitalizacja Obszarów Zdegradowanych Jako Ważny Element
                Zwiększania Przestrzeni Publicznej Oraz Minimalizacja Skutków
                Antropopresji.
              </h5>
              <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
              <p className="pb-[60px] text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                tempora maiores aspernatur eum
              </p>
            </div>
          </div>
          <div className="group">
            <div className="overflow-hidden">
              <img
                src="/assets/images/consulting/soil-3.jpg"
                className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="relative mx-4 -mt-10 space-y-2.5 bg-gray-dark px-4 pt-[22px] text-center dark:bg-black md:px-[26px]">
              <h5 className="text-2xl font-bold text-primary group-hover:text-secondary">
                Przydatność Materii Organicznej Z Węgla Brunatnego I Torfu Do
                Zwiększania Aktywności Biologicznej Ekosystemów Na Obszarach
                Zdegradowanych Chemicznie.
              </h5>
              <div className="mx-auto h-1 w-[50px] bg-secondary duration-200 group-hover:bg-primary"></div>
              <p className="pb-[60px] text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                tempora maiores aspernatur eum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
