"use client"
import { useState } from "react"
import { ChevronDown, CheckCircle } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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
          "Aumenta a visibilidade da sua marca no mundo digital",
          "Permite que seus clientes te encontrem a qualquer hora",
          "Facilita a captação de novos clientes com um design atrativo",
          "Melhora a confiança dos consumidores na sua empresa",
        ],
      },
      {
        question: "Por que usar WordPress para o meu site?",
        answer: [
          "É uma plataforma acessível e fácil de gerenciar",
          "Oferece flexibilidade para personalização com temas e plugins",
          "Tem um ótimo custo-benefício para empresas de todos os tamanhos",
          "Possui uma comunidade global para suporte e atualizações",
        ],
      },
      {
        question: "Como o design pode impactar meu negócio?",
        answer: [
          "Um design bem feito atrai e engaja os visitantes",
          "Reflete a identidade e os valores da sua marca",
          "Melhora a experiência do usuário, aumentando a retenção",
          "Diferencia sua empresa da concorrência",
        ],
      },
      {
        question: "O que a otimização de SEO pode fazer por mim?",
        answer: [
          "Aumenta a visibilidade do seu site nos motores de busca",
          "Atrai mais tráfego orgânico e clientes potenciais",
          "Melhora a posição do seu site no Google",
          "Garante que seu conteúdo alcance o público certo",
        ],
      },
    ],
    processo: [
      {
        question: "Quanto tempo leva para desenvolver um site?",
        answer: [
          "Sites institucionais: 2 a 4 semanas",
          "E-commerces: 4 a 8 semanas",
          "Projetos personalizados: 6 a 10 semanas",
          "Você acompanha cada etapa do processo",
        ],
      },
      {
        question: "Quais ferramentas utilizamos no desenvolvimento?",
        answer: [
          "WordPress para sites dinâmicos e fáceis de gerenciar",
          "Figma para criar designs modernos e interativos",
          "Firebase para soluções de backend e autenticação",
          "VSCode para um desenvolvimento eficiente e organizado",
        ],
      },
      {
        question: "Como funciona o processo de criação do site?",
        answer: [
          "Primeiro, entendemos suas necessidades e objetivos",
          "Criamos um design inicial para sua aprovação",
          "Desenvolvemos o site com foco em performance e SEO",
          "Realizamos testes e entregamos com treinamento básico",
        ],
      },
      {
        question: "Posso participar do processo de criação?",
        answer: [
          "Sim, você pode acompanhar todas as etapas",
          "Receberá atualizações regulares sobre o progresso",
          "Poderá sugerir ajustes durante o desenvolvimento",
          "Garantimos que o resultado final atenda às suas expectativas",
        ],
      },
    ],
    suporte: [
      {
        question: "O que está incluído no serviço?",
        answer: [
          "Planejamento estratégico para o seu projeto",
          "Design responsivo e personalizado",
          "Otimização inicial de SEO",
          "Treinamento para gerenciar seu site",
        ],
      },
      {
        question: "Vocês oferecem suporte após o lançamento?",
        answer: [
          "Sim, suporte técnico por 30 dias após a entrega",
          "Atualizações iniciais de segurança e performance",
          "Orientação para pequenas edições no site",
          "Planos de manutenção contínua, se desejar",
        ],
      },
      {
        question: "Como posso gerenciar meu site após a entrega?",
        answer: [
          "Fornecemos treinamento básico para o WordPress",
          "Você poderá editar textos, imagens e produtos",
          "Oferecemos guias e tutoriais para facilitar",
          "Estamos disponíveis para suporte adicional, se precisar",
        ],
      },
      {
        question: "O que fazer se meu site tiver problemas?",
        answer: [
          "Entre em contato com nossa equipe imediatamente",
          "Analisaremos e resolveremos o problema rapidamente",
          "Oferecemos suporte técnico para bugs e erros",
          "Garantimos que seu site volte a funcionar perfeitamente",
        ],
      },
    ],
  }

  const stats = [
    { value: "100+", label: "Horas de dedicação", subtext: "Projetos com foco total" },
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
            <div className="grid grid-cols-1 gap-4 sm:gap-6 h-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg flex flex-col items-center text-center flex-1"
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
            <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg pb-6 sm:pb-8 pt-5.5 sm:pt-5 h-full">
              <div className="flex flex-col sm:flex-row border-b border-blue-400/30 mb-4 sm:mb-6">
                <button
                  onClick={() => setActiveTab("vantagens")}
                  className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "vantagens" ? "border-b-2 border-blue-300" : ""}`}
                >
                  Vantagens
                </button>
                <button
                  onClick={() => setActiveTab("processo")}
                  className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "processo" ? "border-b-2 border-blue-300" : ""}`}
                >
                  Processo
                </button>
                <button
                  onClick={() => setActiveTab("suporte")}
                  className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-base ${activeTab === "suporte" ? "border-b-2 border-blue-300" : ""}`}
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
                        className={`h-4 sm:h-5 w-4 sm:w-5 transition-transform ${openQuestion === index ? "transform rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
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
                        </motion.div>
                      )}
                    </AnimatePresence>
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