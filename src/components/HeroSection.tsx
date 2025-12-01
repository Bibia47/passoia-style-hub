import bannerImg from "@/assets/Banner.png";

const HeroSection = () => {
  return (
    <section 
      className="w-full h-[60vh] overflow-hidden scroll-mt-20" 
      role="banner"
      aria-label="Banner principal de promoção"
    >
      <img
        src={bannerImg}
        alt="Banner promocional da linha Revitalift - Produtos de beleza e cuidados com a pele em destaque"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
