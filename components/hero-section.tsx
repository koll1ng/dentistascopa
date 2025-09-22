"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-primary animate-glow">Dentistas</span> Copacabana
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
              Clínica odontológica especializada em tratamentos completos em Copacabana, Rio de Janeiro. Atendimento
              todos os dias das 08:00 às 20:00 com equipe qualificada e tecnologia de ponta para cuidar do seu sorriso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover-glow animate-scale-in animate-delay-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 text-lg transition-all duration-300 bg-transparent hover:scale-105 animate-scale-in animate-delay-400"
                onClick={() => window.open("tel:+5521996167799", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar
              </Button>
            </div>

            <div className="flex items-center text-gray-600 animate-fade-in-up animate-delay-500">
              <MapPin className="w-5 h-5 mr-2 text-accent animate-pulse-gentle" />
              <span>Av. Nossa Sra. de Copacabana, 435 - sala 601 - Copacabana, Rio de Janeiro - RJ</span>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10 animate-float">
              <img
                src="/smiling-woman-patient.png"
                alt="Paciente sorrindo - Dentistas Copacabana"
                className="rounded-2xl shadow-2xl w-full h-auto hover-lift"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-accent/10 rounded-2xl -z-10 animate-pulse-gentle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
