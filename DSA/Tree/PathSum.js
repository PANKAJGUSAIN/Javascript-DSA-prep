var hasPathSum = function(root, targetSum) {
    if(!root) return false 

    if(!root.left && !root.right){
        return targetSum === root.val;
    }

     const newTarget = targetSum - root.val;

    return hasPathSum(root.left , newTarget) || hasPathSum(root.right , newTarget)


};