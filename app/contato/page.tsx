"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-gray-200 py-32">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Seção do Mapa e Formulário */}
                    <div>
                    {/* Mapa */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4">Nossa localização</h2>
                        <div className="w-full h-72 bg-gray-200 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.4723291062384!2d-49.277485!3d-23.801989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c22c79c8f8a35f%3A0x1475e4e5ab8268aa!2sReg%C3%AA!5e0!3m2!1sen!2sbr!4v1641510341546!5m2!1sen!2sbr"
                            width="100%"
                            height="100%"
                            allowFullScreen={false}
                            loading="lazy"
                            title="Mapa da Localização"
                        ></iframe>
                        </div>
                    </div>

                    {/* Centro de Suporte */}
                    <h2 className="text-3xl font-bold mb-6">Centro de Suporte ao Cliente</h2>
                    <p className="mb-8 text-gray-600">
                        Se você está procurando respostas ou precisa de ajuda, entre em contato conosco! Estamos aqui para ajudar a resolver seus problemas rapidamente.
                    </p>

                    {/* Formulário de Contato */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Deixe-nos uma mensagem</h2>
                        <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Seu nome" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                            <input type="email" placeholder="Seu e-mail" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                        </div>
                        <input type="text" placeholder="Assunto" className="w-full p-4 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                        <textarea placeholder="Mensagem" className="w-full p-4 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500" rows={5}></textarea>
                        <button className="mt-6 w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300">
                            ENVIAR
                        </button>
                        </form>
                    </div>
                    </div>

                    {/* Seção de Informações de Contato */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Conecte-se Conosco</h2>

                    <div className="mb-6">
                        <button className="bg-yellow-500 text-black w-full py-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300">
                        ENVIE-NOS UM E-MAIL
                        </button>
                    </div>

                    <div className="mb-6">
                        <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 w-full py-3 rounded-lg font-bold hover:bg-yellow-500 hover:text-white transition duration-300">
                        CONVERSE CONOSCO
                        </button>
                    </div>

                    {/* Informações de Contato */}
                    <div className="text-gray-600 space-y-4">
                        <div className="flex items-center space-x-4">
                        <FaPhoneAlt className="text-yellow-500" />
                        <span>011-666-8888</span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-yellow-500" />
                        <span>contact_01@nomondo.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-yellow-500" />
                        <span>666-80 Nice Way, NY 10001, EUA</span>
                        </div>
                    </div>

                    {/* Ícones de Redes Sociais */}
                    <div className="flex space-x-4 mt-8">
                        <a href="#" className="text-gray-600 hover:text-yellow-500 transition"><FaFacebookF size={24}/></a>
                        <a href="#" className="text-gray-600 hover:text-yellow-500 transition"><FaTwitter size={24}/></a>
                        <a href="#" className="text-gray-600 hover:text-yellow-500 transition"><FaLinkedinIn size={24}/></a>
                    </div>

                    {/* Horário de Funcionamento */}
                    <div className="mt-8">
                        <h3 className="text-lg font-bold mb-2">Horário de Funcionamento</h3>
                        <p className="text-gray-600">9:00 am – 8:00 pm EST</p>
                        <p className="text-gray-600">de segunda a sexta-feira</p>
                        <p className="text-gray-600">Fechado aos sábados e domingos</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Contact;
