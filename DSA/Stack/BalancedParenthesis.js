let Input= "({[]})"
let inputtoArr = Input.split("");
let parenthesis = {
    "(" : ")",
    "[" : "]",
    "{" : "}",
}

let stack = [];
let isValid = true ; 

for(let i of inputtoArr){
    if(parenthesis[i]){
        stack.push(i)
    }else{
        let last = stack.pop(); // Pop last opening bracket
        if (parenthesis[last] !== i) { 
            isValid = false; 
            break;
        }

    }
}

console.log(isValid);