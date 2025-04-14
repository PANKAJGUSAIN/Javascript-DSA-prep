let nums = [5,7,7,8,9,10], target = 8 

function search(num , target){

    if(num.length < 0) return -1
    let start = 0;
    let end = num.length-1;

    while(start <= end){
        
        let mid = Math.floor((start + end)/2)

        if(num[mid] == target){
            return mid
        }

        else if(num[mid] < target){
            start = mid+1;
        }

        else{
            end = mid-1
        }
    }

    return -1

    
}


console.log(search(nums , target))