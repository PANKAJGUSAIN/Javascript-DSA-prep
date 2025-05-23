//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.countPairs(arr, k));
        console.log('~');
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
class Solution {
    countPairs(arr, target) {
        // write your code here
        let sortedArray = arr.sort((a , b) => a - b);
        let sortedArrayLength = sortedArray.length;
        let visited = [];
        let left = 0 ;
        let right = 0 ;
        let pairCount = 0 ;
        
        for(let i = 0 ; i < sortedArrayLength ; i++){
            
            let start = i ;
            let end = i+1;
            
            while( end < sortedArrayLength ){
                
                let sum = sortedArray[start]+sortedArray[end];

                if(sum < target){
                    pairCount++;
                    end++;
                }else{
                    break;
                }
            }
            
        }
        return pairCount
    }
}
