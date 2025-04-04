// You are given an array of integers. For each element, find the next greater element to the right.
// If there is no greater element, return -1 for that position.

// Example:
// Input: [4, 5, 2, 10, 8]
// Output: [5, 10, 10, -1, -1]

let input = [4, 5, 2, 10, 8];
let stack = [];
let finalArray = [];

for(let i = input.length-1 ; i >=0 ; i--){
    let element = input[i]; 
    
        while( stack.length >= 0 && element >= stack[stack.length - 1 ]){
            
            stack.pop();
        }
        if(stack.length == 0){
            finalArray.push(-1);
        }else{
            finalArray.push(stack[stack.length -1 ])
        }
        
    stack.push(element);
}

console.log(finalArray.reverse());