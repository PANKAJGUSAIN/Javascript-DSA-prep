//Input: arr = [2, 3, 1, 2, 4, 3], target = 7  
//Output: 2  
// Explanation: The subarray [4,3] has sum >= 7 and is the smallest.

// leetcode - 209

//o(n2)
let arr = [2, 3, 1, 2, 4, 3] ; 
let target = 7;
let k = 1 ;
let sum = 0 ;
outerloop : while(k < arr.length){

    for(let i = 0 ; i < k ; i++ ){
        sum = sum + arr[i];
    }
    maxsum = sum 
    
    for(let i = k ; i<arr.length ; i++){
        sum = sum - arr[i-k] + arr[i];
        maxSum = Math.max(maxSum , sum );
        if(maxSum >= target){
            console.log(k);
            break outerloop;
        }
    }

    k++;
} 


//o(n)
function minSubArrayLen(target, arr) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]; // Expand the window

        // Shrink the window when the sum is >= target
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left]; // Remove the leftmost element
            left++; // Move left pointer
        }
    }

    return minLength === Infinity ? 0 : minLength; // If no subarray found, return 0
}

// Test cases
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2  ([4,3])
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1  ([4] or [4])
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // Output: 0 (No subarray found)
