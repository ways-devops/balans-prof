import { AboutSection } from "@/components/site/about-section";
import { BenefitsSection } from "@/components/site/benefits-section";
import { ContactsSection } from "@/components/site/contacts-section";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { LeadSection } from "@/components/site/lead-section";
import { ServicesSection } from "@/components/site/services-section";
import { TaxSystemsSection } from "@/components/site/tax-systems-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TaxSystemsSection />
        <BenefitsSection />
        <ServicesSection />
        <AboutSection />
        <LeadSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}
