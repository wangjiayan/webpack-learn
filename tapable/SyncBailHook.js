const { SyncBailHook } = require("tapable");

// 1、创建钩子实例
const compiler = new SyncBailHook()

// 2、调用订阅接口注册回调
compiler.tap('plugin1',()=>{
  console.log('我是插件1')
   return '我是插件1'
})
compiler.tap('plugin2',()=>{
  console.log('我是插件2')
})
compiler.tap('plugin3',()=>{
  console.log('我是插件3')
})
// 3、调用之后：SyncBailHook 运行结束后，会将熔断值返回给call函数
console.log('运行结果',compiler.call())

// compiler.callAsync((err)=>{
//   if (err) {
//     // 错误处理逻辑
//   }
// })