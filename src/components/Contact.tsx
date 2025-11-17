import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import melowLogo from "@/assets/melow-logo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-deep-ocean" />
      <div className="absolute inset-0 gradient-radial-blue opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <img 
            src={melowLogo} 
            alt="Melow Connect" 
            className="h-24 mx-auto mb-12 drop-shadow-2xl"
          />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="text-xl text-white/95 mb-16 text-balance max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <Card className="border-4 border-primary rounded-3xl shadow-2xl bg-white overflow-hidden">
            <CardContent className="py-12 px-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-primary to-accent-cyan hover:from-primary-dark hover:to-primary text-white w-full md:w-auto px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
                  >
                    <a href="mailto:contato@melowconnect.com.br" className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      {t('contact.email')}
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-accent-blue to-accent-cyan hover:from-primary hover:to-accent-cyan text-white w-full md:w-auto px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
                  >
                    <a href="tel:+5511982012043" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      {t('contact.call')}
                    </a>
                  </Button>
                </div>

                <div className="pt-8">
                  <Button 
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-accent-blue to-primary hover:from-primary-dark hover:to-accent-cyan text-white w-full md:w-auto px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl"
                  >
                    <a 
                      href="https://www.linkedin.com/company/melow-connect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      {t('contact.linkedin')}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
