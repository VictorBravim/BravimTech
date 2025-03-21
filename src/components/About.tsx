"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaWordpress, FaFigma, FaGoogle } from "react-icons/fa"
import { SiAdobephotoshop, SiAdobeindesign, SiFirebase } from "react-icons/si"
import { VscVscode } from "react-icons/vsc";

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react"

const About = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const technologies = [
    { icon: FaWordpress, name: "WordPress", color: "#21759B", glow: "#21759B40" },
    { icon: FaFigma, name: "Figma", color: "#F24E1E", glow: "#F24E1E40" },
    { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF", glow: "#31A8FF40" },
    { icon: SiAdobeindesign, name: "InDesign", color: "#FF3366", glow: "#FF336640" },
    { icon: VscVscode, name: "VSCode", color: "#007ACC", glow: "#007ACC40" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28", glow: "#FFCA2840" },
    { icon: FaGoogle, name: "Google", color: "#4285F4", glow: "#4285F440" },
  ]

  const services = [
    {
      id: 0,
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web de alta performance com tecnologias modernas.",
    },
    {
      id: 1,
      title: "Design de Interfaces",
      description: "Interfaces intuitivas e atraentes que proporcionam a melhor experiência.",
    },
    {
      id: 2,
      title: "Otimização SEO",
      description: "Estratégias avançadas para posicionar seu site nos primeiros resultados.",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateRotation = (x: number, y: number) => {
    if (!isHovering) return { x: 0, y: 0 }
    const element = document.getElementById("hero-image")
    if (!element) return { x: 0, y: 0 }
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateY = ((x - centerX) / (rect.width / 2)) * 5
    const rotateX = ((centerY - y) / (rect.height / 2)) * 5
    return { x: rotateX, y: rotateY }
  }

  const rotation = calculateRotation(mousePosition.x, mousePosition.y)

  return (
    <section className="w-full bg-white py-4 sm:py-8 lg:py-12">
      <div className="bg-white text-gray-900 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-200/30 blur-[60px] sm:blur-[80px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex justify-center my-2">
                <div className="bg-blue-600/10 text-white gap-2 py-1.5 px-2 sm:py-2 sm:px-3 flex items-center rounded-full">
                  <Image src="/images/Blue.svg" alt="Logo" width={20} height={20} className="mr-1 sm:w-7 sm:h-7" />
                  <h1 className="text-black text-xs sm:text-sm font-medium mr-2" style={{ fontFamily: "var(--font-archivo)" }}>
                    Sobre nós
                  </h1>
                </div>
              </div>
              <h2
                className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Sobre a BravimTech
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-full"
            >
              <motion.div
                id="hero-image"
                className="relative z-20"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
                animate={{
                  rotateX: rotation.x,
                  rotateY: rotation.y,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-[0_0_15px_rgba(0,100,255,0.1)]">
                  <Image
                    src="/images/10.webp"
                    alt="Tecnologia futurista"
                    width={600}
                    height={700}
                    className="w-full h-56 sm:h-72 md:h-80 lg:h-[400px] object-cover"
                  />
                  <div
                    className="absolute inset-0 border-2 border-blue-300/30 rounded-xl"
                    style={{ boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.1)" }}
                  />
                </div>

                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white border border-gray-200 rounded-lg shadow-[0_0_10px_rgba(0,100,255,0.1)] p-2 sm:p-3 z-30">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-base font-bold">100+</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Horas de dedicação</h4>
                      <p className="text-[10px] sm:text-xs text-gray-600">Projetos com foco total</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white border border-gray-200 rounded-lg shadow-[0_0_10px_rgba(0,100,255,0.1)] p-2 sm:p-3 z-30">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm sm:text-base font-bold">98%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Satisfação garantida</h4>
                      <p className="text-[10px] sm:text-xs text-gray-600">Clientes que nos recomendam</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-6 sm:-right-8 transform -translate-y-1/2 w-16 sm:w-20 h-16 sm:h-20 hidden sm:block">
                  <div className="absolute inset-0 border-2 border-blue-300/30 rounded-full animate-[spin_10s_linear_infinite]" />
                  <div className="absolute inset-2 border border-indigo-300/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-4 border border-cyan-300/10 rounded-full animate-[spin_20s_linear_infinite]" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 shadow-[0_0_20px_rgba(0,100,255,0.05)]">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                  O que a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    BravimTech
                  </span>{" "}
                  Pode Oferecer
                </h2>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-4 sm:mb-6 border-b border-gray-200 pb-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-full sm:w-auto sm:min-w-[150px] px-3 sm:px-4 py-2 font-medium text-sm sm:text-base lg:text-lg text-center transition-all relative ${activeTab === index ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                        } cursor-pointer flex justify-between`}
                    > 

                        {service.title}
                        <span className={`block lg:hidden transition-transform ${
                                activeTab === index
                                  ? "transform rotate-180 text-blue-500"
                                  : "text-gray-700"
                              }`}>
                        <ChevronUp/>
                        </span>

                        {activeTab === index && (
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
                    <p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg">{services[activeTab].description}</p>

                    <ul className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: item * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-1 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 sm:h-4 sm:w-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                            {activeTab === 0 &&
                              `Desenvolvimento ${item === 1 ? "de sites responsivos" : item === 2 ? "de aplicações web" : "de e-commerce"}`}
                            {activeTab === 1 &&
                              `Design ${item === 1 ? "de interfaces intuitivas" : item === 2 ? "de experiência do usuário" : "de identidade visual"}`}
                            {activeTab === 2 &&
                              `Otimização ${item === 1 ? "para mecanismos de busca" : item === 2 ? "de performance" : "de conteúdo"}`}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">              
                  <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-medium text-sm sm:text-base lg:text-lg text-white shadow-[0_0_15px_rgba(0,100,255,0.2)] hover:shadow-[0_0_20px_rgba(0,100,255,0.3)] transition-all">
                    BrandBook
                  </button>
                  <button className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gray-100 border border-gray-200 rounded-lg font-medium text-sm sm:text-base lg:text-lg text-gray-700 hover:bg-gray-200 transition-all">
                    Ver artigos
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
              Tecnologias que dominamos
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <motion.div key={index} className="relative group" whileHover={{ y: -5 }}>
                  <div
                    className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 flex flex-col items-center transition-all group-hover:border-[color:var(--hover-color)] group-hover:shadow-[0_0_15px_var(--shadow-color)]"
                    style={
                      {
                        "--hover-color": tech.color,
                        "--shadow-color": tech.glow,
                      } as React.CSSProperties
                    }
                  >
                    <tech.icon
                      size={20}
                      className="sm:h-7 sm:w-7 text-gray-600 group-hover:text-[color:var(--hover-color)] transition-colors"
                      style={{ "--hover-color": tech.color } as React.CSSProperties}
                    />
                    <span className="mt-1 sm:mt-2 font-medium text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      {tech.name}
                    </span>

                    <div
                      className="absolute -inset-0.5 bg-gradient-to-r from-[color:var(--hover-color)] to-[color:var(--hover-color)] opacity-0 group-hover:opacity-10 rounded-lg blur-sm transition-opacity"
                      style={{ "--hover-color": tech.color } as React.CSSProperties}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent transform -translate-y-1/2 z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About