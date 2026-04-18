import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

export default function PricingSection() {
  const services = [
    {
      title: "MEDIUM CLEAN",
      desc: "Midsole & Upper - (estimation 2 day)",
      price: "15k",
    },
    {
      title: "DEEP CLEAN",
      desc: "All part & All material - (estimation 3 day)",
      price: "25k",
    },
    {
      title: "HARD CLEAN",
      desc: "All part & All material - (estimation 4 day)",
      price: "30k",
    },
    {
      title: "EXPRESS DEEP / HARD CLEAN",
      desc: "All part & All material - (estimation 1 day)",
      price: "+12k",
    },
  ];

  return (
    <section
      id="service"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-[#001F16] to-[#001F16]/0 md:flex-row"
    >
      <div className="relative flex min-h-[320px] w-full items-center justify-center border-r border-[#0a2e22] md:min-h-auto md:w-[30%]">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale opacity-80 blur-xs"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=800&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="relative z-10 text-5xl font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] whitespace-nowrap md:-rotate-90 md:text-7xl lg:text-[90px]">
          PRICE LIST
        </div>
      </div>

      <div className="relative w-full px-4 py-14 sm:px-6 md:flex md:w-[70%] md:flex-col md:justify-center md:px-16 md:py-24">
        <div className="absolute -left-14 bottom-24 z-0 hidden rotate-[-28deg] opacity-55 blur-[0.5px] md:block">
          <Image
            src="/assets/sikat.png"
            alt="Decorative brush"
            width={280}
            height={110}
            className="h-auto w-[240px] object-contain"
          />
        </div>

        <div className="absolute right-2 top-10 z-0 hidden rotate-12 opacity-85 md:block">
          <Image
            src="/assets/sikat.png"
            alt="Decorative brush"
            width={260}
            height={110}
            className="h-auto w-[210px] object-contain"
          />
        </div>

        <div className="relative z-10 mb-10 flex items-end justify-between border-b border-transparent md:mb-12">
          <SectionHeading title="OUR SERVICES" eyebrow="SHOES CLEAN" />
        </div>

        <div className="flex flex-col relative z-10 space-y-2">
          {services.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 py-6 group hover:bg-white/5 transition-colors px-4 rounded-lg bg-transparent shadow-none"
            >
              <div className="mb-2 sm:mb-0">
                <CardTitle className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[#c6ff00] transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-400 font-medium">
                  {item.desc}
                </CardDescription>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#c6ff00]">
                {item.price}
              </div>
            </Card>
          ))}
        </div>

        <div className="relative mt-10 flex justify-end md:mt-12">
          <div className="pointer-events-none absolute -bottom-20 right-0 z-0 opacity-20">
            <Image
              src="/assets/logo2.png"
              alt="Brocleanx watermark"
              width={280}
              height={280}
              className="h-auto w-[260px] object-contain"
            />
          </div>

          <Button asChild className="relative z-10">
            <Link href="/how-to-order">
              Order Now
              <span className="font-serif font-normal">↘</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
