"use client";
import Image from "next/image";
import ClientCard from "@/components/ClientCards";
import { motion, AnimatePresence } from "framer-motion";
import anime from "animejs";
import { useEffect, useRef, useState, useMemo } from "react";

type Client = {
  name: string;
  description: string;
  rating: number;
};

const Testimonial = () => {

  const clients: Client[] = useMemo(() => [
    { name: "Daniel", description: "...", rating: 5 },
    { name: "Lucas", description: "...", rating: 3 },
    { name: "Gabriel", description: "...", rating: 3 },
    { name: "Igor", description: "...", rating: 3 },
    { name: "Pablo", description: "...", rating: 3 },
    { name: "Victor", description: "...", rating: 3 },
  ], []);


  const [index, setIndex] = useState<number>(0);
  const time: number = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const trailSize = 10;
  const rectRefs = useRef<(SVGRectElement | null)[]>([]);

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

  return (
    <div className="bg-white py-12 lg:py-24 px-[48px] text-[#18181B] overflow-hidden relative">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="flex justify-center my-2">
          <div className="bg-blue-600/10 text-white gap-2 py-2 px-2 flex items-center rounded-full">
            <Image src="/images/Blue.svg" alt="Logo" width={28} height={28} className="mr-1" />
            <h1
              className="text-black text-sm sm:text-md font-medium mr-2"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Comentario de clientes
            </h1>
          </div>
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Oque os clientes falam?
        </h2>
      </div>

      <div className="relative w-full flex justify-center gap-[25%] min-h-[554px]">
        <div className="relative top-0">
          <ClientCard position="-left-30 top-[-25px]" name={clients[0].name} />
          <ClientCard position="-left-30 top-[235px]" name={clients[1].name} />
          <ClientCard position="-left-30 bottom-[-25px]" name={clients[2].name} />

          <svg
            width="278"
            height="555"
            viewBox="0 0 278 553"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
          >
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path d="M0.5 265.5H277.5V259" fill="#EBEBEB" stroke="#EBEBEB" />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              stroke="#EBEBEB"
              strokeWidth="8"
            />

            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              id="motionTPath0"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M0.5 265.5H277.5V259"
              id="motionTPath1"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              id="motionTPath2"
              style={{ visibility: "hidden" }}
            />

            <rect
              ref={(el) => {
                rectRefs.current[0] = el;
              }}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[1] = el;
              }}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-5"
            />
            <rect
              ref={(el) => {
                rectRefs.current[2] = el;
              }}
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
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.9 }}
              transition={{ duration: 0.3, delay: 1, ease: "backInOut" }}
              className="flex flex-col gap-4"
            >
              <motion.div
                initial={{ y: -10 }} // Reduzido de -30 para -10
                animate={{ y: 0 }}
                exit={{ y: -10 }} // Reduzido de -30 para -10
                transition={{ duration: 0.3, delay: 1, ease: "backInOut" }}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg font-medium flex items-center justify-between gap-10"
              >
                <Image
                  src="/images/TestimonalUser.svg"
                  alt="User"
                  width={60}
                  height={60}
                />
                <p className="text-lg font-semibold">{clients[index].name}</p>
                <Image
                  src="/images/TestimonalUser.svg"
                  alt="User"
                  width={60}
                  height={60}
                />
              </motion.div>

              <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_0_20px_rgba(0,100,255,0.05)] hover:shadow-lg flex flex-col justify-start h-[300px] items-center font-inter font-light text-center">
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
          <ClientCard position="-right-30 top-[-25px]" name={clients[3].name} />
          <ClientCard position="-right-30 top-[235px]" name={clients[4].name} />
          <ClientCard position="-right-30 bottom-[-25px]" name={clients[5].name} />

          <svg
            width="278"
            height="553"
            viewBox="0 0 278 553"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-x-[-1] hidden lg:block"
          >
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              stroke="#EBEBEB"
              strokeWidth="7"
            />
            <path d="M0.5 265.5H277.5V259"
              fill="#EBEBEB"
              stroke="#EBEBEB"
            />
            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              stroke="#EBEBEB"
              strokeWidth="8"
            />

            <path
              d="M73 4H141.118C154.925 4 166.118 15.1929 166.118 29V99C166.118 112.807 177.311 124 191.118 124H278"
              id="motionTPath3"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M0.5 265.5H277.5V259"
              id="motionTPath4"
              style={{ visibility: "hidden" }}
            />
            <path
              d="M73 549H141.118C154.925 549 166.118 537.807 166.118 524V425.661C166.118 411.854 177.311 400.661 191.118 400.661H278"
              id="motionTPath5"
              style={{ visibility: "hidden" }}
            />

            <rect
              ref={(el) => {
                rectRefs.current[3] = el;
              }}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-4"
            />
            <rect
              ref={(el) => {
                rectRefs.current[4] = el;
              }}
              width={trailSize}
              height="8"
              fill="#0751D4"
              opacity={0}
              y="-5"
            />
            <rect
              ref={(el) => {
                rectRefs.current[5] = el;
              }}
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