import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <About />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default AboutPage;
