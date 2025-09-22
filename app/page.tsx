import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
// import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { ResultsSection } from "@/components/results-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="inicio">
        <HeroSection />
      </div>
      <div id="servicos">
        <ServicesSection />
      </div>
      <div id="sobre">
        <AboutSection />
      </div>
      <div id="galeria">
        <GallerySection />
      </div>
      <div id="resultados">
        <ResultsSection />
      </div>
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="contato">
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
