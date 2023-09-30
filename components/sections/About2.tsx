import Image from "next/image";

const About2 = () => {
  return (
    <div className=" py-14 bg-black md:py-20">
      <div className="container">
        <div className="grid items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/assets/images/consulting/Anobgr.png"
              alt=""
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="mb-2">
              <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                <span className="text-primary">/</span> O mnie
              </h6>
              <h2 className="text-3xl font-black leading-normal text-white md:text-[20px]">
                Jestem Profesorem doktorem habilitowanym w dziedzinie nauk
                rolniczych specjalizuącym się w ochronie i kształtowaniu
                środowiska przyrodniczego.
              </h2>
            </div>
            <p className="text-lg text-white font-medium">
              Tytuł profesora uzyskałam w roku 2000. W 2016 roku, dzięki mojemu
              bogatemu dorobkowi naukowemu, Centralna Komisja ds. Stopni i
              Tytułów przyznała mi uprawnienia profesorskie do nadawania stopni
              naukowych i tytułów w dziedzinie nauk inżynieryjno-technicznych.
            </p>
            <br />
            <p className="text-lg text-white font-medium">
              Moja przygoda z nauką rozpoczęła się na Uniwersytecie Warszawskim,
              na Wydziale Chemii. W 1985 roku zdobyłam tytuł Doktora w zakresie
              gleboznawstwa. Kolejne lata poświęciłam na rozwijanie swojej
              kariery naukowej, co zaowocowało uzyskaniem w 1994 roku stopnia
              doktora habilitowanego w dziedzinie nauk rolniczych, koncentrując
              się na ochronie i kształtowaniu środowiska.
            </p>
          </div>
        </div>
        <div>
          <div className="my-6 grid gap-4 text-lg font-bold text-white sm:mt-12 sm:mb-8 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-black text-primary md:text-5xl">
                1985
              </h2>
              <p>Doktorat</p>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-black text-primary/80 md:text-5xl">
                1994
              </h2>
              <p>Habilitacja</p>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-black text-secondary md:text-5xl">
                2000
              </h2>
              <p>Tytuł Profesora</p>
            </div>
          </div>
          <div className="my-6 grid gap-4 text-lg font-bold text-white sm:mt-12 sm:mb-8 sm:grid-cols-2">
            <div className="text-lg font-medium">
              <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                <span className="text-primary">/</span> Działalność naukowa
              </h6>
              Moja działalność naukowa zaowocowała licznymi publikacjami. Jestem
              autorką lub współautorką{" "}
              <span className="font-bold">
                ponad 200 prac, w tym 85 oryginalnych artykułów naukowych
                opublikowanych w renomowanych czasopismach krajowych i
                zagranicznych. Moje dorobek obejmuje również 4 książki
                autorskie, 13 redagowanych monografii, 29 rozdziałów w pracach
                zbiorowych oraz 36 publikacji w materiałach konferencyjnych.
              </span>{" "}
              Brałam aktywny udział w ponad sześćdziesięciu konferencjach
              międzynarodowych, prezentując moje badania.
            </div>
            <div className="text-lg font-medium">
              <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                <span className="text-primary">/</span> Międzynarodowe
                doświadczenie
              </h6>
              Miałam przyjemność zdobywać doświadczenie naukowe w prestiżowych
              uczelniach za granicą, takich jak{" "}
              <span className="font-bold">
                Michigan State University w Stanach Zjednoczonych, Sorbone
                University we Francji oraz Kazachski Uniwersytet Agrotechniczny
                w Astanie.{" "}
              </span>
              Moje zainteresowania naukowe skupiają się wokół projektów
              dotyczących rekultywacji i zagospodarowania obszarów
              zdegradowanych, głównie na terenach postindustrialnych i
              pogórniczych. Współpracowałam przy wielu projektach
              naukowo-badawczych, w tym tych finansowanych przez Ministerstwo
              Nauki oraz podmioty gospodarcze. Wiele z moich badań znalazło
              zastosowanie w praktyce, w tym w Kopalni Węgla Brunatnego „Konin”.
              <br />Z dumą mogę stwierdzić, że moja praca naukowa przyczyniła
              się do postępu w dziedzinie ochrony i kształtowania środowiska,
              zarówno w kraju, jak i za granicą.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
