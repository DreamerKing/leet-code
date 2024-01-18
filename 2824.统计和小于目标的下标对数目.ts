/*
 * @lc app=leetcode.cn id=2824 lang=typescript
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lc code=start
function countPairs(nums: number[], target: number): number {
  const len = nums.length;
  const len1 = len - 1;
  let count = 0;

  for (let i = 0; i < len1; i++) {
    for (let j = i + 1; j < len; j++){
      if (nums[i] + nums[j] < target) {
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

