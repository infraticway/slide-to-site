import { useLanguage } from "@/contexts/LanguageContext";
import liberaLogo from "@/assets/libera-logo.webp";
import avantiLogo from "@/assets/avanti-logo.png";
import melowLogo from "@/assets/melow-logo.png";
import raqaLogo from "@/assets/raqa-logo.png";
import ticwayLogo from "@/assets/ticway-logo.png";
import luxtiaLogo from "@/assets/luxtia-logo.png";

const Partners = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
            {t('legacy.partners')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
            <a 
              href="https://liberabiopharma.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <img 
                src={liberaLogo} 
                alt="Libera Biopharma" 
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </a>
            <a 
              href="https://avantifarmaceutica.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <img 
                src={avantiLogo} 
                alt="Avanti Farmacêutica" 
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </a>
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <img 
                src={melowLogo} 
                alt="Melow" 
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </a>
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <img 
                src={raqaLogo} 
                alt="Raqa" 
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </a>
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <img 
                src={ticwayLogo} 
                alt="Ticway" 
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </a>
            <a 
              href="#" 
              className="hover:scale-110 transition-transform duration-300"
            >
              <img 
                src={luxtiaLogo} 
                alt="Luxtia" 
                className="h-12 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
