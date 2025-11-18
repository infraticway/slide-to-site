import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Services />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ServicesPage;
