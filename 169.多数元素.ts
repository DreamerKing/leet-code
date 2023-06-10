/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const m = new Map();
  const half = Math.floor(nums.length / 2);
  for (const n of nums) {
    if (m.has(n)) {
      m.set(n, m.get(n) + 1);
    } else {
      m.set(n, 1);
    }
  }
  const result = Array.from(m.entries()).filter(([key, value]) => {
    return value >= half;
  });
  return result[0]?.[1];
}

console.log(majorityElement([3, 3, 3, 3, 2, 2, 1, 1]));
// @lc code=end
