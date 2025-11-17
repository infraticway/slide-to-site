import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Newspaper, Calendar, FileText, Users, MessageSquare } from "lucide-react";

const News = () => {
  const { t } = useLanguage();
  
  const categories = [
    {
      icon: Linkedin,
      titleKey: "news.linkedin.title",
      descKey: "news.linkedin.desc",
      link: "https://www.linkedin.com/company/melowconnect"
    },
    {
      icon: Newspaper,
      titleKey: "news.anvisa.title",
      descKey: "news.anvisa.desc"
    },
    {
      icon: Calendar,
      titleKey: "news.events.title",
      descKey: "news.events.desc"
    },
    {
      icon: FileText,
      titleKey: "news.articles.title",
      descKey: "news.articles.desc"
    },
    {
      icon: Users,
      titleKey: "news.publications.title",
      descKey: "news.publications.desc"
    },
    {
      icon: MessageSquare,
      titleKey: "news.interviews.title",
      descKey: "news.interviews.desc"
    }
  ];

  return (
    <section className="py-32 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent-cyan rounded-full mb-8 mx-auto" />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t('news.title')}
          </h1>
          
          <p className="text-xl text-center text-muted-foreground mb-20 text-balance max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 hover:scale-105 bg-card group cursor-pointer"
                onClick={() => category.link && window.open(category.link, '_blank')}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{t(category.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t(category.descKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-lg text-muted-foreground italic">
              {t('news.comingSoon')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;