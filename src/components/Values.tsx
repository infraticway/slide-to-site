import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Values = () => {
  const { t } = useLanguage();
  

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-105 bg-card group">
              <CardHeader>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl text-center text-foreground">{t('mission.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  {t('mission.description')}
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-105 bg-card group">
              <CardHeader>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl text-center text-foreground">{t('vision.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  {t('vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Values;
