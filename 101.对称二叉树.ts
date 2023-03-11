/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
	if (root === null) return true;
	return dlr(root.left, root.right);
}

function dlr(left: TreeNode | null, right: TreeNode | null) {
	if (left === null || right == null) return left === right;
	if (left.val !== right.val) {
		return false;
	}
	return dlr(left.left, right.right) && dlr(left.right, right.left);
}
// @lc code=end
