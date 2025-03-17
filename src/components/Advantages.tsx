"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import { Mail, ArrowRight, Zap, BarChart3, Layers } from "lucide-react"

const Advantages = () => {
  const cardTexts = [
    {
      title: "Desenvolvimento de Sites de Alta Performance",
      description:
        "Utilizamos as tecnologias mais recentes para construir sites que são rápidos, seguros e escaláveis. Focamos em otimizar o tempo de carregamento.",
      advantages: [
        "Performance otimizada e carregamento rápido",
        "Experiência do usuário fluida, sem gargalos",
        "Integração com ferramentas de análise para melhorar continuamente os resultados",
      ],
      icon: <Zap className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "SEO e Otimização para Motores de Busca",
      description:
        "Nossos sites são desenvolvidos com foco em SEO, garantindo melhor ranqueamento no Google e mais visibilidade para seu negócio.",
      advantages: [
        "Estratégias de SEO On-page e Off-page",
        "Sites otimizados para Google Core Web Vitals",
        "Melhoria na taxa de conversão e aquisição de clientes",
      ],
      icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Design Responsivo e Personalizado",
      description:
        "Criamos interfaces modernas e responsivas, garantindo um design atrativo e funcional para todos os dispositivos.",
      advantages: [
        "Layouts adaptáveis para qualquer tela",
        "Experiência do usuário aprimorada",
        "Design alinhado à identidade visual da sua marca",
      ],
      icon: <Layers className="h-6 w-6 text-blue-600" />,
    },
  ]

  const [index, setIndex] = useState(0)
  const time = 15000
  const trailSize = 10
  const rectRefs = useRef<(SVGRectElement | null)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardTexts.length)
    }, time)
    return () => clearInterval(interval)
  }, [cardTexts.length, time])

  useEffect(() => {
    if (rectRefs.current.every((ref) => ref)) {
      rectRefs.current.forEach((rect, i) => {
        const path = anime.path(`#motionPath${i}`)
        anime({
          targets: rect,
          translateX: path("x"),
          translateY: path("y"),
          rotate: path("angle"),
          easing: "linear",
          duration: 3000,
          loop: true,
          delay: i * 200,
          opacity: [
            { value: 1, duration: 2800 },
            { value: 0, duration: 100 },
          ],
        })
      })
    }
    return () => anime.remove(rectRefs.current.filter(Boolean))
  }, [])

  const nextCard = () => setIndex((prevIndex) => (prevIndex + 1) % cardTexts.length)

  return (
    <div className="bg-white h-full pb-12 lg:pb-40 pt-12 text-center relative">
      <div className="flex justify-center my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 pr-4 flex items-center rounded-full">
          <Image src="/images/Blue.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold">Vantagens</h1>
        </div>
      </div>
      <h2
        className="text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-[3rem] tracking-tight mb-24"
        style={{ fontFamily: "var(--font-archivo)" }}
      >
        Descubra as vantagens <br />
        oferecidas na{" "}
        <span
          className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          BravimTech
        </span>
      </h2>

      {/* Layout mais comprido verticalmente */}
      <div className="relative flex items-center justify-center w-full min-h-[500px]">
        {/* Path esquerdo original */}
        <div className="hidden md:block absolute left-0 md:top-60 lg:top-1/2 transform -translate-y-1/2">
          <svg height="710" viewBox="0 0 435 710" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path d="M0.5 353.5V359.5H434.5V353.5H0.5Z" fill="#EBEBEB" stroke="#EBEBEB" />
            <path
              id="motionPath0"
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              style={{ visibility: "hidden" }}
            />
            <path
              id="motionPath1"
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              style={{ visibility: "hidden" }}
            />
            <path id="motionPath2" d="M0.5 356.5H434.5" style={{ visibility: "hidden" }} />
            <rect
              ref={(el) => {
                rectRefs.current[0] = el
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[1] = el
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[2] = el
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
          </svg>
        </div>

        {/* Card principal mais comprido verticalmente */}
        <div className="w-full max-w-[90%] md:max-w-[700px] lg:max-w-[1100px] relative z-10">
          {/* Card futurista mais comprido */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden relative flex flex-col">
            {/* Barra superior com indicadores */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 h-1.5"></div>

            {/* Cabeçalho com navegação */}
            <div className="bg-blue-50 p-4 flex justify-between items-center border-b border-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                <h3 className="text-blue-700 font-bold text-lg md:text-xl">Vantagens BravimTech</h3>
              </div>

              <div className="flex items-center gap-3">
                {cardTexts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-8 h-1.5 rounded-full transition-colors ${i === index ? "bg-blue-600" : "bg-blue-200 hover:bg-blue-300"}`}
                    aria-label={`Ver vantagem ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                {/* Seção do título e ícone */}
                <div className="p-6 pb-0 flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full border border-blue-200 shadow-sm relative">
                    <div
                      className="absolute inset-0 rounded-full border-t border-r border-blue-300 animate-spin"
                      style={{ animationDuration: "15s" }}
                    ></div>
                    <div className="relative z-10">{cardTexts[index].icon}</div>
                  </div>

                  <div className="flex-1">
                    <div className="text-xs text-blue-500 mb-1">
                      Módulo {index + 1}/{cardTexts.length}
                    </div>
                    <h2 className="text-blue-700 font-bold text-xl md:text-2xl">{cardTexts[index].title}</h2>
                  </div>
                </div>

                {/* Seção da descrição */}
                <div className="p-6 pt-4">
                  <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 p-4 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/30 rounded-bl-full -z-0"></div>
                    <div className="relative z-10">
                      <div className="text-sm text-blue-600 font-medium mb-2 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        Descrição
                      </div>
                      <p className="text-slate-600 text-sm">{cardTexts[index].description}</p>
                    </div>
                  </div>
                </div>

                {/* Seção das vantagens */}
                <div className="px-6 pb-6">
                  <div className="text-sm text-blue-600 font-medium mb-3 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Vantagens Principais
                  </div>

                  <div className="space-y-3">
                    {cardTexts[index].advantages.map((adv, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <div className="bg-white rounded-xl border border-blue-100 p-4 flex items-start gap-3 group hover:border-blue-300 hover:shadow-sm transition-all">
                          <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-200 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            {i + 1}
                          </div>

                          <div className="flex-1">
                            <p className="text-slate-700">{adv}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Seção de ação */}
                <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 border-t border-blue-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => window.open("https://wa.me/5512996619995", "_blank", "noopener,noreferrer")}
                      className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-xl text-sm md:text-base font-medium transition flex items-center justify-center gap-2 shadow-sm hover:shadow"
                    >
                      Faça seu orçamento online
                      <ArrowRight size={18} />
                    </button>

                    <div className="flex items-center gap-3 justify-center md:justify-end">
                      <button
                        onClick={() => (window.location.href = "mailto:bravimtech@gmail.com")}
                        className="bg-white p-3 rounded-xl cursor-pointer border border-blue-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow flex items-center gap-2"
                      >
                        <Mail size={18} className="text-blue-600" />
                        <span className="text-blue-700 text-sm font-medium">Contato</span>
                      </button>

                      <button
                        onClick={nextCard}
                        className="bg-blue-600 hover:bg-blue-500 p-3 rounded-xl cursor-pointer border border-blue-500 transition-all duration-300 shadow-sm hover:shadow"
                      >
                        <ArrowRight size={18} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Elementos futuristas decorativos */}
            <div className="absolute top-0 right-0 w-40 h-40 border border-blue-100 rounded-full opacity-10 -translate-x-1/2 translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 border border-blue-100 rounded-full opacity-10 translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        {/* Path direito original */}
        <div className="hidden md:block absolute right-0 md:top-60 lg:top-1/2 transform -translate-y-1/2 scale-[-1]">
          <svg height="710" viewBox="0 0 435 710" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path d="M0.5 353.5V359.5H434.5V353.5H0.5Z" fill="#EBEBEB" stroke="#EBEBEB" />
            <path
              id="motionPath3"
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              style={{ visibility: "hidden" }}
            />
            <path
              id="motionPath4"
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              style={{ visibility: "hidden" }}
            />
            <path id="motionPath5" d="M0.5 356.5H434.5" style={{ visibility: "hidden" }} />
            <rect
              ref={(el) => {
                rectRefs.current[3] = el
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[4] = el
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[5] = el
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Advantages