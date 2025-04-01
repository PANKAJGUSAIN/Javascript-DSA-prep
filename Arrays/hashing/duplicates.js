let arr = [1 , 2 , 3 , 1]
let seen = {}
function containsDuplicate(arr){
    for(let i of arr){
        if(!seen[i]){
            seen[i] = "true"
        }else return true  // duplicate found
    }
    return false
}

console.log(containsDuplicate(arr));  // Output: true