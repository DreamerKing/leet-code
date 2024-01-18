/*
 * @lc app=leetcode.cn id=2894 lang=typescript
 *
 * [2894] 分类求和并作差
 */

// @lc code=start
function differenceOfSums(n: number, m: number): number {
  let num1 = 0, num2 = 0;
  let index = 1, step = 1;
  while (index <= n) {
    if (step * m != index) {
      num1 += index;
    } else {
      num2 += index;
      step++;
    }
    index++;
  }
  return num1 - num2;
};
// @lc code=end

