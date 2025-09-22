"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Daniela Daniela",
    treatment: "Tratamento Geral",
    content: "Super indico essa clínica, profissionais muito atenciosos, competentes e educados.",
    rating: 5,
    image: "/woman-patient-1.png",
  },
  {
    name: "Rosália Veras",
    treatment: "Tratamento Odontológico",
    content:
      "Maravilhoso. Me atenderam pontualmente. Profissionais muito educados. O dentista muito bem preparado. COmpetente e atencioso. Ambiente limpo, agradável e muito bonito. Nota mil.",
    rating: 5,
    image: "/woman-patient-2.png",
  },
  {
    name: "Patricia Collier",
    treatment: "Tratamento Geral",
    content: "Fui muito bem tratada, eficiente. Muito humano. Adorei.",
    rating: 5,
    image: "/woman-patient-3.png",
  },
  {
    name: "Óleos e Arobas RB",
    treatment: "Tratamento Dentário",
    content:
      "Super recomendo! Desde o atendimento telefônico até o nosso atendimento junto ao dentista, nota 1000. Profissionais qualificados, atenciosos e educados. Parabéns!",
    rating: 5,
    image: "/patient-4.png",
  },
  {
    name: "Daniel Climaco",
    treatment: "Tratamento Geral",
    content: "Atendimento Perfeito! Clinica confortável, maravilhosa",
    rating: 5,
    image: "/man-patient-1.png",
  },
  {
    name: "Ju Salvador",
    treatment: "Tratamento Odontológico",
    content: "Fui muito bem atendida pelo Dentista Flávlio. Super indiico.",
    rating: 5,
    image: "/woman-patient-4.png",
  },
  {
    name: "Adriana Noveira",
    treatment: "Tratamento Geral",
    content: "Atendimento 100 puntos!!! Para comendar!!! Gracias por la atencion",
    rating: 5,
    image: "/woman-patient-5.png",
  },
  {
    name: "Sergioib",
    treatment: "Tratamento Dentário",
    content: "Excelente servico y gran atención. Great servicce totally recommended!!",
    rating: 5,
    image: "/man-patient-2.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos pacientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior conquista. Veja alguns depoimentos de quem confia no nosso
            trabalho.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].treatment}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
