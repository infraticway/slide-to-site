import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  const reasons = [
    "whyChooseUs.reason1",
    "whyChooseUs.reason2",
    "whyChooseUs.reason3",
    "whyChooseUs.reason4",
    "whyChooseUs.reason5"
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t('whyChooseUs.title')}
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 text-balance">
            {t('whyChooseUs.subtitle')}
          </p>
          
          <Card className="border-none shadow-soft glass-white">
            <CardContent className="py-12 px-8 md:px-16">
              <ul className="space-y-6">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground/90 leading-relaxed">{t(reason)}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;