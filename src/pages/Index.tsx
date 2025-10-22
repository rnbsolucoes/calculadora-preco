import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <SocialProof />
      <HowItWorks />
      <Features />
      <FinalCTA />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
