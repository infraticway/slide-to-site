import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Lightbulb, GraduationCap } from "lucide-react";

const Legacy = () => {
  const legacyItems = [
    {
      icon: Handshake,
      title: "Parcerias Ganha-Ganha",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Inovação com Propósito",
      gradient: "from-accent to-accent-blue"
    },
    {
      icon: GraduationCap,
      title: "Desenvolvimento de Pessoas e Conhecimento",
      gradient: "from-primary to-primary-light"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Nosso Legado para o Mundo
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-20 max-w-4xl mx-auto text-balance leading-relaxed">
            Na Melow Connect, acreditamos que o verdadeiro sucesso é construído por meio de conexões significativas. Nosso legado é transformar conhecimento em impacto, tecnologia em propósito e parcerias em prosperidade compartilhada.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {legacyItems.map((item, index) => (
              <Card key={index} className="border border-border/50 shadow-soft overflow-hidden group hover:shadow-purple hover:scale-105 transition-all duration-300 bg-card">
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="pt-12 pb-12 px-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center leading-tight text-foreground">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-purple bg-gradient-to-br from-primary to-primary-dark">
            <CardContent className="py-16 px-10">
              <p className="text-2xl md:text-3xl font-bold text-white text-balance text-center leading-relaxed">
                Nosso legado é construir pontes que transformam negócios e pessoas em histórias de sucesso.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
