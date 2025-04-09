
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Sparkles, Package, ShoppingBag, Heart, Palette } from 'lucide-react';
import AnimatedScrollObserver from '@/components/AnimatedScrollObserver';

const ProductsSection = () => {
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

  const products = [
    {
      icon: <Gift className="h-12 w-12 text-victoria-pink" />,
      title: "Presentes Masculinos/Femininos",
      description: "Presentes personalizados para todos os gostos e ocasiões especiais."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-victoria-pink" />,
      title: "Perfumes",
      description: "Fragrâncias importadas e nacionais para momentos inesquecíveis."
    },
    {
      icon: <Palette className="h-12 w-12 text-victoria-pink" />,
      title: "Cosméticos",
      description: "Produtos de beleza e cuidados pessoais das melhores marcas."
    },
    {
      icon: <Package className="h-12 w-12 text-victoria-pink" />,
      title: "Cestas",
      description: "Cestas personalizadas para celebrações, datas comemorativas e ocasiões especiais."
    },
    {
      icon: <Heart className="h-12 w-12 text-victoria-pink" />,
      title: "Mimos",
      description: "Pequenas lembranças para demonstrar carinho e afeto de forma especial."
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-victoria-pink" />,
      title: "Demais Produtos",
      description: "Aceitamos encomendas personalizadas adaptadas ao seu gosto e necessidade."
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="section-padding bg-white">
      <AnimatedScrollObserver>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-victoria-light text-victoria-pink rounded-full text-sm font-medium mb-4 animate-on-scroll">
              Nossos Produtos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Presentes para Todos os Momentos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Oferecemos uma variedade de produtos para tornar seus momentos ainda mais especiais.
              Cada item é escolhido com carinho para proporcionar a melhor experiência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-victoria-pink font-medium text-lg">
              Aceitamos encomendas personalizadas para qualquer ocasião
            </p>
          </div>
        </div>
      </AnimatedScrollObserver>
    </section>
  );
};

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProductCard = ({
  icon,
  title,
  description,
  index
}: ProductCardProps) => (
  <Card className={`animate-on-scroll service-card border border-victoria-light/50 shadow-md overflow-hidden h-full [animation-delay:${index * 100}ms]`}>
    <CardContent className="p-6 flex flex-col items-center text-center h-full">
      <div className="mb-5 p-4 bg-victoria-light rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default ProductsSection;
