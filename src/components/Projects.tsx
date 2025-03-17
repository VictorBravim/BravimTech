"use client"
import Image from "next/image"
import { useState } from "react"
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa"

// Dados de projetos expandidos com tipos para filtro
const allProjects = [
  { id: 1, image: "/images/Banner.png", type: "web", title: "Website Corporativo" },
  { id: 2, image: "/images/Banner.png", type: "mobile", title: "Aplicativo Mobile" },
  { id: 3, image: "/images/Banner.png", type: "design", title: "UI/UX Design" },
  { id: 4, image: "/images/Banner.png", type: "web", title: "E-commerce" },
  { id: 5, image: "/images/Banner.png", type: "mobile", title: "App Financeiro" },
  { id: 6, image: "/images/Banner.png", type: "design", title: "Branding" },
  { id: 7, image: "/images/Banner.png", type: "web", title: "Portal Educacional" },
  { id: 8, image: "/images/Banner.png", type: "mobile", title: "App de Delivery" },
  { id: 9, image: "/images/Banner.png", type: "design", title: "Design System" },
]

// Tipos de projetos para o filtro
const projectTypes = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleCount, setVisibleCount] = useState(6)

  // Filtra os projetos com base no filtro ativo
  const filteredProjects =
    activeFilter === "all" ? allProjects : allProjects.filter((project) => project.type === activeFilter)

  // Projetos visíveis atualmente
  const visibleProjects = filteredProjects.slice(0, visibleCount)

  // Verifica se há mais projetos para mostrar
  const hasMoreProjects = visibleProjects.length < filteredProjects.length

  // Função para mostrar mais projetos
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <div className="bg-white py-12 overflow-hidden relative w-full px-64">
      {/* Badge "Projetos" */}
      <div className="flex justify-center my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-4 flex items-center rounded-full">
          <Image src="/images/Blue.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold">Projetos</h1>
        </div>
      </div>

      {/* Título */}
      <h2 className="text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-tight tracking-tight mb-8 text-center">
        Projetos feitos <br className="md:hidden" />
        pela{" "}
        <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent">
          BravimTech
        </span>
      </h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {projectTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveFilter(type.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === type.id
                ? "bg-gradient-to-r from-[#0071DA] to-[#0024B4] text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Grid de Projetos */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-gray-600/10 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`Projeto ${project.id}`}
                width={600}
                height={250}
                className="rounded-xl lg:rounded-3xl w-full h-48 lg:h-96 object-cover"
              />
              <div className="bg-white lg:p-4 rounded-full w-full flex items-center justify-between lg:mt-1">
                {/* Ícone de perfil com "Template Design" */}
                <div className="hidden lg:flex items-center gap-2">
                  <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                    <FaUser className="text-[#0024B4]" size={16} />
                  </div>
                  <span className="text-gray-800 text-sm">{project.title}</span>
                </div>
                {/* Grupo à direita (envelope e seta com "Saiba Mais") */}
                <div className="flex items-center gap-2 p-2 lg:p-0">
                  <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                    <FaEnvelope className="text-[#0024B4]" size={16} />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-gradient-to-b from-[#0751D4] to-[#0024B4] p-2 rounded-md shadow-md">
                      <FaArrowRight className="text-white" size={16} />
                    </div>
                    <span className="text-gray-800 text-sm">Saiba Mais</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Mostrar Mais */}
        {hasMoreProjects && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleShowMore}
              className="bg-white border-2 border-[#0024B4] text-[#0024B4] hover:bg-[#0024B4] hover:text-white transition-colors duration-300 font-medium rounded-full px-8 py-3 flex items-center gap-2"
            >
              Mostrar Mais
              <FaArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects