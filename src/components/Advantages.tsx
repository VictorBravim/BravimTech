"use client";
import Image from "next/image";

const Advantages = () => {
  return (
    <div className="bg-white h-full pb-12 lg:pb-40 pt-12 text-center relative">
      {/* Badge "Vantagens" */}
      <div className="flex justify-center my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-4 flex items-center rounded-full">
          <Image src="/images/Blue.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold">Vantagens</h1>
        </div>
      </div>

      {/* Título */}
      <h2 className="text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-tight mb-12" style={{ fontFamily: "var(--font-archivo)" }}>
        Descubra as vantagens <br />
        oferecidas na{" "}
        <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-archivo)" }}>
          BravimTech
        </span>
      </h2>

      {/* Container principal */}
      <div className="relative flex items-center justify-center w-full mt-2 lg:mt-32">
        {/* SVG à esquerda (colado no canto) */}
        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2">
          <Image src="/images/L.svg" alt="Ícone esquerdo" width={450} height={200} />
        </div>

        {/* Card maior */}
        <div className="bg-white shadow-sm rounded-2xl p-12 py-12 lg:py-48 max-w-5xl text-center z-10">
          <p className="text-[#3D3D3D] leading-relaxed text-md lg:text-xl">
            Utilizamos as tecnologias mais recentes para construir sites que são rápidos, seguros e escaláveis. 
            Focamos em otimizar o tempo de carregamento e a performance geral, garantindo uma experiência fluida para seus visitantes.
          </p>
        </div>

        {/* SVG à direita (colado no canto) */}
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
          <Image src="/images/R.svg" alt="Ícone direito" width={450} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Advantages;