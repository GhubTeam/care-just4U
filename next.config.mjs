/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static site generation
  basePath: process.env.NODE_ENV === "production" ? "/care-just4U" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/care-just4U/" : "",
};

export default nextConfig;
