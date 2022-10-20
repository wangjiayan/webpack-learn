const webpack = require('webpack')
const path = require('path')
// const MyExampleWebpackPlugin = require('./plugins/myPlugin')
const FileListTxtWebpackPlugin = require('./plugins/FileListTxtWebpackPlugin')
const HeaderPlugin = require('./plugins/HeaderPlugin')
function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[id].[contenthash].js',
      chunkFilename: '[name].[id].[chunkhash].chunk.js',
      path: path.resolve(__dirname, 'dist/contenthash'),
    },
    resolve: {
      extensions: [ '.js'],
    },
    plugins:[
      // new MyExampleWebpackPlugin(),
      new FileListTxtWebpackPlugin(),
      // new webpack.BannerPlugin({
      //   banner: 'hello world',
      // }),
      // new HeaderPlugin()
    ]
  })
}


f1().run((err, stat) => {
  if (err){
    throw new Error(err)
  }
  // console.log(JSON.stringify(stat.toJson()))
  console.log('我执行了')
})