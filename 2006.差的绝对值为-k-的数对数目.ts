/*
 * @lc app=leetcode.cn id=2006 lang=typescript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
function countKDifference(nums: number[], k: number): number {
  let count = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    count += countKDifferenceSub(nums.slice(i), k);
  }
  return count;
}

function countKDifferenceSub(nums: number[], k: number): number {
  let count = 0;
  let len = nums.length;
  if (len <= 1) return count;
  const [first, ...rest] = nums;
  for (const item of rest) {
    const diff = first - item;
    if (Math.abs(diff) === k) {
      count++;
    }
  }
  return count;
}
// @lc code=end
