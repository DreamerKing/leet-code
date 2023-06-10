/*
 * @lc app=leetcode.cn id=1920 lang=typescript
 *
 * [1920] 基于排列构建数组
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
  let ans: number[] = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    ans[i] = nums[nums[i]];
  }
  return ans;
}
// @lc code=end
