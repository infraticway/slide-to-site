import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Brain, BarChart3, Users, Shield, Network, Award } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Entrada no Mercado",
      description: "Curadoria estratégica de oportunidades e parceiros, selecionando os melhores caminhos — parcerias, distribuidor/CMO, joint ventures ou entrada direta."
    },
    {
      icon: TrendingUp,
      title: "Brand Plan & Go-to-Market",
      description: "Planejamento e execução de marca com posicionamento e forecasting."
    },
    {
      icon: Brain,
      title: "Soluções de Tecnologia & IA",
      description: "Integração de IA e analytics para decisões de negócio."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Insights",
      description: "Dashboards e relatórios preditivos orientados à ação, cálculo premiação da FV."
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Pessoas",
      description: "Buscamos as pessoas certas para o seu negócio."
    },
    {
      icon: Shield,
      title: "Governança e Compliance",
      description: "Suporte jurídico e compliance."
    },
    {
      icon: Network,
      title: "Network e Ecossistema",
      description: "Através da nossa curadoria e expertise de mercado, conectamos o cliente às empresas."
    },
    {
      icon: Award,
      title: "Apoio Regulatório e Qualidade",
      description: "Identificamos sua necessidade nesse quesito e oferecemos a solução ideal para o momento e tamanho da sua empresa."
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-purple rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Áreas de Atuação
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-20 text-balance">
            Brand Plan, Business Intelligence & IA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-purple transition-all duration-300 hover:scale-105 bg-card group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-purple transition-all duration-300 hover:scale-105 bg-card group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple to-accent-purple-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
