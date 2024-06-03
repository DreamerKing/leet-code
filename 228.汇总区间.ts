/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  const len = nums.length;
  const result: string[] = []
  if (len <= 0) return result;
  let start = nums[0];
  for (let i = 1; i <= len; i++) {
    if (nums[i - 1] + 1 != nums[i]) {
      if (nums[i - 1] == start) {
        result.push(String(start));
      } else {
        result.push(String(start) + "->" + String(nums[i-1]));
      }
      start = nums[i];
    }
  }
  return result
};
// @lc code=end

