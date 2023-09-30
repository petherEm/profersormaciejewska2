import Link from "next/link";

import Hero from "@/components/sections/Hero";

import About2 from "@/components/sections/About2";
import CounterExperience from "@/components/sections/CounterExperience";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ArticlesIntro from "@/components/sections/ArticlesIntro";
import HelpBusiness from "@/components/sections/HelpBusiness";

const Home = () => {
  return (
    <div>
      <Hero />
      <About2 />
      <CounterExperience />
      <WhatWeDo />
      <ArticlesIntro />
      <HelpBusiness />
    </div>
  );
};

export default Home;
