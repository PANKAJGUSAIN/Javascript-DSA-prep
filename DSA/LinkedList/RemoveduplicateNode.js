//Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
//  Return the linked list sorted as well.
var deleteDuplicates = function(head) {
    if(!head) return head
    if(!head.next) return head 
    let prev = head 
    let current = head.next
    while(current !== null){
        if(prev.val !== current.val){
            prev = current ;
        }
        else{
            prev.next = current.next;
        }
        current = current.next;
    }
    return head ;
};