import novidadesImg from "@/assets/novidades.png";

const NovidadesSection = () => {
  return (
    <section 
      id="novidades" 
      className="py-4 px-4 bg-secondary/30 scroll-mt-20"
      aria-labelledby="novidades-heading"
    >
      <div className="container mx-auto">
        <h2 id="novidades-heading" className="text-2xl lg:text-3xl font-bold text-center mb-4 text-foreground">
          NOVIDADES PARA VOCÊ
        </h2>

        <div className="max-w-6xl mx-auto">
          <img
            src={novidadesImg}
            alt="Banner de novidades - Últimos lançamentos em cosméticos e produtos de beleza da Passoia com promoções exclusivas"
            className="w-full h-[35vh] lg:h-[40vh] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NovidadesSection;
