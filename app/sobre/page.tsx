"use client";

import { motion, AnimatePresence } from 'framer-motion'; 
import Image from 'next/image';
import { FaRegSmile, FaSeedling, FaHandsHelping, FaGlobe, FaChild, FaGift } from 'react-icons/fa';
import { fadeIn } from '@/variants';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
};

const slides = [
    {
      title: "Nossa Missão e Visão",
      description: "A nossa missão é criar um impacto positivo na vida das crianças e comunidades ao redor do mundo. Através de programas inovadores e práticas colaborativas, buscamos promover saúde, educação e desenvolvimento sustentável.",
      image: "/mission.jpg", // Altere para o caminho correto da imagem
    },
    {
      title: "Nosso Impacto Global",
      description: "Com mais de 25 anos de serviço, ajudamos mais de 3 milhões de crianças ao redor do mundo a garantir um futuro melhor e sustentável.",
      image: "/missiontwo.jpg", // Altere para o caminho correto da imagem
    },
    {
      title: "Como Atuamos",
      description: "Trabalhamos em conjunto com comunidades locais para implementar programas de educação, saúde e segurança alimentar, promovendo o desenvolvimento sustentável.",
      image: "/missionthree.jpg", // Altere para o caminho correto da imagem
    },
];

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="bg-gray-100">
        <Navbar />
        
        {/* Seção Hero com imagem e texto */}
        <motion.section 
            className="relative h-screen bg-cover bg-center flex items-center justify-center" 
            style={{ backgroundImage: `url('/sobre.jpg')` }}
            initial={{ scale: 1.1, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
            
            <motion.div 
                className="relative z-10 max-w-6xl mx-auto text-left text-white px-6"
                variants={fadeIn('up', 1.0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
            >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Estamos comprometidos em garantir a segurança e o bem-estar das crianças
            </h1>
            <p className="text-lg md:text-2xl mb-8">
                Eu não trabalho, exceto para tirar alguma vantagem disso. Não fique zangado com a dor por não representar o prazer que é garantido.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition">
                VEJA COMO TRABALHAMOS
            </button>
            </motion.div>
        </motion.section>

        {/* Seção "O que nos torna diferentes?" */}
        <section className="py-20 bg-gray-50 text-center">
          <motion.div 
            className="container mx-auto max-w-4xl px-6"
            variants={fadeIn('down', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-800">O que nos torna diferentes?</h2>
            <p className="text-lg text-gray-600 mb-12">
              A melhor forma de garantir o bem-estar é estarmos presentes e ajudarmos as pessoas ao redor. Acreditamos no impacto positivo através de ações contínuas.
            </p>
          </motion.div>

          {/* Blocos com Ícones */}
          <motion.div 
            className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {/* Primeiro Card */}
            <motion.div 
              className="p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <FaRegSmile className="text-6xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Refúgios seguros para apoio</h3>
              <p className="text-lg">
                Oferecemos lugares seguros para o crescimento pessoal e apoio em tempos difíceis.
              </p>
            </motion.div>

            {/* Segundo Card */}
            <motion.div 
              className="p-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <FaSeedling className="text-6xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Bom que cresce</h3>
              <p className="text-lg">
                O crescimento sustentável e as práticas saudáveis são nosso foco para um futuro melhor.
              </p>
            </motion.div>

            {/* Terceiro Card */}
            <motion.div 
              className="p-8 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <FaHandsHelping className="text-6xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Programas personalizados</h3>
              <p className="text-lg">
                Oferecemos programas desenvolvidos para atender as necessidades específicas de cada pessoa.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Seção de Blocos de Ícones com efeito mais moderno */}
        <section className="py-20 text-center bg-gradient-to-l from-orange-500/80 to-red-500/80">
          <motion.div 
            className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {/* Primeiro Ícone */}
            <motion.div 
              className="flex flex-col items-center hover:scale-105 transform transition duration-500"
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <div className="p-6 bg-yellow-100 rounded-full mb-4">
                <FaChild className="text-yellow-500 text-6xl" />
              </div>
              <h3 className="text-xl font-semibold">Mais de 3 milhões de crianças ajudadas</h3>
            </motion.div>

            {/* Segundo Ícone */}
            <motion.div 
              className="flex flex-col items-center hover:scale-105 transform transition duration-500"
              variants={fadeIn('down', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <div className="p-6 bg-yellow-100 rounded-full mb-4">
                <FaGift className="text-yellow-500 text-6xl" />
              </div>
              <h3 className="text-xl font-semibold">Mais de 25 anos de serviço</h3>
            </motion.div>

            {/* Terceiro Ícone */}
            <motion.div 
              className="flex flex-col items-center hover:scale-105 transform transition duration-500"
              variants={fadeIn('down', 1.0)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <div className="p-6 bg-yellow-100 rounded-full mb-4">
                <FaHandsHelping className="text-yellow-500 text-6xl" />
              </div>
              <h3 className="text-xl font-semibold">198 centros comunitários</h3>
            </motion.div>

          {/* Quarto Ícone */}
            <motion.div 
              className="flex flex-col items-center"
              variants={fadeIn('down', 1.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <div className="p-6 bg-yellow-100 rounded-full mb-4">
                <FaGlobe className="text-yellow-500 text-6xl" />
              </div>
              <h3 className="text-xl font-semibold">72 países</h3>
            </motion.div>
          </motion.div>
      </section>

    {/* Seção de Missão e Visão com Slide (com transição automática) */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto max-w-4xl px-6 relative">
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <AnimatePresence>
              <motion.div 
                key={currentSlide} 
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-800">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {slides[currentSlide].description}
                </p>
                <Image 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-sm mx-auto"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Rodapé */}
        <Footer/>
    </div>
  );
};

export default About;
