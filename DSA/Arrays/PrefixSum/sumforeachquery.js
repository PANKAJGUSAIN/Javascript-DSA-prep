let arr = [3, 6, 2, 8, 7, 5]
let queries = [[1, 3], [2, 5], [0, 4]]


// approach 1 = high time complexity
function calculateSum(query){
    let sum = 0 ;
    let i = query[0];
    while( i <= query[1]){
        sum += arr[i];
        i++;
    }

    console.log("Sum of elements from index" , query[0] ,"to" , query[1] , " :" , sum)
}
queries.map(query => calculateSum(query));
// approach 1 - ends 

// approach 2 - low time complexity
function getPrefixSum(arr){
    let prefixArr = [];
    for(let i=0; i<arr.length ; i++){  //O(N)
        let sum = i==0 ? 0 + arr[i] : prefixArr[i-1]+arr[i];
        prefixArr.push(sum);
    }
    return prefixArr
}

function calculateSum2(prefixArr , query){
    const sum = prefixArr[query[1]] - (prefixArr[query[0]== 0 ? 0 : query[0]-1])
    console.log("Sum of elements from index" , query[0] ,"to" , query[1] , " :" , sum ) 

}

let prefixArr = getPrefixSum(arr);
console.log(prefixArr);
queries.map(query => calculateSum2(prefixArr , query))

//op 
// Sum of elements from index 1 to 3: 16
// Sum of elements from index 2 to 5: 22
// Sum of elements from index 0 to 4: 26
