/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    {
      protocol: "",
      hostname: "gnvA8aVm6RIE@ep-damp-darkness-a5pgprje.us-east-2.aws.neon.tech"
    }
    ],
  },
};

export default nextConfig;
