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
    module:{
      rules:[
        {
          test:/\.uu$/,
          use:[path.resolve(__dirname,'loaders/sync-loader.js')]
        }
      ]
    }
  })
}


f1().run((err, stat) => {
  if (err){
    throw new Error(err)
  }
  // console.log(JSON.stringify(stat.toJson()))
  console.log('我执行了')
})