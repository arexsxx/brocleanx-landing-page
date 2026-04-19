import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030F0F]">
      {/* Background split tetap aman walau gambar remote gagal */}
      <div className="absolute inset-0 grid grid-cols-1 gap-4 p-4 pt-[8.5rem] md:grid-cols-2 md:gap-8 md:p-8 md:pt-[9.25rem]">
        <div
          className="relative min-h-[320px] overflow-hidden rounded-lg bg-cover bg-center md:min-h-[420px]"
          style={{
            backgroundColor: "#001F16",
            backgroundImage:
              "linear-gradient(140deg, rgba(3, 15, 12, 0.25), rgba(4, 28, 22, 0.55)), url('/assets/left-hero.jpg')",
            backgroundPosition: "center 38%",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_42%)]" />
        </div>
        <div
          className="relative min-h-[320px] overflow-hidden rounded-lg bg-cover bg-center md:min-h-[420px]"
          style={{
            backgroundColor: "#00110C",
            backgroundImage:
              "linear-gradient(145deg, rgba(3, 15, 12, 0.2), rgba(8, 30, 20, 0.52)), url('/assets/right-hero.jpg')",
            backgroundPosition: "center 35%",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_44%)]" />
        </div>
      </div>

      {/* Layer gelap supaya teks tetap terbaca */}
      <div className="absolute inset-0 bg-[#030F0F]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030F0F]/30 via-[#030F0F]/10 to-[#030F0F]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.28)_62%,_rgba(0,0,0,0.55)_100%)]" />

      <div className="relative mx-auto box-border flex min-h-screen max-w-6xl items-center justify-center px-4 pb-14 pt-[9.5rem] text-center sm:pt-[10rem] md:px-8 md:pt-[8.25rem] lg:pb-16">
        <div className="max-w-4xl">
          <Badge className="mb-5">Premium sneaker care</Badge>

          <h1 className="text-4xl font-black uppercase leading-[0.88] tracking-tighter text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] sm:text-5xl md:text-7xl lg:text-[6.5rem]">
            <span className="block">Keep Your</span>
            <span className="block">Kicks Fresh</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-100/90 sm:text-base md:text-lg">
            Dapatkan hasil bersih natural yang mengembalikan tampilan asli
            sepatu kesayangan Anda.
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="group">
              <Link href="#service">
                Order Now <a>↗</a>
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-300 sm:gap-4 sm:text-xs">
            <span className="rounded-md border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              Pickup available
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              Safe for premium materials
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              1-4 day turnaround
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
