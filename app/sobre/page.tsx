"use client";

import { motion, AnimatePresence } from 'framer-motion'; 
import Image from 'next/image';
import { FaRegSmile, FaSeedling, FaHandsHelping, FaGlobe, FaChild, FaGift } from 'react-icons/fa';
import { fadeIn } from '@/variants';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOuts" },
    },
};

const slides = [
    {
      title: "melhore sua qualidade de vida",
      description: "A nossa missão é criar um impacto positivo na vida das pessoa e ajudar a ter uma saude melhor e desenvolvimento sustentável.",
      image: "/mission.jpg", // Altere para o caminho correto da imagem
    },
    {
      title: "Melhore a força dos  seus  ossos e a função das suas  articulações",
      description: "Ajudamos mais de 300 mil de pessoas ao redor do mundo a ter uma vida melhor e saudavel.",
      image: "/missiontwo.jpg", // Altere para o caminho correto da imagem
    },
    {
      title: "Como Atuamos",
      description: "Trabalhamos em conjunto para implementar programas de educação, saúde e segurança alimentar, promovendo o desenvolvimento sustentável.",
      image: "/missionthree.jpg", // Altere para o caminho correto da imagem
    },
];

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSpinner, setShowSpinner] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    // Primeiro temporizador para esconder o spinner após 1,5 segundos
    const spinnerTimer = setTimeout(() => {
      setShowSpinner(false); // Esconde o spinner
    }, 1500);

    // Segundo temporizador para iniciar o efeito de abertura do fundo preto após o spinner desaparecer
    const bgTimer = setTimeout(() => {
      const leftPanel = document.querySelector('.left-panel');
      const rightPanel = document.querySelector('.right-panel');
  
      if (leftPanel && rightPanel) {
        leftPanel.classList.add('fade-out');
        rightPanel.classList.add('fade-out');
      }

      // Terceiro temporizador para remover o fundo preto após o efeito de abertura
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Tempo para a animação de saída (1 segundo)
    }, 1500 + 500); // Tempo de exibição inicial do spinner + tempo de espera para iniciar o efeito de abertura

    return () => {
      clearTimeout(spinnerTimer);
      clearTimeout(bgTimer);
    };
  }, []);

  return (
    <div className="relative">
      {/* Tela de carregamento com o efeito de abertura lateral */}
      {isLoading && (
        <div className="loading-screen">
          <div className="left-panel"></div>
          <div className="right-panel"></div>
          {showSpinner && <span className="loader"></span>}
        </div>
      )}
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
            <h1 className="text-5xl md:text-5xl font-extrabold mb-6 leading-tight">
              O <span className="text-primary transition-colors duration-300">ExCan</span> é um programa de medicina de exercícios de melhores práticas que fornece prescrições de exercícios individualizadas para pessoas com câncer.
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              O ExCan Cancer foi projetado especificamente para atender pessoas que foram diagnosticadas com qualquer tipo de câncer. 
            </p>
            <button className="btn-1 text-black rounded-sm font-bold transition">
                <span>VEJA COMO TRABALHAMOS</span>
                <svg>
                  <rect x="0" y="0" width="100%" height="100%"></rect>
                </svg>
              </button>
            </motion.div>
        </motion.section>

        <div className="relative h-screen md:h-[720px] flex items-center justify-center bg-dark text-white">
          {/* Background Overlay */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/hero-bg.png')` }}
            initial={{ scale: 1.2, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />

          <motion.div 
            className="absolute top-0 left-0"
            animate={{ x: [0, 10, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror", 
              ease: "easeInOut"
            }}
          >
            <Image
              src="/red-dot.png"
              alt="Shape 1"
              width={150}
              height={150}
              className="opacity-100"
              style={{ transform: 'translate(-1vw, 0vh) rotate(0deg)' }}
            />
          </motion.div>

          <motion.div
            className="absolute top-0 left-0"
            animate={{ y: [0, 10, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <Image
              src="/hero-shape2.png"
              alt="Shape 2"
              width={400}
              height={400}
              className="opacity-100"
              style={{ transform: 'translate(-1vw, 50vh) rotate(280deg)' }}
            />
          </motion.div>

            <motion.div
              className="absolute top-0 left-0"
              animate={{ y: [0, 10, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror", 
                ease: "easeInOut"
              }}
            >
              <Image
                src="/all-shape.png"
                alt="Shape 2"
                width={250}
                height={250}
                className="opacity-100"
                style={{ transform: 'translate(85vw, 5vh) rotate(0deg)' }}
              />
            </motion.div>

          {/* Conteúdo Principal */}
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative z-10">
            {/* Seção de Texto (Esquerda) */}
            <div className="md:w-1/2">
              <span className="text-orange-500 font-semibold uppercase tracking-wide">
                Programa de Câncer ExCan
              </span>
              <h1 className="text-5xl font-bold my-4">
              Quem é ExCan para quê? <br /> é para todas as pessoas <span className="text-orange-500">com câncer.</span>
              </h1>
              <p className="text-gray-400 mb-6">
                Pessoas com câncer podem participar do ExCan a qualquer momento antes, durante ou depois do tratamento.
              </p>

              {/* Linha Divisória */}
              <hr className="border-t border-gray-600 mb-6 w-24" />

              <div className="flex items-center space-x-6">
                {/* Botão Principal */}
                <button className="bg-orange-500 text-white py-2 px-6 rounded-full font-bold hover:bg-orange-600 transition">
                  <Link href="/contato" scroll={false}>
                    Saiba Mais
                  </Link>
                </button>

                {/* Informação de Contato */}
                <div className="flex items-center space-x-2">
                    <Image src="/call.png" alt="Success Image" 
                    width={50} 
                    height={50} 
                    className="object-cover rounded-full" 
                  />
                  <div>
                    <p className="text-sm text-gray-400">Ligue todos os dias</p>
                    <p className="text-lg font-semibold">+55 (12) 9324-9264</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de Imagens (Direita) */}
            <div className="flex space-x-4 md:w-1/2 justify-center mt-10 md:mt-0">
              {["/mission.jpg", "/sobreone.jpg", "/sobrethree.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-full overflow-hidden border-4 border-orange-500"
                  style={{ width: "300px", height: "300px" }} // Aumente o tamanho do contêiner
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1.0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={src}
                    alt={`Profile ${index + 1}`}
                    width={300}  // Ajuste o tamanho da imagem para combinar com o contêiner
                    height={300}
                    className="object-cover"
                  />
                  {/* Ícone de Play (Apenas na Imagem Central) */}
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <a href="/video" className="bg-white p-3 rounded-full">
                        <span className="text-orange-500 text-3xl font-bold">▶</span>
                      </a>
                    </div>
                  )}
                  {/* Texto embaixo da imagem */}
                <div className="text-center mt-4">
                  <a href="#video" className="relative group font-bold hover:text-text_primary">
                    Saiba Mais
                    <span className="absolute top-4 left-0 bottom-0 w-0 h-1 bg-text_primary rounded-xl transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

                {/* Seção de Informações */}
        <motion.section  
          className="text-white relative h-screen md:h-[840px] flex items-center justify-center overflow-hidden"
          ref={sectionRef}
          initial="hidden"
          animate="show"
          style={{
            position: 'relative',
            zIndex: 0,
          }}
        >
          <div className="absolute inset-0 transform" 
              style={{
                backgroundImage: `url('/feature-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
              }} 
          />
          {/* Todas as imagens de fundo */}
          <motion.div className="absolute inset-0 w-full h-full">
            <motion.div
              className="absolute top-0 left-0"
              animate={{ x: [0, 10, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            >
              <Image
                src="/about-shape2.png"
                alt="Shape 1"
                width={250}
                height={250}
                className="opacity-100"
                style={{ transform: 'translate(-7vw, 50vh) rotate(90deg)' }}
              />
            </motion.div>
            <motion.div
              className="absolute right-0"
              animate={{ y: [0, 10, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            >
              <Image
                src="/all-shape.png"
                alt="Shape 2"
                width={250}
                height={250}
                className="opacity-100"
                style={{ transform: 'translate(-0vw, 5vh) rotate(40deg)' }}
              />
            </motion.div>

            {/* Seção "O que nos torna diferentes?" */}
            <section className="py-20 bg-gray-50 text-center">
              <motion.div 
                className="container mx-auto max-w-4xl px-6"
                variants={fadeIn('down', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
              >
                <h2 className="text-5xl font-bold mb-6 text-gray-800">O que ExCan envolve?</h2>
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
                    Pessoas com câncer podem se inscrever no ExCan ou podem ser encaminhadas por qualquer membro da equipe de saúde.  Membros de organizações comunitárias (por exemplo, Cancer Council) também podem encaminhar pessoas com câncer para o ExCan.
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
                  <h3 className="text-2xl font-bold mb-4">Centro de Câncer ExCan</h3>
                  <p className="text-lg">
                    Você receberá um telefonema da Equipe de Câncer ExCan que fornecerá informações sobre o serviço e um pacote de informações sobre Câncer EX-MED.  Você será registrado para o próximo período do Câncer EX-MED em um local mais conveniente para você e o fisiologista do exercício do local será notificado sobre a inscrição.
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
                  <h3 className="text-2xl font-bold mb-4">Consulta com seu clínico geral</h3>
                  <p className="text-lg">
                    Você será solicitado a visitar seu clínico geral (GP) para garantir que você esteja bem o suficiente para se exercitar.  O pacote de informações sobre câncer EX-MED conterá uma carta incentivando seu GP a preparar um plano de gerenciamento de doenças crônicas (CDM).
                  </p>
                </motion.div>
              </motion.div>
            </section>
          </motion.div>
        </motion.section>

        <div className="relative h-screen md:h-[750px] bg-dark text-white">
        {/* Background Image with Overlay */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/skill-bg.png')` }}
          initial={{ scale: 1, y: 0 }}
        />

        {/* Heading Section */}
        <motion.div
          className="text-center mb-16 relative z-10 p-4"
          variants={fadeIn('down', 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 mt-4">Quanto custa isso?</h2>
        </motion.div>

        {/* Image & Content Section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6">
          {/* Seção Existente (Lado Esquerdo) */}
          <motion.div
            className="md:w-1/2 text-left relative z-10"
            variants={fadeIn('left', 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
          >
            <section className="text-white py-10 px-6 flex flex-col items-start">
              <h2 className="text-4xl font-bold mb-4">
                Há uma taxa envolvida na participação no ExCan. <br /> Como uma organização sem fins lucrativos, <span className="text-orange-500">Garantimos que a taxa seja a mais baixa possível para ajudar todas as pessoas</span>
              </h2>
              <p className="text-gray-400 mb-6">
              Para mais informações sobre a taxa, opções de pagamento e possíveis subsídios disponíveis, entre em contato com a equipe do ExCan
              </p>

              {/* Barras de Progresso */}
              <div className="mb-4">
                <div className="flex justify-between">
                  <span>Melhore sua força e construa seus músculos</span><span></span>
                </div>
                <div className="h-2 rounded">
                  <div className="bg-orange-500 h-2 rounded" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <span>Aumente seus níveis de energia e reduza a fadiga</span><span></span>
                </div>
                <div className="h-2 bg-gray-600 rounded">
                  <div className="bg-orange-500 h-2 rounded" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <span>Reduzir a gravidade da ansiedade e da depressão </span><span></span>
                </div>
                <div className="h-2 bg-gray-600 rounded">
                  <div className="bg-orange-500 h-2 rounded" style={{ width: '80%' }}></div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Nova Seção (Lado Direito) */}
          <motion.div
            className="md:w-1/2 text-left relative z-10"
            variants={fadeIn('right', 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
          >
            <section className=" text-white py-10 px-6 rounded-lg ">
              <h2 className="text-3xl font-bold mb-4">
                O ExCan Cancer foi projetado especificamente para atender pessoas que foram diagnosticadas com <br /> qualquer tipo de <span className="text-orange-500">câncer.</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Pessoas com câncer podem participar do ExCan Cancer a qualquer momento antes, durante ou depois do tratamento.
              </p>

              {/* Linha Divisória */}
              <hr className="border-t border-gray-600 mb-6" />

              <p className="italic text-gray-300 mb-6">
                Seu programa será ministrado por fisiologistas do exercício da ExCan,<span className="text-orange-500 font-semibold">que têm experiência especializada em câncer</span> e são treinados para <span className="text-orange-500 font-semibold">fornecer um </span> programa individualizado.
              </p>

              {/* Lista de Informações */}
              <ul className="mb-6 space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-500 mr-3">✔️</span>
                  Você vai ter Seguraça.
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-500 mr-3">✔️</span>
                  Saude e bem estar.
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-500 mr-3">✔️</span>
                  Disponibilidade para fazer qualquer coisas.
                </li>
              </ul>

              {/* Botão */}
              <button className="bg-orange-500 text-white py-2 px-6 rounded-full font-bold hover:bg-orange-600 transition">
                <Link href="/contato" scroll={false}>
                    Quero Come
                </Link>
              </button>
            </section>
          </motion.div>
        </div>
      </div>
    
    {/* Seção de Missão e Visão com Slide (com transição automática) */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto max-w-4xl px-6 relative">
        <motion.div 
            className="absolute top-0 left-0"
            animate={{ x: [0, 10, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror", 
              ease: "easeInOut"
            }}
          >
            <Image
              src="/red-dot.png"
              alt="Shape 1"
              width={150}
              height={150}
              className="opacity-100"
              style={{ transform: 'translate(60vw, -20vh) rotate(40deg)' }}
            />
          </motion.div>

          <motion.div
            className="absolute top-0 left-0"
            animate={{ y: [0, 10, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          >
            <Image
              src="/about-shape2.png"
              alt="Shape 2"
              width={200}
              height={200}
              className="opacity-100"
              style={{ transform: 'translate(-25vw, 55vh) rotate(220deg)' }}
            />
          </motion.div>
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
