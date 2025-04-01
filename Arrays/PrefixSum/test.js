let arr = [1, 2, 3, 4, 5, 6];
let queries = [[0, 2], [2, 5], [1, 4]];

function prefixSum(arr){
    let sumarr = [];
    let sum = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        sum +=arr[i];
        sumarr.push(sum);
    }
    return sumarr   
}

function calculateSum(arr , query){
    let sum  = arr[query[1]] - (query[0]== 0 ? arr[query[0]] : arr[query[0]-1])
    console.log(`Sum of elements from index ${query[0]} to ${query[1]}  : ${sum}`)
}
const prefixSumArr = prefixSum(arr);
console.log(prefixSumArr);
queries.map(query => calculateSum(prefixSumArr , query)) 