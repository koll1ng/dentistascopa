import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Carlos Silva",
      specialty: "Cirurgia Oral",
      experience: "15 anos de experiência",
      education: "CRO-RJ 12345 | Cirurgião Dentista",
      image: "/dr-carlos-silva-dentist.png",
    },
    {
      name: "Dra. Marina Santos",
      specialty: "Clínica Geral",
      experience: "12 anos de experiência",
      education: "CRO-RJ 23456 | Cirurgiã Dentista",
      image: "/female-dentist-smiling.png",
    },
    {
      name: "Dr. Roberto Lima",
      specialty: "Endodontia",
      experience: "18 anos de experiência",
      education: "CRO-RJ 34567 | Especialista em Endodontia",
      image: "/male-dentist-glasses.png",
    },
    {
      name: "Dra. Ana Paula Costa",
      specialty: "Periodontia e Prevenção",
      experience: "10 anos de experiência",
      education: "CRO-RJ 45678 | Cirurgiã Dentista",
      image: "/female-dentist-stethoscope.png",
    },
  ]

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais altamente qualificados e experientes em odontologia, dedicados a oferecer o melhor atendimento
            odontológico em Copacabana, com foco em tratamentos completos e de qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/10"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary">
                  {member.specialty}
                </Badge>
                <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-500 text-xs">{member.education}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
