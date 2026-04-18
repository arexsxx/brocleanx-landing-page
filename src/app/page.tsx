// Pastikan path import ini sesuai dengan lokasi file yang baru saja Anda buat
import HeroSection from "@/components/sections/HeroSection";
import WhyTrustUsSection from "@/components/sections/WhyTrustUsSection";
import PricingSection from "@/components/sections/PricingSection";
import CtaDeliverySection from "@/components/sections/CtaDeliverySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyTrustUsSection />
      <PricingSection />
      <CtaDeliverySection />
    </>
  );
}
