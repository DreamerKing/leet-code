/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

/* class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val ?? 0;
		this.left = left ?? null;
		this.right = right ?? null;
	}
}
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	// 如果p或q其中一个null,另一个不为null，则不同；如果都为null则相同
	if (p == null || q == null) return p === q;
	// p和q都不为null,则比较val,及递归比较对应的子节点
	return (
		p.val === q.val &&
		isSameTree(p.left, q.left) &&
		isSameTree(p.right, q.right)
	);
}

/* function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	let pa = preTravese(p);
	let qa = preTravese(q);
	return isSameArray(pa, qa);
}

function preTravese(p: TreeNode | null): (number | null)[] {
	let orders: (number | null)[] = [];
	if (!p) {
		return orders;
	}
	orders.push(p.val);
	if (p.left) {
		orders.push(...preTravese(p.left));
	} else {
		orders.push(null);
	}
	if (p.right) orders.push(...preTravese(p.right));
	return orders;
}

function isSameArray(a: number[], b: number[]): boolean {
	let isSame = true;
	if (a.length != b.length) isSame = false;
	for (let i = 0; i < a.length; i++) {
		if (a[i] != b[i]) {
			isSame = false;
			break;
		}
	}
	return isSame;
} */
// @lc code=end
