/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false;
	let stack = [root];
	let pathStack: number[] = [root.val];
	while (stack.length) {
		let len = stack.length;
		for (let i = 0; i < len; i++) {
			let node = stack.shift();
			let temp = pathStack.shift();
			if (!node.left && !node.right) {
				if (temp === targetSum) {
					return true;
				} else {
					continue;
				}
			}
			if (node.left) {
				stack.push(node.left);
				pathStack.push(temp + node.left.val);
			}
			if (node.right) {
				stack.push(node.right);
				pathStack.push(temp + node.right.val);
			}
		}
	}
	return false;
}
// @lc code=end
