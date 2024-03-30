/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let pre = 1;
  let len = digits.length - 1;
  for (;len >= 0; len--){
    let current = digits[len] + pre
    if (current == 10) {
      digits[len] = 0;
      pre = 1;
    } else {
      digits[len] = current;
      pre = 0;
    }
  }
  if (pre == 1) digits.unshift(1);
  return digits;
};
// @lc code=end

