import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {}, // 👈 silence warning, keep Turbopack enabled

  webpack: (config) => {
    config.resolve.alias["react-router-dom"] = path.resolve(
      "./src/app/router-compat.jsx"
    );
    return config;
  },
};

export default nextConfig;
