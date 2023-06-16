/*
 * @lc app=leetcode.cn id=2160 lang=typescript
 *
 * [2160] 拆分数位后四位数字的最小和
 */

// @lc code=start
function minimumSum(num: number): number {
  const nums = String(num)
    .split("")
    .map((n) => Number(n))
    .sort();
  return (
    nums.slice(0, 2).reduce((pre, cur) => pre * 10 + cur * 10) +
    nums.slice(2).reduce((pre, cur) => pre + cur)
  );
}

// @lc code=end
