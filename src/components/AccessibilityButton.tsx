import { useState, useRef, useEffect } from "react";
import { Eye, X, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const pageDescriptions = [
  {
    section: "Cabeçalho",
    description: "Logo da Passoia Cosméticos no centro, menu de navegação com links para Looks e Dicas de Maquiagem, Lançamentos, Novidades, e Atendimento."
  },
  {
    section: "Banner Principal", 
    description: "Banner promocional da Passoia Cosméticos mostrando produtos de maquiagem com uma modelo usando maquiagem profissional."
  },
  {
    section: "Looks e Dicas de Maquiagem",
    description: "Quatro categorias de produtos: Batom para realçar seus lábios, Lábios para destaque e cor, Olhos com sombras e delineadores, e Rosto com bases e corretivos. Clique em cada categoria para ver detalhes do produto."
  },
  {
    section: "Lançamentos",
    description: "Seção de lançamentos destacando um batom disponível em quatro cores: Bordô para um tom sofisticado e elegante, Nude para um visual natural e discreto, Cinza para um look moderno e ousado, e Vermelho clássico e vibrante. Selecione uma cor para ver como fica nos lábios."
  },
  {
    section: "Novidades",
    description: "Destaque de novidades da Passoia Cosméticos com produtos exclusivos e promoções especiais."
  },
  {
    section: "Rodapé",
    description: "Informações de atendimento com horário de funcionamento de segunda a sexta das 9h às 18h, formas de pagamento aceitas incluindo Pix, boleto, Visa e Mastercard, e links para redes sociais: Instagram, Facebook, YouTube e Twitter."
  }
];

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  const readAllContent = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsReading(true);
      setCurrentIndex(0);

      const fullText = pageDescriptions
        .map(item => `${item.section}. ${item.description}`)
        .join(". ");

      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const readSection = (index: number) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsReading(true);
      setCurrentIndex(index);

      const item = pageDescriptions[index];
      const utterance = new SpeechSynthesisUtterance(`${item.section}. ${item.description}`);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        stopReading();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Botão flutuante de acessibilidade */}
      <Button
        ref={buttonRef}
        onClick={togglePanel}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        aria-label={isOpen ? "Fechar painel de acessibilidade" : "Abrir painel de acessibilidade para ouvir descrição da página"}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
      </Button>

      {/* Painel de acessibilidade */}
      {isOpen && (
        <div
          id="accessibility-panel"
          ref={panelRef}
          role="dialog"
          aria-label="Painel de acessibilidade - Descrição do conteúdo da página"
          aria-modal="true"
          tabIndex={-1}
          className="fixed bottom-24 right-6 z-50 w-80 max-h-[70vh] bg-background border border-border rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-4 bg-primary text-primary-foreground">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Eye className="w-5 h-5" aria-hidden="true" />
              Acessibilidade Visual
            </h2>
            <p className="text-sm opacity-90 mt-1">
              Ouça a descrição do conteúdo da página
            </p>
          </div>

          <div className="p-4 space-y-3">
            <Button
              onClick={isReading ? stopReading : readAllContent}
              className="w-full flex items-center justify-center gap-2"
              variant={isReading ? "destructive" : "default"}
              aria-label={isReading ? "Parar leitura" : "Ler toda a página"}
            >
              <Volume2 className="w-4 h-4" aria-hidden="true" />
              {isReading ? "Parar Leitura" : "Ler Toda a Página"}
            </Button>

            <div className="border-t border-border pt-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Ou selecione uma seção:
              </h3>
              <ul className="space-y-2 max-h-48 overflow-y-auto" role="list">
                {pageDescriptions.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => readSection(index)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                        currentIndex === index && isReading
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 hover:bg-secondary text-foreground"
                      }`}
                      aria-label={`Ouvir descrição da seção ${item.section}`}
                      aria-current={currentIndex === index && isReading ? "true" : undefined}
                    >
                      {item.section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-3 bg-muted/50 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Pressione Esc para fechar
            </p>
          </div>
        </div>
      )}

      {/* Região para anúncios de leitores de tela */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {isReading && `Lendo: ${pageDescriptions[currentIndex]?.section}`}
      </div>
    </>
  );
};

export default AccessibilityButton;
