"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importando motion

const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/background.webm";
    video.onloadeddata = () => {
      setVideoLoaded(true);
    };
  }, []);

  // Definições de animação para os elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre os filhos
        delayChildren: 0.3, // Atraso inicial antes de começar
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16">
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

      {/* Vídeo de fundo sem controles */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/background.webm" type="video/webm" />
      </video>

      {/* Conteúdo centralizado com animação */}
      <motion.div
        className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-4 lg:max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-[45px] sm:text-[40px] md:text-[65px] lg:text-[115px] font-archivo font-normal leading-8 sm:leading-10 md:leading-12 lg:leading-25 tracking-tight mb-4 sm:mb-4 md:mb-6 lg:mb-4"
          style={{ fontFamily: "var(--font-archivo)" }}
          variants={itemVariants}
        >
          Construindo o seu <br />
          futuro com rapidez
        </motion.h1>
        <motion.p
          className="text-white/90 text-xs sm:text-sm md:text-lg lg:text-xl font-roboto max-w-md sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-4 md:mb-8 lg:mb-12"
          variants={itemVariants}
        >
          Estratégia, performance e tecnologia. Combinamos tudo isso de ponta a ponta para
          criar soluções que vão impulsionar o seu sucesso.
        </motion.p>

        {/* Card com 3 itens */}
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <div className="border border-black/5 bg-black/20 backdrop-blur-[3.5px] rounded-full px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2 md:py-3 flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
            {["1. Design UI/UX", "2. Desenvolvimento de sites", "3. Soluções no-code"].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm md:text-md lg:text-md font-normal text-white"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;