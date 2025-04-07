class Node{
    constructor(value){
        this.val = value,
        this.next = null
    }

}

class LinkedList{

    constructor(){
        this.head = null
    }

    append(value){
        let newNode = new Node(value);
        if(!this.head) { this.head = newNode; return; };
        let current = this.head;
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode;
    }

    print(){
        if(!this.head) return "null"
        let current = this.head
        let output = " "
        while(current !== null){
            output = output + current.val +  "->" 
            current = current.next
        }
        output +="null"
        console.log(output);
    }

    removeDuplicates(){
        let hashset = new Set();
        if(!this.head) return this.head
        let duplicateNode = new Node(-1);
        duplicateNode.next = this.head;
        let prev = duplicateNode;
        let current = this.head;
        while(current !=null){
            if(hashset.has(current.val)){
                prev.next = current.next;
                current = current.next;
                continue;
            }
            hashset.add(current.val);
            prev = current ;
            current = current.next;
        }

        let output = " "
        let newcurrent = duplicateNode.next
        while( newcurrent!== null){
            output = output + newcurrent.val +  "->" 
            newcurrent = newcurrent.next
        }
        output +="null"
        console.log("new list" , output);
        this.head = duplicateNode.next;
        return this.head;
    }
}

const linked = new LinkedList();
linked.append(1);
linked.append(3);
linked.append(2);
linked.append(3);
linked.append(4);
linked.append(1);
linked.print();
linked.removeDuplicates();
