import { Shield, Clock, TrendingUp, Headphones } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de Satisfação",
    description: "Se não ficarmos satisfeitos com os resultados na primeira entrega, ajustamos até atingir suas expectativas sem custo adicional.",
  },
  {
    icon: Clock,
    title: "Implementação Rápida",
    description: "Começamos com quick wins que geram resultados em até 2 semanas, enquanto desenvolvemos soluções mais robustas.",
  },
  {
    icon: TrendingUp,
    title: "Pagamento por Resultado",
    description: "Modelos flexíveis de precificação, incluindo opções baseadas em performance e economia gerada.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Equipe disponível para dúvidas e ajustes durante todo o projeto e após a implementação.",
  },
];

const differentials = [
  "Análise gratuita sem compromisso",
  "Proposta com ROI projetado em 24h",
  "Integrações com seus sistemas atuais",
  "Treinamento completo da equipe",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Por que nos escolher?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromisso com resultados reais e transparência total
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-luxury transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {guarantee.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Differentials */}
        <div className="bg-card p-8 rounded-xl shadow-elegant max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-card-foreground">
            O que está incluído
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-accent-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - Apenas números reais que você pode comprovar */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Começando nossa jornada com foco em qualidade e ética
          </p>
          <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full border border-accent/20">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold text-foreground">
              Vagas limitadas para garantir atendimento personalizado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
