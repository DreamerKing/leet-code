/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let current = head;

  let newHead;
  while (current && current.val == val) {
    current = current.next;
  }
  newHead = current;

  let preNode = newHead;

  while (current) {
    if (current.val !== val) {
      preNode = current;
    } else {
      preNode.next = current.next;
    }
    current = current.next;
  }
  
  return newHead
};
// @lc code=end

