const fetch = require('isomorphic-fetch');
const path = require('path');
const glob = require('glob');

module.exports = {
  async exportPathMap () {
    return {
      '/': { page: '/' },
      // 'about':{page:'/about'}
    }
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        use: ['babel-loader', 'raw-loader', 'less-loader']
      }
    );
    return config;
  },
};
