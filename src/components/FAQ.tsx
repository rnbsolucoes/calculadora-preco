import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para implementar as automações?",
    answer: "O prazo varia conforme a complexidade do projeto, mas a maioria das implementações fica pronta entre 2 a 6 semanas. Começamos com quick wins que já geram resultados imediatos, enquanto desenvolvemos soluções mais complexas em paralelo.",
  },
  {
    question: "Preciso ter conhecimento técnico para usar as soluções?",
    answer: "Não! Desenvolvemos interfaces intuitivas e fornecemos treinamento completo para sua equipe. Nossas soluções são feitas para serem usadas por profissionais de negócios, não por desenvolvedores. Além disso, oferecemos suporte contínuo.",
  },
  {
    question: "Como funciona a precificação?",
    answer: "Trabalhamos com projetos sob medida, então o investimento varia conforme suas necessidades e escopo. Após a análise gratuita, apresentamos uma proposta transparente com ROI projetado. Muitos clientes recuperam o investimento em 3-6 meses.",
  },
  {
    question: "E se eu já tiver sistemas implementados?",
    answer: "Perfeito! Nossas soluções se integram facilmente com sistemas existentes (CRM, ERP, plataformas de curso, etc.). Não é necessário substituir o que já funciona - apenas conectamos e otimizamos seus processos atuais.",
  },
  {
    question: "Vocês oferecem suporte após a implementação?",
    answer: "Sim! Todos os nossos projetos incluem período de suporte e ajustes. Após isso, você pode optar por planos de suporte contínuo, que incluem monitoramento, otimizações e evolução das automações conforme seu negócio cresce.",
  },
  {
    question: "A IA vai substituir minha equipe?",
    answer: "Não, o objetivo é potencializar sua equipe! A IA elimina tarefas repetitivas e operacionais, liberando seu time para focar em atividades estratégicas, criativas e que geram mais valor. Nossos clientes geralmente crescem sem aumentar custos com pessoal.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas para as dúvidas mais comuns
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
