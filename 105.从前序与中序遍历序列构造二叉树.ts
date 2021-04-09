/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

type TNode = TreeNode | null;
class TreeNode {
    val: number
    left: TNode
    right: TNode
    constructor(val?: number, left?: TNode, right?: TNode){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder: number[], inorder: number[]): TNode {
    if(preorder.length == 0) return null;
    const root = new TreeNode(preorder.splice(0,1)[0], null, null);
    if(inorder.length == 1) return root;
    const index = inorder.indexOf(root.val);
    const leftTree = inorder.slice(0, index);
    const rightTree = inorder.slice(index);
    root.left = leftTree.length ? buildTree(preorder, leftTree): null;
    root.right = rightTree.length ? buildTree(preorder, rightTree): null;
    return root;
};

// const tree = buildTree([3,9,20,15,7], [9,3,15,20,7]);
// console.log(tree);

// @lc code=end

