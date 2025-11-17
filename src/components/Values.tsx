
import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Values = () => {
  const { t } = useLanguage();
  

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

        </div>
      </div>
    </section>
  );
};

export default Values;
