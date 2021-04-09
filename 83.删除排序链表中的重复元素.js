/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (51.81%)
 * Likes:    445
 * Dislikes: 0
 * Total Accepted:    170.8K
 * Total Submissions: 329.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    let head = null;
    this.append = function(element){
        let node = new Node(element);
        if(!head){
            head = node;
        } else {
            let current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
    };
    this.toString = function() {
        let current = head;
        let out = '';
        while(current.next){
            out += current.value + ' -> ';
            current = current.next;
        }
        out += current.value;
        console.log(out);
    }
}


let link = new LinkedList();
link.append(1);
link.append(1);
link.append(2);
link.append(3);
link.append(3);

link.toString();


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

};
// @lc code=end

