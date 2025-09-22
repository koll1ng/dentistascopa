"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/images/gallery/consultorio-moderno.jpg",
    title: "Consultório Moderno",
    description: "Ambiente acolhedor com equipamentos de última geração",
  },
  {
    id: 2,
    type: "image",
    src: "/images/gallery/consultorio-equipamentos.jpg",
    title: "Equipamentos Avançados",
    description: "Tecnologia de ponta para tratamentos precisos",
  },
  {
    id: 3,
    type: "image",
    src: "/images/gallery/recepcao-moderna.jpg",
    title: "Recepção Acolhedora",
    description: "Ambiente confortável e elegante para nossos pacientes",
  },
  {
    id: 4,
    type: "image",
    src: "/images/gallery/consultorio-tecnologia.jpg",
    title: "Tecnologia Avançada",
    description: "Diagnósticos precisos e modernos",
  },
  {
    id: 5,
    type: "image",
    src: "/images/gallery/area-esterilizacao.jpg",
    title: "Área de Esterilização",
    description: "Máxima segurança e higiene",
  },
]

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!selectedItem && videoRef.current) {
      videoRef.current.pause()
    }
  }, [selectedItem])

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setSelectedItem(null)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    if (selectedItem) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedItem])

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Conheça Nossa Clínica</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Instalações modernas e equipamentos de última geração para oferecer o melhor atendimento odontológico em
            Copacabana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover-lift animate-fade-in-up border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.type === "video" ? item.thumbnail : item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4 group-hover:bg-accent group-hover:text-white transition-colors">
                        <Play className="w-8 h-8 text-primary group-hover:text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal/Lightbox */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div
              className="relative max-w-3xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10 bg-black/50 rounded-full"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-black/50 z-20 bg-black/30 rounded-full"
                onClick={closeModal}
              >
                <X className="w-5 h-5" />
              </Button>

              {selectedItem.type === "video" ? (
                <video
                  ref={videoRef}
                  src={selectedItem.src}
                  controls
                  className="w-full max-h-[60vh] rounded-lg"
                  preload="metadata"
                >
                  Seu navegador não suporta vídeos.
                </video>
              ) : (
                <img
                  src={selectedItem.src || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full max-h-[60vh] object-contain rounded-lg"
                />
              )}

              <div className="text-center mt-4">
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.description}</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={closeModal}
                >
                  Fechar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
