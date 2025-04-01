let arr = [2, 7, 11, 15]
let target = 9;
function findSum(arr , target){
    let hashobj = {};
    let found = false;
    for(let i=0 ; i<arr.length ; i++){
        let targetSum = target ; 
        targetSum = targetSum - arr[i];
        if(hashobj[targetSum] !==undefined){
            console.log("Found it" , i , hashobj[targetSum]) 
            found = true ;
            break;
        }else{
            hashobj[arr[i]] = i 
        }

    }

    !found && console.log("NOT FOUND")
}

findSum(arr , target)