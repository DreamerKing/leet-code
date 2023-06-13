/*
 * @lc app=leetcode.cn id=2351 lang=typescript
 *
 * [2351] 第一个出现两次的字母
 */

// @lc code=start
function repeatedCharacter(s: string): string {
  let ch = "";
  const set = new Set();
  for (const c of s) {
    if (!set.has(c)) {
      set.add(c);
    } else {
      ch = c;
      break;
    }
  }
  return ch;
}
// @lc code=end
