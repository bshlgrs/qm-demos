// yarn add glob
const glob = require('glob')
const CopyWebpackPlugin = require('copy-webpack-plugin');

exports.exportPathMap = () => {
  const pathMap = {}
  glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
    const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
    pathMap[path] = { page: path }
  })

  return pathMap;
}

exports.appPrefix = '/next'

exports.webpack = (config, { dev }) => {
  config.module.rules.push(
    {
      test: /\.css$/,
      loader: 'emit-file-loader',
      options: {
          name: 'dist/[path][name].[ext]',
      },
    },
    {
      test: /\.css$/,
      // Simplest way (non-minified)..
      loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=${!dev}&url=false`,
    }
  );

  return config;
}

