import ContentSection from "@/components/content-1";
import FeaturesSection from "@/components/features-9";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <FooterSection />
    </>
  );
}
