function BinarySearchRecursive(arr, item) {


    return search(arr , item , 0 , arr.length - 1)
    

}

function search(arr , item , leftIndex , rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let mid = Math.floor((leftIndex + rightIndex)/2);
    if(arr[mid] == item){
        return mid 
    }

    if(item < arr[mid]){
        return search(arr , item , leftIndex , mid - 1)
    }
    else{
        return search(arr , item , mid + 1  , rightIndex )
    }
}



console.log(BinarySearchRecursive([-5, 2, 4, 6, 10], 10))
console.log(BinarySearchRecursive([-5, 2, 4, 6, 10], 6))
console.log(BinarySearchRecursive([-5, 2, 4, 6, 10], 20))


//0(logn)