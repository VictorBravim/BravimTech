'use client'
import Image from "next/image";
import { FaUser, FaEnvelope, FaArrowRight } from "react-icons/fa";

const BentoGrid = () => {
    return (
        <div className="bg-white px-6 lg:px-64 py-12 lg:py-24">
            <div className="flex justify-center my-2 lg:my-2">
                <div className="bg-gray-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
                    <Image src="images/Blue.svg" alt="Logo" width={30} height={30} className="mr-2" />
                    <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold mr-2">Soluções</h1>
                </div>
            </div>
            <h2 className="text-center text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-medium mb-12" style={{ fontFamily: "var(--font-archivo)" }}>
                O Que Fazemos <br />
                Na <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent">BravimTech?</span>
            </h2>
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12">
                <div className="bg-white border-2 border-gray-600/10 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[60%] h-72 lg:h-115">
                    <div className="relative w-full h-56 lg:h-96">
                        <Image src="/images/Banner.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-full object-cover" />
                        <div className="absolute top-4 lg:top-8 left-4 lg:left-8 w-[80%] lg:w-[60%] text-white">
                            <Image src="/images/Code.svg" alt="Ícone" width={60} height={60} className="mb-4 lg:mb-6 w-12 h-12 lg:w-20 lg:h-20" />
                            <h3 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4">Criação de sites</h3>
                            <p className="text-xs lg:text-base leading-relaxed">
                                Somos especialistas em desenvolver sites modernos e responsivos de alta performance para melhorar a experiência da sua empresa
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between mt-1">
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                                <FaUser className="text-[#0024B4]" size={16} />
                            </div>
                            <span className="text-gray-800 text-sm">252K sites são criados todos os dias</span>
                        </div>
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
                <div className="bg-white border-2 border-gray-600/10 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[40%] h-72 lg:h-115">
                    <div className="relative w-full h-56 lg:h-96">
                        <Image src="/images/WB.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-full object-cover" />
                        <div className="absolute top-4 lg:top-8 left-4 lg:left-8 w-[80%] lg:w-[70%] text-[#18181B]">
                            <Image src="/images/Design.svg" alt="Ícone" width={60} height={60} className="mb-4 lg:mb-6 w-12 h-12 lg:w-20 lg:h-20" />
                            <h3 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4">Identidade visual</h3>
                            <p className="text-xs lg:text-base leading-relaxed">
                                Criamos interfaces desde pesquisas até o visual, garantindo uma identidade única para o seu público
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between">
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                                <FaUser className="text-[#0024B4]" size={16} />
                            </div>
                            <span className="text-gray-800 text-sm">UX pode aumentar em 400% a conversão</span>
                        </div>
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
                <div className="bg-white border-2 border-gray-600/10 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[40%] h-72 lg:h-115">
                    <div className="relative w-full h-56 lg:h-96">
                        <Image src="/images/WB.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-full object-cover" />
                        <div className="absolute top-4 lg:top-8 left-4 lg:left-8 w-[80%] lg:w-[70%] text-[#18181B]">
                            <Image src="/images/NoCode.svg" alt="Ícone" width={60} height={60} className="mb-4 lg:mb-6 w-12 h-12 lg:w-20 lg:h-20" />
                            <h3 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4">No-Code</h3>
                            <p className="text-xs lg:text-base leading-relaxed">
                                Deixe a tecnologia trabalhar ao seu favor, sem barreiras técnicas, e facil manutenção.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between">
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                                <FaUser className="text-[#0024B4]" size={16} />
                            </div>
                            <span className="text-gray-800 text-sm">45% dos sites utilizam WordPress</span>
                        </div>
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
                <div className="bg-white border-2 border-gray-600/10 p-2 rounded-xl lg:rounded-4xl flex flex-col items-center justify-between w-[100%] lg:w-[60%] h-72 lg:h-115">
                    <div className="relative w-full h-56 lg:h-96">
                        <Image src="/images/Banner.png" alt="Imagem 3" width={300} height={200} className="rounded-xl lg:rounded-3xl w-full h-full object-cover" />
                        <div className="absolute top-4 lg:top-8 left-4 lg:left-8 w-[80%] lg:w-[60%] text-white">
                            <Image src="/images/SEO.svg" alt="Ícone" width={60} height={60} className="mb-4 lg:mb-6 w-12 h-12 lg:w-20 lg:h-20" />
                            <h3 className="text-xl lg:text-4xl font-bold mb-2 lg:mb-4">Otimização | SEO</h3>
                            <p className="text-xs lg:text-base leading-relaxed">
                                Nós ajudamos a maximizar a sua visibilidade online e atrair o público certo gerando resultados reais para seu site
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/0 lg:p-4 rounded-lg w-full flex items-center justify-between mt-1">
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 rounded-md shadow-md">
                                <FaUser className="text-[#0024B4]" size={16} />
                            </div>
                            <span className="text-gray-800 text-sm">O SEO pode aumentar o tráfego orgânico em até 100%</span>
                        </div>
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