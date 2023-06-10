/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

/* function postorderTraversal(root: TreeNode | null): number[] {
	let result: number[] = [];
	if (!root) return result;
	root.left && result.push(...postorderTraversal(root.left));
	root.right && result.push(...postorderTraversal(root.right));
	result.push(root.val);
	return result;
} */

function postorderTraversal(root: TreeNode | null): number[] {
	let result: number[] = [];
	let stack: TreeNode[] = [root];
	while (stack.length) {
		let node = stack.pop();
		node.right && stack.push(node.right);
		node.left && stack.push(node.left);
		result.push(node.val);
	}
	return result;
}
// @lc code=end
