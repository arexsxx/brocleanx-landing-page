import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Marquee from "@/components/ui/marquee";
import SectionHeading from "@/components/ui/section-heading";

interface FeatureCard {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  bgImage: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "/ PREMIUM TREATMENT",
    description:
      "Formula khusus aman untuk suede, canvas, dan leather premium.",
    iconSrc: "/assets/premium.svg",
    iconAlt: "Premium treatment icon",
    bgImage: "url('/assets/card-3.jpg')",
  },
  {
    title: "/ DETAIL - ORIENTED",
    description:
      "Pembersihan presisi hingga sela-sela midsole dan jahitan terdalam.",
    iconSrc: "/assets/detail.svg",
    iconAlt: "Detail oriented icon",
    bgImage: "url('/assets/card-2.jpg')",
  },
];

const hasslePickup = {
  bgImage: "url('/assets/card-1.jpg')",
  iconSrc: "/assets/pickup.svg",
  iconAlt: "Hassle free pickup icon",
};

export default function WhyTrustUsSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#001F16] px-2 py-20 sm:px-3 md:px-4"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-6">
          <SectionHeading
            title="WHY TRUST YOUR KICKS TO US?"
            className="lg:col-span-9"
          />

          {/* KOLOM 3 (KANAN): Vertical Banner Text full tinggi (judul + cards) */}
          <div className="hidden lg:col-span-3 lg:row-span-2 lg:block">
            <div className="relative flex h-full min-h-[520px] w-full items-center justify-center overflow-hidden rounded-xl bg-transparent">
              <Image
                src="/assets/broclean-est.png"
                alt="Side banner"
                fill
                className="object-contain object-right"
                sizes="(min-width: 1024px) 25vw, 0px"
              />
            </div>
          </div>

          {/* KOLOM 1 (KIRI): 2 Card Susun */}
          <div className="flex flex-col gap-4 lg:col-span-5 lg:gap-6">
            {featureCards.map((card, idx) => (
              <Card
                key={idx}
                className="group relative flex min-h-[200px] flex-1 items-center justify-between overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 md:p-8"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply grayscale"
                  style={{ backgroundImage: card.bgImage }}
                />

                <div className="relative z-10 w-[70%] rounded-lg bg-white/40 px-3 py-2 backdrop-blur-[1px] md:w-[68%]">
                  <CardTitle className="mb-2 text-lg font-extrabold uppercase leading-tight tracking-tight text-black sm:text-xl md:text-[1.6rem]">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold leading-6 text-gray-800 sm:text-base md:text-lg">
                    {card.description}
                  </CardDescription>
                </div>

                <div className="relative z-10 flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-[#ffde00] shadow-sm">
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    width={44}
                    height={44}
                    className="h-10 w-10 object-contain md:h-11 md:w-11"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* KOLOM 2 (TENGAH): 1 Card Tinggi */}
          <div className="lg:col-span-4">
            <Card className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 md:p-8">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
                style={{
                  backgroundImage: hasslePickup.bgImage,
                }}
              />

              <div className="relative z-10 w-full rounded-lg bg-white/45 px-3 py-2 text-left backdrop-blur-[1px]">
                <CardTitle className="text-xl font-extrabold uppercase leading-tight tracking-tight text-black sm:text-2xl md:text-[1.8rem]">
                  / HASSLE - FREE PICKUP
                </CardTitle>
              </div>

              <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[2px] border-black bg-[#ffde00] my-4 shadow-sm">
                <Image
                  src={hasslePickup.iconSrc}
                  alt={hasslePickup.iconAlt}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center mt-auto">
                <CardDescription className="mb-6 max-w-[260px] rounded-lg bg-white/45 px-4 py-3 text-base font-semibold leading-7 text-gray-800 backdrop-blur-[1px] md:text-[1.2rem]">
                  Cukup chat WA, kami yang jemput dan antar sepatumu fresh.
                </CardDescription>
                <Button asChild>
                  <Link href="/how-to-order">Order sekarang</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-10 border-y border-white/10 bg-black/15 sm:mt-14">
        <Marquee message="Premium treatment • Detail-oriented cleaning • Hassle-free pickup •" />
      </div>
    </section>
  );
}
