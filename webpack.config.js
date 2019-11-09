const HtmlWebPackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpackMerge = require('webpack-merge');

const baseConfig = {
  output: {
    path: path.resolve('./out'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  resolve: {
    modules: ['node_modules', path.resolve('./')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader",// compiles Sass to CSS, using Node Sass by default
          "postcss-loader"
        ]
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new DuplicatePackageCheckerPlugin(),
  ],
};

const devConfig = {
  mode: 'development',
  devServer: {
    port: 666,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
};

const prodConfig = {
  mode: 'production',
  devtool: 'hidden-source-map',
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

module.exports = (env) => {
  const mode = env === 'production' ? 'production' : 'development';
  const additionalConfig = mode === 'production' ? prodConfig : devConfig;
  const config = webpackMerge(baseConfig, additionalConfig);

  if (process.env.ANALYZER) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
