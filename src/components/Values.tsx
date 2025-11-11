import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Star, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Values = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Star,
      titleKey: "values.quality",
      descKey: "values.qualityDesc"
    },
    {
      icon: Lightbulb,
      titleKey: "values.innovation",
      descKey: "values.innovationDesc"
    },
    {
      icon: Target,
      titleKey: "values.excellence",
      descKey: "values.excellenceDesc"
    },
    {
      icon: Handshake,
      titleKey: "values.partnerships",
      descKey: "values.partnershipsDesc"
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">{t('values.purpose')}</h2>
            <p className="text-2xl text-foreground/80 font-medium text-balance max-w-3xl mx-auto leading-relaxed">
              {t('values.purposeDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-105 bg-card group">
                <CardContent className="pt-12 pb-12 px-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-foreground">{t(value.titleKey)}</h3>
                  <p className="text-center text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
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
