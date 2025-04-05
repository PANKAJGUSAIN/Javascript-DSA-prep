// Given the head of a linked list, determine if the linked list has a cycle in it.

// Explanation:
// A cycle occurs when a node's next points to a previous node in the list. You need to detect if such a cycle exists.

// Expected Output:

// Return true if a cycle is found.

// Return false otherwise.

var hasCycle = function(head) {
    let left = head ;
    let right = head ;
    if(!left) return false;
    if(left.next == null) return false;
    while (right != null && right.next != null){
        left = left.next ;
        right = right.next.next ; 
        if(left == right) return true
    }
    return false
    
};