import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: './index.jsx',

  mode: 'production',

  module: {
    rules: [
      {
        exclude: /nodeModules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
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
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    fallback: {
      fs: false,
      path: false,
    },
  },
}
