/** @type {import('next').NextConfig} */
// const { CloudflareWorkerPlugin } = require('cloudflare-worker-webpack-plugin')

const nextConfig = {
    // plugins: [
    //   new CloudflareWorkerPlugin({
    //     // Configuration options for the Cloudflare Workers plugin
    //     // Specify your Cloudflare Workers related configuration here
    //   }),
    // ],
    // reactStrictMode: true,
    // swcMinify: true,
    // webpack: (webpackConfig, { webpack }) => {
    //   webpackConfig.experiments = { ...webpackConfig.experiments, topLevelAwait: true };
    //   webpackConfig.externals["node:fs"] = "commonjs node:fs";
  
    //   webpackConfig.plugins.push(
    //     // Remove node: from import specifiers, because Next.js does not yet support node: scheme
    //     // https://github.com/vercel/next.js/issues/28774
    //     new webpack.NormalModuleReplacementPlugin(
    //       /^node:/,
    //       (resource) => {
    //         resource.request = resource.request.replace(/^node:/, '');
    //       },
    //     ),
    //   );
  
    //   return webpackConfig;
    // }
}

module.exports = nextConfig
