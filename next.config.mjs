/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["alinejdearaujo.vercel.app", "*.alinejdearaujo.vercel.app"],
    },
    serverComponentsExternalPackages: ["@prisma/client"],
  },
};

export default nextConfig;
