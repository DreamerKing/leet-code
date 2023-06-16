/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  const words = s.trim().split(/\s+/);
  return words.reverse().join(" ");
}
// @lc code=end
