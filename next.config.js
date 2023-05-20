/** @type {import('next').NextConfig} */
const nextConfig = { webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
    dns: 'empty',
    net: 'empty'
}

module.exports = nextConfig
