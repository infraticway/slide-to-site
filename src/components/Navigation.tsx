import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import melowLogo from "@/assets/melow-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Valores", href: "/valores" },
    { label: "CEO", href: "/ceo" },
    { label: "Contato", href: "/contato" },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/"
            className="flex items-center"
          >
            <img 
              src={melowLogo} 
              alt="Melow Connect" 
              className="h-12"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50 shadow-soft">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleClick}
                  className="block w-full text-left px-4 py-2 font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
