import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            {t('about.title')}
          </h2>
          
          <Card className="border-none shadow-soft glass-white">
            <CardContent className="py-16 px-8 md:px-16">
              <p className="text-xl text-center text-foreground/90 leading-relaxed max-w-4xl mx-auto text-balance">
                {t('about.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
