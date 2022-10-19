const webpack = require('webpack')
const path = require('path')
function f1 () {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      filename: '[name].[id].[contenthash].js',
      chunkFilename: '[name].[id].[chunkhash].chunk.js',
      path: path.resolve(__dirname, 'dist/contenthash'),
    },
  })
}


f1().run((err, stat) => {
  console.log(JSON.stringify(stat.toJson()))
})