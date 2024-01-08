/*
 * @lc app=leetcode.cn id=2520 lang=typescript
 *
 * [2520] 统计能整除数字的位数
 */

// @lc code=start
function countDigits(num: number): number {
  const numStr = num.toString();
  let count = 0;
  for (const c of numStr) {
    const digit = Number.parseInt(c, 10);
    if (num % digit === 0) {
      count++;
    }
  }
  return count;
}
// @lc code=end
