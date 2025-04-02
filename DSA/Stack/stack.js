class Stack{
    constructor(){
        this.stack = []
    }

    push(x){
        this.stack.push(x)
    }

    pop(){
        return this.stack.length !=0 ?  this.stack.pop() : "Stack is Empty"
    }

    peek(){
        return this.stack.length !=0 ?  this.stack[this.stack.length - 1 ] : "Stack is Empty"
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}

let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // 20
console.log(myStack.pop()); // 20
console.log(myStack.pop()); // 10
console.log(myStack.isEmpty()); // true