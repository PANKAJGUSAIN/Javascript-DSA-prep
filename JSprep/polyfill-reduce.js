
const arry = [1 , 2, 3, 4, 5]


console.log("Normal Result" , arry.reduce((acc , iterator)=>{ acc = acc + iterator ;  return acc} , 0))

Array.prototype.reducer= function(func , initalState){ // remember why we didn't use  arrow function because of the value of "this"

    let accumulator = initalState ;

    for( let i of this){
        accumulator = func(accumulator , i);
    }

    return accumulator

}

console.log("Polyfill Result" , arry.reducer((acc , iterator)=>{ acc = acc + iterator ;  return acc} , 0))