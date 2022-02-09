import path from 'path';
import nodeExternals from 'webpack-node-externals'; // eslint-disable-line import/no-extraneous-dependencies

const conf = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: 'build.js',
    path: `${path.resolve(path.dirname('./webpack.config.js'))}/dist`,
  },
  devtool: 'source-map',
  target: 'node14.17',
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};

export default conf;
