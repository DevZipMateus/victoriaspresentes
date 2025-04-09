
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-victoria-light p-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/285af60b-f2b0-44dd-86bc-d98c672f359d.png" 
            alt="Victorias Presentes & Cosméticos"
            className="h-28 w-auto mx-auto" 
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-victoria-pink">404</h1>
        <h2 className="text-xl mb-6 text-victoria-dark">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          A página que você está procurando não existe ou foi movida. 
          Retorne para a página inicial para continuar navegando.
        </p>
        <Button 
          asChild
          className="bg-victoria-pink hover:bg-victoria-dark"
        >
          <a href="/">Voltar para Início</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
