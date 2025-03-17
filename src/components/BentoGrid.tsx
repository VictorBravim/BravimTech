"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Palette, FileCode, Search, ArrowRight, Users, Mail, Sparkles } from "lucide-react"

// Interface para as props do ServiceCard
interface ServiceCardProps {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  textColor: string
  stat: string
  isWide?: boolean
  index: number
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  bgColor,
  textColor,
  stat,
  isWide = false,
  index,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [randomPoints, setRandomPoints] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    // Gerar pontos aleatórios para o efeito de constelação
    const points = Array.from({ length: 5 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setRandomPoints(points)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Determinar se o card é escuro ou claro
  const isDark = bgColor.includes("from-blue-600")

  return (
    <motion.div
      className={`relative overflow-hidden ${isWide ? "w-full lg:w-[60%]" : "w-full lg:w-[40%]"} h-72 lg:h-115 rounded-2xl`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Card principal com bordas arredondadas */}
      <div
        className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-blue-600 to-blue-900" : "bg-white"} 
        rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300`}
        style={{
          boxShadow: isHovered ? (isDark ? "0 0 30px rgba(59,130,246,0.5)" : "0 0 30px rgba(59,130,246,0.2)") : "none",
        }}
      />

      {/* Borda decorativa arredondada */}
      <div
        className={`absolute inset-0 border-2 ${isDark ? "border-blue-400/30" : "border-blue-500/20"} rounded-2xl 
        transition-all duration-300`}
      />

      {/* Efeito de grade futurista */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div
          className={`absolute inset-0 ${isDark ? "bg-grid-white/[0.07]" : "bg-grid-blue/[0.03]"} 
          [mask-image:linear-gradient(to_bottom_right,transparent,black)]`}
        />
      </div>

      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-400/10 blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-blue-400/10 blur-xl transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Linhas decorativas */}
      <div className={`absolute top-0 left-0 w-full h-1 ${isDark ? "bg-blue-400/30" : "bg-blue-500/20"} rounded-t-2xl`}></div>
      <div className={`absolute bottom-0 left-0 w-1 h-full ${isDark ? "bg-blue-400/30" : "bg-blue-500/20"} rounded-l-2xl`}></div>

      {/* Efeito de constelação */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {randomPoints.map((point, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${isDark ? "bg-blue-200" : "bg-blue-500"}`}
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                opacity: 0.5 + Math.random() * 0.5,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      {/* Efeito de luz seguindo o cursor */}
      {isHovered && (
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)",
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Conteúdo do card */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          {/* Ícone com efeito de brilho */}
          <div className="relative mb-6">
            <motion.div
              className={`inline-flex p-3 rounded-lg ${isDark ? "bg-white/10" : "bg-blue-500/10"} backdrop-blur-sm`}
              whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
            >
              <Icon className={`w-8 h-8 ${textColor}`} />

              {/* Efeito de brilho no ícone */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      boxShadow: isDark ? "0 0 15px 2px rgba(255,255,255,0.3)" : "0 0 15px 2px rgba(59,130,246,0.3)",
                    }}
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Partículas de brilho */}
            {isHovered && (
              <motion.div
                className="absolute -top-1 -right-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className={`w-4 h-4 ${isDark ? "text-blue-200" : "text-blue-500"}`} />
              </motion.div>
            )}
          </div>

          {/* Título com efeito de destaque */}
          <div className="relative">
            <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${textColor}`}>
              {title}
              {isHovered && (
                <motion.span
                  className={`absolute -bottom-1 left-0 h-0.5 ${isDark ? "bg-white/50" : "bg-blue-500/50"}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </h3>
          </div>

          {/* Descrição */}
          <p className={`${textColor} text-sm md:text-base max-w-md ${isDark ? "opacity-80" : "opacity-90"}`}>
            {description}
          </p>
        </div>

        {/* Rodapé do card */}
        <div className="mt-6 flex items-center justify-between">
          <div className="hidden lg:flex items-center gap-2">
            <div className={`${isDark ? "bg-white/10" : "bg-blue-500/10"} p-2 rounded-md backdrop-blur-sm`}>
              <Users className={`w-4 h-4 ${textColor}`} />
            </div>
            <span className={`text-sm ${textColor}`}>{stat}</span>
          </div>

          <Link href="#" className="group flex items-center gap-2">
            <div className={`${isDark ? "bg-white/10" : "bg-blue-500/10"} p-2 rounded-md backdrop-blur-sm`}>
              <Mail className={`w-4 h-4 ${textColor}`} />
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                className={`${isDark ? "bg-white" : "bg-blue-600"} p-2 rounded-md shadow-md relative overflow-hidden`}
                whileHover={{
                  scale: 1.05,
                  rotate: 90,
                  transition: { duration: 0.3 },
                }}
              >
                <ArrowRight className={`${isDark ? "text-blue-700" : "text-white"} w-4 h-4 relative z-10`} />

                {/* Efeito de brilho no botão */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                />
              </motion.div>
              <span className={`text-sm ${textColor}`}>Saiba Mais</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// Interface para os serviços
interface Service {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
  textColor: string
  stat: string
  isWide?: boolean
}

export default function BentoGrid() {
  const services: Service[] = [
    {
      title: "Criação de sites",
      description:
        "Somos especialistas em desenvolver sites modernos e responsivos de alta performance para melhorar a experiência da sua empresa",
      icon: Code,
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-900",
      textColor: "text-white",
      stat: "252K sites são criados todos os dias",
      isWide: true,
    },
    {
      title: "Identidade visual",
      description:
        "Criamos interfaces desde pesquisas até o visual, garantindo uma identidade única para o seu público",
      icon: Palette,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      stat: "UX pode aumentar em 400% a conversão",
    },
    {
      title: "No-Code",
      description: "Deixe a tecnologia trabalhar ao seu favor, sem barreiras técnicas, e fácil manutenção",
      icon: FileCode,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-gray-800",
      stat: "45% dos sites utilizam WordPress",
    },
    {
      title: "Otimização | SEO",
      description:
        "Nós ajudamos a maximizar a sua visibilidade online e atrair o público certo gerando resultados reais para seu site",
      icon: Search,
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-900",
      textColor: "text-white",
      stat: "O SEO pode aumentar o tráfego orgânico em até 100%",
      isWide: true,
    },
  ]

  return (
    <section className="bg-white px-6 lg:px-64 py-12 lg:py-24 relative overflow-hidden">
      {/* Elementos de fundo futuristas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-1/4 top-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl"></div>

        {/* Linhas de grade */}
        <div className="absolute inset-0 bg-grid-blue/[0.02]"></div>

        {/* Círculos decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-blue-200/20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-blue-200/20"></div>
      </div>

      <div className="relative z-10">
        {/* Título da seção com efeito futurista */}
        <div className="flex justify-center my-2 lg:my-2">
          <motion.div
            className="bg-white shadow-lg gap-2 py-2 px-6 flex items-center rounded-full border border-blue-200/50 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-800 text-md lg:text-lg font-semibold relative z-10">Nossos Serviços</span>

            {/* Efeito de brilho no título */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
          </motion.div>
        </div>

        {/* Título principal com efeito de gradiente */}
        <h2 className="text-center text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-medium mb-12 relative">
          O Que Fazemos <br />
          Na{" "}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 bg-clip-text text-transparent">
            BravimTech?
          </span>
          {/* Linha decorativa sob o título */}
          <motion.div
            className="absolute left-1/2 -bottom-4 h-1 bg-gradient-to-r from-blue-600 to-blue-400"
            initial={{ width: 0, x: "-50%" }}
            animate={{ width: "100px", x: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </h2>

        {/* Grid de serviços */}
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12">
          <ServiceCard {...services[0]} index={0} />
          <ServiceCard {...services[1]} index={1} />
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12 pt-6 lg:pt-12">
          <ServiceCard {...services[2]} index={2} />
          <ServiceCard {...services[3]} index={3} />
        </div>

        {/* Botão com efeito futurista */}
        <div className="mt-16 text-center">
          <motion.button
            className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 mx-auto overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Ver todos os serviços</span>
            <motion.div
              className="relative z-10"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>

            {/* Efeito de brilho no botão */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />

            {/* Borda brilhante */}
            <motion.div
              className="absolute inset-0 rounded-lg pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.3)" }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  )
}