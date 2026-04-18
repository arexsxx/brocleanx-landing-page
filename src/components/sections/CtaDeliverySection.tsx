import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CtaDeliverySection() {
  return (
    <section className="flex w-full justify-center bg-[#030F0F] px-4 py-20 md:px-8 md:py-32">
      <div className="container max-w-6xl relative flex items-center">
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl min-h-[380px] md:min-h-[420px] flex items-center z-10 bg-[#001F16]">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('./assets/bg-cta.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          </div>

          <div className="relative z-20 w-full p-6 text-center sm:p-10 md:w-[70%] md:p-16 md:text-left">
            <h2 className="mb-4 text-3xl font-bold leading-[1.2] tracking-tight text-white md:text-4xl lg:text-[42px]">
              Kamu malas <br className="hidden sm:block" /> datang ke outlet?
            </h2>
            <p className="mb-8 text-sm font-medium text-gray-200 md:text-base">
              Minta antar jemput sama kita aja !
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild>
                <Link href="#pickup">Jadwalkan antar jemput</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-0 bottom-0 w-[35%] h-[120%] rounded-r-xl rounded-l-none overflow-hidden shadow-2xl z-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('./assets/Rectangle 5.png')",
            }}
          />
        </div>
      </div>
    </section>
  );
}
