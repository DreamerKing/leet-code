/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  s = s.replace(/([_]|[^\w])*/g, "").toLocaleLowerCase();
  if (s.length <= 1) return true;
  for (let i = 0, len = s.length, j = len - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}
// @lc code=end
