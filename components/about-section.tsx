// import { Award, Users, Clock, MapPin } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dentistas Copacabana</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Em nossa clínica cada paciente é recebido com atenção, respeito e empatia. Um de nossos grandes
              diferenciais é a dedicação em manter um ambiente confortável e acolhedor, garantindo que cada atendimento
              seja o mais agradável possível. Além disso, nossa equipe de especialistas assegura um acompanhamento
              personalizado, ajustado às necessidades específicas de cada pessoa. Os métodos adotados e os recursos
              tecnológicos disponíveis são constantemente atualizados, mantendo um alto padrão de desempenho e precisão
              nos resultados.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Especialização:</strong> Tratamentos odontológicos completos
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Localização:</strong> Copacabana, Rio de Janeiro - RJ
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Horário:</strong> Todos os dias das 08:00 às 20:00
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/dental-clinic-reception.jpg"
              alt="Clínica Odontológica - Consultório com Cadeira Odontológica"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
