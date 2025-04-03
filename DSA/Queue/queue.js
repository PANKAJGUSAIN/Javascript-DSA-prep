class Queue{

    constructor(){
        this.state = []
    }

    enqueue(x){
        this.state.push(x)
    }
    
    dequeue(){
        return this.state.length != 0  ?  this.state.shift() : "Queue is Empty"
    }
    
    peek(){
        return this.state.length != 0  ?  this.state[0] : "Queue is Empty"
    }

    isEmpty(){
        return this.state.length === 0;
    }

}


let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
console.log(myQueue.peek()); // 10
console.log(myQueue.dequeue()); // 10
console.log(myQueue.dequeue()); // 20
console.log(myQueue.isEmpty()); // true