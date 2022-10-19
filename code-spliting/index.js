import('./sum').then(m => {
  console.log(m.default(3, 4))
})

console.log('我执行了132')