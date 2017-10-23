export const jsLoader = 'babel?cacheDirectory';
const path = require("path");

const baseConfig = {
  entry: undefined,
  output: undefined,
  externals: undefined,

  module: {
    loaders: [
      { test: /\.js/, loader: jsLoader, exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
  ],
};

export default baseConfig;