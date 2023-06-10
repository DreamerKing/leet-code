/*
 * @lc app=leetcode.cn id=2710 lang=typescript
 *
 * [2710] 移除字符串中的尾随零
 */

// @lc code=start
function removeTrailingZeros(num: string): string {
  let len = num.length;
  let position = len - 1;
  while (num[position] === "0") {
    position--;
  }
  return num.slice(0, position + 1);
}
// @lc code=end
