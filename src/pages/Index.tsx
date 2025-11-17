import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyBrazil from "@/components/WhyBrazil";
import Values from "@/components/Values";
import CEO from "@/components/CEO";
import Legacy from "@/components/Legacy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <WhyBrazil />
      <Values />
      <CEO />
      <Legacy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
