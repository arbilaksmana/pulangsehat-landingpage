import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CTASection from "@/components/sections/CTASection";
import BlogHighlightsSection from "@/components/sections/BlogHighlightsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        {/* <TrustSection /> */}
        <HowItWorksSection />
        <BlogHighlightsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
