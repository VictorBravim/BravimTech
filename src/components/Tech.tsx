'use client'
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
    return (
        <div className="overflow-hidden bg-white py-10 text-[#18181B] text-center">
            <h2 className="hidden lg:flex justify-center text-5xl font-bold mb-16">
                <span className="bg-gradient-to-b from-[#0071DA] to-[#0024B4] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-archivo)" }}>Tecnologias</span> que utilizamos
            </h2>
            <div className="w-full flex flex-nowrap relative">
                <motion.div
                    className="flex w-max gap-16 lg:gap-20"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...icons, ...icons, ...icons].map(({ icon: Icon, name }, index) => (
                        <div key={index} className="flex items-center gap-4 text-lg">
                            <div className="bg-blue-600 p-2 lg:p-3 rounded-lg lg:rounded-xl">
                                <Icon size={30} className="text-white" />
                            </div>
                            <span className="text-lg lg:text-2xl font-bold">{name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Tech;