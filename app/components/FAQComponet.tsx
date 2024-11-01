"use client";

import { useState } from 'react';
import { motion } from 'framer-motion'; 
import { fadeIn } from '@/variants'; 
import Image from 'next/image';

const FAQComponent: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  return (    
    <section className="py-14 text-white relative h-screen md:h-[820px] overflow-hidden"
        style={{ 
          backgroundImage: `url('/footer-bg.png')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto max-w-7xl">
          {/* Depoimentos */}
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
          >
            O que nossos clientes estão dizendo
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Primeiro Depoimento */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeIn('up', 1.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <p className="text-gray-700 mb-4">
                "Este programa mudou minha vida. Eu me sinto mais forte e saudável. A orientação personalizada foi incrível!"
              </p>
              <h4 className="font-bold text-xl text-primary">— João Silva</h4>
            </motion.div>

            {/* Segundo Depoimento */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeIn('up', 1.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <p className="text-gray-700 mb-4">
                "A equipe é extremamente atenciosa e me ajudou a incorporar exercícios com segurança durante o meu tratamento."
              </p>
              <h4 className="font-bold text-xl text-primary">— Maria Souza</h4>
            </motion.div>

            {/* Terceiro Depoimento */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={fadeIn('up', 2.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              <p className="text-gray-700 mb-4">
                "Sinto uma grande melhoria na minha qualidade de vida, física e emocional. Recomendo fortemente o programa."
              </p>
              <h4 className="font-bold text-xl text-primary">— Pedro Santos</h4>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <motion.h2 
              className="text-4xl font-bold text-center mb-8"
              variants={fadeIn('up', 1.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
            >
              Perguntas Frequentes
            </motion.h2>

            <div className="space-y-4 max-w-4xl mx-auto">
              {/* FAQ Item 1 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={fadeIn('up', 1.0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                >
                <button
                  className="w-full text-left text-lg font-semibold text-gray-900 hover:text-primary focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)} // Toggle FAQ
                >
                  Por que escolher nosso programa de consultoria de exercícios?
                </button>
                {openFAQ === 1 && (
                  <motion.div
                    className="mt-4 text-gray-700"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="list-disc ml-5">
                      <li><strong>Expertise Especializada:</strong> Nossa equipe de Instrutores de Oncologia de Exercício certificados traz amplo conhecimento e expertise à mesa.</li>
                      <li><strong>Consultas Personalizadas:</strong> Cada consulta é adaptada às necessidades e objetivos individuais do cliente.</li>
                      <li><strong>Abordagem baseada em evidências:</strong> Nosso programa é baseado nas últimas pesquisas e diretrizes clínicas em oncologia do exercício.</li>
                      <li><strong>Cuidados Holísticos:</strong> Entendemos que o exercício não é apenas sobre saúde física, mas também sobre bem-estar emocional e mental.</li>
                      <li><strong>Suporte Contínuo:</strong> Nosso compromisso com você se estende além da consulta.</li>
                    </ul>
                  </motion.div>
                )}
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
                  src="/red-dot.png"
                  alt="Shape 2"
                  width={250}
                  height={250}
                  className="opacity-100"
                  style={{ transform: 'translate(-0vw, 10vh) rotate(10deg)' }}
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
                  src="/ab-shape.png"
                  alt="Shape 2"
                  width={250}
                  height={250}
                  className="opacity-100"
                  style={{ transform: 'translate(-85vw, -50vh) rotate(-15deg)' }}
                />
              </motion.div>

              {/* FAQ Item 2 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={fadeIn('up', 1.0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }} 
              >
                <button
                  className="w-full text-left text-lg font-semibold text-gray-900 hover:text-primary focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                >
                  Benefícios do nosso programa de consultoria de exercícios
                </button>
                {openFAQ === 2 && (
                  <motion.div
                    className="mt-4 text-gray-700"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="list-disc ml-5">
                      <li><strong>Melhoria da função física:</strong> Nosso programa ajuda pacientes com câncer a recuperar força física, flexibilidade e resistência.</li>
                      <li><strong>Gerenciamento de sintomas:</strong> Exercícios podem aliviar sintomas comuns relacionados ao câncer, como fadiga, dor e náusea.</li>
                      <li><strong>Bem-estar emocional aprimorado:</strong> Exercícios reduzem a ansiedade, a depressão e o estresse.</li>
                      <li><strong>Aumento da confiança:</strong> Recuperar o controle sobre o próprio corpo pode aumentar a confiança e a autoestima.</li>
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default FAQComponent;