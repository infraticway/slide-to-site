const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-accent-purple text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white/90 text-lg">
            © {currentYear} Melow Connect. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
