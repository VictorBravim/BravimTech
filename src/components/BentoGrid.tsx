'use client'
import Image from "next/image";
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa";

const BentoGrid = () => {
    return (
        <div className="bg-white px-6 lg:px-64 py-12 lg:py-24">
            <div className="flex justify-center my-2 lg:my-4">
                <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
                    <Image src="images/Blue.svg" alt="Logo" width={30} height={30} className="mr-2" />
                    <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold mr-2">Soluções</h1>
                </div>
            </div>
            <h2 className="text-center text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-tight mb-12" style={{ fontFamily: "var(--font-archivo)" }}>
                Soluções que nós <br></br>
                temos na <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent">BravimTech</span>
            </h2>
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12">
                <div className="bg-white shadow-sm shadow-gray-400 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[60%] h-72 lg:h-105">
                    <Image src="/images/Banner.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-56 lg:h-86 object-cover" />
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between mt-2">
                        {/* Ícone de perfil com "Template Design" */}
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                                <FaUser className="text-[#0024B4]" size={16} />
                            </div>
                            <span className="text-gray-800 text-sm">252K sites são criados todos os dias</span>
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
                <div className="bg-white shadow-sm shadow-gray-400 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[40%] h-72 lg:h-105">
                    <Image src="/images/Banner.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-56 lg:h-86 object-cover" />
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between mt-2">
                        {/* Ícone de perfil com "Template Design" */}
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                                <FaUser className="text-[#0024B4]" size={16} />
                            </div>
                            <span className="text-gray-800 text-sm">UX pode aumentar em 400% a conversão</span>
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
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12 pt-6 lg:pt-12">
                <div className="bg-white shadow-sm shadow-gray-400 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[40%] h-72 lg:h-105">
                    <Image src="/images/Banner.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-56 lg:h-86 object-cover" />
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between mt-2">
                        {/* Ícone de perfil com "Template Design" */}
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                                <FaUser className="text-[#0024B4]" size={16} />
                            </div>
                            <span className="text-gray-800 text-sm">45% dos sites utilizam WordPress</span>
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
                <div className="bg-white shadow-sm shadow-gray-400 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[60%] h-72 lg:h-105">
                    <Image src="/images/Banner.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-56 lg:h-86 object-cover" />
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between mt-2">
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
            </div>
        </div>
    );
};

export default BentoGrid;