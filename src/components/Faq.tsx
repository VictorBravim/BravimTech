"use client";
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<
    "vantagens" | "processo" | "suporte"
  >("vantagens");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions: {
    vantagens: { question: string; answer: string[] }[];
    processo: { question: string; answer: string[] }[];
    suporte: { question: string; answer: string[] }[];
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
  };

  const stats = [
    {
      value: "100+",
      label: "Horas de dedicação",
      subtext: "Projetos com foco total",
    },
    {
      value: "98%",
      label: "Satisfação garantida",
      subtext: "Clientes que nos recomendam",
    },
  ];

  return (
    <section id="Benefícios" className="w-full bg-white py-4 sm:py-8 lg:py-12">
      <div className="bg-white text-gray-900 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-200/30 blur-[60px] sm:blur-[80px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex justify-center my-2">
                <div className="bg-blue-600/10 text-white gap-2 py-1.5 px-2 sm:py-2 sm:px-3 flex items-center rounded-full">
                  <Image
                    src="/images/Blue.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                    className="mr-1 sm:w-7 sm:h-7"
                  />
                  <h1
                    className="text-black text-xs sm:text-sm font-medium mr-2"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    FAQ BravimTech
                  </h1>
                </div>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Por que escolher nossa Agência?
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            <div className="md:col-span-4 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 h-full">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-4 sm:p-6 shadow-[0_0_15px_rgba(0,100,255,0.1)] hover:shadow-[0_0_20px_rgba(0,100,255,0.2)] transition-all relative"
                  >
                    <div className="absolute inset-0 bg-white overflow-hidden -z-10">
                      <div className="absolute inset-0 opacity-30" />
                      <div className="absolute -left-10 -bottom-10 w-32 h-full -rotate-12 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 opacity-10 blur-xl group-hover:opacity-5 duration-100 ease-linear" />
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm sm:text-base font-bold">
                          {stat.value}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                          {stat.label}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {stat.subtext}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="md:col-span-8"
            >
              <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 shadow-[0_0_20px_rgba(0,100,255,0.05)] relative">

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                  Perguntas{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    Frequentes
                  </span>    
                     
                </h2>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-4 sm:mb-6 border-b border-gray-200 pb-2">
                  {["vantagens", "processo", "suporte"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() =>
                        setActiveTab(
                          tab as "vantagens" | "processo" | "suporte"
                        )
                      }
                      className={`w-full sm:w-auto sm:min-w-[150px] px-3 sm:px-4 py-2 font-medium text-sm sm:text-base lg:text-lg text-center transition-all relative ${
                        activeTab === tab
                          ? "text-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      } cursor-pointer flex justify-between`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      <span
                        className={`transition-transform  ${
                          activeTab === tab
                            ? "transform rotate-180 text-blue-500"
                            : "text-gray-700"
                        }`}
                      >
                        <ChevronUp />
                      </span>

                      {activeTab === tab && (
                        <motion.div
                          className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"
                          layoutId="activeTab"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[80px] sm:min-h-[100px] mb-4 sm:mb-6"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      {faqQuestions[activeTab].map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 shadow-[0_0_10px_rgba(0,100,255,0.05)] hover:shadow-[0_0_15px_rgba(0,100,255,0.1)] transition-all"
                        >
                          <button
                            onClick={() => toggleQuestion(index)}
                            className="flex justify-between items-center w-full text-left cursor-pointer"
                          >
                            <h3 className="font-medium text-sm sm:text-base lg:text-lg">
                              {faq.question}
                            </h3>
                            <ChevronUp
                              className={`h-4 sm:h-5 w-4 sm:w-5 0 transition-transform ${
                                openQuestion === index
                                  ? "transform rotate-180 text-blue-500"
                                  : "text-gray-700"
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openQuestion === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="pt-3 sm:pt-4">
                                  <div className="space-y-2 sm:space-y-3">
                                    {faq.answer.map((item, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-2"
                                      >
                                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-1 mt-0.5"></div>
                                        <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                                          {item}
                                        </div>
                                      </motion.div>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium text-sm sm:text-base lg:text-lg text-white shadow-[0_0_15px_rgba(0,100,255,0.2)] hover:shadow-[0_0_20px_rgba(0,100,255,0.3)] transition-all">
                    Fale Conosco
                  </button>
                  <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gray-100 border border-gray-200 rounded-lg font-medium text-sm sm:text-base lg:text-lg text-gray-700 hover:bg-gray-200 transition-all">
                    Ver Serviços
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
