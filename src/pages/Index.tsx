import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyBrazil from "@/components/WhyBrazil";
import CEO from "@/components/CEO";
import Legacy from "@/components/Legacy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <WhyBrazil />
      {/* Values section moved to /values page to avoid duplication on Home */}
      <Legacy />
      <CEO />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
