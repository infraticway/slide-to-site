import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import melowLogo from "@/assets/melow-logo.png";

const Contact = () => {
  return (
    <section id="contato" className="py-32 bg-gradient-to-br from-primary via-primary-dark to-accent-purple text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={melowLogo} 
            alt="Melow Connect" 
            className="h-24 mx-auto mb-12 drop-shadow-2xl"
          />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos conversar?
          </h2>
          
          <p className="text-xl text-white/95 mb-16 text-balance max-w-2xl mx-auto leading-relaxed">
            Entre em contato e descubra como podemos impulsionar seu crescimento na América Latina
          </p>

          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="py-12 px-8">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary-dark text-white w-full md:w-auto px-8 py-6 text-lg"
                  >
                    <a href="mailto:contato@melowconnect.com.br" className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      contato@melowconnect.com.br
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full md:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
                  >
                    <a href="tel:+5511982012043" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      +55 11 98201-2043
                    </a>
                  </Button>
                </div>

                <div className="pt-8">
                  <Button 
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full md:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
                  >
                    <a 
                      href="https://www.linkedin.com/company/melow-connect"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      Conecte-se no LinkedIn
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
