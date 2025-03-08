"use client";
import Image from "next/image";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

const icons = [
  { icon: FaReact, name: "React" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
];

const Tech = () => {
  return (
    <div className="bg-white py-12 lg:py-24 text-[#18181B] overflow-hidden">
      {/* Seção com Texto à Esquerda e Imagem à Direita */}
      <div className="px-6 lg:px-64 flex flex-col lg:flex-row items-center gap-12 mb-16">
        {/* Texto à Esquerda */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Badge "Vantagens" */}
          <div className="flex justify-center lg:justify-start my-2 lg:my-4">
            <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
              <Image src="images/Blue.svg" alt="Logo" width={30} height={30} className="mr-2" />
              <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold mr-2">Vantagens</h1>
            </div>
          </div>
           <h2 className="text-center lg:text-left text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-tight mb-6" style={{ fontFamily: "var(--font-archivo)" }}>
            O que a <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent">BravimTech</span><br></br>
            Pode Oferecer
           </h2>
          <p className="text-md lg:text-lg font-normal text-gray-700 mb-6 leading-6 lg:pr-48">
            Nós da Bravim unimos a tecnologia e o design para criar
            soluções reais e inteligentes. Especializados em 
            desenvolvimento, design de interfaces e otimização SEO, 
            ajudamos você a entregar projetos e resultados funcionais
            e extraordinários para o mercado.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              BrandBook
            </button>
            <button className="text-blue-600 px-6 py-3 font-semibold">
              Ver artigos
            </button>
          </div>
        </div>

        {/* Imagem à Direita */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[250] lg:h-[425px] bg-gradient-to-br from-[#0071DA] to-[#0024B4] rounded-xl lg:rounded-3xl"></div>
        </div>
      </div>

      {/* Seção de Ícones Estáticos */}
      <div className="hidden lg:flex lg:px-64">
        <div className="flex flex-wrap justify-center gap-16">
          {icons.map(({ icon: Icon, name }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-lg"
            >
              <div className="bg-blue-600 p-3 rounded-xl">
                <Icon size={30} className="text-white" />
              </div>
              <span className="text-2xl font-bold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;