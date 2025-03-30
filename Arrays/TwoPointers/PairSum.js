// function hasPairWithSum(arr , sum){    o(n^2)
//     let newSum = 0;
//     if (arr.length == 0) { return false }
//     if ( arr.length == 2 ) { return sum == arr[0]+arr[1] ? true : false}
//     for(let i= 0 ; i<arr.length; i++){
//         for(let j = i+1; j<arr.length ; j++ ){
//             newSum = arr[i] + arr[j];
//             if( newSum == sum) { return true};
//         }
//     }
//     return false;
// }

function hasPairWithSum(arr , sum){    // O(n)
    let newSum = 0;
    if (arr.length < 2) { return false };
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex){
        newSum = arr[leftIndex] + arr[rightIndex];
        if( newSum == sum) return true;
        else if ( newSum > sum) { rightIndex-- } 
        else if ( newSum < sum ) { leftIndex++ }
    }
    return false;
}


console.log(hasPairWithSum([1, 2, 3, 4, 6], 6));  // Output: true  (2+4)
console.log(hasPairWithSum([2, 5, 9, 11], 14));   // Output: true  (5+9)
console.log(hasPairWithSum([1, 3, 5, 8], 10));   // Output: false
console.log(hasPairWithSum([], 4));   // Output: false