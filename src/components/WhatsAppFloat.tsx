import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
    <path d="M16.002 0h-.004C7.163 0 0 7.163 0 16c0 3.488 1.122 6.716 3.022 9.338L1.05 31.05l6.004-1.876C9.652 30.888 12.75 32 16.002 32 24.838 32 32 24.837 32 16S24.838 0 16.002 0zm9.414 22.708c-.394 1.112-1.95 2.038-3.189 2.316-.85.188-1.954.338-5.677-1.218-4.773-2.002-7.85-6.81-8.089-7.124-.232-.314-1.938-2.58-1.938-4.922s1.222-3.496 1.66-3.972c.436-.476.95-.594 1.268-.594.314 0 .632.002.908.014.292.014.682-.112 1.066.814.394 1.004 1.348 3.29 1.466 3.528.118.238.198.514.04.826-.158.318-.236.516-.474.792-.236.278-.496.62-.708.832-.238.236-.486.494-.208.968.276.474 1.232 2.034 2.648 3.292 1.824 1.622 3.362 2.124 3.836 2.362.474.238.752.198.1.028-.396-.118-.712-.236-.87-.316-.712-.356-1.186-.83-1.186-1.61 0-.594.436-1.11.968-1.11.118 0 .236.02.348.054.594.198 1.874.908 2.098 1.082.238.198.396.436.476.712.078.276.078.79-.316 1.556z"/>
  </svg>
);

const WhatsAppIconSmall = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
    <path d="M16.002 0h-.004C7.163 0 0 7.163 0 16c0 3.488 1.122 6.716 3.022 9.338L1.05 31.05l6.004-1.876C9.652 30.888 12.75 32 16.002 32 24.838 32 32 24.837 32 16S24.838 0 16.002 0zm9.414 22.708c-.394 1.112-1.95 2.038-3.189 2.316-.85.188-1.954.338-5.677-1.218-4.773-2.002-7.85-6.81-8.089-7.124-.232-.314-1.938-2.58-1.938-4.922s1.222-3.496 1.66-3.972c.436-.476.95-.594 1.268-.594.314 0 .632.002.908.014.292.014.682-.112 1.066.814.394 1.004 1.348 3.29 1.466 3.528.118.238.198.514.04.826-.158.318-.236.516-.474.792-.236.278-.496.62-.708.832-.238.236-.486.494-.208.968.276.474 1.232 2.034 2.648 3.292 1.824 1.622 3.362 2.124 3.836 2.362.474.238.752.198.1.028-.396-.118-.712-.236-.87-.316-.712-.356-1.186-.83-1.186-1.61 0-.594.436-1.11.968-1.11.118 0 .236.02.348.054.594.198 1.874.908 2.098 1.082.238.198.396.436.476.712.078.276.078.79-.316 1.556z"/>
  </svg>
);

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
            <WhatsAppIcon />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-[340px] md:w-[380px] overflow-hidden animate-scale-in">
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="text-[#25D366]">
                    <WhatsAppIconSmall />
                  </div>
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
