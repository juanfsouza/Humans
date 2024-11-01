"use client";

import { motion } from 'framer-motion'; 
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { fadeIn } from '../variants'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';
import FAQComponent from './components/FAQComponet';

const Home: React.FC = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);

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
        {/* Hero Section com fundo gradiente e botões */}
        <div className="relative h-screen md:h-[880px] flex items-center justify-center overflow-hidden">
          {/* Efeito de movimento e zoom na imagem de fundo */}
          <motion.div 
            className="absolute inset-0"
            style={{ backgroundImage: `url('/hero-bg.png')` }}
            initial={{ scale: 1.2, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
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
              src="/hero-shape.png"
              alt="Shape 1"
              width={400}
              height={400}
              className="opacity-100"
              style={{ transform: 'translate(-1vw, 0vh) rotate(0deg)' }}
            />
          </motion.div>

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
              src="/hero-shape2.png"
              alt="Shape 2"
              width={400}
              height={400}
              className="opacity-100"
              style={{ transform: 'translate(-1vw, -4vh) rotate(10deg)' }}
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
          </motion.div>
          
          <motion.div 
            variants={fadeIn('left', 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="relative text-center text-white z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sua Jornada Começa Aqui</h1>
            <p className="text-lg md:text-xl mb-8">Melhore sua vida com exercícios personalizados</p>
            <div className="space-x-4">
              <button className="btn-1 rounded-sm">
                <span>Saiba Mais</span>
                <svg>
                  <rect x="0" y="0" width="100%" height="100%"></rect>
                </svg>
              </button>
              <button className="btn-1 rounded-sm">
                <span>Comece Agora</span>
                <svg>
                  <rect x="0" y="0" width="100%" height="100%"></rect>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Seção de Informações */}
        <motion.section  
          className="text-white relative h-screen md:h-[740px] flex items-center justify-center overflow-hidden"
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
                alt="Shape 1"
                width={250}
                height={250}
                className="opacity-100"
                style={{ transform: 'translate(0vw, 40vh) rotate(0deg)' }}
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
                style={{ transform: 'translate(-0vw, 10vh) rotate(40deg)' }}
              />
            </motion.div>
          </motion.div>

          {/* Texto adicional dentro da mesma seção */}
          <motion.div className="mx-auto py-24 px-2 mt-4 text-center max-w-4xl relative z-10" variants={fadeIn("up", 1.5)}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              SUA JORNADA PELO PROGRAMA DE <span className="text-primary transition-colors duration-300">CONSULTA DE EXERCÍCIOS</span>
            </h1>

            <p className="mb-12 text-lg md:text-1xl text-black leading-relaxed">
              Os tratamentos contra o câncer resultam em efeitos colaterais severos que podem impactar negativamente sua qualidade de vida. A boa notícia é que os exercícios podem ajudar a diminuir a gravidade de muitos desses sintomas! Por meio do nosso Programa de Consulta de Exercícios, você receberá um plano de treino personalizado, desenvolvido especificamente para atingir seus pontos fortes, fracos e objetivos durante sua jornada de tratamento do câncer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {/* Item 01 */}
              <div className="group relative flex items-start space-x-4 p-6 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `url('/box-bg.png')` }}></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="flex-shrink-0 text-3xl font-bold text-gray-500 relative z-10 group-hover:text-white">01</div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-white">Programa seguro e eficaz</h3>
                  </div>
                  <div className="mt-2 w-12 h-1 bg-orange-500"></div>
                  <p className="text-base text-gray-600 mt-2 group-hover:text-white">
                    Projetado especificamente para melhorar a qualidade de vida de pessoas com câncer.
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="group relative flex items-start space-x-4 p-6 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `url('/box-bg.png')` }}></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="flex-shrink-0 text-3xl font-bold text-gray-500 relative z-10 group-hover:text-white">02</div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 9 4-18 3 9h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-white">Neutraliza efeitos adversos</h3>
                  </div>
                  <div className="mt-2 w-12 h-1 bg-orange-500"></div>
                  <p className="text-base text-gray-600 mt-2 group-hover:text-white">
                    Combate os efeitos adversos do câncer e do seu tratamento.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="group relative flex items-start space-x-4 p-6 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `url('/box-bg.png')` }}></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="flex-shrink-0 text-3xl font-bold text-gray-500 relative z-10 group-hover:text-white">03</div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-3-3H9m3 3v5" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-white">Exercícios personalizados</h3>
                  </div>
                  <div className="mt-2 w-12 h-1 bg-orange-500"></div>
                  <p className="text-base text-gray-600 mt-2 group-hover:text-white">
                    Realizados com orientação de profissionais de saúde qualificados.
                  </p>
                </div>
              </div>

              {/* Item 04 */}
              <div className="group relative flex items-start space-x-4 p-6 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `url('/box-bg.png')` }}></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="flex-shrink-0 text-3xl font-bold text-gray-500 relative z-10 group-hover:text-white">04</div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7 7 7-7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-white">Melhora o bem-estar</h3>
                  </div>
                  <div className="mt-2 w-12 h-1 bg-orange-500"></div>
                  <p className="text-base text-gray-600 mt-2 group-hover:text-white">
                    Promove uma vida mais saudável durante o tratamento.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
          
        <div className="relative h-screen md:h-[700px] bg-dark text-white">
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
            <h3 className="text-xl text-gray-500 uppercase">Pessoas com câncer</h3>
            <h2 className="text-5xl font-bold mb-4 text-white">
              Por que precisa<span className="text-orange-500"> exercitar?</span>
            </h2>
            <p className="text-lg text-gray-400">Se os efeitos do exercício pudessem ser encapsulados em uma pílula.</p>
          </motion.div>

          {/* Image & Content Section */}
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Left Side - Image with Border and Overlay */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="relative rounded-full border-4 border-orange-500">
                <Image src="/home_page.jpg" alt="Success Image" 
                  width={500} 
                  height={500} 
                  className="object-cover rounded-full" 
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <motion.div
              className="md:w-1/2 text-left relative z-10"
              variants={fadeIn('left', 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-white">
                Mesmo que essa pílula tivesse apenas uma fração dos benefícios positivos, <span className="text-orange-500"> ela seria vista como uma droga milagrosa na luta contra o câncer.</span>
              </h3>
              <p className="text-lg text-gray-400 mb-4">
              Anos de pesquisa científica estabeleceram o exercício como um medicamento inestimável no tratamento do câncer.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <div className="text-orange-500">✔️</div>
                  <p className="text-gray-300">Pessoas com câncer que se exercitam regularmente têm um risco relativo menor.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-orange-500">✔️</div>
                  <p className="text-gray-300">Se Alimentar Bem com Frutas e Legumes tambem ajuda a combater doenças.</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="text-orange-500">✔️</div>
                  <p className="text-gray-300">Beber Agua e Consumir menos açucar.</p>
                </li>
              </ul>

              <button className="mt-6 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold">
                Saber Mais
              </button>
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
                style={{ transform: 'translate(-0vw, 20vh) rotate(10deg)' }}
              />
            </motion.div>
          </div>
        </div>

        <div className="h-screen md:h-[830px] mt-4">
          {/* Efeito de movimento, zoom e rotação na imagem de fundo */}
          <motion.div 
            className="inset-0 "
            style={{ backgroundImage: `url('/blog-bg.png')`, 
              backgroundSize: 'cover',
          }}
            initial={{ scale: 1, y: 0}}
          />
            <motion.div 
              className="text-left md:text-center mb-16 relative z-10 "
              variants={fadeIn('down', 0.8)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.6 }}

            >
            <h3 className="text-xl text-primary uppercase">Testemunhos</h3>
              <h2 className="text-5xl font-bold mb-4 text-gray-800">
                Amado pelos clientes
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Excan é amada por milhares de clientes no mundo todo e tem a confiança de grandes empresas.
              </p>

            </motion.div>

            {/* Main Section: Statistics on the left, Reviews on the right */}
            <motion.div 
              className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-16"
              variants={fadeIn('right', 0.8)}
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.6 }}
            >
              {/* Left Section: Numbered Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { id: 1, title: 'ExCan', description: 'É um programa seguro e eficaz projetado especificamente para pessoas com câncer.', iconColor: 'text-orange-500', image: '/box-bg.png' },
                  { id: 2, title: 'Medicos', description: 'Neutraliza os efeitos adversos do câncer e seu tratamento.', iconColor: 'text-orange-500', image: '/box-bg.png' },
                  { id: 3, title: 'Fisico', description: 'Envolve um programa de medicina de exercícios individualizado.', iconColor: 'text-orange-500', image: '/box-bg.png' },
                  { id: 4, title: 'Saúde', description: 'Melhora o bem-estar físico e mental e proporciona uma melhoria na vida.', iconColor: 'text-orange-500', image: '/box-bg.png' }
                ].map((item) => (
                  <div key={item.id} className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-gray-200 overflow-hidden">
                    {/* Image with Slide-Up Effect */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 ease-out" style={{ backgroundImage: `url(${item.image})` }}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary">
                      <span className="text-2xl font-bold text-white">{item.id}</span>
                    </div>
                    <h3 className="relative z-10 mt-4 text-xl font-semibold text-gray-800 group-hover:text-white">{item.title}</h3>
                      <div className="mt-2 w-12 h-1 bg-orange-500"></div>
                    <p className="relative z-10 text-gray-600 mt-2 text-center group-hover:text-white">{item.description}</p>
                    
                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Right Section: Content and Button */}
              <div 
                className="flex flex-col justify-center space-y-4 p-6"
              >
                <h2 className="text-4xl font-bold text-gray-900">
                  Como fazer Eu me envolvo? <span className="text-orange-500">Há várias maneiras de se envolver com o ExCan Cancer</span>
                </h2>
                <p className="text-gray-600">
                  Matricular <span className="text-orange-500 font-semibold">ExCan</span> Interessado em participar do EX-MED Cancer? Registre seu interesse para receber uma ligação da equipe do EX-MED Cancer.
                </p>
                <p className="text-gray-500">
                  Profissionais de saúde de todas as origens são incentivados a encaminhar seus pacientes.
                  Descubra as evidências científicas por trás do programa EX-MED Cancer por meio de nossos programas educacionais. Esses programas são personalizados para pessoas com câncer, a equipe de tratamento do câncer, clínicos gerais e especialistas em exercícios. 
                  Ajude mais pessoas com câncer a acessar o programa EX-MED Cancer e perceber os benefícios da medicina do exercício fazendo uma doação.
                </p>
                <button className="btn-1 rounded-sm self-start mt-4 px-6 py-3 hover:bg-primary">
                  <span>Matricular</span>
                  <svg>
                    <rect x="0" y="0" width="100%" height="100%"></rect>
                  </svg>
                </button>
              </div>
              <div className="text-center mt-12">
                <p className="text-gray-500">
                  Um programa de exercícios de medicina de melhores práticas para pessoas com câncer
                </p>
              </div>
            </motion.div>
          </div>

        {/* Seção de Depoimentos e FAQ */}
        <FAQComponent />
        {/* Footer */}
        <Footer />
        <ScrollToTop />
    </div>
  );
};

export default Home;
