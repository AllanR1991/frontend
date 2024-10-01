/** @type {import('next').NextConfig} */
const nextConfig = {
    // configuração para permitir acessar as imagens externas, necessario para aplicação e ligar para funcionar
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            }
        ]
    }
};

export default nextConfig;
