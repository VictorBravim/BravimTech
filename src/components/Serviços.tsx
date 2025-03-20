import { Code, Palette, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Criação de sites",
      description:
        "Criamos sites modernos e responsivos de alta performance para elevar a presença da marca",
      stat: "252K sites são criados todos os dias",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Identidade visual",
      description:
        "Desenvolvemos identidades visuais únicas e criativas para destacar sua marca no mercado",
      stat: "UX pode aumentar em 400% a conversão",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Otimização | SEO",
      description:
        "Maximizamos sua visibilidade online com SEO eficaz para atrair o público certo ao seu website",
      stat: "O SEO pode aumentar em até 100%",
      gradient: "from-blue-600 to-indigo-500",
    },
  ]

  return (
    <section className="flex justify-center w-full bg-white py-4 lg:py-12 pt-8 lg:pt-24">
      <div className="container px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center">
        <div className="text-center mb-2 lg:mb-12">
          <div className="flex justify-center my-2">
            <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
              <Image src="/images/Blue.svg" alt="Logo" width={28} height={28} className="mr-1" />
              <h1 className="text-black text-sm sm:text-md font-medium mr-2" style={{ fontFamily: "var(--font-archivo)" }}>Fale Com a Gente</h1>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600" style={{ fontFamily: "var(--font-archivo)" }}>
            Nossas Soluções
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] transition-all duration-300 hover:translate-y-[-8px] group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.2)_0%,transparent_60%)]"></div>
              <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full bg-blue-50 opacity-20"></div>

              <div
                className={`mb-6 relative z-10 inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>

              <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">{service.description}</p>

              <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-6 border-l-4 border-blue-500 pl-3 py-1">
                <span className="font-medium">{service.stat}</span>
              </div>

              <Link
                href="#"
                className="inline-flex items-center justify-between w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-medium group-hover:shadow-md text-sm sm:text-base"
              >
                <span>Saiba Mais</span>
                <svg
                  className="w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}