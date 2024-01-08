/*
 * @lc app=leetcode.cn id=2427 lang=typescript
 *
 * [2427] 公因子的数目
 */

// @lc code=start
function commonFactors(a: number, b: number): number {
  let count = 0;
  const max = Math.min(a, b);
  for (let i = 1; i <= max; i++) {
    if (a % i == 0 && b % i == 0) {
      count++;
    }
  }
  return count;
}
// @lc code=end
