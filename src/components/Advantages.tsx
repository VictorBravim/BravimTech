import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FAQSection() {
  return (
    <section className="w-full py-16 bg-white text-black">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="mb-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Por que escolher nossa <span className="text-blue-600">Agência</span>?
          </h2>
          <p className="text-gray-500 max-w-[700px]">
            Tire suas dúvidas e descubra as vantagens de desenvolver seu site conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-xl font-bold">
              10+
            </div>
            <h3 className="font-medium text-lg mb-1">Anos de experiência</h3>
            <p className="text-gray-500 text-sm">Expertise comprovada no mercado</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-xl font-bold">
              98%
            </div>
            <h3 className="font-medium text-lg mb-1">Satisfação garantida</h3>
            <p className="text-gray-500 text-sm">Clientes que recomendam nossos serviços</p>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <details className="border-b border-gray-200 py-4">
            <summary className="text-left font-medium cursor-pointer flex items-center justify-between">
              Quais são as vantagens de ter um site profissional para meu negócio?
              <svg
                className="w-5 h-5 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Aumento da credibilidade e profissionalismo da sua marca</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Disponibilidade 24/7 para seus clientes, mesmo quando sua empresa está fechada</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Alcance global, expandindo seu mercado potencial além das limitações geográficas</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Geração de leads e conversões através de estratégias digitais eficientes</p>
              </div>
            </div>
          </details>

          <details className="border-b border-gray-200 py-4">
            <summary className="text-left font-medium cursor-pointer flex items-center justify-between">
              Por que contratar nossa agência em vez de usar plataformas de criação de sites?
              <svg
                className="w-5 h-5 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Sites totalmente personalizados que refletem a identidade única da sua marca</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Otimização avançada de SEO para melhor posicionamento nos motores de busca</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Desenvolvimento com foco em performance e velocidade de carregamento</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Suporte técnico especializado e manutenção contínua após o lançamento</p>
              </div>
            </div>
          </details>

          <details className="border-b border-gray-200 py-4">
            <summary className="text-left font-medium cursor-pointer flex items-center justify-between">
              Quanto tempo leva para desenvolver um site profissional?
              <svg
                className="w-5 h-5 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div>
              <p className="pb-2">
                O prazo de desenvolvimento varia conforme a complexidade do projeto, mas nosso processo otimizado
                garante:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>Sites institucionais: de 2 a 4 semanas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>E-commerces: de 4 a 8 semanas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>Plataformas web complexas: de 8 a 12 semanas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>Acompanhamento em tempo real do progresso do seu projeto</p>
                </div>
              </div>
            </div>
          </details>

          <details className="border-b border-gray-200 py-4">
            <summary className="text-left font-medium cursor-pointer flex items-center justify-between">
              Quais tecnologias utilizamos em nossos projetos?
              <svg
                className="w-5 h-5 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div>
              <p className="pb-2">Trabalhamos com as tecnologias mais modernas e eficientes do mercado:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>React e Next.js para interfaces dinâmicas e de alta performance</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>HTML5, CSS3 e JavaScript para estruturas web robustas e responsivas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>Node.js e APIs modernas para backend escalável e seguro</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>Integração com as principais plataformas de pagamento, CRM e marketing</p>
                </div>
              </div>
            </div>
          </details>

          <details className="border-b border-gray-200 py-4">
            <summary className="text-left font-medium cursor-pointer flex items-center justify-between">
              O que está incluído no serviço de criação de sites?
              <svg
                className="w-5 h-5 transform transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Consultoria estratégica para entender seus objetivos de negócio</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Design personalizado e responsivo para todos os dispositivos</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Otimização para mecanismos de busca (SEO) e performance</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Integração com redes sociais e ferramentas de marketing</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p>Treinamento para gerenciamento de conteúdo e suporte técnico</p>
              </div>
            </div>
          </details>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </section>
  )
}