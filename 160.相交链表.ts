/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let node = headA;
  let set = new Set();
  while (node) {
    set.add(node);
    node = node.next;
  }

  let nodeB = headB;
  while (nodeB) {
    if (set.has(nodeB)) return nodeB;
    nodeB = nodeB.next;
  }
  return null;
}
// @lc code=end
