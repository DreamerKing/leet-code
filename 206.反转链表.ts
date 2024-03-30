/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
  let current = head;
  let stack: ListNode = [];
  let preNode = null;
  while (current) {
    stack.push(current);
    preNode = current;
    current = current.next;
  }

  const newHead = stack.pop();
  preNode = newHead;
  while (stack.length) {
    current = stack.pop();
    preNode.next = current;
    preNode = current
  }
  return newHead;
};
// @lc code=end

