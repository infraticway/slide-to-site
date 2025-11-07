import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Star, Handshake } from "lucide-react";

const Values = () => {
  const purpose = {
    title: "Nosso Propósito",
    description: "Conectar estratégias, pessoas e tecnologia para transformar desafios em crescimento real."
  };

  const values = [
    {
      icon: Star,
      title: "Qualidade",
      description: "Traduzimos análise em precisão e decisões assertivas."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Combinamos inteligência humana e IA para criar soluções que geram impacto."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Cada projeto é guiado por ética, consistência e visão de longo prazo."
    },
    {
      icon: Handshake,
      title: "Parcerias",
      description: "Transformamos relações em conexões duradouras e resultados sustentáveis. Abordagem ganha-ganha."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">{purpose.title}</h2>
            <p className="text-2xl text-foreground/80 font-medium text-balance max-w-3xl mx-auto leading-relaxed">
              {purpose.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-purple transition-all duration-300 hover:scale-105 bg-card group">
                <CardContent className="pt-12 pb-12 px-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-foreground">{value.title}</h3>
                  <p className="text-center text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
