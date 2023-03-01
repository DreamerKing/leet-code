/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }

  /*   inertNode(root, nodeValue) {
    if (!root) {
      root = new TreeNode(nodeValue);
    }

    if (nodeValue < root.val) {
      if (!root.left) {
        root.left = new TreeNode(nodeValue);
      } else {
        this.inertNode(root.left, nodeValue);
      }
    } else {
      if (!root.right) {
        root.right = new TreeNode(nodeValue);
      } else {
        this.inertNode(root.right, nodeValue);
      }
    }
  }

  inorderTraversal(node, callback) {
    if (node) {
      this.inorderTraversal(node.left, callback);
      callback(node.val);
      this.inorderTraversal(node.right, callback);
    }
  } */
}

function inorderTraversal(root: TreeNode | null): number[] {
  let orders: number[] = [];
  if (!root) return orders;
  if (root.left) {
    let left = inorderTraversal(root.left);
    orders.push(...left);
  }
  orders.push(root.val);
  if (root.right) {
    let right = inorderTraversal(root.right);
    orders.push(...right);
  }

  return orders;
}

/* const root = new TreeNode(1, new TreeNode(), new TreeNode(2, new TreeNode(3))); */
/* const tree = new TreeNode(1);
tree.inertNode(tree, 3);
tree.inertNode(tree, 2);
tree.inertNode(tree, 4); */
/* tree.inorderTraversal(tree, (val) => {
  console.log(val);
}); */

// console.log(tree);
/* 
let inorders = inorderTraversal(tree);
console.log(inorders); */

// @lc code=end
