import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              {t('about.title')}
            </h1>
            
            <Card className="border-none shadow-soft glass-white mb-12">
              <CardContent className="py-12 px-8 md:px-16">
                <p className="text-xl text-foreground/90 leading-relaxed text-balance mb-8">
                  {t('about.intro')}
                </p>
              </CardContent>
            </Card>

            {/* Our Approach */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                {t('about.approach.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 bg-card">
                  <CardContent className="py-8 px-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('about.approach.item1.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t('about.approach.item1.desc')}</p>
                  </CardContent>
                </Card>
                <Card className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 bg-card">
                  <CardContent className="py-8 px-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('about.approach.item2.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t('about.approach.item2.desc')}</p>
                  </CardContent>
                </Card>
                <Card className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 bg-card">
                  <CardContent className="py-8 px-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('about.approach.item3.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t('about.approach.item3.desc')}</p>
                  </CardContent>
                </Card>
                <Card className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 bg-card">
                  <CardContent className="py-8 px-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{t('about.approach.item4.title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t('about.approach.item4.desc')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Our Purpose */}
            <Card className="border-none shadow-soft glass-white">
              <CardContent className="py-12 px-8 md:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
                  {t('about.purpose.title')}
                </h2>
                <p className="text-xl text-foreground/90 leading-relaxed text-center text-balance">
                  {t('about.purpose.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
