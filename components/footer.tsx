import { MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Dentistas Copacabana</h3>
            <p className="text-cyan-100 mb-4">
              Clínica odontológica especializada em tratamentos completos em Copacabana - RJ, oferecendo cuidados
              completos para sua saúde bucal com atendimento todos os dias.
            </p>
            <p className="text-cyan-200 text-sm">
              Dentistas Copacabana
              <br />
              Tratamentos Odontológicos Completos
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Especialidades</h4>
            <ul className="space-y-2 text-cyan-100">
              <li>• Clínica Geral</li>
              <li>• Implantes Dentários</li>
              <li>• Próteses Dentárias</li>
              <li>• Estética Dental</li>
              <li>• Periodontia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-cyan-100">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Av. Nossa Sra. de Copacabana, 435
                  <br />
                  Sala 601 - Copacabana, Rio de Janeiro - RJ
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <div className="text-sm">
                  <div>(21) 3796-7250</div>
                  <div>(21) 99616-7799</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-sm">Todos os dias: 8h-20h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-700 mt-8 pt-8 text-center">
          <p className="text-cyan-200 text-sm">© 2024 Dentistas Copacabana. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
