/*
 * @lc app=leetcode.cn id=2656 lang=typescript
 *
 * [2656] K 个元素的最大和
 */

// @lc code=start
function maximizeSum(nums: number[], k: number): number {
  const max = Math.max(...nums);
  return k * max + (k * (k - 1)) / 2;
}
// @lc code=end
