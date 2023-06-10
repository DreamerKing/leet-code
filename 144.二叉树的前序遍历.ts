/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

/* function preorderTraversal(root: TreeNode | null): number[] {
	let result: number[] = [];
	if (!root) return result;
	result.push(root.val);
	root.left && result.push(...preorderTraversal(root.left));
	root.right && result.push(...preorderTraversal(root.right));
	return result;
}
 */
function preorderTraversal(root: TreeNode | null): number[] {
	let result: number[] = [];
	let stack = [root];
	while (stack.length) {
		let node = stack.pop();
		node && result.push(node.val);
		// 利用栈的FILO特性，先将右节点压入栈中，再压入左节点，如此保证左节点先被遍历
		node?.right && stack.push(node.right);
		node?.left && stack.push(node.left);
	}

	return result;
}
// @lc code=end
