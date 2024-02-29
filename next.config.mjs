/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/index": { page: "/" },
    };
  },
};

export default nextConfig;
