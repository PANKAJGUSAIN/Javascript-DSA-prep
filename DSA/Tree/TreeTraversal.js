class TreeNode{
    constructor(val){
        this.val = val ; 
        this.left = null ; 
        this.right = null ;
    }
}

// Step 1: Create all the nodes
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);


function preorderTraversal(node) {
    if (!node) return;

    console.log(node.val);            // Step 1: Visit the root
    preorderTraversal(node.left);     // Step 2: first completely Traverse the left subtree
    preorderTraversal(node.right);    // Step 3: then Traverse the right subtree
}

// Step 2: Connect the nodes
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log("rooot" , root);

preorderTraversal(root)