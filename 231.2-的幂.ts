/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (n === 0) return false;
  while (n) {
    if (n == 1) return true;
    if (n % 2 === 0) {
      n = n / 2
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

