/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 4242,
  },

  devtool: 'inline-source-map',

  entry: './index.jsx',

  mode: 'development',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'],
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  output: {
    filename: 'index.bundle.js',
    path: new URL('./.build', import.meta.url).pathname.replace(/^\/([A-Z]:\/)/, '$1'),
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  // https://styled-components.com/docs/faqs#duplicated-module-in-node_modules
  resolve: {
    alias: {
      'styled-components': new URL('../node_modules/styled-components', import.meta.url).pathname.replace(
        /^\/([A-Z]:\/)/,
        '$1',
      ),
    },
    extensions: ['*', '.js', '.jsx'],
    fallback: {
      fs: false,
      path: false,
    },
  },

  stats: 'minimal',
}
