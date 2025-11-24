import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LooksSection from "@/components/LooksSection";
import ProductLaunchSection from "@/components/ProductLaunchSection";
import NovidadesSection from "@/components/NovidadesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
