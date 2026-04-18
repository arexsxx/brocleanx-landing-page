import type { Metadata } from "next";

import HowToOrderSection from "@/components/sections/HowToOrderSection";
import CtaDeliverySection from "@/components/sections/CtaDeliverySection";

export const metadata: Metadata = {
  title: "How To Order | Brocleanx",
  description: "Panduan cepat dan mudah cara order layanan Brocleanx.",
};

export default function HowToOrderPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32">
      <HowToOrderSection />
      <CtaDeliverySection />
    </div>
  );
}
