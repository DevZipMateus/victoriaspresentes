
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // SEO optimizations - adding schema markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Victorias Presentes & Cosméticos",
      "image": "/lovable-uploads/285af60b-f2b0-44dd-86bc-d98c672f359d.png",
      "description": "Presentes masculinos, femininos, perfumes, cosméticos, cestas e mimos personalizados. Onde cada encomenda é uma experiência única.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Espírito Santo Qd 06 Lt 07 C1",
        "addressLocality": "Goiânia",
        "addressRegion": "GO",
        "postalCode": "74.485-310",
        "addressCountry": "BR"
      },
      "telephone": "+5562995161346",
      "email": "victoriamell60@gmail.com",
      "url": "https://victoriaspresentes.com.br/",
      "sameAs": [
        "https://instagram.com/victoriaspresentes"
      ],
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "$$"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
