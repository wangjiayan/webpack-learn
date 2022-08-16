import add from './add.js'

function sum (a,b){
    return `the sum is${add(a,b)}`
}


let a = sum(1,2)
console.log('12',a)
export default sum