import Navigation from "@/components/Navigation";
import News from "@/components/News";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const NewsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <News />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default NewsPage;