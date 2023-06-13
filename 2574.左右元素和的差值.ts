/*
 * @lc app=leetcode.cn id=2574 lang=typescript
 *
 * [2574] 左右元素和的差值
 */

// @lc code=start
function leftRightDifference(nums: number[]): number[] {
  const leftSum: number[] = [];
  nums.reduce((pre, cur) => {
    leftSum.push(pre);
    pre += cur;
    return pre;
  }, 0);
  const rightSum: number[] = [];
  nums.reduceRight((pre, cur) => {
    rightSum.unshift(pre);
    pre += cur;
    return pre;
  }, 0);
  const result: number[] = [];
  const len = leftSum.length;
  for (let i = 0; i < len; i++) {
    result.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  return result;
}
// console.log(leftRightDifference([10, 4, 8, 3]));
// @lc code=end
