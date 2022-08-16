import webpack from 'webpack'

const compiler = webpack({
  entry: './index.js',
  // 'none'：Opts out of any default optimization options
  mode: 'production',
})
compiler.run((err,stat)=>{
  console.log('打包时间====',stat.toJson().time)
})