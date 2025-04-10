var isSameTree = function (p, q) {
    if (!p && !q) return true

    let pqueue = [p];
    let qqueue = [q];

    while (pqueue.length != 0 && qqueue.length != 0) {
        let pnode = pqueue.shift();
        let qnode = qqueue.shift();
        if (!pnode && !qnode) continue;

        // One is null and the other isn't → mismatch 
        // Values don’t match → mismatch
        if (!pnode || !qnode || pnode.val !== qnode.val) return false;
        pqueue.push(pnode.left)
        qqueue.push(qnode.left)
        pqueue.push(pnode.right)
        qqueue.push(qnode.right)
    }
    console.log(pqueue , qqueue)
    if(pqueue.length!==0 || qqueue.length !==0){
        return false
    }
    else{
        return true
    }


};