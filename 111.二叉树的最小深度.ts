/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
	let depth = 0;
	if (!root) return depth;
	let stack = [root];
	stop: while (stack.length) {
		let len = stack.length;
		for (let i = 0; i < len; i++) {
			let node = stack.shift();
			if (!node.left && !node.right) {
				depth++;
				break stop;
			}
			node.left && stack.push(node.left);
			node.right && stack.push(node.right);
		}
		depth++;
	}
	return depth;
}
// @lc code=end
