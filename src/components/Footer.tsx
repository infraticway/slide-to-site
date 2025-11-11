import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-accent-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white/90 text-lg">
            © {currentYear} Melow Connect. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
