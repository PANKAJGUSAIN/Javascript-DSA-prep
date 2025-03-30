//convert f(a,b,c) into f(a)(b)(c)

function curry(fn){
    return function curriedfunction(...args){
            if(args.length >= fn.length ){
                return fn(...args)
            }
            else{
                return function(...next){
                    return curriedfunction(...args , ...next);
                }
            }
            
    }
}
const sum = (a , b , c ) => a + b + c ;
let totalSum = curry(sum);
console.log(totalSum(1 ,2 ,3))
