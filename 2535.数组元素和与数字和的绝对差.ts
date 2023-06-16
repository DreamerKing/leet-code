/*
 * @lc app=leetcode.cn id=2535 lang=typescript
 *
 * [2535] 数组元素和与数字和的绝对差
 */

// @lc code=start
function differenceOfSum(nums: number[]): number {
  const x = nums.reduce((pre, cur) => pre + cur, 0);
  const y = [...nums.join("")].reduce(
    (pre, cur) => Number(pre) + Number(cur),
    0
  );
  return Math.abs(x - y);
}
// @lc code=end
