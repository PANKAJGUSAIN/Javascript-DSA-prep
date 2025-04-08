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

    isPalindrome(){
        
        if(!this.head) return "false" 
        if(!this.head.next) return "false"

        // calculate length 
        let current = this.head ;
        let length = 1;
        while(current.next !== null){
            length = length+1
            current = current.next;
        }
        let middle = Math.ceil(length/2) ;
        console.log(middle);


        // check palindrome
        let midHead = this.head; 
        let hash = {};
        for(let i = 1 ; i <= length ; i++){
            if(i <= middle){
                hash[i] = midHead.val;
                midHead = midHead.next;
                continue;
            }else{
                if(hash[(length - i) + 1] == midHead.val){
                    midHead = midHead.next
                    continue;
                }
                else{
                    return 'false'
                } 
            }
        }
        return 'true'
    }
}

const linked = new LinkedList();
linked.append(1);
linked.append(2);
linked.append(3);
linked.append(2);
linked.append(1);
linked.print();
console.log(linked.isPalindrome());
