"use client";

import { motion } from 'framer-motion'; 
import Image from 'next/image';
import { useRef } from 'react';
import { fadeIn } from '../variants'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQComponent from './components/FAQComponet';

const Home: React.FC = () => {
  const sectionRef = useRef(null);

  return (
    <div>
      <Navbar />
      {/* Hero Section com fundo gradiente e botões */}
      <div className="relative h-screen md:h-[600px] bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden">
        {/* Efeito de movimento e zoom na imagem de fundo */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/home_page.jpg')` }}
          initial={{ scale: 1.2, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sua Jornada Começa Aqui</h1>
          <p className="text-lg md:text-xl mb-8">Melhore sua vida com exercícios personalizados</p>
          <div className="space-x-4">
            <button className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition">
              Saiba Mais
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full text-white font-bold hover:bg-white hover:text-primary transition">
              Comece Agora
            </button>
          </div>
        </div>
      </div>

      {/* Seção de Informações */}
      <motion.section 
        className="py-24 bg-sky-950 text-white relative overflow-hidden"
        ref={sectionRef}
        initial="hidden"
        animate="show"
      >
        {/* Todas as imagens de fundo */}
        <motion.div className="absolute inset-0 w-full h-full">
          <motion.div
            className="absolute top-40 left-0"
            variants={fadeIn('right', 2.5)}
          >
            <Image
              src="/shape1.png"
              alt="Shape 1"
              width={600}
              height={600}
              className="opacity-90"
              style={{ transform: 'translate(-10vw, 60vh) rotate(15deg)' }}
            />
          </motion.div>
          <motion.div
            className="absolute right-0"
            variants={fadeIn('left', 2.5)}
          >
            <Image
              src="/shape2.png"
              alt="Shape 2"
              width={600}
              height={600}
              className="opacity-90"
              style={{ transform: 'translate(-0vw, 0vh) rotate(0deg)' }}
            />
          </motion.div>
          <motion.div
            className="absolute left-0"
            variants={fadeIn('right', 2.5)}
          >
            <Image
              src="/shape3.png"
              alt="Shape 3"
              width={350}
              height={200}
              className="opacity-90"
              style={{ transform: 'translate(-10vw, -10vh) rotate(45deg)' }}
            />
          </motion.div>
        </motion.div>

        {/* Conteúdo */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10">
          {/* Primeiro Card */}
          <motion.div 
            className="relative p-6 rounded-lg overflow-hidden bg-cover bg-center shadow-xl" 
            variants={fadeIn('up', 1.4)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-sky-900/90 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-center">Consultoria <span className="hover:text-yellow-500 rounded-xl px-1">Personalizada</span></h3>
              <p className="text-center">Receba planos de exercícios adaptados à sua jornada.</p>
            </div>
          </motion.div>     

          {/* Segundo Card */}
          <motion.div 
            className="relative p-6 rounded-lg overflow-hidden bg-cover bg-center shadow-xl" 
            variants={fadeIn('up', 1.8)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-sky-900/90 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-center">Monitoramento de<span className="hover:text-green-500 rounded-xl px-1">Saúde</span></h3>
              <p className="text-center">Acompanhe seu progresso com nossos especialistas.</p>
            </div>
          </motion.div>

          {/* Terceiro Card */}
          <motion.div 
            className="relative p-6 rounded-lg overflow-hidden bg-cover bg-center shadow-xl" 
            variants={fadeIn('up', 2.2)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-sky-900/90 z-0"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 text-center">Suporte<span className="hover:text-yellow-500 rounded-xl px-1">Completo</span></h3>
              <p className="text-center">Estamos com você em cada etapa da sua recuperação.</p>
            </div>
          </motion.div>
        </div>

        {/* Texto adicional dentro da mesma seção */}
        <motion.div 
          className="mx-auto py-16 px-6 text-center max-w-4xl relative z-10"
          variants={fadeIn('up', 1.5)}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            SUA JORNADA PELO PROGRAMA DE <span className="text-white-500 rounded-xl px-1 hover:bg-white hover:text-yellow-500 transition-colors duration-300">CONSULTA DE EXERCÍCIOS</span>
          </h1>
          
          <p className="mb-6 text-lg md:text-1xl text-white leading-relaxed">
            Os tratamentos contra o câncer resultam em efeitos colaterais severos que podem impactar negativamente sua qualidade de vida. A boa notícia é que os exercícios podem ajudar a diminuir a gravidade de muitos desses sintomas!
            Por meio do nosso Programa de Consulta de Exercícios, você receberá um plano de treino personalizado, desenvolvido especificamente para atingir seus pontos fortes, fracos e objetivos durante sua jornada de tratamento do câncer.
          </p>

          <p className="mb-6 text-lg md:text-1xl text-white leading-relaxed">
            O funcionamento é simples! Primeiro, você se encontrará com um Instrutor Certificado de Oncologia de Exercícios, pessoalmente ou virtualmente. Nesta reunião inicial, seu Instrutor o guiará por uma avaliação de condicionamento físico e o ajudará a preencher pesquisas de pré-participação.
            Em seguida, seu instrutor de oncologia de exercícios desenvolverá um programa de exercícios personalizado de 12 semanas só para você, utilizando vídeos de exercícios da nossa biblioteca Maple Tree On-Demand.
          </p>
        </motion.div>
      </motion.section>

      <div className="py-24 bg-gray-50">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn('down', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <h3 className="text-xl text-gray-500 uppercase">Vamos mudar o</h3>
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            O que nos torna <span className="text-green-500">diferentes?</span>
          </h2>
        </motion.div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primeiro Card */}
          <motion.div
            className="p-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              {/* Ícone */}
              <div className="bg-yellow-100 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h4l3 9 4-18 3 9h4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Doar</h3>
            <p className="text-gray-600">
              Doe seu aniversário, organize um evento ou faça algo louco! Seus amigos e familiares se reunirão para ajudar você a salvar vidas jovens.
            </p>
          </motion.div>

          {/* Segundo Card */}
          <motion.div
            className="p-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            variants={fadeIn('up', 1.0)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              {/* Ícone */}
              <div className="bg-yellow-100 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Apoie-nos</h3>
            <p className="text-gray-600">
              Doe seu aniversário, organize um evento ou faça algo louco! Seus amigos e familiares se reunirão para ajudar você a salvar vidas jovens.
            </p>
          </motion.div>

          {/* Terceiro Card */}
          <motion.div
            className="p-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            variants={fadeIn('up', 1.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              {/* Ícone */}
              <div className="bg-yellow-100 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12v1a4 4 0 0 1-8 0v-1m4-7a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Torne-se um angariador de fundos</h3>
            <p className="text-gray-600">
              Doe seu aniversário, organize um evento ou faça algo louco! Seus amigos e familiares se reunirão para ajudar você a salvar vidas jovens.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Junte-se a nós na luta <span className="text-red-500">contra a fome</span>.
          </p>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <motion.div 
          className="text-left md:text-center mb-16"
          variants={fadeIn('down', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <h3 className="text-xl text-gray-500 uppercase">Testemunhos</h3>
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Amado pelos clientes
          </h2>
          <p className="text-lg text-gray-600 mb-6 relative z-10">
            A Excan é amada por milhares de clientes no mundo todo e tem a confiança de grandes empresas.
          </p>
        </motion.div>

        {/* Main Section: Statistics on the left, Reviews on the right */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section: Statistics */}
          <div className="flex flex-col space-y-8 justify-center">
            <div className="text-center bg-white p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <img src="/mao-com-coracao.png" alt="People" className="h-16 w-16" />
              </div>
              <h3 className="text-3xl font-bold">1.5M+</h3>
              <p className="text-gray-600">Prevenção da crueldade contra as pessoas</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <img src="/avaliacao.png" alt="Reviews" className="h-16 w-16" />
              </div>
              <h3 className="text-3xl font-bold">4.9/5</h3>
              <p className="text-gray-600">Trustscore em 1.525 avaliações</p>
            </div>
            <div className="text-center">
              <button className="bg-primary text-white py-3 px-6 rounded-full font-bold hover:bg-text_primary">
                Ver todos os comentários
              </button>
            </div>
          </div>

          {/* Right Section: Reviews */}
          <div 
            className="grid grid-cols-1 gap-8 relative"
          >
            <motion.div
              className="absolute inset-0"
              style={{ 
              backgroundImage: `url('/decor.png')`, 
              width: '600px', 
              height: '600px',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',}}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear"
              }}
            >
        {/* Content that rotates infinitely */}
        </motion.div>
            <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
              <div className="flex items-center mb-4">
                <img src="/customer1.png" alt="Customer 1" className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-lg font-bold">John Doe</h4>
                  <p className="text-gray-500">Design</p>
                </div>
              </div>
              <p className="text-gray-600">
                “Este grupo de voluntários dedicados e esforçados tem todo o meu respeito. Se ao menos vocês pudessem ver os bebês confortados por seus esforços. Abençoe todos eles!”
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg relative z-10 ml-10">
              <div className="flex items-center mb-4">
                <img src="/customer2.png" alt="Customer 2" className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-lg font-bold">Jane Smith</h4>
                  <p className="text-gray-500">Developer</p>
                </div>
              </div>
              <p className="text-gray-600">
                “Adorei trabalhar com a Excan. Eles são incríveis no que fazem. Eles sabem como capturar a verdade e entregá-la de uma forma linda.”
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg relative z-10">
              <div className="flex items-center mb-4">
                <img src="/customer3.png" alt="Customer 3" className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h4 className="text-lg font-bold">Sarah Lee</h4>
                  <p className="text-gray-500">Marketing</p>
                </div>
              </div>
              <p className="text-gray-600">
                “Para minhas oportunidades de vendas, a Excan me permitiu conectar e reconectar em um nível pessoal. Esses relacionamentos definitivamente me ajudaram.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Depoimentos e FAQ */}
      <FAQComponent />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
