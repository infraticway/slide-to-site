import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, TrendingUp, Brain, BarChart3, Users, Shield, Network, Award, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Briefcase,
      titleKey: "services.newBusiness",
      descKey: "services.newBusinessDesc"
    },
    {
      icon: Globe,
      titleKey: "services.market",
      descKey: "services.marketDesc"
    },
    {
      icon: TrendingUp,
      titleKey: "services.brand",
      descKey: "services.brandDesc"
    },
    {
      icon: Brain,
      titleKey: "services.tech",
      descKey: "services.techDesc"
    },
    {
      icon: BarChart3,
      titleKey: "services.bi",
      descKey: "services.biDesc"
    },
    {
      icon: Users,
      titleKey: "services.people",
      descKey: "services.peopleDesc"
    },
    {
      icon: Shield,
      titleKey: "services.governance",
      descKey: "services.governanceDesc"
    },
    {
      icon: Network,
      titleKey: "services.network",
      descKey: "services.networkDesc"
    },
    {
      icon: Award,
      titleKey: "services.regulatory",
      descKey: "services.regulatoryDesc"
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
          
          <p className="text-xl text-center text-muted-foreground mb-20 text-balance">
            {t('services.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-105 bg-card group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{t(service.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
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
