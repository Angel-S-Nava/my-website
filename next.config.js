/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // NO output: 'export'  <-- importante eliminar si quieres funciones serverless
};

module.exports = nextConfig;
