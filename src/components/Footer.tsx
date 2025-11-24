import mastercardImg from "@/assets/mastercard.png";
import visaImg from "@/assets/visa.png";
import pixImg from "@/assets/pix.png";
import boletoImg from "@/assets/boleto.png";
import instagramImg from "@/assets/instagram.png";
import facebookImg from "@/assets/facebook-passoia.png";
import youtubeImg from "@/assets/youtube.png";
import twitterImg from "@/assets/twitter-passoia.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Atendimentos */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              ATENDIMENTOS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </div>

          {/* Formas de Pagamento */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              FORMAS DE PAGAMENTO
            </h3>
            <div className="flex gap-4 flex-wrap">
              <img
                src={mastercardImg}
                alt="Mastercard"
                className="h-8 w-auto"
              />
              <img src={visaImg} alt="Visa" className="h-8 w-auto" />
              <img src={pixImg} alt="PIX" className="h-8 w-auto" />
              <img src={boletoImg} alt="Boleto" className="h-8 w-auto" />
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              SIGA-NOS NAS REDES SOCIAIS
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:opacity-75 transition-opacity"
                aria-label="Instagram"
              >
                <img
                  src={instagramImg}
                  alt="Instagram"
                  className="h-10 w-10"
                />
              </a>
              <a
                href="#"
                className="hover:opacity-75 transition-opacity"
                aria-label="Facebook"
              >
                <img
                  src={facebookImg}
                  alt="Facebook"
                  className="h-10 w-10"
                />
              </a>
              <a
                href="#"
                className="hover:opacity-75 transition-opacity"
                aria-label="YouTube"
              >
                <img
                  src={youtubeImg}
                  alt="YouTube"
                  className="h-10 w-10"
                />
              </a>
              <a
                href="#"
                className="hover:opacity-75 transition-opacity"
                aria-label="Twitter"
              >
                <img
                  src={twitterImg}
                  alt="Twitter"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Passoia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
