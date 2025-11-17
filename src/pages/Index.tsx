import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Mission from "@/components/Mission";
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
      <Values />
      <Mission />
      <CEO />
      <Legacy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
