import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Adiciona a configuração para exportação estática
  images: {
    unoptimized: true, // Isso é necessário para que as imagens funcionem corretamente em uma aplicação estática
  },
};

export default nextConfig;
