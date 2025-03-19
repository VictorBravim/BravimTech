import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 py-8 sm:py-12 lg:py-16">
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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Nossos preços
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-0 sm:px-10 md:px-16 lg:px-20">
        <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg text-black transition-all duration-300 flex flex-col items-center justify-between">
          <div className="bg-blue-100 text-blue-700 rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-4">
            <span className="font-bold text-lg sm:text-xl">R$</span>
          </div>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold">Desenvolvimento</h3>
            <p className="text-gray-500 text-sm sm:text-base">Soluções personalizadas</p>
            <p className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">R$800 até R$5.000</p>
          </div>
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-center">
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Sites institucionais responsivos</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Aplicações web sob medida</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Integrações com APIs</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Suporte técnico inicial</span>
            </li>
          </ul>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Solicitar Orçamento
          </Link>
        </div>

        <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg text-black relative flex flex-col items-center justify-between">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-bl-md sm:rounded-bl-lg rounded-tr-xl sm:rounded-tr-2xl text-xs sm:text-sm font-medium">
            Mais Popular
          </div>
          <div className="bg-blue-100 text-blue-700 rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-4">
            <span className="font-bold text-lg sm:text-xl">R$</span>
          </div>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold">Design</h3>
            <p className="text-gray-500 text-sm sm:text-base">Interfaces e branding</p>
            <p className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">R$500 até R$3.000</p>
          </div>
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-center">
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">UI/UX para sites e apps</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Identidade visual completa</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Prototipagem interativa</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Revisões ilimitadas</span>
            </li>
          </ul>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Solicitar Orçamento
          </Link>
        </div>

        <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg text-black transition-all duration-300 flex flex-col items-center justify-between">
          <div className="bg-blue-100 text-blue-700 rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-4">
            <span className="font-bold text-lg sm:text-xl">R$</span>
          </div>
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold">WordPress</h3>
            <p className="text-gray-500 text-sm sm:text-base">Sites rápidos e gerenciáveis</p>
            <p className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">R$600 até R$4.000</p>
          </div>
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-center">
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Sites em WordPress otimizados</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Temas personalizados</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Plugins premium inclusos</span>
            </li>
            <li className="flex justify-center items-start">
              <Check className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 mr-2 mt-0.5" />
              <span className="text-sm sm:text-base">Treinamento para gestão</span>
            </li>
          </ul>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-6 sm:mt-8 lg:mt-10">
        <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base"> Precisa de uma solução personalizada? </p>
        <button className="bg-white border-2 border-[#0024B4] text-[#0024B4] hover:bg-[#0024B4] hover:text-white transition-colors duration-300 font-medium rounded-full px-6 sm:px-8 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base">
          Entre em contato
          <FaArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}