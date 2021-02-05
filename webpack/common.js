const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')

const isDev = process.env.NODE_ENV !== 'production'
const devBabelPlugins = isDev ? ['react-hot-loader/babel'] : []

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
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
            plugins: devBabelPlugins,
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'static'),
        },
      ],
    }),
    new WebpackAssetsManifest({
      writeToDisk: true,
      output: 'manifest.json',
    }),
  ],
}
