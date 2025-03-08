"use client";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-white py-12 lg:py-24 px-[48px] text-[#18181B] overflow-hidden relative">
      <div className="flex justify-center my-2 lg:my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
          <Image src="images/Blue.svg" alt="Logo" width={30} height={30} className="mr-2" />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold mr-2">Nossos Clientes</h1>
        </div>
      </div>
      <h2 className="text-center text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-12 tracking-tight mb-12" style={{ fontFamily: "var(--font-archivo)" }}>
        O que os <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent">clientes dizem</span> <br></br>
        Sobre o Nosso Serviço 
      </h2>

      <div className="relative w-full flex justify-center">
        <Image 
          src="/images/Testimonial.svg" 
          alt="Testimonial Banner" 
          width={1500} 
          height={400} 
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Testimonial;