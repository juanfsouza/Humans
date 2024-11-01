import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Exportação estática
  images: {
    unoptimized: true, // Para imagens no modo exportação
  },
  trailingSlash: true, // Adiciona uma barra no final das URLs para garantir compatibilidade com roteamento estático
};

export default nextConfig;
