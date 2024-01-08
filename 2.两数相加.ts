/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/* *
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
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
			this.val = val ?? 0;
			this.next = next ?? null;
    }
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let sum = 0,
	  flag = 0,
	  l1n = l1,
		l2n = l2;
	
	sum = (l1n?.val ?? 0) + (l2n?.val ?? 0) + flag;
	let	current = new ListNode(sum % 10);
	flag = sum >= 10 ? 1 : 0;
	const node = current;

	while (l1n?.next || l2n?.next || flag) {
		sum = (l1n?.next?.val ?? 0) + (l2n?.next?.val ?? 0) + flag;
		current.next = new ListNode(sum % 10);
		flag = sum >= 10 ? 1 : 0;
		current = current.next;
	}
	return node;
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));

const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

// @lc code=end
