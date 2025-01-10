/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/care-just4U" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/care-just4U/" : "",
  images: {
    loader: "imgix", // Use imgix as a loader for image optimization
    path: process.env.NODE_ENV === "production" ? "/care-just4U/" : "", // Set the correct path for production
  },
};

export default nextConfig;
