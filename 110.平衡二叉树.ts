/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  let node = root;
  let lheight = 0,
    rheight = 0;
  if (!node) return true;
  if (node.left) {
    lheight = getTreeHeight(node.left);
  }
  if (node.right) {
    rheight = getTreeHeight(node.right);
  }

  if (Math.abs(lheight - rheight) <= 1) return true;
  else return false;
}

function getTreeHeight(root: TreeNode | null): number {
  let height = 0;
  let lheight = 0,
    rheight = 0;
  let node = root;
  if (!node) return height;
  if (!node.left && !node.right) return height + 1;
  if (node.left) {
    node = node.left;
    lheight = height + 1 + getTreeHeight(node);
  }
  if (node.right) {
    node = node.right;
    rheight = height + 1 + getTreeHeight(node);
  }
  return Math.max(rheight, lheight);
}
// @lc code=end
