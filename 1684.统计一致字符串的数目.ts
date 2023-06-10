/*
 * @lc app=leetcode.cn id=1684 lang=typescript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
  let count = 0;
  for (let word of words) {
    if (isNormalString(allowed, word)) {
      count++;
    }
  }
  return count;
}

function isNormalString(allowed: string, word: string): boolean {
  let len = word.length;
  let isNormal = true;
  for (let i = 0; i < len; i++) {
    if (!allowed.includes(word.charAt(i))) {
      isNormal = false;
      break;
    }
  }
  return isNormal;
}
// @lc code=end
