import { Card, CardContent } from "@/components/ui/card"
import { Zap, Heart, Shield, Clock, Sparkles, Stethoscope, Wrench } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Clínica Geral",
    description: "Atendimento odontológico completo para toda a família com cuidado personalizado.",
    features: ["Limpeza dental", "Raspagem", "Aplicação de flúor", "Profilaxia"],
  },
  {
    icon: Wrench,
    title: "Restaurações",
    description: "Restauração de dentes danificados com materiais de alta qualidade.",
    features: ["Restaurações em resina", "Restaurações em porcelana", "Reconstruções", "Reparos"],
  },
  {
    icon: Stethoscope,
    title: "Endodontia",
    description: "Tratamento de canal especializado para salvar dentes comprometidos.",
    features: ["Tratamento de canal", "Retratamento", "Apicectomia", "Tratamentos especializados"],
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Tratamentos estéticos para um sorriso mais bonito e confiante.",
    features: ["Clareamento dental", "Lentes de contato em resina", "Lentes de contato em porcelana", "Facetas"],
  },
  {
    icon: Shield,
    title: "Implantes e Próteses",
    description: "Substituição de dentes perdidos com tecnologia avançada.",
    features: ["Implantes unitários", "Próteses protocolo", "Prótese móvel (dentadura)", "All-on-4"],
  },
  {
    icon: Zap,
    title: "Cirurgia Oral",
    description: "Procedimentos cirúrgicos especializados com segurança e precisão.",
    features: ["Extração de dentes", "Extração de sisos", "Cirurgias menores", "Biópsias"],
  },
  {
    icon: Clock,
    title: "Atendimento Especializado",
    description: "Atendimento odontológico de qualidade em horários estendidos.",
    features: ["Horário estendido", "Atendimento todos os dias", "Consultas agendadas", "Ligar: (21) 99616-7799"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Tratamentos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            Fornecemos vários tratamentos odontológicos especializados, desde clínica geral até procedimentos estéticos
            avançados, sempre com foco na qualidade e no seu bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg hover-lift animate-scale-in animate-delay-${((index % 7) + 1) * 100}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-6 h-6 text-accent transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>

                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 group-hover:bg-primary transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
