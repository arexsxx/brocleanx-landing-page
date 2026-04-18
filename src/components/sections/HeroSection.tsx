import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030F0F]">
      {/* Background split tetap aman walau gambar remote gagal */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative min-h-[420px] bg-cover bg-center"
          style={{
            backgroundColor: "#001F16",
            backgroundImage:
              "linear-gradient(135deg, rgba(2, 20, 15, 0.15), rgba(17, 185, 129, 0.25)), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_38%)]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#c6ff00]">
              Left panel
            </p>
            <p className="mt-1 text-sm text-white/85">
              Suede, mesh, and daily wear pieces.
            </p>
          </div>
        </div>
        <div
          className="relative min-h-[420px] bg-cover bg-center"
          style={{
            backgroundColor: "#00110C",
            backgroundImage:
              "linear-gradient(135deg, rgba(2, 20, 15, 0.1), rgba(184, 255, 61, 0.18)), url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_40%)]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#c6ff00]">
              Right panel
            </p>
            <p className="mt-1 text-sm text-white/85">
              Premium whites, leather, and detail work.
            </p>
          </div>
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
            Cuci sepatu yang rapi, aman untuk material premium, dan hasil akhir
            yang tetap terlihat bersih tanpa tampilan berlebihan.
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="group">
              <Link href="#service">
                Order Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
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
