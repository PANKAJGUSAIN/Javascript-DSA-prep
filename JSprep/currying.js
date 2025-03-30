const curriedSum = (x) =>{
    return function(y){
        return y ? curriedSum(x+y) : x;
    }
}


console.log(curriedSum(1)(2)(3)());