"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5521996167799"
    const message = "Olá! Gostaria de agendar uma consulta na Dentistas Copacabana."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl animate-pulse-gentle z-50 transition-all duration-300 hover:scale-110"
      size="lg"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="sr-only">Contato via WhatsApp</span>
    </Button>
  )
}
