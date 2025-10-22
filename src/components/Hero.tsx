import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Soluções personalizadas de IA e automação
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Automatize sua empresa com{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Reduza até 80% do tempo em tarefas repetitivas e multiplique seus resultados
              com soluções de IA personalizadas para seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="xl" 
                onClick={scrollToContact}
                className="group"
              >
                Agende uma Análise Gratuita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                Ver Cases de Sucesso
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Personalizado</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">2 semanas</div>
                <div className="text-sm text-muted-foreground">Primeiros resultados</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte dedicado</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Visualização de automação com IA"
              className="relative rounded-2xl shadow-luxury w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
