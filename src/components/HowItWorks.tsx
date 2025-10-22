import { MessageSquare, Cog, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Análise Gratuita",
    description: "Conversamos com você para entender seus processos, identificar gargalos e mapear oportunidades de automação com alto impacto.",
  },
  {
    number: "02",
    icon: Cog,
    title: "Desenvolvimento Personalizado",
    description: "Criamos e implementamos soluções de IA sob medida para sua operação, com acompanhamento completo e treinamento da equipe.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Resultados Mensuráveis",
    description: "Você vê o impacto real: tempo economizado, erros reduzidos e produtividade multiplicada. Suporte contínuo para evolução.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente do início ao resultado
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary -translate-y-1/2 -z-10" />

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground font-bold text-xl mb-6 shadow-elegant">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-light text-primary mb-6 shadow-elegant">
                    <Icon className="h-10 w-10" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
