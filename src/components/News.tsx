import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Newspaper, Calendar, FileText, Users, MessageSquare, ExternalLink } from "lucide-react";

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

  const articles = [
    {
      title: "FINEP - Inovacred: Financiamento para Empresas e ICTs",
      description: "Programa de financiamento da FINEP para apoiar inovação em empresas e instituições científicas e tecnológicas.",
      link: "http://www.finep.gov.br/apoio-e-financiamento-externa/programas-e-linhas/inovacred-empresa-e-ict-s",
      date: "2024"
    },
    {
      title: "ABIQUIFI: Missão Empresarial à Colômbia sobre Cannabis Medicinal",
      description: "Cooperação técnica e diálogo regulatório sobre cannabis medicinal nortearam a missão empresarial da ABIQUIFI à Colômbia.",
      link: "https://abiquifi.org.br/indice-de-noticia/cooperacao-tecnica-e-dialogo-regulatorio-sobre-cannabis-medicinal-nortearam-a-missao-empresarial-da-abiquifi-a-colombia",
      date: "2024"
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

          <div className="flex flex-col gap-8 mb-24">
            {/* First row with 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.slice(0, 3).map((category, index) => (
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
            
            {/* Second row with 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
              {categories.slice(3).map((category, index) => (
                <Card 
                  key={index + 3} 
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
          </div>

          {/* Articles & Quick Reads Section */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">{t('news.articles.title')}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card 
                  key={index}
                  className="border border-border/50 shadow-soft hover:shadow-blue-soft transition-all duration-300 bg-card group cursor-pointer"
                  onClick={() => window.open(article.link, '_blank')}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {article.description}
                    </p>
                    <p className="text-xs text-muted-foreground">{article.date}</p>
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

export default News;