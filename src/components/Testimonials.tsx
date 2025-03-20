"use client";
import Image from "next/image";
import ClientCard from "@/components/ClientCard";
import { motion, AnimatePresence } from "framer-motion";
import anime from "animejs";
import { FaGoogle } from "react-icons/fa"
import { useEffect, useRef, useState, useMemo } from "react";

type Client = {
  name: string;
  surname?: string;
  description: string;
  rating: number;
  project?: string;
  deadline?: string;
};

const Testimonial = () => {
  const clients: Client[] = useMemo(
    () => [
      {
        name: "Mariana",
        surname: "Oliveira",
        description:
          "A BravimTech fez o site da minha loja online e ficou incrível! O design é moderno e super intuitivo, meus clientes adoram. Além disso, o SEO que eles otimizaram já está trazendo mais visitas. Recomendo muito!",
        rating: 5,
        project: "Loja Online",
        deadline: "45 dias",
      },
      {
        name: "Rafael",
        surname: "Santos",
        description:
          "Contratei a BravimTech para criar o site da minha empresa e fiquei impressionado com o resultado. Usaram o WordPress e o custo-benefício foi excelente, além de entregarem tudo no prazo. O design ficou exatamente como eu queria!",
        rating: 4,
        project: "Site Corporativo",
        deadline: "30 dias",
      },
      {
        name: "Juliana",
        surname: "Costa",
        description:
          "O trabalho de SEO da BravimTech foi excepcional! Meu site de consultoria subiu para as primeiras posições no Google em poucos meses. Eles também fizeram um design clean e profissional que reflete minha marca perfeitamente.",
        rating: 5,
        project: "Site de Consultoria + SEO",
        deadline: "60 dias",
      },
      {
        name: "Felipe",
        surname: "Mendes",
        description:
          "A equipe da BravimTech desenvolveu um site para o meu portfólio de fotografia e o resultado foi acima das expectativas. O design é lindo e o site é super rápido. O uso do WordPress facilitou muito para eu gerenciar o conteúdo!",
        rating: 4,
        project: "Portfólio de Fotografia",
        deadline: "25 dias",
      },
      {
        name: "Camila",
        surname: "Pereira",
        description:
          "Fiquei muito satisfeita com o site que a BravimTech criou para o meu blog. O design é incrível e o SEO que eles aplicaram já está atraindo muito mais leitores. O melhor de tudo foi o preço justo usando o WordPress!",
        rating: 5,
        project: "Blog Pessoal",
        deadline: "35 dias",
      },
      {
        name: "André",
        surname: "Lima",
        description:
          "A BravimTech transformou a presença online do meu negócio com um site funcional e um design que chama atenção. A otimização de SEO foi um diferencial, e o custo-benefício do WordPress foi perfeito para o meu orçamento.",
        rating: 4,
        project: "Site de Negócios + SEO",
        deadline: "40 dias",
      },
    ],
    []
  );

  const [index, setIndex] = useState<number>(0);
  const time: number = 3000;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const rectRefs = useRef<(SVGRectElement | null)[]>([]); // Array de referências

  // Inicializa o array com null para cada índice
  useEffect(() => {
    rectRefs.current = Array(clients.length).fill(null);
  }, [clients.length]);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, time);
  };

  const pauseInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startInterval();
    return () => pauseInterval();
  }, []);

  useEffect(() => {
    const rect = rectRefs.current[index];
    if (rect) {
      const path = anime.path(`#motionTPath${index}`);
      anime({
        targets: rect,
        translateX: path("x"),
        translateY: path("y"),
        rotate: path("angle"),
        easing: "easeOutQuad",
        duration: time,
        opacity: [0, 1],
      });
    }
    return () => anime.remove(rectRefs.current.filter(Boolean));
  }, [index]);

  const trailSize = 10;

  return (
    <div className="bg-white py-4 lg:py-12 px-[48px] text-[#18181B] overflow-hidden relative">
      <div className="text-center mb-0 lg:mb-12">
        <div className="flex justify-center my-2">
          <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
            <Image
              src="/images/Blue.svg"
              alt="Logo"
              width={28}
              height={28}
              className="mr-1"
            />
            <h1
              className="text-black text-sm sm:text-md font-medium mr-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Comentario de clientes
            </h1>
          </div>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-0 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          O que os clientes falam?
        </h2>
      </div>

      <div className="relative w-full flex justify-center gap-[25%] min-h-[554px]">
        <div className="relative top-0">
          <ClientCard position="-left-24 top-[-25px]" name={clients[0].name} />
          <ClientCard position="-left-45 top-[235px]" name={clients[1].name} />
          <ClientCard position="-left-24 bottom-[-25px]" name={clients[2].name} />

          <svg
            width="298"
            height="555"
            viewBox="0 0 298 553"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
          >
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H298"
              stroke="#EBEBEB"
              strokeWidth="8"
            />
            <path
              d="M0.5 265.5H297.5V259"
              fill="#EBEBEB"
              stroke="#EBEBEB"
              strokeWidth="8"
            />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H298"
              stroke="#EBEBEB"
              strokeWidth="8"
            />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H298"
              id="motionTPath0"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M0.5 265.5H297.5V259"
              id="motionTPath1"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H298"
              id="motionTPath2"
              style={{ visibility: "hidden" }}
            />
            <rect
              ref={(el) => void (rectRefs.current[0] = el)}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => void (rectRefs.current[1] = el)}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-5"
            />
            <rect
              ref={(el) => void (rectRefs.current[2] = el)}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
          </svg>
        </div>

        <div className="absolute mx-auto left-0 right-0 bottom-0 md:max-w-[500px] lg:max-w-[550px] h-[500px] flex flex-col gap-10 top-18 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex flex-col gap-4"
              onMouseEnter={pauseInterval}
              onMouseLeave={startInterval}
            >
              <motion.div
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg flex items-center gap-6 font-medium"
              >
                <Image
                  src="/images/TestimonalUser.svg"
                  alt="User"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">
                      {clients[index].name} {clients[index].surname || "Silva"}
                    </p>
                    <FaGoogle className="text-gray-600 text-lg" title="Google Review" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Projeto: {clients[index].project || "Desenvolvimento de Site"} | Prazo: {clients[index].deadline || "30 dias"}
                  </p>
                </div>
              </motion.div>

              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg flex flex-col justify-center h-[225px] items-center font-inter font-light text-center">
                <p>{clients[index].description}</p>
                <div className="mt-4 text-yellow-400">
                  {"★".repeat(clients[index].rating)}
                  {"☆".repeat(5 - clients[index].rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="top-0 relative">
          <ClientCard position="-right-24 top-[-25px]" name={clients[3].name} />
          <ClientCard position="-right-45 top-[235px]" name={clients[4].name} />
          <ClientCard position="-right-24 bottom-[-25px]" name={clients[5].name} />

          <svg
            width="298"
            height="553"
            viewBox="0 0 298 553"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-x-[-1] hidden lg:block"
          >
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H298"
              stroke="#EBEBEB"
              strokeWidth="8"
            />
            <path
              d="M0.5 265.5H297.5V259"
              fill="#EBEBEB"
              stroke="#EBEBEB"
              strokeWidth="8"
            />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H298"
              stroke="#EBEBEB"
              strokeWidth="8"
            />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H298"
              id="motionTPath3"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M0.5 265.5H297.5V259"
              id="motionTPath4"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H298"
              id="motionTPath5"
              style={{ visibility: "hidden" }}
            />
            <rect
              ref={(el) => void (rectRefs.current[3] = el)}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => void (rectRefs.current[4] = el)}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-5"
            />
            <rect
              ref={(el) => void (rectRefs.current[5] = el)}
              width={trailSize}
              height="8"
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

export default Testimonial;