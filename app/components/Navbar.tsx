"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Define o limite para o scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 text-white ${
        isScrolled ? "bg-gray-900/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-center items-center gap-x-80">
        {/* Logo */}
        <div className="flex-shrink-0 mr-8">
          <li className="font-bold list-none">
            <Image
              src="/logoo.png"
              alt="Logo da Empresa"
              width={120}
              height={120}
            />
          </li>
        </div>

        {/* Menu para desktop */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <a href="/" className="relative group font-bold hover:text-text_primary">
              Home
              <span className="absolute top-4 left-0 bottom-0 w-0 h-1 bg-text_primary rounded-xl transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="/sobre" className="relative group font-bold hover:text-text_primary">
              Sobre
              <span className="absolute top-4 left-0 bottom-0 w-0 h-1 bg-text_primary rounded-xl transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="/contato" className="relative group font-bold hover:text-text_primary">
              Contato
              <span className="absolute top-4 left-0 bottom-0 w-0 h-1 bg-text_primary rounded-xl transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Ícone do menu de hambúrguer para dispositivos móveis */}
        <div className="md:hidden ml-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu dropdown para dispositivos móveis */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          <li><a href="/" className="hover:text-gray-200 font-bold">Home</a></li>
          <li><a href="/sobre" className="hover:text-gray-200 font-bold">Sobre</a></li>
          <li><a href="/contato" className="hover:text-gray-200 font-bold">Contato</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
