const { SyncWaterfallHook } = require("tapable");

// 1、创建钩子实例
const compiler = new SyncWaterfallHook(["msg"])

// 2、调用订阅接口注册回调
compiler.tap('plugin1',(arg)=>{
  console.log('plugin1:',arg)
   return arg +'我是插件1'
})
compiler.tap('plugin2',(arg)=>{
  console.log('plugin2：',arg)
  return arg + '我是插件2'
})
compiler.tap('plugin3',(arg)=>{
  console.log('plugin3：',arg)
  return arg + '我是插件3'
})
// SyncWaterfallHook 运行结束后，
console.log('运行结果',compiler.call('我是初始值'))

// compiler.callAsync((err)=>{
//   if (err) {
//     // 错误处理逻辑
//   }
// })