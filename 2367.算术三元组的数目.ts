/*
 * @lc app=leetcode.cn id=2367 lang=typescript
 *
 * [2367] 算术三元组的数目
 */

// @lc code=start
function arithmeticTriplets(nums: number[], diff: number): number {
  let count = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);
    const lcount = left.filter((x) => nums[i] - diff === x).length;
    const rcount = right.filter((x) => nums[i] + diff === x).length;
    if (lcount > 0 && rcount > 0) {
      count += lcount + rcount;
    }
  }
  return count;
}
// @lc code=end
