let arr = [4, 5, 6, 7, 0, 1, 2]
let target = 0

function findIndex(arr , target){

    if(arr.length == 0 ) return -1

    let start = 0 ;
    let end = arr.length -1 ;
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] == target) return mid 

        if(arr[start]<= target && target <= arr[mid]){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }

}

console.log(findIndex(arr , target))