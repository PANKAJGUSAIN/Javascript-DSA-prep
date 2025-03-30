// function hasPairWithDifference(arr , diff){
//     if(arr.length < 2){ return false};
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1 ;
//     let newDiff;
//     while ( leftIndex < rightIndex){
//         newDiff = arr[rightIndex] - arr[leftIndex];
//         if(newDiff == diff) return true 
//         else if ( newDiff > diff) { rightIndex-- ; }
//         else { leftIndex++};
//     }

//     return false;
// }

function hasPairWithDifference(arr , diff){ // new improved way and correct way
    if(arr.length < 2){ return false};
        let leftIndex = 0;
        let rightIndex = 1;
        while(rightIndex < arr.length){
            newDiff = arr[rightIndex] - arr[leftIndex];
            if(newDiff == diff) return true 
            else if ( newDiff < diff) { rightIndex++ ; }
            else { leftIndex++}
            if(leftIndex == rightIndex) rightIndex++;
        } 
        return false
}



console.log(hasPairWithDifference([1, 3, 5, 8, 12], 4));  // Output: true (8-4)
console.log(hasPairWithDifference([2, 5, 9, 11], 7));   // Output: true (9-2)
console.log(hasPairWithDifference([1, 3, 5, 8], 6));   // Output: false
console.log(hasPairWithDifference([1, 2, 3, 4], 2));   // Output: true (3-1)
console.log(hasPairWithDifference([2, 3, 5, 7, 11], 4)) 