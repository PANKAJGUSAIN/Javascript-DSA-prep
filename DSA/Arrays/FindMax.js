function findMax(arr){
    if(arr.length == 0) return undefined;
    let max = arr[0];
    for(let i of arr){
        if(i > max || max === undefined ){
            max = i 
        }
    }
    return max
}

const findMax2  = arr => arr.length !== 0 ? Math.max(...arr) : undefined

console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-10, -3, -1, -20])); // Output: -1
console.log(findMax([]));

console.log(findMax2([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax2([-10, -3, -1, -20])); // Output: -1
console.log(findMax2([]));