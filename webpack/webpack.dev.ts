import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import merge from "webpack-merge"

import commonConfig from "./webpack.common"

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config:Configuration = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map', // Use a development-friendly sourcemap
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
    open:true
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
export default config
