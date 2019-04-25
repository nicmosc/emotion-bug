const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const WEBPACK_PORT = 4001;


const isProduction = process.env.NODE_ENV === 'production';


module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  stats: 'none',
  entry: './styleguide/index.js',
  resolve: {
    modules: [
      path.resolve(__dirname, './app'),
      'node_modules',
    ],
    extensions: [ '.js', '.jsx', '.css', '.mdx' ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  optimization: {
    namedModules: true,
    minimize: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // template: './app/index.html',
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: WEBPACK_PORT,
    inline: true,
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
    quiet: true,
    stats: true,
    noInfo: false,
    clientLogLevel: 'none',
    overlay: true,
    contentBase: [path.join(__dirname, '/dist'), path.join(__dirname, 'node_modules')],
  },
};
