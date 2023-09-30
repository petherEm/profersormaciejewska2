import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto bg-white dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
      <div className="container">
        <div className="grid gap-y-4 gap-x-4 py-14 sm:grid-cols-2 lg:grid-cols-2 lg:py-[100px]">
          <div className="relative">
            <h1 className="mt-4 mb-8 text-4xl text-primary font-bold">
              Zapraszam do kontaktu
            </h1>

            <h1 className="text-2xl font-bold text-black">Alina Maciejewska</h1>
            <p>almaciejewska@gmail.com</p>
            <p>+48 333 444 555</p>
          </div>
          <div className="">
            <h1 className="mb-3 text-lg font-extrabold text-black dark:text-white">
              Linki:
            </h1>
            <ul className="gap-1 font-bold grid grid-cols-2">
              <li>
                <Link
                  href="/"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Główna
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Badania
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Publikacje
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="inline-block transition hover:scale-110 hover:text-secondary"
                >
                  Funkcje
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] py-5 dark:border-t-2 dark:border-white/5 dark:bg-none">
        <div className="container">
          <div className="items-center justify-between text-center font-bold text-black md:flex">
            <div>
              All rights reserved {new Date().getFullYear() + " "}
              <Link
                href="https://www.vabank.dev"
                className="!text-red-500 transition hover:!text-red-600"
              >
                vabank.dev
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
