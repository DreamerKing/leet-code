/*
 * @lc app=leetcode.cn id=1512 lang=typescript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
  let count = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
  }
  return count;
}
// @lc code=end
