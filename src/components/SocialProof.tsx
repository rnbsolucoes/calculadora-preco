import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechFlow Solutions",
    image: testimonial1,
    content: "Implementamos as automações há 4 meses e já economizamos mais de 200 horas mensais. O ROI superou todas as expectativas. Nossa equipe agora foca em estratégia, não em tarefas operacionais.",
    rating: 5,
  },
  {
    name: "Marina Costa",
    role: "Fundadora, EduContent Pro",
    image: testimonial2,
    content: "Como infoprodutora, precisava escalar sem perder qualidade. A IA desenvolvida automatizou toda nossa comunicação com alunos. Crescemos 250% mantendo o mesmo time.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    role: "Diretor de Operações, LogiMax",
    image: testimonial3,
    content: "Reduzimos erros operacionais em 94% e aumentamos a capacidade de processamento em 400%. O investimento se pagou em apenas 3 meses. Simplesmente transformador.",
    rating: 5,
  },
];

export const SocialProof = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que já transformaram suas operações com IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-luxury transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Empresas atendidas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de satisfação</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5x</div>
            <div className="text-muted-foreground">ROI médio</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground">Horas economizadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
