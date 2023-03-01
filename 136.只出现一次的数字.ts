/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let m = new Map();
  for (let n of nums) {
    if (m.has(n)) {
      m.set(n, m.get(n) + 1);
    } else {
      m.set(n, 1);
    }
  }
  let result;
  for (let [k, v] of m.entries()) {
    if (v == 1) {
      result = k;
      break;
    }
  }
  return result;
}

// @lc code=end
