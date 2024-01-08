/*
 * @lc app=leetcode.cn id=1281 lang=typescript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
function subtractProductAndSum(n: number): number {
  const nArr = n
    .toString()
    .split("")
    .map((c) => Number.parseInt(c, 10));
  const sum = nArr.reduce((a, b) => a + b, 0);
  const product = nArr.reduce((a, b) => a * b, 1);
  return product - sum;
}
// @lc code=end
