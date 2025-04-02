function moveZeros(arr){
    if(arr.length < 1) return arr

    let left = 0 ;
    let right = 0 ;

    while (right < arr.length) {
        if (arr[right] !== 0) {
            // Swap only if right is a non-zero number
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;  // Move left only after swapping
        }
        right++;  // Always move right pointer
    }
    return arr;
}

// console.log(moveZeros([0, 1, 0, 3, 12])) // Output: [1, 3, 12, 0, 0]
// console.log(moveZeros([0, 0, 1])) // Output: [1, 0, 0]
// console.log(moveZeros([1, 2, 3])); // Output: [1, 2, 3] (Already sorted)
// console.log(moveZeros([0, 0, 0])); // Output: [0, 0, 0] (All zeros)
// console.log(moveZeros([0, 0, 1, 0, 2, 3])); 
console.log(moveZeros([4,2,4,0,0,3,0,5,1,0]));