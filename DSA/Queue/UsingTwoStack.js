class Queue{

    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x){
        this.stack1.push(x)
    }
    
    dequeue(){
    
        if (this.stack2.length === 0) {
            // push all stack 1 element to stack 2 
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.length > 0 ? this.stack2.pop() : "Queue is Empty";
        
        
    }
    
    peek(){
        if (this.stack2.length > 0) {  
            return this.stack2[this.stack2.length - 1]; // Front of queue is at the top of stack2
        } else if (this.stack1.length > 0) {
            return this.stack1[0]; // Front of queue is at index 0 of stack1
        } else {
            return "Queue is Empty";
        }
    }

    isEmpty(){
        if(this.stack1.length == 0 && this.stack2.length == 0){
            return true
        }
        else{
            return false
        }
    }

}


let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
console.log(myQueue.peek()); // 10
console.log(myQueue.dequeue()); // 10
console.log(myQueue.dequeue()); // 20
console.log(myQueue.isEmpty()); // true