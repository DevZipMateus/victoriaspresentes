
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import AnimatedScrollObserver from '@/components/AnimatedScrollObserver';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-victoria-pink" />,
      title: "Telefone/WhatsApp",
      details: "62 995161346 | 62 991563589",
      link: "tel:+5562995161346"
    },
    {
      icon: <Mail className="h-5 w-5 text-victoria-pink" />,
      title: "E-mail",
      details: "victoriamell60@gmail.com",
      link: "mailto:victoriamell60@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-victoria-pink" />,
      title: "Endereço",
      details: "Rua Espírito Santo Qd 06 Lt 07 C1, Goiá, Goiânia - GO, CEP: 74.485-310",
      link: "https://maps.google.com/maps?q=Rua+Espírito+Santo+Qd+06+Lt+07+C1+Goiá,+Goiânia+-+GO"
    },
    {
      icon: <Instagram className="h-5 w-5 text-victoria-pink" />,
      title: "Instagram",
      details: "@victoriaspresentes",
      link: "https://instagram.com/victoriaspresentes"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-victoria-pink/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-victoria-light/80 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <AnimatedScrollObserver>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-victoria-pink/10 text-victoria-pink rounded-full text-sm font-medium mb-4 animate-on-scroll">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-victoria-pink">
              Estamos à Sua Disposição
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Entre em contato conosco através de WhatsApp, telefone ou e-mail.
              Nossa equipe está pronta para atender suas necessidades e criar experiências únicas.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border border-victoria-light/50 shadow-card animate-on-scroll">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-victoria-dark">Informações de Contato</h3>
                    <p className="text-muted-foreground mb-8">
                      Para fazer pedidos, tirar dúvidas ou solicitar produtos personalizados,
                      utilize um dos canais de atendimento abaixo. Respondemos com agilidade e atenção.
                    </p>
                    
                    <div className="space-y-6 mb-8">
                      {contactInfo.map((item, index) => (
                        <ContactInfoItem 
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          details={item.details}
                          link={item.link}
                        />
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-4">Redes Sociais</h4>
                      <div className="flex space-x-3">
                        <SocialLink 
                          icon={<Instagram size={20} />} 
                          href="https://instagram.com/victoriaspresentes" 
                          label="Instagram" 
                        />
                        <div className="text-victoria-dark ml-2 text-sm">
                          Siga-nos no Instagram: <span className="font-medium">@victoriaspresentes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-center p-6 bg-victoria-light rounded-xl max-w-md">
                      <div className="mb-4 text-victoria-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-victoria-dark">Prefere atendimento via WhatsApp?</h3>
                      <p className="text-muted-foreground mb-6">
                        Clique no botão do WhatsApp no canto inferior direito da tela para iniciar uma conversa 
                        diretamente com nossa equipe de atendimento.
                      </p>
                      <div className="text-sm text-muted-foreground">
                        Tempo médio de resposta: <span className="font-medium text-foreground">15 minutos</span>
                      </div>
                      <div className="mt-4 text-sm">
                        <strong>Números:</strong> 62 995161346 | 62 991563589
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 animate-on-scroll">
            <Card className="border border-victoria-light/50 shadow-card overflow-hidden">
              <div className="h-[400px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8988363539383!2d-49.32598492391757!3d-16.686964184006447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0fee9abe8e7%3A0xbe203c6c056d5ca2!2sR.%20Esp%C3%ADrito%20Santo%20-%20Goi%C3%A1%2C%20Goi%C3%A2nia%20-%20GO%2C%2074486-025!5e0!3m2!1spt-BR!2sbr!4v1713643381289!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localização"
                />
              </div>
            </Card>
          </div>
        </div>
      </AnimatedScrollObserver>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  link: string;
}

const ContactInfoItem = ({ icon, title, details, link }: ContactInfoItemProps) => {
  const content = (
    <div className="flex">
      <div className="flex-shrink-0 mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground mt-1">{details}</p>
      </div>
    </div>
  );

  return (
    <a href={link} className="block hover:text-victoria-pink transition-colors">
      {content}
    </a>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink = ({ icon, href, label }: SocialLinkProps) => (
  <a
    href={href}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-victoria-pink/10 text-victoria-pink hover:bg-victoria-pink hover:text-white transition-colors"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default ContactSection;
