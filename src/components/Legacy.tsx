import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Lightbulb, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import liberaLogo from "@/assets/libera-logo.webp";
import avantiLogo from "@/assets/avanti-logo.png";
import melowLogo from "@/assets/melow-logo.png";
import raqaLogo from "@/assets/raqa-logo.png";
import ticwayLogo from "@/assets/ticway-logo.png";
import luxtiaLogo from "@/assets/luxtia-logo.png";

const Legacy = () => {
  const { t } = useLanguage();
  
  const legacyItems = [
    {
      icon: Handshake,
      titleKey: "legacy.partnerships",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      titleKey: "legacy.innovation",
      gradient: "from-accent to-accent-blue"
    },
    {
      icon: GraduationCap,
      titleKey: "legacy.development",
      gradient: "from-primary to-primary-light"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            {t('legacy.title')}
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-20 max-w-4xl mx-auto text-balance leading-relaxed">
            {t('legacy.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {legacyItems.map((item, index) => (
              <Card key={index} className="border border-border/50 shadow-soft overflow-hidden group hover:shadow-blue-soft hover:scale-105 transition-all duration-300 bg-card">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="pt-12 pb-12 px-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center leading-tight text-foreground">{t(item.titleKey)}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-blue-soft bg-gradient-to-br from-primary to-primary-dark">
            <CardContent className="py-16 px-10">
              <p className="text-2xl md:text-3xl font-bold text-white text-balance text-center leading-relaxed">
                {t('legacy.quote')}
              </p>
            </CardContent>
          </Card>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              {t('legacy.partners')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              <a href="https://liberabiopharma.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <img src={liberaLogo} alt="Libera Biopharma" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://avantifarmaceutica.com.br/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                <img src={avantiLogo} alt="Avanti Farmacêutica" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <img src={melowLogo} alt="Melow" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <img src={raqaLogo} alt="Raqa" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <img src={ticwayLogo} alt="Ticway" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform duration-300">
                <img src={luxtiaLogo} alt="Luxtia" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
