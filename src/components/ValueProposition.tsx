import { Zap, TrendingUp, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Economia de até 80% em tempo",
    description: "Automatize processos repetitivos e libere sua equipe para focar no que realmente importa: estratégia e crescimento.",
  },
  {
    icon: TrendingUp,
    title: "Aumento de 300% em produtividade",
    description: "Sistemas inteligentes que trabalham 24/7, processando mais em menos tempo com precisão absoluta.",
  },
  {
    icon: Shield,
    title: "Redução de 95% em erros operacionais",
    description: "IA elimina falhas humanas em tarefas críticas, garantindo consistência e confiabilidade total.",
  },
  {
    icon: Sparkles,
    title: "ROI médio de 5x em 6 meses",
    description: "Investimento que se paga rapidamente com resultados mensuráveis e impacto direto no faturamento.",
  },
];

export const ValueProposition = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Por que escolher nossas soluções?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados comprovados que transformam operações em vantagens competitivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary-light text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
