import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Handshake, Shield, BarChart3, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: TrendingUp,
      titleKey: "services.pillar1.title",
      items: [
        "services.pillar1.item1",
        "services.pillar1.item2",
        "services.pillar1.item3",
        "services.pillar1.item4",
        "services.pillar1.item5"
      ]
    },
    {
      icon: Handshake,
      titleKey: "services.pillar2.title",
      items: [
        "services.pillar2.item1",
        "services.pillar2.item2",
        "services.pillar2.item3",
        "services.pillar2.item4"
      ]
    },
    {
      icon: Shield,
      titleKey: "services.pillar3.title",
      items: [
        "services.pillar3.item1",
        "services.pillar3.item2",
        "services.pillar3.item3",
        "services.pillar3.item4"
      ]
    },
    {
      icon: BarChart3,
      titleKey: "services.pillar4.title",
      items: [
        "services.pillar4.item1",
        "services.pillar4.item2",
        "services.pillar4.item3",
        "services.pillar4.item4"
      ]
    },
    {
      icon: Users,
      titleKey: "services.pillar5.title",
      items: [
        "services.pillar5.item1",
        "services.pillar5.item2",
        "services.pillar5.item3",
        "services.pillar5.item4",
        "services.pillar5.item5"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t('services.title')}
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-20 text-balance max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-[1.02] bg-card group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground mb-4">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground leading-relaxed">{t(item)}</span>
                      </li>
                    ))}
                  </ul>
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