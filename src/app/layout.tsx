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
  title: "Arek Detailing | Auto Detailing Warszawa Zacisze — JDM Spirit",
  description:
    "Profesjonalny auto detailing w Warszawie Zacisze. Korekta lakieru, powłoki ceramiczne, PPF, pranie tapicerki. Pasja do JDM i perfekcyjny detailing. Umów się na bezpłatną wycenę!",
  keywords: [
    "auto detailing warszawa",
    "detailing zacisze",
    "korekta lakieru warszawa",
    "powłoka ceramiczna warszawa",
    "pranie tapicerki warszawa",
    "ppf warszawa",
    "jdm detailing",
    "arek detailing",
  ],
  openGraph: {
    title: "Arek Detailing | Auto Detailing Warszawa Zacisze — JDM Spirit",
    description:
      "Profesjonalny auto detailing w Warszawie Zacisze. Korekta lakieru, powłoki ceramiczne, PPF. Pasja do JDM.",
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
