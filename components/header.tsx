"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false) // Fecha o menu mobile após clicar
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icone.jpg-a2enI2UcENYIyDkAbbtVi1e566vki7.jpeg"
              alt="Dentistas Copacabana"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("resultados")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 bg-transparent"
              onClick={() => window.open("tel:+5521996167799", "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Resultados
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                  onClick={() => window.open("tel:+5521996167799", "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
