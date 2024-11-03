import type { Metadata } from "next";
import {Poppins, Playball} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap"
});

const playball = Playball({
    weight: ["400"],
    variable: "--font-playball",
    subsets: ["latin"],
    display: "swap"
    });

export const metadata: Metadata = {
  title: "MJ's",
  description: "A Restaurant ordering system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playball.variable} antialiased`}
      >
        <header>
            <Header />
        </header>
        {children}
        <footer>
            <Footer/>
        </footer>
      </body>
    </html>
  );
}
