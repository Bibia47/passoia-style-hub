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
    <footer className="bg-card border-t border-border py-12 px-4" role="contentinfo">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Atendimentos */}
          <nav aria-labelledby="footer-atendimento">
            <h3 id="footer-atendimento" className="text-xl font-bold text-foreground mb-4">
              ATENDIMENTOS
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Entre em contato com nossa equipe de atendimento"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Consulte as perguntas mais frequentes"
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Acompanhe o status dos seus pedidos"
                >
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  aria-label="Encontre as lojas físicas Passoia mais próximas"
                >
                  Nossas Lojas
                </a>
              </li>
            </ul>
          </nav>

          {/* Formas de Pagamento */}
          <div aria-labelledby="footer-pagamento">
            <h3 id="footer-pagamento" className="text-xl font-bold text-foreground mb-4">
              FORMAS DE PAGAMENTO
            </h3>
            <div className="flex gap-4 flex-wrap" role="list" aria-label="Métodos de pagamento aceitos">
              <img
                src={mastercardImg}
                alt="Aceitamos Mastercard"
                className="h-8 w-auto"
                role="listitem"
              />
              <img 
                src={visaImg} 
                alt="Aceitamos Visa" 
                className="h-8 w-auto"
                role="listitem"
              />
              <img 
                src={pixImg} 
                alt="Aceitamos PIX - pagamento instantâneo" 
                className="h-8 w-auto"
                role="listitem"
              />
              <img 
                src={boletoImg} 
                alt="Aceitamos Boleto Bancário" 
                className="h-8 w-auto"
                role="listitem"
              />
            </div>
          </div>

          {/* Redes Sociais */}
          <nav aria-labelledby="footer-social">
            <h3 id="footer-social" className="text-xl font-bold text-foreground mb-4">
              SIGA-NOS NAS REDES SOCIAIS
            </h3>
            <div className="flex gap-4" role="list">
              <a
                href="#"
                className="hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label="Visite nosso perfil no Instagram"
                role="listitem"
              >
                <img
                  src={instagramImg}
                  alt="Ícone do Instagram"
                  className="h-10 w-10"
                />
              </a>
              <a
                href="#"
                className="hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label="Visite nossa página no Facebook"
                role="listitem"
              >
                <img
                  src={facebookImg}
                  alt="Ícone do Facebook"
                  className="h-10 w-10"
                />
              </a>
              <a
                href="#"
                className="hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label="Inscreva-se no nosso canal do YouTube"
                role="listitem"
              >
                <img
                  src={youtubeImg}
                  alt="Ícone do YouTube"
                  className="h-10 w-10"
                />
              </a>
              <a
                href="#"
                className="hover:opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                aria-label="Siga-nos no Twitter"
                role="listitem"
              >
                <img
                  src={twitterImg}
                  alt="Ícone do Twitter"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </nav>
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
