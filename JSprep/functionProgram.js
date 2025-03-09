const area = function(radius){
    console.log("araea" , radius)
    return Math.PI*radius*radius
}

const circumfrence = function(radius){
    return 2*Math.PI*radius
}


Array.prototype.calculate = function(logic){
    console.log(this)
    const output = [];
    for(let i of this){
        console.log(i)
        output.push(parseFloat(logic(i)).toFixed(2))
        // output.push(Math.floor(logic(i)))
        // output.push(Math.ceil(logic(i)))
    }
    return output
}


// console.log(calculate([1,2,3,5], area))
const arry = [11,22,43,5]

console.log(arry.calculate(area))
