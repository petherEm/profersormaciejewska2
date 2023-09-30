"use client";

import React from "react";
import CountUp from "react-countup";

const CounterExperience = () => {
  return (
    <section className="bg-gray-dark md:py-20">
      <div className="container">
        <div className="grid rounded-[10px] border-[2px] border-secondary/20 text-center font-semibold text-white sm:grid-cols-4 sm:ltr:text-left sm:rtl:text-right lg:text-xl">
          <div className="px-5 py-8 md:py-10 md:px-12">
            <div className="mb-4 text-[40px] font-extrabold text-primary">
              <CountUp start={0} end={48} duration={10} suffix="+"></CountUp>
            </div>
            <h6>Lat w nauce</h6>
          </div>
          <div className="bg-secondary/10 px-5 py-8 md:py-10 md:px-12">
            <div className="mb-4 text-[40px] font-extrabold text-secondary">
              <CountUp start={0} end={5} duration={6} suffix=""></CountUp>
            </div>
            <h6>Wypromowanych doktorów</h6>
          </div>
          <div className="px-5 py-8 md:py-10 md:px-12">
            <div className="mb-4 text-[40px] font-extrabold text-primary">
              <CountUp start={0} end={200} duration={10} suffix="+"></CountUp>
            </div>
            <h6>Publikacji naukowych</h6>
          </div>
          <div className="bg-secondary/10 px-5 py-8 md:py-10 md:px-12">
            <div className="mb-4 text-[40px] font-extrabold text-secondary">
              <CountUp start={0} end={99} duration={10} suffix="+"></CountUp>
            </div>
            <h6>Nagród i wyróznień</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterExperience;
