/*
 * @lc app=leetcode.cn id=2331 lang=typescript
 *
 * [2331] 计算布尔二叉树的值
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

function evaluateTree(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  if (!root) return false;
  let result: boolean = false;
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    const op = node.value;
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
    if (op == 2) {
      result = evaluateTree(node.left) || evaluateTree(node.right);
    }
    if (op == 3) {
      result = evaluateTree(node.left) && evaluateTree(node.right);
    }
  }
}
// @lc code=end
