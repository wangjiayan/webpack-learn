const { AsyncSeriesHook } = require("tapable");

// 1、创建钩子实例
const compiler = new AsyncSeriesHook()

// 2、调用订阅接口注册回调
compiler.tapAsync('plugin1',(cb)=>{
  console.log('我是插件1')
  // callback()
  setTimeout(()=>{
    console.log('插件1异步操作结束')
    cb()
  },100)
})
compiler.tapAsync('plugin2',(cb)=>{
  console.log('我是插件2')
  cb()
})
compiler.tapAsync('plugin3',()=>{
  console.log('我是插件3')
})

compiler.callAsync((err)=>{
  if (err) {
    // 错误处理逻辑
  }
})