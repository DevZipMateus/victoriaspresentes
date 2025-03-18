
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Conhecimento e Experiência para o Sucesso do seu Negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Mais que um escritório contábil, somos um parceiro estratégico comprometido com
            o crescimento sustentável da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Conte com uma Contabilidade Harmônica
              </h3>
              <p className="text-muted-foreground mb-6">
                Desde 2010, ajudamos empresas de todos os tamanhos a otimizar suas operações
                financeiras e contábeis. Nossa abordagem combina expertise técnica com um
                atendimento personalizado, garantindo que cada cliente receba soluções
                adequadas às suas necessidades específicas.
              </p>
              <ul className="space-y-3">
                {[
                  'Equipe multidisciplinar e altamente qualificada',
                  'Processos contábeis simplificados e transparentes',
                  'Tecnologia de ponta para gestão financeira eficiente',
                  'Comunicação clara e atendimento personalizado'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Missão"
              description="Oferecer serviços contábeis de excelência, proporcionando segurança e tranquilidade para que nossos clientes possam focar no crescimento de seus negócios."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Visão"
              description="Ser reconhecida como referência em contabilidade consultiva no Brasil, criando relacionamentos duradouros baseados em confiança e resultados."
            />
            <AboutCard 
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Valores"
              description="Ética, transparência, compromisso com resultados, excelência técnica e inovação constante em nossos processos e serviços."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Diferenciais"
              description="Atendimento personalizado, tecnologia de ponta, equipe especializada e processos transparentes para garantir sua satisfação."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
