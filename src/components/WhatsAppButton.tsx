
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Export these for reuse in other components
export const phoneNumbers = [
  {
    number: "62995161346",
    display: "(62) 99516-1346"
  },
  {
    number: "62991563589",
    display: "(62) 99156-3589"
  }
];

export const openWhatsApp = (number: string, customMessage?: string) => {
  const message = customMessage || "Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20serviços%20da%20Victoria%20Presente%20&%20Cosméticos.";
  window.open(`https://wa.me/55${number}?text=${message}`, '_blank');
};

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenWhatsApp = (number: string) => {
    openWhatsApp(number);
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs service-card animate-slide-up">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-victoria-dark">Entre em contato</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Olá! Estamos aqui para ajudar com seus pedidos e dúvidas sobre nossos produtos e serviços.
          </p>
          <div className="space-y-2">
            {phoneNumbers.map((phone, index) => (
              <button
                key={index}
                onClick={() => handleOpenWhatsApp(phone.number)}
                className="w-full py-2 px-4 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-md flex items-center justify-center mb-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                  <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                  <path d="M8.5 14a5.5 5.5 0 0 0 7 0" />
                </svg>
                {phone.display}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center relative overflow-hidden"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 opacity-30 whatsapp-ripple"></div>
        <img src="/lovable-uploads/e5c365ac-2ba0-4157-bb97-d6821651fde1.png" alt="WhatsApp" className="h-16 w-16" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
