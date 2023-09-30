const projektyMN = [
  {
    id: 1,
    title: "Projekt badawczy - celowy",
    description:
      "Uruchomienie produkcji kompletnych nawozów organiczno-mineralnych wytworzonych z węgla brunatnego w tym kierowanie pracami badawczo-rozwojowymi p.t. Badanie zmian właściwości i zyzności gleb oraz ilości i jakości plonów pod wpływem nawozenia kompletnymi nawozami organiczno-mineralnymi wytworzonymi z węgla brunatnego.",
    dates: "1994-1997",
  },
  {
    id: 2,
    title: "Projekt badawczy",
    description:
      "Wpływ autostrad na rozłóg gruntów oraz kierunki użytkowania gruntów przyległych.",
    dates: "1993-1996",
  },
  {
    id: 3,
    title: "Projekt badawczy",
    description:
      "Uruchomienie produkcji kompletnych nawozów organiczno-mineralnych wytworzonych z węgla brunatnego w tym kierowanie pracami badawczo-rozwojowymi p.t. Badanie zmian właściwości i zyzności gleb oraz ilości i jakości plonów pod wpływem nawozenia kompletnymi nawozami organiczno-mineralnymi wytworzonymi z węgla brunatnego.",
    dates: "1994-1997",
  },
];

const Badania = () => {
  return (
    <div>
      <div className="bg-black pt-[82px] lg:pt-[106px]">
        <div className="relative">
          <div className="container">
            <div className="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
              <div className="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 lg:text-left">
                <h4 className="!text-secondary">
                  Główne obszary badań i projekty
                </h4>
              </div>
              <div className="top-0 mt-6 right-0 md:mt-0 lg:absolute">
                <img
                  src="/assets/images/blog-detail-hero.png"
                  alt="blog-detail-hero"
                  className="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-14 bg-black text-white md:py-[100px]">
        <div className="mt-24 container">
          <div className="prose max-w-full dark:prose-invert">
            <h2 className="text-secondary">Wstęp</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              a provident. Rem adipisci sunt laboriosam? Ipsum sunt alias
              aspernatur vel ullam soluta perferendis. Neque, facilis
              repudiandae veniam reiciendis sapiente odit!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              placeat molestiae nam est reiciendis. Voluptatum eligendi
              molestias atque vitae dignissimos natus autem corporis quis esse
              itaque! Quisquam dolorem architecto itaque. Voluptatum eligendi
              molestias atque vitae dignissimos natus autem corporis quis esse
              itaque! Quisquam dolorem architecto itaque. Voluptatum eligendi
              molestias atque vitae dignissimos natus autem corporis quis esse
              itaque! Quisquam dolorem architecto itaque.
            </p>

            <h2 className="text-secondary">
              Projekty finansowane przez Ministerstwo Nauki
            </h2>
            <ul>
              {projektyMN.map((projekt) => (
                <div key={projekt.id}>
                  <h2 className="text-primary">{projekt.title}</h2>
                  <p className="font-bold">{projekt.description}</p>
                  <p>Okres realizacji - {projekt.dates}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Badania;
