const CopyPlugin = require('copy-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
  entry: [
    'core-js/stable/promise', // IE 11
  ],
  output: {
    environment: {
      arrowFunction: false, // IE 11
      destructuring: false, // IE 11
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  targets: { browsers: '> 0.25%, not dead, ie 11' },
                  corejs: 3,
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              // https://github.com/gaearon/react-hot-loader#what-about-production
              'react-hot-loader/babel',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'static',
        },
      ],
    }),
    new WebpackAssetsManifest({
      writeToDisk: true,
      output: 'manifest.json',
    }),
  ],
}
