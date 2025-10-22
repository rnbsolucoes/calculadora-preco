import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [webhookUrl, setWebhookUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Send to webhook if configured
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: "landing_page",
          }),
        });
        console.log("Dados enviados para webhook:", webhookUrl);
      } catch (error) {
        console.error("Erro ao enviar para webhook:", error);
      }
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em até 24 horas.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Agende sua análise gratuita
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato para entender suas necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Entre em contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a
                      href="mailto:contato@suaagencia.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      contato@suaagencia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Telefone</div>
                    <a
                      href="tel:+5511999999999"
                      className="text-muted-foreground hover:text-primary"
                    >
                      (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Localização</div>
                    <p className="text-muted-foreground">
                      Viçosa do Ceará, CE
                      <br />
                      Atendemos todo Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-accent">💡 Dica:</strong> Quanto mais
                detalhes você fornecer sobre seus processos atuais, mais precisa
                será nossa análise inicial.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-elegant space-y-6">
              {/* Webhook Configuration */}
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 space-y-2">
                <label htmlFor="webhook" className="text-sm font-medium text-card-foreground flex items-center gap-2">
                  🔗 URL do Webhook (opcional)
                </label>
                <Input
                  id="webhook"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  className="bg-card"
                />
                <p className="text-xs text-muted-foreground">
                  Cole aqui a URL do seu webhook (Zapier, Make, n8n, etc.) para receber os dados automaticamente
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                    Telefone/WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-card-foreground">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  Conte-nos sobre seu desafio
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente seus principais processos manuais ou gargalos operacionais..."
                  rows={5}
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Solicitar Análise Gratuita
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa política de privacidade. Não enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
