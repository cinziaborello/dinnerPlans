const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['babel-plugin-styled-components', '@babel/transform-runtime'],
          },
        },
      },
    ],
  },

};