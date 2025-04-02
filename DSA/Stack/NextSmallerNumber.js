let arr = [4, 8, 5, 2, 25] ; 

let stack = [] ; 
let finalArray = [];

for(let i=arr.length-1 ; i>=0 ; i--){

    if(stack.length == 0){
        finalArray.push(-1);
        stack.push(arr[i]);
    }

    else{

        while(stack.length > 0 && stack[stack.length - 1] > arr[i] ){
            stack.pop();
        }
        if(stack.length == 0){
            finalArray.push(-1);
        }else{
            finalArray.push(stack[stack.length - 1 ])
        }
        stack.push(arr[i])
    }
}

console.log(finalArray.reverse());