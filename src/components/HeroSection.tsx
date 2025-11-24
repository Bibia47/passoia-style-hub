import bannerImg from "@/assets/Banner.png";

const HeroSection = () => {
  return (
    <section className="w-full h-[60vh] overflow-hidden">
      <img
        src={bannerImg}
        alt="Banner Revitalift"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
