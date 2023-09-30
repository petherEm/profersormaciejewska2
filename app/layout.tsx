import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prof. dr hab. Alina Maciejewska",
  description: "Prof. dr hab. Alina Maciejewska",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const showTopButton = true;

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-white bg-gradient-to-r from-[#FCF1F4] to-[#EDFBF9] font-mulish text-base font-normal text-gray antialiased dark:bg-[#101926] dark:from-transparent dark:to-transparent">
          <Header className={showTopButton ? "sticky-header" : ""} />

          <div className="-mt-[82px] flex-grow overflow-x-hidden lg:-mt-[106px]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
