import Navigation from "@/components/Navigation";
import Legacy from "@/components/Legacy";
import Values from "@/components/Values";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ValuesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Values />
      <Legacy />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ValuesPage;
