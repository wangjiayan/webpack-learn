import {bar,foo} from './bar'
import './lib'

console.log(bar)

const testFn = (args)=>{
  console.log(args+'testFn')
}
/*#__PURE__*/
testFn(123)
const f = foo