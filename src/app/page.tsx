"use client";

import { useState } from "react";

const PHONE = "+48 XXX XXX XXX";
const EMAIL = "kontakt@arekgarage.pl";

const services = [
  {
    title: "Serwis Mechaniczny",
    jp: "整備",
    description:
      "Kompleksowa obsługa mechaniczna Twojego auta — od przeglądów po naprawy silnika. Specjalizacja w motorach JDM.",
    features: ["Naprawy silnika", "Przeglądy okresowe", "Wymiana rozrządu"],
  },
  {
    title: "Tuning & Performance",
    jp: "改造",
    description:
      "Zwiększ moc i osiągi swojego auta. Chipy, ECU remap, intake, exhaust — wyciągniemy maksimum z Twojego silnika.",
    features: ["ECU Remap / Chip tuning", "Układ dolotowy & wydechowy", "Pomiar na hamowni"],
  },
  {
    title: "Zawieszenie & Podwozie",
    jp: "足回り",
    description:
      "Coilovery, stabilizatory, tuleje — dopasujemy zawieszenie do Twoich potrzeb. Street, drift czy tor.",
    features: ["Montaż coiloverów", "Geometria kół", "Wzmocnienia podwozia"],
  },
  {
    title: "Diagnostyka Komputerowa",
    jp: "診断",
    description:
      "Precyzyjna diagnostyka OBD2 i specjalistyczne skanery. Odczyt kodów błędów, analiza parametrów na żywo.",
    features: ["Odczyt kodów błędów", "Diagnostyka silnika", "Analiza parametrów live"],
  },
  {
    title: "Hamulce & Bezpieczeństwo",
    jp: "制動",
    description:
      "Wymiana klocków, tarcz, upgrade hamulców. Big brake kity i przewody w oplocie — pewne hamowanie na torze i ulicy.",
    features: ["Wymiana klocków & tarcz", "Big Brake Kit", "Przewody w oplocie"],
  },
  {
    title: "Turbo & Doładowanie",
    jp: "過給",
    description:
      "Montaż turbo, intercoolerów, wastegate i blow-off. Budowa setupów turbo od zera dla silników JDM.",
    features: ["Montaż turbosprężarek", "Intercooler & piping", "Wastegate & BOV"],
  },
];

const whyUs = [
  {
    number: "01",
    title: "Pasja JDM",
    jp: "情熱",
    text: "Kochamy japońską motoryzację. Silniki SR20, RB26, 2JZ — to nasza codzienność i pasja.",
  },
  {
    number: "02",
    title: "Części Premium",
    jp: "品質",
    text: "Pracujemy wyłącznie na sprawdzonych częściach OEM i renomowanych markach aftermarket.",
  },
  {
    number: "03",
    title: "Precyzja 職人",
    jp: "職人",
    text: "Każda śruba dokręcona z momentem, każdy przewód poprowadzony idealnie. Duch Shokunin.",
  },
  {
    number: "04",
    title: "Warszawa Zacisze",
    jp: "場所",
    text: "Wygodna lokalizacja na Zaciszu. Wyposażony warsztat z podnośnikiem i hamownią.",
  },
];

function SpeedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="speed-line absolute"
          style={{
            top: `${15 + i * 18}%`,
            width: `${80 + i * 40}px`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

function RisingSun() {
  return (
    <div className="rising-sun" aria-hidden="true">
      <div className="absolute inset-0" style={{
        background: "repeating-conic-gradient(from 0deg at 50% 100%, rgba(220,38,38,0.8) 0deg 10deg, transparent 10deg 20deg)",
      }} />
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", email: "", car: "", service: "", message: "" });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#080808]/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-jdm/10 border border-jdm/40 skew-x-[-6deg] group-hover:bg-jdm/20 transition-colors" />
              <span className="relative font-heading text-jdm text-2xl tracking-wider">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl tracking-[0.15em] text-white leading-none">
                AREK GARAGE
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-muted mt-0.5 font-body">
                ワルシャワ • Warsztat JDM
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#uslugi" className="text-muted hover:text-jdm transition-colors tracking-wide uppercase text-xs">
              Usługi
            </a>
            <a href="#dlaczego" className="text-muted hover:text-jdm transition-colors tracking-wide uppercase text-xs">
              O nas
            </a>
            <a href="#kontakt" className="text-muted hover:text-jdm transition-colors tracking-wide uppercase text-xs">
              Kontakt
            </a>
            <a
              href="#kontakt"
              className="relative ml-2 px-6 py-2.5 bg-jdm text-white text-xs font-semibold tracking-wider uppercase skew-x-[-6deg] hover:bg-jdm-light transition-colors"
            >
              <span className="inline-block skew-x-[6deg]">Umów Wizytę</span>
            </a>
          </div>

          <a
            href="#kontakt"
            className="md:hidden relative px-4 py-2 bg-jdm text-white text-xs font-semibold tracking-wider uppercase skew-x-[-6deg]"
          >
            <span className="inline-block skew-x-[6deg]">Wizyta</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-jdm relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <RisingSun />
        <SpeedLines />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="font-jp text-[28vw] font-black text-white/[0.02] leading-none">
            車庫
          </span>
        </div>

        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-jdm/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-jdm/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-jdm/30 bg-jdm/5 mb-10 skew-x-[-6deg]">
              <span className="inline-block skew-x-[6deg] flex items-center gap-3">
                <span className="w-2 h-2 bg-jdm animate-pulse" />
                <span className="text-xs uppercase tracking-[0.3em] text-jdm font-semibold font-body">
                  JDM Garage • Warszawa Zacisze
                </span>
              </span>
            </div>
          </div>

          <div className="animate-fade-up stagger-1 mb-4">
            <span className="font-jp text-sm tracking-[0.5em] text-jdm/40">
              アレク・ガレージ
            </span>
          </div>

          <h1 className="animate-fade-up stagger-2 font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[0.04em] max-w-6xl mx-auto">
            WARSZTAT Z{" "}
            <span className="jdm-gradient-text">DUSZĄ</span>
            <br />
            JDM
          </h1>

          <div className="animate-fade-up stagger-3 my-8 flex justify-center">
            <div className="red-line w-32" />
          </div>

          <p className="animate-fade-up stagger-3 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
            Serwis mechaniczny dla miłośników{" "}
            <span className="text-jdm-light font-medium">japońskiej motoryzacji</span>. Naprawy,
            tuning, diagnostyka — Twój JDM w rękach fachowców z pasją.
          </p>

          <div className="animate-fade-up stagger-4 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="relative px-10 py-4 bg-jdm text-white font-semibold text-sm tracking-wider uppercase skew-x-[-6deg] hover:bg-jdm-light transition-all hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]"
            >
              <span className="inline-block skew-x-[6deg]">Umów Wizytę w Warsztacie</span>
            </a>
            <a
              href="#uslugi"
              className="relative px-10 py-4 border border-white/15 text-white font-medium text-sm tracking-wider uppercase skew-x-[-6deg] hover:border-jdm/40 hover:bg-jdm/5 transition-all"
            >
              <span className="inline-block skew-x-[6deg]">Zobacz Usługi</span>
            </a>
          </div>

          <div className="animate-fade-up stagger-5 mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <span className="text-jdm font-jp text-xs">★</span>
              <span>Specjalizacja JDM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-jdm font-jp text-xs">★</span>
              <span>Części OEM & aftermarket</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-jdm font-jp text-xs">★</span>
              <span>Hamownia & diagnostyka</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#080808] to-transparent" />
      </section>

      {/* Red divider stripe */}
      <div className="relative h-16 overflow-hidden diagonal-stripes">
        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
          <div className="w-full h-[2px] bg-linear-to-r from-transparent via-jdm/60 to-transparent" />
        </div>
      </div>

      {/* Services */}
      <section id="uslugi" className="py-28 relative carbon-fiber">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-jdm" />
                <span className="text-xs uppercase tracking-[0.3em] text-jdm font-semibold">
                  Nasze usługi
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl tracking-[0.04em]">
                CO ROBIMY W{" "}
                <span className="jdm-gradient-text">GARAŻU</span>
              </h2>
            </div>
            <p className="text-muted max-w-md text-sm leading-relaxed md:text-right">
              Od serwisu mechanicznego po budowę setupów turbo — kompleksowa obsługa
              z japońską precyzją i pasją do JDM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`card-jdm group bg-surface border border-white/5 p-7 hover:border-jdm/20 transition-all duration-500 hover:-translate-y-1 animate-fade-up stagger-${i + 1}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="font-jp text-3xl text-jdm/15 group-hover:text-jdm/30 transition-colors font-black leading-none">
                    {service.jp}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted/50 font-body mt-1">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading text-2xl tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-muted-light">
                      <span className="w-1.5 h-[2px] bg-jdm/60" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="dlaczego" className="py-28 relative overflow-hidden">
        <SpeedLines />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-jdm/[0.02] to-transparent" />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none" aria-hidden="true">
          <span className="font-jp text-[20vw] font-black text-white/[0.015] leading-none">
            情熱
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-jdm" />
                <span className="text-xs uppercase tracking-[0.3em] text-jdm font-semibold">
                  Dlaczego my
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl tracking-[0.04em] leading-[0.95]">
                MECHANIKA TO NASZA
                <br />
                <span className="jdm-gradient-text">PASJA 情熱</span>
              </h2>
              <p className="mt-6 text-muted leading-relaxed max-w-lg">
                Arek Garage to nie tylko warsztat — to miejsce, gdzie japońska
                filozofia <span className="text-jdm-light">Shokunin (職人)</span> spotyka
                się z doświadczeniem mechanika. Każdy silnik, każdy układ napędowy
                traktujemy z precyzją japońskiego rzemieślnika.
              </p>
              <div className="mt-10 flex items-center gap-5">
                <a
                  href="#kontakt"
                  className="relative px-8 py-3.5 bg-jdm text-white font-semibold text-xs tracking-wider uppercase skew-x-[-6deg] hover:bg-jdm-light transition-colors"
                >
                  <span className="inline-block skew-x-[6deg]">Skontaktuj się</span>
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="text-sm text-muted hover:text-jdm transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div
                  key={item.number}
                  className="card-jdm bg-surface border border-white/5 p-6 hover:border-jdm/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl font-heading text-jdm/15 group-hover:text-jdm/30 transition-colors tracking-wider">
                      {item.number}
                    </span>
                    <span className="font-jp text-lg text-white/5 group-hover:text-jdm/15 transition-colors font-black">
                      {item.jp}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 relative overflow-hidden diagonal-stripes">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-jdm" />
              <span className="text-xs uppercase tracking-[0.3em] text-jdm font-semibold">
                Proces
              </span>
              <div className="w-8 h-[2px] bg-jdm" />
            </div>
            <h2 className="font-heading text-5xl md:text-6xl tracking-[0.04em]">
              JAK <span className="jdm-gradient-text">PRACUJEMY</span>
            </h2>
            <p className="mt-3 font-jp text-sm text-jdm/30 tracking-wider">手順 • プロセス</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-linear-to-r from-transparent via-jdm/20 to-transparent" />

            {[
              { step: "01", title: "Kontakt", jp: "連絡", desc: "Opisz problem lub zakres prac — doradzimy rozwiązanie i umówimy termin." },
              { step: "02", title: "Diagnostyka", jp: "診断", desc: "Dokładna inspekcja i diagnostyka komputerowa. Znajdziemy przyczynę usterki." },
              { step: "03", title: "Naprawa", jp: "修理", desc: "Precyzyjna naprawa z użyciem sprawdzonych części OEM i aftermarket." },
              { step: "04", title: "Odbiór", jp: "完了", desc: "Jazda próbna, prezentacja wykonanych prac i gwarancja na usługę." },
            ].map((item) => (
              <div key={item.step} className="text-center relative group">
                <div className="w-32 h-32 mx-auto flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 border border-jdm/15 skew-x-[-6deg] group-hover:border-jdm/30 transition-colors bg-surface" />
                  <div className="relative flex flex-col items-center">
                    <span className="font-jp text-xs text-jdm/30 mb-1">{item.jp}</span>
                    <span className="font-heading text-3xl tracking-wider jdm-gradient-text">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-xl tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="py-28 relative">
        <div className="absolute inset-0 hero-jdm" />
        <SpeedLines />

        <div className="absolute left-0 bottom-0 pointer-events-none select-none" aria-hidden="true">
          <span className="font-jp text-[15vw] font-black text-white/[0.015] leading-none">
            予約
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-jdm" />
                <span className="text-xs uppercase tracking-[0.3em] text-jdm font-semibold">
                  Kontakt
                </span>
              </div>
              <h2 className="font-heading text-5xl md:text-6xl tracking-[0.04em] leading-[0.95]">
                UMÓW WIZYTĘ
                <br />
                <span className="jdm-gradient-text">W WARSZTACIE</span>
              </h2>
              <p className="mt-6 text-muted leading-relaxed max-w-lg">
                Opisz problem lub zakres prac, a skontaktujemy się w ciągu 24 godzin
                z wyceną i dostępnym terminem.
              </p>

              <div className="mt-12 space-y-7">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-jdm/20 bg-jdm/5 skew-x-[-6deg] group-hover:border-jdm/40 transition-colors" />
                    <svg className="w-5 h-5 text-jdm relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Adres</h4>
                    <p className="text-sm text-muted">
                      Warszawa Zacisze
                      <br />
                      Dokładny adres po umówieniu wizyty
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-jdm/20 bg-jdm/5 skew-x-[-6deg] group-hover:border-jdm/40 transition-colors" />
                    <svg className="w-5 h-5 text-jdm relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Telefon</h4>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-jdm transition-colors">
                      {PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-jdm/20 bg-jdm/5 skew-x-[-6deg] group-hover:border-jdm/40 transition-colors" />
                    <svg className="w-5 h-5 text-jdm relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Email</h4>
                    <a href={`mailto:${EMAIL}`} className="text-sm text-muted hover:text-jdm transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-jdm/20 bg-jdm/5 skew-x-[-6deg] group-hover:border-jdm/40 transition-colors" />
                    <svg className="w-5 h-5 text-jdm relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Godziny pracy</h4>
                    <p className="text-sm text-muted">
                      Pon – Pt: 8:00 – 18:00
                      <br />
                      Sob: 9:00 – 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-jdm/30" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-jdm/30" />

              <div className="bg-surface border border-white/5 p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <div className="absolute inset-0 border border-jdm/30 bg-jdm/10 skew-x-[-6deg]" />
                      <svg className="w-8 h-8 text-jdm relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-3xl tracking-wider mb-3">
                      DZIĘKUJEMY!
                    </h3>
                    <p className="font-jp text-sm text-jdm/40 mb-4">ありがとうございます</p>
                    <p className="text-muted max-w-sm mx-auto text-sm">
                      Twoje zgłoszenie zostało wysłane. Odezwiemy się w ciągu 24 godzin
                      z wyceną i dostępnym terminem.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 relative px-6 py-2.5 border border-jdm/30 text-jdm text-xs tracking-wider uppercase skew-x-[-6deg] hover:bg-jdm/10 transition-colors"
                    >
                      <span className="inline-block skew-x-[6deg]">Wyślij kolejne zapytanie</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-heading text-2xl tracking-wider">
                        FORMULARZ ZGŁOSZENIA
                      </h3>
                      <span className="font-jp text-sm text-jdm/20">修理依頼</span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs text-muted mb-2 uppercase tracking-wider">
                          Imię i nazwisko *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-surface-lighter border border-white/10 text-sm text-white placeholder:text-muted/40 transition-colors hover:border-white/20"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs text-muted mb-2 uppercase tracking-wider">
                          Telefon *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-surface-lighter border border-white/10 text-sm text-white placeholder:text-muted/40 transition-colors hover:border-white/20"
                          placeholder="+48 500 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs text-muted mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-lighter border border-white/10 text-sm text-white placeholder:text-muted/40 transition-colors hover:border-white/20"
                        placeholder="jan@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="car" className="block text-xs text-muted mb-2 uppercase tracking-wider">
                        Marka i model samochodu *
                      </label>
                      <input
                        id="car"
                        type="text"
                        required
                        value={formData.car}
                        onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-lighter border border-white/10 text-sm text-white placeholder:text-muted/40 transition-colors hover:border-white/20"
                        placeholder="np. Nissan Skyline R34 GT-R"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs text-muted mb-2 uppercase tracking-wider">
                        Rodzaj usługi
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-lighter border border-white/10 text-sm text-white transition-colors hover:border-white/20 appearance-none"
                      >
                        <option value="">Wybierz usługę</option>
                        <option value="serwis">Serwis Mechaniczny</option>
                        <option value="tuning">Tuning & Performance</option>
                        <option value="zawieszenie">Zawieszenie & Podwozie</option>
                        <option value="diagnostyka">Diagnostyka Komputerowa</option>
                        <option value="hamulce">Hamulce & Bezpieczeństwo</option>
                        <option value="turbo">Turbo & Doładowanie</option>
                        <option value="inne">Inne</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs text-muted mb-2 uppercase tracking-wider">
                        Opis problemu / zakres prac
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-surface-lighter border border-white/10 text-sm text-white placeholder:text-muted/40 transition-colors hover:border-white/20 resize-none"
                        placeholder="Opisz usterkę, objawy lub zakres prac, które Cię interesują..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-jdm text-white font-semibold text-xs tracking-[0.2em] uppercase skew-x-[-6deg] hover:bg-jdm-light transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-[0_0_50px_rgba(220,38,38,0.2)]"
                    >
                      <span className="inline-block skew-x-[6deg]">
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Wysyłanie...
                          </span>
                        ) : (
                          "Wyślij Zgłoszenie"
                        )}
                      </span>
                    </button>

                    <p className="text-xs text-muted/50 text-center mt-4">
                      Odpowiadamy w ciągu 24h. Twoje dane są bezpieczne.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <RisingSun />
        <div className="absolute inset-0 bg-linear-to-r from-jdm/3 via-jdm/8 to-jdm/3" />
        <div className="absolute inset-0 diagonal-stripes" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <span className="font-jp text-4xl md:text-5xl text-jdm/10 block mb-4">準備完了</span>
          <h2 className="font-heading text-4xl md:text-6xl tracking-[0.04em] leading-[0.95]">
            TWÓJ JDM POTRZEBUJE{" "}
            <span className="jdm-gradient-text">FACHOWCA</span>
            ?
          </h2>
          <p className="mt-6 text-muted max-w-xl mx-auto">
            Dołącz do grona zadowolonych klientów Arek Garage. Diagnostyka
            i wycena zawsze bezpłatna.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="relative px-10 py-4 bg-jdm text-white font-semibold text-sm tracking-wider uppercase skew-x-[-6deg] hover:bg-jdm-light transition-all hover:shadow-[0_0_50px_rgba(220,38,38,0.3)] animate-pulse-glow"
            >
              <span className="inline-block skew-x-[6deg]">Umów Wizytę</span>
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="relative px-10 py-4 border border-jdm/30 text-jdm font-medium text-sm tracking-wider uppercase skew-x-[-6deg] hover:bg-jdm/10 transition-colors"
            >
              <span className="inline-block skew-x-[6deg]">Zadzwoń: {PHONE}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 relative carbon-fiber">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-jdm/10 border border-jdm/30 skew-x-[-6deg]" />
                  <span className="relative font-heading text-jdm text-2xl tracking-wider">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl tracking-[0.15em] text-white leading-none">
                    AREK GARAGE
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.35em] text-muted mt-0.5">
                    ワルシャワ • Warsztat JDM
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mt-4">
                Warsztat samochodowy z duszą JDM. Serwis mechaniczny, tuning,
                diagnostyka i naprawy — z japońską precyzją i pasją do motoryzacji.
              </p>
              <div className="mt-4 font-jp text-xs text-jdm/20">
                情熱 • 品質 • 職人
              </div>
            </div>

            <div>
              <h4 className="font-heading text-lg tracking-wider mb-5">USŁUGI</h4>
              <ul className="space-y-3 text-sm text-muted">
                <li><a href="#uslugi" className="hover:text-jdm transition-colors">Serwis Mechaniczny</a></li>
                <li><a href="#uslugi" className="hover:text-jdm transition-colors">Tuning & Performance</a></li>
                <li><a href="#uslugi" className="hover:text-jdm transition-colors">Zawieszenie & Podwozie</a></li>
                <li><a href="#uslugi" className="hover:text-jdm transition-colors">Diagnostyka Komputerowa</a></li>
                <li><a href="#uslugi" className="hover:text-jdm transition-colors">Turbo & Doładowanie</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg tracking-wider mb-5">KONTAKT</h4>
              <ul className="space-y-3 text-sm text-muted">
                <li>Warszawa Zacisze</li>
                <li>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-jdm transition-colors">
                    {PHONE}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-jdm transition-colors">
                    {EMAIL}
                  </a>
                </li>
                <li>Pon – Pt: 8:00 – 18:00</li>
                <li>Sob: 9:00 – 14:00</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 red-line" />

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
            <p>&copy; {new Date().getFullYear()} Arek Garage. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-4">
              <span className="font-jp text-jdm/20">アレク・ガレージ</span>
              <span>Warszawa Zacisze — JDM Spirit Garage</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
