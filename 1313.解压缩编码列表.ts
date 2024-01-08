/*
 * @lc app=leetcode.cn id=1313 lang=typescript
 *
 * [1313] 解压缩编码列表
 */

// @lc code=start
function decompressRLElist(nums: number[]): number[] {
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i += 2) {
    const num = new Array(nums[i]);
    result.push(num.fill(nums[i + 1]));
  }
  return result.flat();
}
// @lc code=end
