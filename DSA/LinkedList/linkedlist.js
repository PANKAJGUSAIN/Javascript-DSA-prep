class Node{
    constructor(value){
        this.value = value  ;
        this.next = null ; // refence to next node 
    }
}

class LinkedList{
    constructor(){
        this.head = null ;
    }
    
    append(value){
        // create a node first 
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            console.log(this.head)
            return
        }

        let current = this.head ; 
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode ; 

    }

    prepend(value){
        let current = this.head ;
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode ;
            return
        }

        newNode.next = current ; 
        this.head = newNode;


    }

    print(){
        let current = this.head ; 
        let output = "";
        while(current != null){
            output = output + current.value + '->'
            current = current.next;
        }
        output +="null";
        console.log(output);
    }

    delete(value){

        // if list is empty
        if(!this.head){
            return "Linked List is Empty"
        }   

        let prev = null ;
        let current = this.head ;

        while(current != null){
            if(current.value == value) { break;} 
            prev = current ; 
            current = current.next ; 
        }
        if(!current) return 'value not found' // iterated over whole list but value not found

        if(!prev){  // value is in first place
            this.head = current.next;
            return `element popped out `
        }
        prev.next = current.next ;
        return `element popped out `
        
    }

    size(){
        let current = this.head ;
        let size = 0 ;
        while(current != null){
            size += 1;
            current = current.next;
        }

        console.log(size);
    }

    find(value){
        let current = this.head;
        let node = null ; 
        while(current != null){
            if(current.value == value){
                node = current ;
                console.log('value found -' , node);
                return ;
            }
            current = current.next ;
        }
        console.log("value not found -" , node);
    }

    reverse(){
        
        
        
        
        if(!this.head) return ;

        let prev = null ;
        let current = this.head ; 

        // 10 => 20 -> 30 -> 40 
        
        while(current != null){
            let next = current.next ; 
            current.next = prev ; 

            prev = current ; 
            current = next ; 
        }

        this.head = null

        
    }
}

const linkedlist = new LinkedList();
linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.append(40);
linkedlist.print();
linkedlist.prepend(5);
linkedlist.print();
linkedlist.delete(5);
linkedlist.print();
linkedlist.delete(20);
linkedlist.print();
linkedlist.delete(40);
linkedlist.print();
linkedlist.size();
linkedlist.find(10);
linkedlist.find(90);
linkedlist.reverse();
linkedlist.print();


