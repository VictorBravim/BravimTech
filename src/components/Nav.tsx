"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Nav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.5;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { 
        duration: 0.2 
      } 
    },
  };

  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 z-40 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div
        className={`flex items-center justify-between border border-white/10
          backdrop-blur-[4.5px] px-2 py-2 rounded-full w-full max-w-7xl mx-auto transition-all duration-300
          ${isScrolled ? "bg-[rgba(0,34,206,0.5)]" : "bg-[rgba(46,68,158,0.05)]"}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/Logo.png"
            alt="Logotipo da empresa"
            className="h-10 sm:h-12 lg:h-14"
          />
        </div>

        {/* Navegação Desktop */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {["Home", "Soluções", "Benefícios", "Projetos", "Contato"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-white text-sm xl:text-base hover:text-gray-400 transition-colors font-medium"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Botão Desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <button className="bg-white text-black text-sm xl:text-base font-medium px-4 py-4 xl:px-6 xl:py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all">
            Faça um orçamento
          </button>
        </div>

        {/* Menu Hambúrguer Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white mr-2 mt-1">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div
          className={`lg:hidden absolute top-16 left-0 right-0 mx-4 sm:mx-6
            border border-white/10 backdrop-blur-[4.5px] p-6 rounded-2xl flex flex-col items-center space-y-4
            ${isScrolled ? "bg-[rgba(0,34,206,0.5)]" : "bg-[rgba(46,68,158,0.05)]"} transition-all duration-300`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          {["Home", "Soluções", "Benefícios", "Projetos", "Contato"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-white text-base sm:text-lg hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <button
            className="bg-white text-black text-sm sm:text-base font-medium px-6 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Faça um orçamento
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Nav;