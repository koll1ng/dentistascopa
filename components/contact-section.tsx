"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {
              "Agende sua consulta e descubra como podemos cuidar da sua saúde bucal.\nNossa equipe oferece tratamentos de qualidade, com transparência e pontualidade."
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h3>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Endereço</h4>
                      <p className="text-gray-600">
                        Av. Nossa Sra. de Copacabana, 435
                        <br />
                        Sala 601 - Copacabana
                        <br />
                        Rio de Janeiro - RJ, 22020-002
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Telefone</h4>
                      <p className="text-gray-600">
                        (21) 3796-7250 - Fixo
                        <br />
                        (21) 99616-7799 - Celular
                        <br />
                        <span className="text-sm text-accent font-medium">WhatsApp disponível</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Funcionamento</h4>
                      <p className="text-gray-600">
                        Segunda a Domingo: 08:00 - 20:00
                        <br />
                        <span className="text-sm text-green-600 font-medium">Aberto todos os dias</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 space-y-4">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open("tel:+552137967250", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-accent text-accent hover:bg-accent hover:text-white py-4 text-lg transition-all duration-300 bg-transparent"
                onClick={() => window.open("https://wa.me/5521996167799", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2847234567!2d-43.1789!3d-22.9668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5f7654321abcd%3A0x1234567890abcdef!2sAv.%20Nossa%20Sra.%20de%20Copacabana%2C%20435%20-%20Copacabana%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022020-002!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização dos Dentistas Copacabana"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Localização Privilegiada</h4>
                  <p className="text-gray-600">
                    Nossa clínica está localizada na famosa Avenida Nossa Senhora de Copacabana, no coração de um dos
                    bairros mais icônicos do Rio de Janeiro, com fácil acesso por transporte público e metrô.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
