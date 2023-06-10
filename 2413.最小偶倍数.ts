/*
 * @lc app=leetcode.cn id=2413 lang=typescript
 *
 * [2413] 最小偶倍数
 */

// @lc code=start
function smallestEvenMultiple(n: number): number {
  if (n % 2 == 0) return n;
  return n * 2;
}
// @lc code=end
