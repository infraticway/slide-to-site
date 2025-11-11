import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Columns3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Mission = () => {
  const { t } = useLanguage();
  
  const pillars = [
    {
      icon: Columns3,
      titleKey: "pillars.global",
      descKey: "pillars.globalDesc"
    },
    {
      icon: Target,
      titleKey: "pillars.intelligence",
      descKey: "pillars.intelligenceDesc"
    },
    {
      icon: Eye,
      titleKey: "pillars.execution",
      descKey: "pillars.executionDesc"
    }
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <Card className="border-none shadow-blue-soft bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-12 px-10 relative">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">{t('mission.title')}</h2>
                </div>
                <p className="text-lg leading-relaxed text-white/95 relative z-10">
                  {t('mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-blue-soft bg-gradient-to-br from-accent-blue to-accent-cyan text-white overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardContent className="pt-12 pb-12 px-10 relative">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">{t('vision.title')}</h2>
                </div>
                <p className="text-lg leading-relaxed text-white/95 relative z-10">
                  {t('vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{t('pillars.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-105 bg-card group">
                <CardContent className="pt-12 pb-12 px-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <pillar.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-foreground">{t(pillar.titleKey)}</h3>
                  <p className="text-center text-muted-foreground leading-relaxed">{t(pillar.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
