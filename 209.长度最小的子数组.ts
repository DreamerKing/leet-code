/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  let sum = 0, i = 0, count=0;
  const len = nums.length
  while (sum < target && i < len ) {
    sum += nums[i];
    count++;
    if (sum >= target) break;
  }
  return count
};
// @lc code=end

