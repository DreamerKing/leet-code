/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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
/* 
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
 */
/* function sortedArrayToBST(nums: number[]): TreeNode | null {
	return buildHelper(nums, 0, nums.length - 1);
} */

function buildHelper(nums: number[], left: number, right: number) {
	if (left > right) {
		return null;
	}
	// let mid = Math.floor((left + right) / 2);
	let mid = Math.floor((left + right + 1) / 2);

	const root = new TreeNode(nums[mid]);
	root.left = buildHelper(nums, left, mid - 1);
	root.right = buildHelper(nums, mid + 1, right);
	return root;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
	let len = nums.length;
	if (len === 0) return null;
	let mid = Math.floor(len / 2);
	let root = new TreeNode(nums[mid]);
	if (len > 1) {
		root.left = sortedArrayToBST(nums.slice(0, mid));
		root.right = sortedArrayToBST(nums.slice(mid + 1));
	}
	return root;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

// @lc code=end
