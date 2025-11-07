import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import melowLogo from "@/assets/melow-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-purple-pink" />
      <div className="absolute inset-0 gradient-radial-purple opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center pt-20">
          <img 
            src={melowLogo} 
            alt="Melow Connect" 
            className="h-24 md:h-32 mx-auto mb-12 drop-shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-balance leading-tight">
            Conectando dados, estratégia e tecnologia
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            Consultoria estratégica para impulsionar empresas internacionais no Brasil e América Latina
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 text-lg px-10 py-6 shadow-xl transition-all"
            >
              Entre em contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white/15 hover:scale-105 text-lg px-10 py-6 transition-all"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
