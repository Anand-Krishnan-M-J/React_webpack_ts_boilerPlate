/* eslint-disable import/no-default-export */

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import merge from 'webpack-merge';

import { common } from './webpack.common';

const config = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          path.join(process.cwd(), 'dist/**/*'),
        ],
      }),
      new TerserPlugin(), // Compress JS files
      new CssMinimizerPlugin(), // Compress CSS files
    ],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css', // Use [contenthash] for CSS file
    }),
  ],
});
export default config;
