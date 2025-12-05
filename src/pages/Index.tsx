import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LooksSection from "@/components/LooksSection";
import ProductLaunchSection from "@/components/ProductLaunchSection";
import NovidadesSection from "@/components/NovidadesSection";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import AccessibilityButton from "@/components/AccessibilityButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipLink />
      <AccessibilityButton />
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <LooksSection />
        <ProductLaunchSection />
        <NovidadesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
