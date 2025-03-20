"use client"

import { Check, Brush, Code, Globe } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function PricingCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const pricingOptions = [
    {
      id: 1,
      title: "Design",
      description: "Interfaces e branding",
      price: "R$500 até R$3.000",
      icon: Brush,
      color: "from-blue-500 to-blue-700",
      bgPattern: "radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.1) 90%)",
      features: [
        "UI/UX para sites e apps",
        "Identidade visual completa",
        "Prototipagem interativa",
        "Revisões ilimitadas",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "Desenvolvimento",
      description: "Soluções personalizadas",
      price: "R$800 até R$5.000",
      icon: Code,
      color: "from-blue-600 to-blue-800",
      bgPattern: "radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.1) 0%, rgba(30, 64, 175, 0.1) 90%)",
      features: [
        "Sites institucionais responsivos",
        "Aplicações web sob medida",
        "Integrações com APIs",
        "Suporte técnico inicial",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "WordPress",
      description: "Sites rápidos e gerenciáveis",
      price: "R$600 até R$4.000",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      bgPattern: "radial-gradient(circle at 10% 90%, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 90%)",
      features: [
        "Sites em WordPress otimizados",
        "Temas personalizados",
        "Plugins premium inclusos",
        "Treinamento para gestão",
      ],
      popular: false,
    },
  ]

  return (
    <section className="flex justify-center w-full py-4 lg:py-24 bg-white">
    <div className="w-full container px-4 sm:px-6 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="flex justify-center my-2">
          <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
            <Image src="/images/Blue.svg" alt="Logo" width={28} height={28} className="mr-1" />
            <h1
              className="text-black text-sm sm:text-md font-medium mr-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Preços oferecidos
            </h1>
          </div>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Nossos preços
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingOptions.map((option) => (
          <div
            key={option.id}
            className="relative"
            onMouseEnter={() => setHoveredCard(option.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: option.bgPattern }} />
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 opacity-10 blur-xl" />
              <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 opacity-10 blur-xl" />
            </div>

            {/* Card content */}
            <div
              className={`relative h-full bg-transparent overflow-hidden transition-all duration-500 rounded-3xl shadow-lg ${
                hoveredCard === option.id ? "translate-y-[-8px]" : ""
              }`}
            >
              {/* Popular label */}
              {option.popular && (
                <div className="absolute -right-12 top-8 rotate-45">
                  <div className="px-12 py-1 font-medium bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center shadow-md">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Card header */}
              <div className="pt-8 px-6 text-center">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${option.color} p-[2px] shadow-lg transform rotate-3 transition-transform duration-300 ${
                    hoveredCard === option.id ? "rotate-6 scale-110" : ""
                  }`}
                >
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <option.icon
                      className="h-10 w-10 text-blue-600" // Simplified to a solid color for visibility
                    />
                  </div>
                </div>

                <h3
                  className={`text-2xl font-bold mb-1 bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}
                >
                  {option.title}
                </h3>
                <p className="text-slate-500 mb-6">{option.description}</p>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-slate-400">INVESTIMENTO</span>
                  </div>
                </div>

                <p className="text-3xl font-bold text-slate-800 mb-8">{option.price}</p>
              </div>

              {/* Features */}
              <div className="px-8 pb-6">
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center mt-0.5 shadow-sm`}
                      >
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div className="relative group">
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${option.color} rounded-lg blur opacity-10 group-hover:opacity-100 transition duration-500`}
                  />
                  <button
                    className={`relative w-full py-6 text-base font-medium bg-white text-slate-800 hover:text-white hover:bg-gradient-to-r ${option.color} rounded-lg shadow-md transition-all duration-300`}
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col justify-center items-center mt-6 sm:mt-8 lg:mt-10">
        <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base"> Precisa de uma solução personalizada? </p>
        <button className="bg-white border-2 border-[#0024B4] text-[#0024B4] hover:bg-[#0024B4] hover:text-white transition-colors duration-300 font-medium rounded-full px-6 sm:px-8 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base">
          Entre em contato
          <FaArrowRight size={14} />
        </button>
      </div>
    </div>
    </section>
  )
}