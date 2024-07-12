/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
