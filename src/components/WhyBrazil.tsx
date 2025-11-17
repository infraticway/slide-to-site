import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const WhyBrazil = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Users,
      textKey: "whyBrazil.highlight1"
    },
    {
      icon: TrendingUp,
      textKey: "whyBrazil.highlight2"
    },
    {
      icon: Globe,
      textKey: "whyBrazil.highlight3"
    },
    {
      icon: Award,
      textKey: "whyBrazil.highlight4"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t('whyBrazil.title')}
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 text-balance max-w-3xl mx-auto">
            {t('whyBrazil.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-[1.02] bg-card group">
                <CardContent className="py-8 px-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg text-foreground/90 leading-relaxed">{t(highlight.textKey)}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrazil;