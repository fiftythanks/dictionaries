const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    background: {
      import: './src/background/background.js',
      filename: 'background/background.bundle.js',
    },
    popup: {
      import: './src/popup/popup.js',
      filename: 'popup/popup.bundle.js',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/popup/popup.html',
      filename: 'popup/popup.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/static', to: 'static' }, './src/manifest.json'],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: {
              firefox: '56',
            },
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: ['.js', 'mjs', '...'],
  },
};
