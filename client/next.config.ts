/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-s3-images.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ],
    domains: [
      'via.placeholder.com',
      'pm-s3-images.s3.us-east-2.amazonaws.com'
    ],
  }
};

export default nextConfig;
