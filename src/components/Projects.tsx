"use client";
import Image from "next/image";
import { useState } from "react";
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa";

const projects = [
  { id: 1, image: "/images/Banner.png" },
  { id: 2, image: "/images/Banner.png" },
  { id: 3, image: "/images/Banner.png" },
  { id: 4, image: "/images/Banner.png" },
];

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white pt-12 pb-12 lg:pb-24 overflow-hidden relative w-full">
      {/* Badge "Projetos" */}
      <div className="flex justify-center my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-4 flex items-center rounded-full">
          <Image src="/images/Blue.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold">Projetos</h1>
        </div>
      </div>

      {/* Título */}
      <h2 className="text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-tight mb-12 text-center">
        Projetos feitos <br />
        pela{" "}
        <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent">
          BravimTech
        </span>
      </h2>

      {/* Slider de Cards */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex m-2 space-x-16 animate-infinite-slide ${
            isHovered ? "paused" : ""
          }`}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-sm shadow-gray-400 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[360px] lg:w-[640px] h-[250px] lg:h-[460px] flex-shrink-0"
            >
              <Image
                src={project.image}
                alt={`Imagem ${project.id}`}
                width={600}
                height={250}
                className="rounded-xl lg:rounded-3xl w-full h-48 lg:h-96 object-cover"
              />
              <div className="bg-white lg:p-4 rounded-lg w-full flex items-center justify-between lg:mt-4">
                {/* Ícone de perfil com "Template Design" */}
                <div className="hidden lg:flex items-center gap-2">
                  <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                    <FaUser className="text-[#0024B4]" size={16} />
                  </div>
                  <span className="text-gray-800 text-sm">Template Design</span>
                </div>
                {/* Grupo à direita (envelope e seta com "Saiba Mais") */}
                <div className="flex items-center gap-2">
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

        {/* Estilos locais */}
        <style jsx>{`
          @keyframes infinite-slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-infinite-slide {
            animation: infinite-slide 50s linear infinite;
            display: flex;
            width: max-content;
          }

          .paused {
            animation-play-state: paused;
          }

          /* Estilização dos botões */
          .p-2 {
            padding: 0.5rem;
          }

          .rounded-md {
            border-radius: 0.375rem; /* Cantos arredondados moderados */
          }

          .shadow-md {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -2px rgba(0, 0, 0, 0.1);
          }

          .text-sm {
            font-size: 0.875rem;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Projects;