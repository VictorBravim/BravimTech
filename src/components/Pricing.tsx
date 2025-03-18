import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">Nossos Planos</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Escolha o plano ideal para o seu projeto com preços transparentes e serviços de alta qualidade
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Plano Básico */}
        <div className="border-2 text-black hover:border-blue-500 hover:shadow-lg transition-all duration-300 rounded-lg">
          <div className="text-center pt-6 pb-2">
            <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">R$</span>
            </div>
            <h3 className="text-2xl font-bold">Básico</h3>
            <p className="text-gray-500">Para pequenos projetos</p>
          </div>
          <div className="text-center p-6">
            <p className="text-4xl font-bold mb-6">R$2.500</p>
            <ul className="space-y-3 text-left mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Site responsivo até 5 páginas</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Design moderno e otimizado</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Otimização SEO básica</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Suporte por 30 dias</span>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>

        {/* Plano Profissional */}
        <div className="border-2 text-black border-blue-500 shadow-lg relative rounded-lg">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
            Mais Popular
          </div>
          <div className="text-center pt-6 pb-2">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">R$</span>
            </div>
            <h3 className="text-2xl font-bold">Profissional</h3>
            <p className="text-gray-500">Para empresas em crescimento</p>
          </div>
          <div className="text-center p-6">
            <p className="text-4xl font-bold mb-6">R$5.800</p>
            <ul className="space-y-3 text-left mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Site responsivo até 15 páginas</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Design personalizado premium</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Otimização SEO avançada</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Painel administrativo</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Suporte por 90 dias</span>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>

        {/* Plano Enterprise */}
        <div className="border-2 text-black hover:border-blue-500 hover:shadow-lg transition-all duration-300 rounded-lg">
          <div className="text-center pt-6 pb-2">
            <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">R$</span>
            </div>
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-gray-500">Soluções completas</p>
          </div>
          <div className="text-center p-6">
            <p className="text-4xl font-bold mb-6">R$12.000</p>
            <ul className="space-y-3 text-left mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Aplicação web completa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>E-commerce integrado</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Estratégia SEO completa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Integrações com APIs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span>Suporte prioritário por 12 meses</span>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 mb-4">Precisa de uma solução personalizada?</p>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
        >
          Entre em contato
        </Link>
      </div>
    </div>
  )
}