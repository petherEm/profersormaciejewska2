import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[url(/assets/images/consulting/pwmain.jpg)] bg-black/60 bg-blend-soft-light bg-cover bg-center bg-no-repeat pt-[82px] text-white lg:pt-[106px]">
      <div className="container z-20">
        <div className="flex flex-col gap-7 pt-6 md:flex-row md:gap-0">
          <div className="space-y-5 pt-24 pb-10 text-center md:text-left animate-fade-right animate-once animate-ease-in-out">
            <h5 className="text-2xl font-bold">Prof. dr hab.</h5>
            <h2 className="text-4xl font-black uppercase sm:text-6xl sm:leading-tight">
              Alina <span className="text-secondary">Maciejewska</span>
            </h2>
            <p className="text-2xl font-semibold">
              Ekspertka w odtwarzaniu materii organicznej w glebach i w gruntach
              zdegradowanych oraz w technologii wytwarzania produktów opartych
              na węglu brunatnym do biologicznej rekultywacji terenów.
            </p>
            <div className="flex items-center justify-center gap-5 md:justify-start">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary/50 duration-200 hover:bg-black">
                <img src="/assets/images/consulting/banner-icon1.svg" alt="" />
              </div>
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary/50 duration-200 hover:bg-black">
                <img src="/assets/images/consulting/banner-icon2.svg" alt="" />
              </div>
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary/50 duration-200 hover:bg-black">
                <img src="/assets/images/consulting/banner-icon3.svg" alt="" />
              </div>
            </div>
            <Link href="/contact-us" className="btn rounded-md bg-white">
              Kontakt
            </Link>
          </div>
          <div className="mx-auto w-full max-w-[600px]">
            {/* <Image
              src="/assets/images/consulting/chemanimation.gif"
              alt=""
              width={600}
              height={600}
              className=""
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
