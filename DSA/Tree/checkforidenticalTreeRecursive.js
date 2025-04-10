var isSameTree = function(p , q){
    
    // Both nodes are null → trees match here
    if (!p && !q) return true; 

    // One is null and the other isn't → mismatch
    if (!p || !q) return false ; 

     // Values don’t match → mismatch
    if (p.val !== q.val) return false;

    return isSameTree(p.left , q.left) && isSameTree(p.right , q.right)

    
}