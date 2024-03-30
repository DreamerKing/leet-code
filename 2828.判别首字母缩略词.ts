/*
 * @lc app=leetcode.cn id=2828 lang=typescript
 *
 * [2828] 判别首字母缩略词
 */

// @lc code=start
function isAcronym(words: string[], s: string): boolean {
  return words.reduce((pre, cur) => pre + cur.charAt(0), '') === s;
};
// @lc code=end

