// binary search only works with sorted arry
function BinarySearch(arr , item ){

    let leftIndex = 0 ; 
    let rightIndex = arr.length - 1 ;  

    
    while( leftIndex <= rightIndex){

        let mid = Math.floor((leftIndex + rightIndex)/2);

        if(arr[mid] == item){
            return mid 
        }
        if (arr[mid] > item){
            rightIndex = mid - 1
        }
        else {
            leftIndex = mid + 1
        }
    }
    return -1 

}

console.log(BinarySearch([-5 , 2 , 4 , 6 , 10 ], 10))
console.log(BinarySearch([-5 , 2 , 4 , 6 , 10 ] , 6))
console.log(BinarySearch([-5 , 2 , 4 , 6 , 10 ] , 20))


//O(logn)
