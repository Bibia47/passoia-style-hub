import { useState } from "react";
import abertoImg from "@/assets/aberto.png";
import fechadoImg from "@/assets/fechado.png";
import batomImg from "@/assets/batom.png";
import cinzaBocaImg from "@/assets/cinza-boca.png";
import vermelhoBocaImg from "@/assets/vermelho-boca.png";
import bordoBocaImg from "@/assets/bordo-boca.png";
import nudeBocaImg from "@/assets/nude-boca.png";
import estrelasImg from "@/assets/estrelas.png";
import cinzaColorImg from "@/assets/cinza-color.png";
import vermelhoColorImg from "@/assets/vermelho-color.png";
import bordoColorImg from "@/assets/bordo-color.png";
import nudeColorImg from "@/assets/nude-color.png";

const ProductLaunchSection = () => {
  const [selectedImage, setSelectedImage] = useState(cinzaBocaImg);

  const colorMap: Record<string, string> = {
    [cinzaColorImg]: cinzaBocaImg,
    [vermelhoColorImg]: vermelhoBocaImg,
    [bordoColorImg]: bordoBocaImg,
    [nudeColorImg]: nudeBocaImg,
  };

  const handleColorClick = (colorImg: string) => {
    setSelectedImage(colorMap[colorImg] || cinzaBocaImg);
  };

  return (
    <section id="lancamentos" className="py-16 px-4 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* First Column - Hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-4 justify-center">
            <img
              src={abertoImg}
              alt="Produto aberto"
              className="w-full max-w-xs h-40 rounded-lg shadow-md object-cover"
            />
            <img
              src={fechadoImg}
              alt="Produto fechado"
              className="w-full max-w-xs h-40 rounded-lg shadow-md object-cover"
            />
            <img
              src={batomImg}
              alt="Batom"
              className="w-full max-w-xs h-40 rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Second Column - Main Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Produto principal"
              className="w-full max-w-lg h-[600px] rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* Third Column - Product Info and Colors */}
          <div className="flex flex-col gap-6">
            <img
              src={estrelasImg}
              alt="Avaliação 5 estrelas"
              className="w-32 h-auto"
            />

            <h3 className="text-2xl font-bold text-foreground">Matte Premium</h3>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Cores disponíveis
              </h4>
              <div className="flex gap-3">
                {[cinzaColorImg, vermelhoColorImg, bordoColorImg, nudeColorImg].map(
                  (colorImg, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorClick(colorImg)}
                      className="w-12 h-12 rounded-full border-2 border-border hover:border-primary transition-all transform hover:scale-110"
                    >
                      <img
                        src={colorImg}
                        alt="Cor disponível"
                        className="w-full h-full rounded-full"
                      />
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Descrição
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar
                o máximo de cor na primeira aplicação com um deslize suave e macio.
                Tem acabamento matte aveludado e manteiga de manga que ajuda a
                hidratar e a proteger os lábios contra ressecamento. Ajuda na
                hidratação dos lábios, textura fina e macia que não pesa nos lábios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLaunchSection;
