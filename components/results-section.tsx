import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function ResultsSection() {
  const beforeAfterCases = [
    {
      title: "Reabilitação Estética Anterior",
      description: "Tratamento estético completo dos dentes anteriores com restaurações em resina composta",
      beforeImage: "/images/results/caso1-depois.jpg",
      afterImage: "/images/results/caso1-antes.jpg",
      treatment: "Restaurações Estéticas",
      duration: "2 sessões",
    },
    {
      title: "Reabilitação Completa Superior",
      description: "Transformação completa do sorriso com tratamento abrangente da arcada superior",
      beforeImage: "/images/results/caso2-depois.jpg",
      afterImage: "/images/results/caso2-antes.jpg",
      treatment: "Reabilitação Protética",
      duration: "4 sessões",
    },
  ]

  return (
    <section id="resultados" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resultados Reais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos nossos casos de sucesso. Transformações que revolucionaram a vida dos nossos pacientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {beforeAfterCases.map((case_, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{case_.title}</h3>
                <p className="text-gray-600 mb-6 text-sm">{case_.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Antes</h4>
                    <img
                      src={case_.beforeImage || "/placeholder.svg"}
                      alt={`Antes - ${case_.title}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Depois</h4>
                    <img
                      src={case_.afterImage || "/placeholder.svg"}
                      alt={`Depois - ${case_.title}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tratamento:</span>
                    <Badge variant="outline" className="text-xs">
                      {case_.treatment}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Duração:</span>
                    <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                      {case_.duration}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            * Resultados podem variar de acordo com cada caso. As imagens são meramente ilustrativas e representam casos
            reais tratados em nossa clínica.
          </p>
        </div>
      </div>
    </section>
  )
}
