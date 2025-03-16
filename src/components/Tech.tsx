"use client";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

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
    // Definições de animação para o contêiner e título
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1, // Atraso entre os filhos
                delayChildren: 0.3, // Atraso inicial antes de começar
            },
        },
    };

    // Definições de animação para cada item (ícones e texto)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // Definições de animação para o título
    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="overflow-hidden bg-white py-10 text-[#18181B] text-center">
            <motion.div
                className="w-full flex flex-nowrap relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // Animação dispara ao entrar na viewport
                viewport={{ once: true, amount: 0.3 }} // Anima uma vez, quando 30% do elemento está visível
            >
                <motion.div
                    className="flex w-max gap-16 lg:gap-20"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...icons, ...icons, ...icons].map(({ icon: Icon, name }, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-4 text-lg"
                            variants={itemVariants}
                        >
                            <div className="bg-blue-600 p-2 lg:p-3 rounded-lg lg:rounded-xl">
                                <Icon size={30} className="text-white" />
                            </div>
                            <span className="text-lg lg:text-2xl font-bold">{name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Tech;