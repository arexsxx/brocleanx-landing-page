import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

interface OrderStep {
  number: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const orderSteps: OrderStep[] = [
  {
    number: "1",
    title: "Konsultasi",
    description:
      "Chat admin via WhatsApp, kirim foto sepatu yang ingin dibersihkan.",
    duration: "5-10 menit",
    details: [
      "Siapkan foto sepatu dari berbagai sudut",
      "Ceritakan masalah sepatu (noda, kotor, kusam)",
      "Admin akan memberikan rekomendasi terbaik",
    ],
  },
  {
    number: "2",
    title: "Drop Off",
    description: "Kirim atau bawa sepatu Anda ke outlet kami.",
    duration: "Sesuai jam operasional",
    details: [
      "Lokasi strategis dan mudah dijangkau",
      "Sepatu dikemas dan didata dengan aman",
      "Pengecekan kondisi sepatu secara detail",
    ],
  },
  {
    number: "3",
    title: "Cleaning Process",
    description: "Sepatu dicuci dengan treatment premium dan material terbaik.",
    duration: "2-4 hari kerja",
    details: [
      "Pembersihan presisi hingga sela-sela",
      "Treatment khusus sesuai material",
      "Update foto progress via WhatsApp",
    ],
  },
  {
    number: "4",
    title: "Payment & Collection",
    description: "Sepatu selesai dibersihkan, fresh dan siap Anda ambil.",
    duration: "Hari yang dijanjikan",
    details: [
      "Hasil bersih, wangi, dan rapi maksimal",
      "Metode pembayaran: Cash/Transfer/E-wallet",
      "Bonus care kit untuk setiap pembelian",
    ],
  },
];


export default function HowToOrderSection() {
  return (
    <section
      id="order"
      className="relative overflow-hidden bg-gradient-to-b from-[#001F16] to-[#001F16]/0 px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-48 w-48 rounded-full bg-[#0f8d72]/20 blur-3xl sm:top-16 sm:h-64 sm:w-64" />
        <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[#E3EF26]/15 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-0">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#c6ff00] sm:mb-3 sm:text-xs sm:tracking-[0.26em]">
            SIMPLE & FAST
          </p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            HOW TO ORDER?
          </h2>
          <p className="mt-3 text-xs text-[#d6e8e3] sm:mt-4 sm:text-sm md:text-base">
            Proses cepat, mudah, dan terjamin hasilnya. Mulai dari konsultasi
            hingga sepatu sampai tangan Anda.
          </p>
        </div>

        {/* Trust Signals Bar */}
        <div className="mt-6 flex flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 backdrop-blur sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0 sm:p-6 md:rounded-xl md:gap-8 md:p-8">
          <div className="flex-1 text-center sm:flex-none">
            <p className="text-xs font-extrabold text-white sm:text-sm">
              Respons 1 Jam
            </p>
            <p className="text-[10px] text-white/80 sm:text-xs">24/7 Support</p>
          </div>
          <div className="hidden h-px w-px bg-white/20 sm:block" />
          <div className="flex-1 text-center sm:flex-none">
            <p className="text-xs font-extrabold text-white sm:text-sm">
              Premium Treatment
            </p>
            <p className="text-[10px] text-white/80 sm:text-xs">Sesuai Material</p>
          </div>
          <div className="hidden h-px w-px bg-white/20 sm:block" />
          <div className="flex-1 text-center sm:flex-none">
            <p className="text-xs font-extrabold text-white sm:text-sm">
              Free Pick Up & Delivery
            </p>
            <p className="text-[10px] text-white/80 sm:text-xs">
              Untuk radius tertentu
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12 sm:mt-16 md:mt-20">
          {/* Center Line - Hide on mobile, show on tablet+ */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#c6ff00] via-[#0f8d72] to-[#c6ff00] opacity-45 md:block" />

          {/* Steps Timeline */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {orderSteps.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              const stepNumber = String(Number(step.number)).padStart(2, "0");

              return (
                <div
                  key={step.number}
                  className={`flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-center gap-4 sm:gap-5 md:gap-8`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-1rem)]">
                    <article className="group relative isolate overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-5 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c6ff00]/40 hover:shadow-[0_22px_40px_rgba(0,0,0,0.28)] sm:p-6 md:rounded-2xl md:p-7">
                      <div className="relative z-10">
                        <div className="mb-2 flex flex-col gap-2 sm:mb-3 sm:flex-row sm:items-start sm:justify-between">
                          <h3 className="text-base font-extrabold text-white sm:text-lg md:text-xl">
                            {step.title}
                          </h3>
                          <span className="inline-block w-fit rounded-full border border-[#c6ff00]/25 bg-[#c6ff00]/15 px-2 py-0.5 text-[10px] font-bold text-[#e8ffad] sm:px-3 sm:py-1 sm:text-xs md:text-xs">
                            {step.duration}
                          </span>
                        </div>
                        <p className="mb-3 text-xs leading-6 text-[#d6e8e3] sm:mb-4 sm:text-sm md:text-base md:leading-7">
                          {step.description}
                        </p>
                        <ul className="space-y-1.5 text-[11px] text-gray-300 sm:space-y-2 sm:text-xs md:text-sm">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#c6ff00]/40 bg-[#c6ff00]/15 text-[10px] text-[#d8ff52]">
                                ✓
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>

                  {/* Center Circle - Hide on mobile, show on tablet+ */}
                  <div className="relative hidden h-14 w-14 shrink-0 items-center justify-center md:order-2 md:flex">
                    <div className="absolute inset-0 rounded-full bg-[#c6ff00]/25 blur-[1px]" />
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#c6ff00] bg-[#001F16] text-[11px] font-black text-[#d8ff52]">
                      {stepNumber}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 flex justify-center sm:mt-16 md:mt-20">
          <Button
            asChild
            className="h-12 px-6 sm:h-14 sm:px-8 sm:text-base"
          >
            <Link
              href="https://wa.me/6289613729647?text=Halo%20admin%2C%20saya%20mau%20order%20cleaning%20sepatu."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span className="hidden sm:inline">
                Chat Admin via WhatsApp Sekarang
              </span>
              <span className="sm:hidden">Chat WhatsApp</span>
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
