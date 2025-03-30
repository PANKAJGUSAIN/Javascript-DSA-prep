
function removeDuplicates(arr){
    if (arr.length == 0) return 0
    if(arr.length == 1) return arr.length
    let left = 0 ;
    let right = 1 ;
    while (right < arr.length){
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right]; // Move unique element forward
        }
        right++;
    }
    return left+1;


}

console.log(removeDuplicates([1, 1, 2])); 
// Output: [1, 2] (Modified array) & returns 2

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); 
// Output: [0, 1, 2, 3, 4] (Modified array) & returns 5