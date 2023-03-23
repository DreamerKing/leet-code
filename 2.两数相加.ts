/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let node: ListNode | null = null;
	let sum = 0;
	let flag = 0;
	let l1Next: ListNode | null = l1,
		l2Next: ListNode | null = l2,
		current: ListNode | null = node;

	while (l1Next || l2Next) {
		sum = (l1Next?.val ?? 0) + (l2Next?.val ?? 0) + flag;
		current = new ListNode(sum % 10);
		flag = sum >= 10 ? 1 : 0;
		l1Next = l1Next?.next ?? null;
		l2Next = l2Next?.next ?? null;
		current = current.next;
	}
	return node;
}

const l1: ListNode = new ListNode(3, new ListNode(4, new ListNode(2)));

const l2: ListNode = new ListNode(4, new ListNode(5, new ListNode(6)));

// console.log(l1);

console.log(addTwoNumbers(l1, l2));

// @lc code=end
