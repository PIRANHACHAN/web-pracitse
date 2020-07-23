const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: { import: './src/index.js', dependOn: 'shared' },
    another: { import: './src/another-module.js', dependOn: 'shared' },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js', //打包的文件名称
    path: path.resolve(__dirname, 'dist'), //出口文件模块所在目录
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '代码分离',
    }),
  ],
  devtool: 'inline-source-map',
  /* optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }, */
}
