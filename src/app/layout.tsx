import type { Metadata } from "next";
import { EB_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sasha Surkin",
  description:
    "Inventor and founder, building the future of consumer optics at Theo Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${instrument.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
