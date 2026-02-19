import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arek Garage | Warsztat Samochodowy Warszawa Zacisze — JDM Spirit",
  description:
    "Warsztat samochodowy z duszą JDM w Warszawie Zacisze. Serwis mechaniczny, tuning, diagnostyka, naprawy silników, zawieszenie, turbo. Specjalizacja w autach japońskich. Umów wizytę!",
  keywords: [
    "warsztat samochodowy warszawa",
    "mechanik zacisze",
    "serwis jdm warszawa",
    "tuning warszawa",
    "diagnostyka komputerowa warszawa",
    "naprawa silnika warszawa",
    "warsztat jdm",
    "arek garage",
  ],
  openGraph: {
    title: "Arek Garage | Warsztat Samochodowy Warszawa Zacisze — JDM Spirit",
    description:
      "Warsztat samochodowy z duszą JDM w Warszawie Zacisze. Serwis, tuning, diagnostyka. Specjalizacja w autach japońskich.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} ${notoSansJP.variable} antialiased font-body`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
