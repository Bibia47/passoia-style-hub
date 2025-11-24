import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import labiosImg from "@/assets/labios.png";
import olhosImg from "@/assets/olhos.png";
import rostoImg from "@/assets/rosto.png";
import tendenciaImg from "@/assets/tendencia.png";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: "labios",
    name: "Lábios",
    description: "Descubra as melhores técnicas e produtos para lábios perfeitos. Batons matte, glosses e cuidados especiais.",
    price: "R$ 45,00",
    image: labiosImg,
  },
  {
    id: "olhos",
    name: "Olhos",
    description: "Realce seu olhar com sombras, delineadores e máscaras de cílios de alta qualidade. Looks do dia e da noite.",
    price: "R$ 65,00",
    image: olhosImg,
  },
  {
    id: "rosto",
    name: "Rosto",
    description: "Base, contorno e iluminador para uma pele radiante. Aprenda técnicas profissionais de maquiagem.",
    price: "R$ 89,00",
    image: rostoImg,
  },
  {
    id: "tendencia",
    name: "Tendência",
    description: "Fique por dentro das últimas tendências em maquiagem. Looks modernos e versáteis para todas as ocasiões.",
    price: "R$ 120,00",
    image: tendenciaImg,
  },
];

const LooksSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="looks" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          LOOKS E DICAS DE MAQUIAGEM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <p className="text-muted-foreground mb-4">
                  {selectedProduct.description}
                </p>
                <p className="text-2xl font-bold text-primary">
                  {selectedProduct.price}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LooksSection;
