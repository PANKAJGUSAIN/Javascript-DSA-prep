const arry = [1 , 2, 3,5];

console.log("Normal Array" , arry.filter(i => i%2));

Array.prototype.filteredby = function(func){
    let resultArray = [];

    if(!Array.isArray(this)){
        throw new TypeError(" it is not an error");
    }

    if(typeof func  !== "function"){ // for sparse array [1 , 2, ,4] at index 2 its empty which gives undefined
        throw new TypeError(callback + " is not a function");
    }

    for(let i of this){
        console.log(func(i) === true || func(i) === 1) 
        if(func(i) === true || func(i) === 1){
            resultArray.push(i)
        }
    }

    return resultArray

}

console.log("Normal Array" , arry.filteredby(i => i%2));