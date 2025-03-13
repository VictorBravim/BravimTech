"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Check, Mail, ArrowRight } from "lucide-react";

const Advantages = () => {
  const cardTexts = [
    {
      title: "Desenvolvimento de Sites de Alta Performance",
      description:
        "Utilizamos as tecnologias mais recentes para construir sites que são rápidos, seguros e escaláveis. Focamos em otimizar o tempo de carregamento e a performance geral, garantindo uma experiência fluida para seus visitantes.",
      advantages: [
        "Performance otimizada e carregamento rápido",
        "Experiência do usuário fluida, sem gargalos",
        "Integração com ferramentas de análise para melhorar continuamente os resultados",
      ],
    },
    {
      title: "SEO e Otimização para Motores de Busca",
      description:
        "Nossos sites são desenvolvidos com foco em SEO, garantindo melhor ranqueamento no Google e mais visibilidade para seu negócio.",
      advantages: [
        "Estratégias de SEO On-page e Off-page",
        "Sites otimizados para Google Core Web Vitals",
        "Melhoria na taxa de conversão e aquisição de clientes",
      ],
    },
    {
      title: "Design Responsivo e Personalizado",
      description:
        "Criamos interfaces modernas e responsivas, garantindo um design atrativo e funcional para todos os dispositivos.",
      advantages: [
        "Layouts adaptáveis para qualquer tela",
        "Experiência do usuário aprimorada",
        "Design alinhado à identidade visual da sua marca",
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const time = 15000;
  const trailSize = 10;
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardTexts.length);
    }, time);

    return () => clearInterval(interval);
  }, [cardTexts.length, time]);

  useEffect(() => {
    if (rectRefs.current.every((ref) => ref)) {
      rectRefs.current.forEach((rect, i) => {
        const path = anime.path(`#motionPath${i}`);
        anime({
          targets: rect,
          translateX: path("x"),
          translateY: path("y"),
          rotate: path("angle"),
          easing: "linear",
          duration: 3000,
          loop: true,
          delay: i * 200,
          opacity: [
            { value: 1, duration: 2800 },
            { value: 0, duration: 100 },
          ],
        });
      });
    }

    return () => {
      anime.remove(rectRefs.current.filter(Boolean));
    };
  }, []);

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cardTexts.length);
  };

  return (
    <div className="bg-white h-full pb-12 lg:pb-40 pt-12 text-center relative">
      <div className="flex justify-center my-4">
        <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 pr-4 flex items-center rounded-full">
          <Image src="/images/Blue.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-[#3D3D3D] text-md lg:text-lg font-semibold">
            Vantagens
          </h1>
        </div>
      </div>
      <h2 className="text-[#18181B] text-3xl lg:text-5xl font-semibold lg:leading-[3rem] tracking-tight mb-24"
        style={{ fontFamily: "var(--font-archivo)" }}>
        Descubra as vantagens <br />
        oferecidas na{" "}
        <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-archivo)" }}>
          BravimTech
        </span>
      </h2>

      <div className="relative flex items-center justify-center w-full min-h-[500px]">
        <div className="hidden md:block absolute left-0 md:top-60 lg:top-1/2 transform -translate-y-1/2">
          <svg
            height="710"
            viewBox="0 0 435 710"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path
              d="M0.5 353.5V359.5H434.5V353.5H0.5Z"
              fill="#EBEBEB"
              stroke="#EBEBEB"
            />
            <path
              id="motionPath0"
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              style={{ visibility: "hidden" }}
            />
            <path
              id="motionPath1"
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              style={{ visibility: "hidden" }}
            />
            <path
              id="motionPath2"
              d="M0.5 356.5H434.5"
              style={{ visibility: "hidden" }}
            />
            <rect
              ref={(el) => {
                rectRefs.current[0] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[1] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[2] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
          </svg>
        </div>

        <div className="bg-white shadow-lg rounded-2xl md:rounded-4xl p-4 md:p-6 lg:p-12 relative border border-gray-200 w-full max-w-[90%] md:max-w-[700px] lg:max-w-[1050px] h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col justify-between z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col justify-start"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-2 md:mb-4">
                <Image
                  src="/images/Blue.svg"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
                <h2 className="text-blue-700 text-lg md:text-2xl lg:text-4xl font-semibold text-left">
                  {cardTexts[index].title}
                </h2>
              </div>
              <p className="text-gray-600 mt-2 md:mt-4 text-left text-sm md:text-base lg:text-xl">
                {cardTexts[index].description}
              </p>
              <ul className="mt-4 md:mt-6 text-left text-sm md:text-base lg:text-xl text-gray-700 space-y-2 md:space-y-4">
                {cardTexts[index].advantages.map((adv, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-4">
                    <Check size={16} className="text-blue-600 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    {adv}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6 gap-4">
            <button className="bg-gradient-to-b from-[#0024B4] to-[#0024B4] text-white py-2 md:py-3 lg:py-4 px-4 md:px-6 rounded-lg font-semibold transition cursor-pointer w-full md:w-auto text-sm md:text-base lg:text-lg">
              Faça seu orçamento online
            </button>
            <div className="flex gap-2 md:gap-3">
              <button className="bg-gradient-to-b from-[#FFFFFF] to-[#CDDBFF] p-2 md:p-3 lg:p-4 rounded-lg shadow-md cursor-pointer">
                <Mail size={16} className="text-blue-600 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={nextCard}
                className="bg-gradient-to-b from-[#0751D4] to-[#0024B4] p-2 md:p-3 lg:p-4 rounded-lg shadow-md cursor-pointer"
              >
                <ArrowRight size={16} className="text-white md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-0 md:top-60 lg:top-1/2 transform -translate-y-1/2 scale-[-1]">
          <svg
            height="710"
            viewBox="0 0 435 710"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path
              d="M0.5 353.5V359.5H434.5V353.5H0.5Z"
              fill="#EBEBEB"
              stroke="#EBEBEB"
            />
            <path
              id="motionPath3"
              d="M0 706H172.591C186.399 706 197.592 694.807 197.592 681V565C197.592 551.193 208.784 540 222.592 540H435"
              style={{ visibility: "hidden" }}
            />
            <path
              id="motionPath4"
              d="M0 4H172.591C186.399 4 197.592 15.1929 197.592 29V145C197.592 158.807 208.784 170 222.592 170H435"
              style={{ visibility: "hidden" }}
            />
            <path
              id="motionPath5"
              d="M0.5 356.5H434.5"
              style={{ visibility: "hidden" }}
            />
            <rect
              ref={(el) => {
                rectRefs.current[3] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[4] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[5] = el;
              }}
              width={trailSize}
              height="7"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Advantages;