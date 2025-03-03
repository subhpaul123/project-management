/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-s3-images1234.s3.eu-north-1.amazonaws.com/public",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
