import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";
import ericaPhoto from "@/assets/erica-melo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const CEO = () => {
  const { t } = useLanguage();
  
  return (
    <section id="ceo" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-foreground">{t('ceo.title')}</h2>
          
          <Card className="border border-border/50 shadow-purple overflow-hidden bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-1 bg-gradient-to-br from-primary to-primary-dark p-12 flex flex-col items-center justify-center">
                <img 
                  src={ericaPhoto}
                  alt="Érica Mélo" 
                  className="w-80 h-80 rounded-full object-cover object-[center_20%] border-4 border-white shadow-2xl mb-6"
                />
                <h3 className="text-3xl font-bold text-white mb-2">Érica Mélo</h3>
                <p className="text-white/95 text-lg mb-10">{t('ceo.position')}</p>
                
                <div className="space-y-4 w-full">
                  <a 
                    href="mailto:emelo@melowconnect.com.br"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">emelo@melowconnect.com.br</span>
                  </a>
                  <a 
                    href="tel:+5511982012043"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">+55 11 98201-2043</span>
                  </a>
                  <a 
                    href="https://wa.me/5511982012043"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/%C3%A9rica-m%C3%A9lo-b034334/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">Érica Mélo</span>
                  </a>
                </div>
              </div>
              
              <CardContent className="lg:col-span-2 p-10 lg:p-16">
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>{t('ceo.bio1')}</p>
                  <p>{t('ceo.bio2')}</p>
                  <p>{t('ceo.bio3')}</p>
                  <p>{t('ceo.bio4')}</p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CEO;
