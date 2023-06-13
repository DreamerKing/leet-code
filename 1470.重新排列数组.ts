/*
 * @lc app=leetcode.cn id=1470 lang=typescript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i]);
  }
  return result;
}
// @lc code=end
