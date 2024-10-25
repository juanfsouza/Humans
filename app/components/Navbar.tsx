"use client";

import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-black p-4">
      <div className="flex justify-between items-center">
        <li className="font-bold ml-2 list-none">ExCan</li>

        {/* Menu para desktop */}
        <ul className="hidden md:flex space-x-10 mr-5">
          <li>
            <a href="#home" className="relative group font-bold hover:text-text_primary">
              Home
              <span className="absolute top-4 left-0 bottom-0 w-0 h-1 bg-primary rounded-xl transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#about" className="relative group font-bold hover:text-text_primary">
              Sobre
              <span className="absolute top-4 left-0 bottom-0 w-0 h-1 bg-primary rounded-xl transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative group font-bold hover:text-text_primary">
              Contato
              <span className="absolute top-4 left-0 bottom-0 w-0 h-1 bg-primary rounded-xl transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Ícone do menu de hambúrguer para dispositivos móveis */}
        <div className="md:hidden mr-5">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu dropdown para dispositivos móveis */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4">
          <li><a href="#home" className="hover:text-gray-200 font-bold">Home</a></li>
          <li><a href="#about" className="hover:text-gray-200 font-bold">Sobre</a></li>
          <li><a href="#contact" className="hover:text-gray-200 font-bold">Contato</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
