let arr = [2, 1, 5, 1, 3, 2]
let k = 3
let sum = 0 ;
let maxSum = 0 ;

for(let i = 0 ; i < k ; i++ ){
    sum = sum + arr[i];
}
maxsum = sum 

for(let i = k ; i<arr.length ; i++){
    sum = sum - arr[i-k] + arr[i];
    maxSum = Math.max(maxSum , sum );
}




console.log( maxSum)