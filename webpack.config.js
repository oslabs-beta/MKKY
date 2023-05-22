const path = require('path');
const CloudflareWorkersPlugin = require('@cloudflare/webpack-plugin-cloudflare-workers');

module.exports = {
  entry: './src/index.js', // Replace './src/index.js' with the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace 'dist' with your desired output directory
    filename: 'bundle.js', // Replace 'bundle.js' with your desired output file name
  },
  resolve: {
    plugins: [
      new CloudflareWorkersPlugin(),
    ],
  },
  // Add any other necessary configuration options for loaders, etc.
};

