"use client"
import Image from "next/image"
import { useState } from "react"
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa"

const allProjects = [
  { id: 1, image: "/images/Banner.png", title: "Website Corporativo" },
  { id: 2, image: "/images/Banner.png", title: "Aplicativo Mobile" },
  { id: 3, image: "/images/Banner.png", title: "UI/UX Design" },
  { id: 4, image: "/images/Banner.png", title: "E-commerce" },
  { id: 5, image: "/images/Banner.png", title: "App Financeiro" },
  { id: 6, image: "/images/Banner.png", title: "Branding" },
  { id: 7, image: "/images/Banner.png", title: "Portal Educacional" },
  { id: 8, image: "/images/Banner.png", title: "App de Delivery" },
  { id: 9, image: "/images/Banner.png", title: "Design System" },
]

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6)
  const visibleProjects = allProjects.slice(0, visibleCount)
  const hasMoreProjects = visibleCount < allProjects.length

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <div className="bg-white py-12 overflow-hidden relative w-full px-4 sm:px-6 md:px-12 lg:px-72">
      <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <div className="flex justify-center my-2">
          <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
            <Image src="/images/Blue.svg" alt="Logo" width={28} height={28} className="mr-1" />
            <h1
              className="text-black text-sm sm:text-md font-medium mr-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Tipos de Projetos
            </h1>
          </div>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Projetos feitos pela BravimTech
        </h2>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-gray-600/10 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl flex flex-col items-center justify-between"
            >
              <Image
                src={project.image}
                alt={`Projeto ${project.id}`}
                width={600}
                height={250}
                className="rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              />
              <div className="bg-white p-2 sm:p-3 md:p-3 lg:p-4 rounded-full w-full flex items-center justify-between lg:mt-1">
                <div className="flex sm:hidden lg:flex items-center gap-2">
                  <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                    <FaUser className="text-[#0024B4]" size={16} />
                  </div>
                  <span className="text-gray-800 text-sm">{project.title}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 p-2 lg:p-0 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                    <FaEnvelope className="text-[#0024B4]" size={16} />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-gradient-to-b from-[#0751D4] to-[#0024B4] p-2 rounded-md shadow-md">
                      <FaArrowRight className="text-white" size={16} />
                    </div>
                    <span className="text-gray-800 text-xs sm:text-sm">Saiba Mais</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
            <button
              onClick={handleShowMore}
              className="bg-white border-2 border-[#0024B4] text-[#0024B4] hover:bg-[#0024B4] hover:text-white transition-colors duration-300 font-medium rounded-full px-6 sm:px-8 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base"
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