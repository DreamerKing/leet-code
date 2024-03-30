/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
  let s = '';
  while(n) {
    s += n % 2;
    n = Math.floor(n / 2);
  }
  return Number('0b' + s.padEnd(32,'0'));
};
// @lc code=end

