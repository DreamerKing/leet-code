/*
 * @lc app=leetcode.cn id=1929 lang=typescript
 *
 * [1929] 数组串联
 */

// @lc code=start
function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
  // return nums.concat(nums.slice());
}
// @lc code=end
