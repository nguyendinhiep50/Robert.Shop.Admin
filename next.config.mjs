/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack(config) {
    config.ignoreWarnings = [
      {
        message: /Critical dependency:/,
      },
    ];

    return config;
  },
};

export default nextConfig;
