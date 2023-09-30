"use client";

import { useState } from "react";
import AnimateHeight from "react-animate-height";

const FAQ = () => {
  const queries = [
    {
      id: 1,
      question: "Are your service easy to use?",
      answer:
        "mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.",
    },
    {
      id: 2,
      question: "Will i receive future updates?",
      answer:
        "mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    },
    {
      id: 3,
      question: "Is this services work in my country?",
      answer:
        " mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
    },
    {
      id: 4,
      question: "How much I will pay?",
      answer:
        "mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod",
    },
  ];
  const [accordians, setAccordians] = useState<any>(0);
  return (
    <section className="py-12 lg:py-24">
      <div className="container">
        <div className="heading text-center">
          <h4 className="!font-black uppercase">
            Najczęściej zadawane <span className="text-secondary">pytania</span>
          </h4>
          <h6 className="mx-auto mt-2 max-w-[520px] !font-medium !text-gray">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Sunt,
            Architecto Cupiditate Odio Rerum Est
          </h6>
        </div>
        <div className="flex flex-col items-center gap-5 sm:gap-10 lg:flex-row">
          <div className="w-full max-w-[552px] flex-none">
            <img
              src="/assets/images/consulting/question-img.png"
              className="rtl:rotate-y-180"
              alt=""
            />
          </div>
          <div className="accordion-container flex-1">
            {queries.map((faq: any, i: number) => {
              return (
                <div key={faq.id} className="mt-5">
                  <button
                    type="button"
                    className="relative flex w-full items-center justify-between gap-2 !bg-gray/30 px-5 py-2.5 !font-mulish text-lg font-bold text-black ltr:text-left rtl:text-right dark:!text-white sm:text-xl"
                    onClick={() => setAccordians(accordians === i ? null : i)}
                  >
                    <div>{faq.question}</div>
                    <div className="trigger-icon grid h-6 w-6 place-content-center rounded-full border-2 border-gray text-black transition dark:text-white">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                          fill="currentColor"
                        />
                        <path
                          d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                  <AnimateHeight
                    duration={600}
                    height={accordians === i ? "auto" : 0}
                  >
                    <div className="bg-white p-5 font-mulish text-base font-medium text-gray dark:bg-white/5">
                      <p>{faq.answer}</p>
                    </div>
                  </AnimateHeight>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
