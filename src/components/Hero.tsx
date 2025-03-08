"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/background.webm";
    video.onloadeddata = () => {
      setVideoLoaded(true);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Placeholder: Imagem de fundo */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/images/Banner.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Vídeo de fundo (só aparece quando estiver carregado) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/background.webm" type="video/webm" />
      </video>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 text-center text-white lg:px-4 lg:max-w-5xl">
        <h1
          className="text-[40px] sm:text-[65px] md:text-[90px] lg:text-[115px] font-archivo font-normal leading-12 lg:leading-25 tracking-tight mb-4"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Construindo o seu <br />
          futuro com rapidez
        </h1>
        <p className="text-white/90 text-sm sm:text-lg md:text-xl font-roboto max-w-3xl mx-auto mb-6 md:mb-12">
          Estratégia, performance e tecnologia. Combinamos tudo isso de ponta a ponta para
          criar soluções que vão impulsionar o seu sucesso.
        </p>

        {/* Card com 3 itens */}
        <div className="flex justify-center">
          <div className="border border-black/5 bg-black/20 backdrop-blur-[3.5px] rounded-full px-4 sm:px-6 md:px-8 py-2 flex flex-wrap justify-center gap-3 sm:gap-6">
            {["1. Design UI/UX", "2. Desenvolvimento de sites", "3. Soluções no-code"].map(
              (item) => (
                <span
                  key={item}
                  className="text-sm sm:text-md font-normal text-white"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;