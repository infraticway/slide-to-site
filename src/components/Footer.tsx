import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ticwayLogo from "@/assets/ticway-logo.png";
import luxtiaLogo from "@/assets/luxtia-logo.png";
import raqaLogo from "@/assets/raqa-logo.png";
import liberaLogo from "@/assets/libera-logo.webp";
import avantiLogo from "@/assets/avanti-logo.png";
import melowLogo from "@/assets/melow-logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const partners = [
    { name: "Libera", logo: liberaLogo, url: "https://liberabiopharma.com/" },
    { name: "Avanti", logo: avantiLogo, url: "https://avantifarmaceutica.com.br/" },
    { name: "Melow", logo: melowLogo, url: "#" },
    { name: "RAQA", logo: raqaLogo, url: "https://raqa.com.br/home/" },
    { name: "TICWay", logo: ticwayLogo, url: "https://ticway.com.br/" },
    { name: "Luxtia", logo: luxtiaLogo, url: "https://luxtia.com.br/" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-accent-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Partners Carousel */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-white">
              {t('footer.partners')}
            </h3>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full max-w-lg mx-auto"
            >
              <CarouselContent>
                {partners.map((partner, index) => (
                  <CarouselItem key={index}>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-12 transition-all duration-300 h-48"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-36 max-w-full object-contain drop-shadow-lg"
                      />
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-white/20 pt-8">
            <p className="text-white/90 text-lg">
              © {currentYear} Melow Connect. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
