import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContactPage;
