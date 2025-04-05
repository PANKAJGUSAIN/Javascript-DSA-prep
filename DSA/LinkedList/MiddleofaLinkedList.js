// Description:
// Given the head of a singly linked list, return the middle node. If there are two middle nodes (even length), return the second one.

// Example:
// Input: 1 -> 2 -> 3 -> 4 -> 5
//    prev   1 -> 2 -> 3
//    later   1  -> 3 -> 5
// Output: Node with value 3

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6
// Output: Node with value 4

class Node {
    constructor(value){
        this.value = value;
        this.next = null ;
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(value){
        const newNode = new Node(value);
        let current = this.head ;
        if(!this.head){
            this.head = newNode
            return;
        }
        while(current.next != null){
            current = current.next ;
        }

        current.next = newNode ;
    }

    print(){

        let current = this.head ; 
        let output = " ";
        while(current != null){
            output = output + current.value + '->'
            current = current.next
        }
        output += "null"
        console.log(output)
    }

    middle(){
        let prev = this.head ;
        let later = this.head ;
        
        while(later !=null){
            later = later.next;
            if(!later) break;
            prev = prev.next;
            later = later.next ;
        }
        console.log("middle is " , prev.value);
    }

    reverse(){
        let current = this.head ;
        let prev = null ; 

        while(current != null){
            let next = current.next ; 
            current.next = prev ; 

            prev = current ;
            current = next ;
        }

        this.head = prev ; 
        console.log(this.head.value);
        this.print();
    }

}

const linkedlist = new LinkedList();
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4)
linkedlist.append(5)
linkedlist.append(6)
linkedlist.print()
linkedlist.middle()
linkedlist.reverse()
