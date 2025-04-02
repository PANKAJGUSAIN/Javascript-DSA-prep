function LinearSearch(arr , item){
    for(let i=0 ; i<arr.length; i++ ){
        if ( arr[i] === item){
            return i
        }
    }
    return -1 
}

console.log(LinearSearch([-5 , 2 , 10 , 4 ,6 ] , 10))
console.log(LinearSearch([-5 , 2 , 10 , 4 ,6 ] , 6))
console.log(LinearSearch([-5 , 2 , 10 , 4 ,6 ] , 20))

//O(n)