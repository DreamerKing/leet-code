/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
  let slow = n;
  let fast = getNext(n);
  while (fast != 1 && slow != fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast == 1;
};

function getNext(n: number) {
  return n.toString().split('').map((i) => +i * (+i)).reduce((pre, cur) => pre + cur);
}
// @lc code=end

