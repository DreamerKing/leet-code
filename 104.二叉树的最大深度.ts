/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

/* function maxDepth(root: TreeNode | null): number {
	let depth: number = 0;
	if (!root) return depth;
	return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
} */

function maxDepth(root: TreeNode | null): number {
	let depth: number = 0;
	if (!root) return depth;
	let q = [];
	q.push(root);
	while (q.length) {
		let len = q.length;
		for (let i = 0; i < len; i++) {
			let node = q.shift();
			node.left && q.push(node.left);
			node.right && q.push(node.right);
		}
		depth++;
	}
	return depth;
}
// @lc code=end
