/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lbmjovoszchvxjfxxwus.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
    qualities: [75, 80, 100],
  },
};

export default nextConfig;
