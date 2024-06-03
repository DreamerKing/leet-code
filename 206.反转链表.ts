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
  if (!head || !head?.next) return head;

  let current = head;
  let stack: ListNode[] = [];
  while (current) {
    stack.push(current);
    current = current.next;
  }

  const newHead = stack.pop()!;
  let  prev = newHead;
  while (stack.length) {
    current = stack.pop()!;
    prev.next = current;
    prev = current
  }
  current.next = null;
  return newHead;
};
// @lc code=end

