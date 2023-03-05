/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let index = nums.length;
  for (let i = 0; i < index; i++) {
    if (target <= nums[i]) return i;
  }
  return index;
}

console.log(searchInsert([1, 3, 5, 6], 5));

// @lc code=end
