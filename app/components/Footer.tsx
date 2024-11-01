"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="container mx-auto">
        {/* Seção de Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div className="text-left md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">Nossa newsletter</h3>
            <p className="text-gray-400">Reúna pessoas que se importam com uma causa</p>
          </div>
          <div className="flex items-center">
            <input 
              type="email" 
              placeholder="Seu email..." 
              className="px-4 py-3 text-black rounded-full outline-none focus:ring-2 focus:ring-primary w-64"
            />
            <button className="btn-1 rounded-sm ml-3 px-6 py-3">
              <span>Enviar</span>
              <svg>
                <rect x="0" y="0" width="100%" height="100%"></rect>
              </svg>
            </button>
          </div>
        </div>

        {/* Seção de Links e Informações */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1 - Logo e Contagem */}
          <div className="text-center md:text-left">
            <img src="/logoo.png" alt="Logo" className="w-32 mx-auto md:mx-0 mb-4" />
            <p className="text-gray-400">Total de pessoas que mudaram de vidas</p>
            <p className="text-3xl font-bold text-primary">325,744</p>
            <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              Saber Mais
            </button>
          </div>

          {/* Coluna 2 - Sobre nós */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Sobre nós</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Locais das lojas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Registro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Informações de envio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Política de Devolução</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Nossos Serviços */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Nossos Serviços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Prazo de serviço</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Afiliados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Apoiar</a></li>
            </ul>
          </div>

          {/* Coluna 4 - Nossa Missão */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Nossa Missão</h4>
            <p className="text-gray-400 mb-4">
            Um programa de exercícios de medicina de melhores práticas para pessoas com câncer.
            </p>
            <div className="flex space-x-4">
              {/* Ícones de redes sociais */}
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" /* ícone do Facebook */></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" /* ícone do Twitter */></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" /* ícone do Instagram */></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" /* ícone do YouTube */></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">&copy; 2024 ExCan. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white">Política</a>
            <a href="#" className="text-gray-400 hover:text-white">Sobre nós</a>
            <a href="#" className="text-gray-400 hover:text-white">Apoiar</a>
            <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
            <a href="#" className="text-gray-400 hover:text-white">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
