import { Bot, Workflow, BarChart3, Mail, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Atendimento 24/7 com IA que aprende e evolui, reduzindo custos e aumentando satisfação.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Workflows inteligentes que conectam sistemas e eliminam trabalho manual repetitivo.",
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "IA que antecipa tendências, identifica padrões e gera insights acionáveis para decisões estratégicas.",
  },
  {
    icon: Mail,
    title: "Marketing Automatizado",
    description: "Campanhas personalizadas em escala, com segmentação inteligente e otimização contínua.",
  },
  {
    icon: Brain,
    title: "Processamento de Dados",
    description: "Transforme dados brutos em informações valiosas automaticamente, sem equipes técnicas.",
  },
  {
    icon: Shield,
    title: "Segurança e Compliance",
    description: "Proteção avançada de dados e conformidade automática com regulamentações do setor.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Soluções completas de IA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta adaptada às necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl border border-border hover:shadow-elegant transition-all duration-300 hover:border-primary"
              >
                <div className="mb-4 inline-flex p-4 rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform shadow-elegant">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
