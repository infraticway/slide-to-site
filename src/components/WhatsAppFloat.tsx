import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const whatsappNumber = "5511982012043";
  const defaultMessage = t('whatsapp.message') || "Olá! Gostaria de falar com um especialista da Melow Connect!";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse-glow"
            aria-label="Open WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-[340px] md:w-[380px] overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <span className="text-white font-semibold text-lg">WhatsApp</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
                <p className="text-gray-700 leading-relaxed">
                  {defaultMessage}
                </p>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-base py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {t('whatsapp.button') || 'Quero falar!'}
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppFloat;
