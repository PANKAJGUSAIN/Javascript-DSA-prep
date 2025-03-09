const arry = [1 , 2, 4, 6];

console.log("Normal map " , arry.map(x => x*2));


Array.prototype.mapper = function(func){

    let resultArray = [];
    console.log(typeof(this)) ; // op = object but it is arry because array is a type of object 

    for(let i of this){
        resultArray.push(func(i));
    }

    return resultArray
}

console.log("Polyfill map" , arry.mapper(x => x*2))