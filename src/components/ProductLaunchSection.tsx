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

  const colorNames: Record<string, string> = {
    [cinzaColorImg]: "Cinza",
    [vermelhoColorImg]: "Vermelho",
    [bordoColorImg]: "Bordô",
    [nudeColorImg]: "Nude",
  };

  return (
    <section 
      id="lancamentos" 
      className="min-h-[calc(100vh-5rem)] flex items-center py-6 px-4 scroll-mt-20"
      aria-labelledby="lancamentos-heading"
    >
      <div className="container mx-auto">
        <h2 id="lancamentos-heading" className="text-3xl font-bold text-center mb-6 text-foreground">
          APROVEITE OS LANÇAMENTOS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* First Column - Hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-3 justify-center" aria-label="Galeria de produtos">
            <img
              src={abertoImg}
              alt="Batom Matte Premium aberto mostrando a textura cremosa e aveludada"
              className="w-full max-w-xs h-28 rounded-lg shadow-md object-cover"
            />
            <img
              src={fechadoImg}
              alt="Embalagem fechada do Batom Matte Premium com design elegante"
              className="w-full max-w-xs h-28 rounded-lg shadow-md object-cover"
            />
            <img
              src={batomImg}
              alt="Batom Matte Premium em detalhe com acabamento luxuoso"
              className="w-full max-w-xs h-28 rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Second Column - Main Product Image */}
          <div className="flex items-center justify-center" role="img" aria-label={`Batom na cor ${colorNames[Object.keys(colorMap).find(key => colorMap[key] === selectedImage) || cinzaColorImg]}`}>
            <img
              src={selectedImage}
              alt={`Batom Matte Premium na cor ${colorNames[Object.keys(colorMap).find(key => colorMap[key] === selectedImage) || cinzaColorImg]} aplicado nos lábios`}
              className="w-full max-w-md h-[450px] lg:h-[500px] rounded-lg shadow-xl object-cover"
            />
          </div>

          {/* Third Column - Product Info and Colors */}
          <div className="flex flex-col gap-4">
            <img
              src={estrelasImg}
              alt="Avaliação de 5 estrelas - produto altamente recomendado pelos clientes"
              className="w-32 h-auto"
              role="img"
              aria-label="Classificação 5 de 5 estrelas"
            />

            <h3 className="text-2xl font-bold text-foreground">Matte Premium</h3>

            <div>
              <h4 className="text-base font-semibold text-foreground mb-2">
                Cores disponíveis
              </h4>
              <div className="flex gap-2" role="group" aria-label="Seletor de cores do batom">
                {[cinzaColorImg, vermelhoColorImg, bordoColorImg, nudeColorImg].map(
                  (colorImg, index) => {
                    const isSelected = colorMap[colorImg] === selectedImage;
                    return (
                      <button
                        key={index}
                        onClick={() => handleColorClick(colorImg)}
                        className={`w-10 h-10 rounded-full border-2 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          isSelected ? 'border-primary ring-2 ring-primary' : 'border-border hover:border-primary'
                        }`}
                        aria-label={`Selecionar cor ${colorNames[colorImg]}`}
                        aria-pressed={isSelected}
                      >
                        <img
                          src={colorImg}
                          alt={`Amostra da cor ${colorNames[colorImg]}`}
                          className="w-full h-full rounded-full"
                        />
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-foreground mb-2">
                Descrição
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
