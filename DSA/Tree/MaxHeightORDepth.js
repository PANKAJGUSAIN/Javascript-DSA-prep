class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Step 1: Create all the nodes
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);



function maxDepthRecursive(root) {
    if (!root) return 0

    const leftDepth = maxDepthRecursive(root.left);
    const rightDepth = maxDepthRecursive(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
}

function maxDepthIterative(root) {
    if (!root) return 0;
    let queue = [root]
    let depth = 0

    while (queue.length !== 0) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++;
    }
    return depth
}


// Step 2: Connect the nodes
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log("rooot", root);

console.log(maxDepthRecursive(root));
console.log(maxDepthIterative(root));
