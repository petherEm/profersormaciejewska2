"use client";

/* eslint-disable max-len */
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = (props: any) => {
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-black/10 duration-300 ${props.className}`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-5 lg:py-0">
          <Link href="/">
            <h1 className="text-white text-2xl font-bold">Alina Maciejewska</h1>
          </Link>
          <div className="flex items-center">
            <div
              onClick={() => toggleMenu()}
              className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${
                showMenu ? "" : "hidden"
              }`}
            ></div>
            <div
              className={`menus ${showMenu ? "overflow-y-auto !left-0" : ""}`}
            >
              <div className="border-b border-gray/10 text-left lg:hidden">
                <button
                  onClick={() => toggleMenu()}
                  type="button"
                  className="p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-black dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul onClick={() => toggleMenu()}>
                <li>
                  <Link href="/" className={pathname === "/" ? "active" : ""}>
                    Główna
                  </Link>
                </li>
                <li>
                  <Link
                    href="/badania"
                    className={pathname === "/badania" ? "active" : ""}
                  >
                    Badania
                  </Link>
                </li>

                <li>
                  <Link
                    href="/publikacje"
                    className={
                      pathname === "/publikacje" || pathname === "/publikacje"
                        ? "active"
                        : ""
                    }
                  >
                    Publikacje
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funkcje"
                    className={
                      pathname === "/funkcje" || pathname === "/funkcje"
                        ? "active"
                        : ""
                    }
                  >
                    Funkcje
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/#contact" ? "active" : ""}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
              onClick={() => toggleMenu()}
            >
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                  fill="currentColor"
                />
                <path
                  d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                  fill="currentColor"
                />
                <path
                  d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
