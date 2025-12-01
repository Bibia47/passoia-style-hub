import novidadesImg from "@/assets/novidades.png";

const NovidadesSection = () => {
  return (
    <section id="novidades" className="min-h-screen flex items-center py-8 px-4 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground">
          NOVIDADES PARA VOCÊ
        </h2>

        <div className="max-w-6xl mx-auto">
          <img
            src={novidadesImg}
            alt="Novidades"
            className="w-full h-[70vh] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NovidadesSection;
