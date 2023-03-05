/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];
  for (let num of nums1) {
    if (nums2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
// @lc code=end
