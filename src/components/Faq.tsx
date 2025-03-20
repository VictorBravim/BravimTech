"use client"
import { useState } from "react"
import { ChevronDown, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<"vantagens" | "processo" | "suporte">("vantagens")
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  const faqQuestions: {
    vantagens: { question: string; answer: string[] }[]
    processo: { question: string; answer: string[] }[]
    suporte: { question: string; answer: string[] }[]
  } = {
    vantagens: [
      {
        question: "Quais são as vantagens de ter um site profissional?",
        answer: [
          "Aumento da credibilidade e profissionalismo da sua marca",
          "Disponibilidade 24/7 para seus clientes",
          "Alcance global, expandindo seu mercado",
          "Geração de leads e conversões através de estratégias digitais",
        ],
      },
      {
        question: "Por que escolher nossa agência?",
        answer: [
          "Sites personalizados que refletem sua marca",
          "Otimização avançada de SEO",
          "Desenvolvimento focado em performance",
          "Suporte técnico especializado pós-lançamento",
        ],
      },
      {
        question: "Por que escolher nossa agência?",
        answer: [
          "Sites personalizados que refletem sua marca",
          "Otimização avançada de SEO",
          "Desenvolvimento focado em performance",
          "Suporte técnico especializado pós-lançamento",
        ],
      },
      {
        question: "Por que escolher nossa agência?",
        answer: [
          "Sites personalizados que refletem sua marca",
          "Otimização avançada de SEO",
          "Desenvolvimento focado em performance",
          "Suporte técnico especializado pós-lançamento",
        ],
      },
    ],
    processo: [
      {
        question: "Quanto tempo leva para desenvolver um site?",
        answer: [
          "Sites institucionais: 2 a 4 semanas",
          "E-commerces: 4 a 8 semanas",
          "Plataformas complexas: 8 a 12 semanas",
          "Acompanhamento em tempo real do progresso",
        ],
      },
      {
        question: "Quais tecnologias utilizamos?",
        answer: [
          "React e Next.js para interfaces dinâmicas",
          "HTML5, CSS3 e JavaScript para estruturas robustas",
          "Node.js e APIs para backend escalável",
          "Integração com plataformas de pagamento e marketing",
        ],
      },
      {
        question: "Por que escolher nossa agência?",
        answer: [
          "Sites personalizados que refletem sua marca",
          "Otimização avançada de SEO",
          "Desenvolvimento focado em performance",
          "Suporte técnico especializado pós-lançamento",
        ],
      },
      {
        question: "Por que escolher nossa agência?",
        answer: [
          "Sites personalizados que refletem sua marca",
          "Otimização avançada de SEO",
          "Desenvolvimento focado em performance",
          "Suporte técnico especializado pós-lançamento",
        ],
      },
    ],
    suporte: [
      {
        question: "O que está incluído no serviço?",
        answer: [
          "Consultoria estratégica para seus objetivos",
          "Design personalizado e responsivo",
          "Otimização para SEO e performance",
          "Suporte técnico e treinamento",
        ],
      },
      {
        question: "Vocês oferecem suporte após o lançamento?",
        answer: [
          "Atualizações de segurança regulares",
          "Backups e monitoramento de desempenho",
          "Pequenas alterações de conteúdo",
          "Suporte técnico contínuo",
        ],
      },
      {
        question: "Por que escolher nossa agência?",
        answer: [
          "Sites personalizados que refletem sua marca",
          "Otimização avançada de SEO",
          "Desenvolvimento focado em performance",
          "Suporte técnico especializado pós-lançamento",
        ],
      },
      {
        question: "Por que escolher nossa agência?",
        answer: [
          "Sites personalizados que refletem sua marca",
          "Otimização avançada de SEO",
          "Desenvolvimento focado em performance",
          "Suporte técnico especializado pós-lançamento",
        ],
      },
    ],
  }

  const stats = [
    { value: "10+", label: "Anos de experiência", subtext: "Expertise comprovada" },
    { value: "98%", label: "Satisfação garantida", subtext: "Clientes que nos recomendam" },
  ]

  return (
    <section className="flex justify-center w-full bg-white py-4 lg:py-12 text-black">
      <div className="container px-4 sm:px-6 md:px-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="flex justify-center my-2">
            <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
              <Image src="/images/Blue.svg" alt="Logo" width={28} height={28} className="mr-1" />
              <h1
                className="text-black text-sm sm:text-md font-medium mr-2"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                FAQ BravimTech
              </h1>
            </div>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Por que escolher nossa Agência?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          <div className="md:col-span-4 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg flex flex-col items-center text-center"
                >
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mb-3 sm:mb-4 text-lg sm:text-xl font-bold">
                    {stat.value}
                  </div>
                  <h3 className="font-medium text-base sm:text-lg mb-1">{stat.label}</h3>
                  <p className="text-blue-300 text-xs sm:text-sm">{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg pb-6 sm:pb-8 pt-5.5 sm:pt-5">
              <div className="flex flex-col sm:flex-row border-b border-blue-400/30 mb-4 sm:mb-6">
                <button
                  onClick={() => setActiveTab("vantagens")}
                  className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "vantagens" ? "border-b-2 border-blue-300" : ""
                    }`}
                >
                  Vantagens
                </button>
                <button
                  onClick={() => setActiveTab("processo")}
                  className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "processo" ? "border-b-2 border-blue-300" : ""
                    }`}
                >
                  Processo
                </button>
                <button
                  onClick={() => setActiveTab("suporte")}
                  className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "suporte" ? "border-b-2 border-blue-300" : ""
                    }`}
                >
                  Suporte
                </button>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {faqQuestions[activeTab].map((faq, index) => (
                  <div key={index} className="border border-blue-400/30 rounded-md sm:rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="flex justify-between items-center w-full p-3 sm:p-4 text-left"
                    >
                      <h3 className="font-medium text-sm sm:text-base">{faq.question}</h3>
                      <ChevronDown
                        className={`h-4 sm:h-5 w-4 sm:w-5 transition-transform ${openQuestion === index ? "transform rotate-180" : ""
                          }`}
                      />
                    </button>
                    {openQuestion === index && (
                      <div className="p-3 sm:p-4 pt-0 border-t border-blue-400/30">
                        <div className="space-y-2 sm:space-y-3">
                          {faq.answer.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-4 sm:h-5 w-4 sm:w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                              <p className="text-blue-100 text-sm sm:text-base">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}