import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Handshake, Lightbulb, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Values = () => {
  const { t } = useLanguage();
  
  const pillars = [
    {
      icon: Handshake,
      titleKey: "pillars.partnerships"
    },
    {
      icon: Lightbulb,
      titleKey: "pillars.innovation"
    },
    {
      icon: TrendingUp,
      titleKey: "pillars.development"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Mission */}
          <div className="mb-20 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-8 mx-auto">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('mission.title')}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {t('mission.description')}
            </p>
          </div>

          {/* Vision */}
          <div className="mb-24 text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-8 mx-auto">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t('vision.title')}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {t('vision.description')}
            </p>
          </div>

          {/* Pillars */}
          <div className="text-center">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">{t('pillars.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <Card key={index} className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-105 bg-card group">
                  <CardContent className="pt-16 pb-16 px-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <pillar.icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-center text-foreground">{t(pillar.titleKey)}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
