/*
 * @lc app=leetcode.cn id=2236 lang=typescript
 *
 * [2236] 判断根结点是否等于子结点之和
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

function checkTree(root: TreeNode | null): boolean {
  if (!root) return false;
  const rootValue = root.val;
  let sum = 0;
  let nodes = [root];
  while (nodes.length) {
    const node = nodes.shift();
    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
    sum += node.val;
  }
  return sum - rootValue == rootValue;
}
// @lc code=end
