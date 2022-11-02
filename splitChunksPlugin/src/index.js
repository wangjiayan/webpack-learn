import {bar,foo} from './bar'
import {get} from 'lodash'
// import request from 'umi-request';
// import * as Sentry from '@sentry/react'
// import react from 'react'
import 'crypto-js'
import './lib'

console.log(bar)
// const obj = {a:123}
const testFn = (args)=>{
  console.log(args+'testFn')
}
//  request('www.baidu.com')
//  Sentry.init()


 import('./testAsync').then((res)=>{
  console.log('异步加载回调',res.default)
 })
// console.log(get(obj,a))
/*#__PURE__*/
testFn(123)
const f = foo