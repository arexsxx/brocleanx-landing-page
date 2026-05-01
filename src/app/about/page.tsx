import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import Marquee from "@/components/ui/marquee";

export const metadata = {
  title: "About Us | Brocleanx",
  description: "Pelajari lebih lanjut tentang Brocleanx, layanan cuci sepatu profesional terbaik.",
};

const stats = [
  { label: "Sepatu Dibersihkan", value: "10,000+" },
  { label: "Pelanggan Puas", value: "5,000+" },
  { label: "Tahun Pengalaman", value: "3+" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#001F16] min-h-screen pt-24 pb-12">
      {/* Hero / Intro Section */}
      <section className="relative px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col gap-6 order-2 lg:order-1">
              <SectionHeading 
                title="WE REVIVE YOUR KICKS" 
                eyebrow="ABOUT BROCLEANX" 
              />
              <p className="text-lg leading-8 text-gray-300 font-medium">
                Berawal dari kecintaan kami terhadap sneakers, Brocleanx hadir sebagai solusi utama untuk perawatan sepatu anda. Kami memahami bahwa sepatu bukan sekadar alas kaki, melainkan bagian dari identitas dan gaya hidup Anda.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Dengan teknik pembersihan yang detail oriented dan formula khusus, kami memastikan setiap pasang sepatu kembali ke kondisi terbaiknya tanpa merusak material aslinya. Kepuasan Anda adalah prioritas utama kami.
              </p>
              
              <div className="mt-4 flex gap-4">
                <Button asChild className="px-8 py-6 text-lg">
                  <Link href="/#service">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group order-1 lg:order-2">
              <Image 
                src="/assets/card-3.jpg" 
                alt="Brocleanx Cleaning Process" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F16] via-[#001F16]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10 bg-black/20 mt-8">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-y-2 items-center text-center">
                <dt className="text-sm leading-7 text-gray-400 font-semibold tracking-wider uppercase">{stat.label}</dt>
                <dd className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative px-6 py-20 sm:px-8 lg:px-12 mt-12">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-[#ffde00]/20 group">
               <Image 
                src="/assets/card-2.jpg" 
                alt="Detail oriented cleaning" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
               <div className="absolute inset-0 bg-gradient-to-t from-[#001F16] via-[#001F16]/20 to-transparent pointer-events-none"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-24 w-24 rounded-full border-[3px] border-black bg-[#ffde00] flex items-center justify-center shadow-xl">
                     <Image src="/assets/detail.svg" alt="Detail icon" width={48} height={48} className="h-12 w-12" />
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-10">
              <SectionHeading 
                title="THE BROCLEANX PROMISE" 
                eyebrow="OUR MISSION" 
              />
              <div className="space-y-6 text-gray-300">
                <p className="text-xl font-medium leading-relaxed text-[#ffde00]">
                  &ldquo;Menghadirkan layanan perawatan sepatu yang profesional, mudah, dan terpercaya bagi setiap pecinta sneakers di Indonesia.&rdquo;
                </p>
                <p className="text-lg leading-8">
                  Kami berkomitmen untuk terus berinovasi dalam teknik pembersihan dan perawatan, menggunakan produk-produk terbaik yang aman, serta memberikan pelayanan pelanggan yang luar biasa dari saat Anda menghubungi kami hingga sepatu kembali ke tangan Anda.
                </p>
                <p className="text-lg leading-8">
                  Setiap noda memiliki cerita, dan setiap sepatu memiliki perjalanan. Biarkan kami merawat sepatu Anda agar Anda dapat melanjutkan perjalanan dengan langkah yang lebih percaya diri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="mt-16 border-y border-white/10 bg-black/15">
        <Marquee message="Premium treatment • Detail-oriented cleaning • Easy Drop-off • Customer Satisfaction •" />
      </div>
    </div>
  );
}
