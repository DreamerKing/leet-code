/*
 * @lc app=leetcode.cn id=2744 lang=typescript
 *
 * [2744] 最大字符串配对数目
 */

// @lc code=start
function maximumNumberOfStringPairs(words: string[]): number {
  let count = 0;
  for (let i = 0, len = words.length - 1; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (words[i] === reverseWord(words[j])) count++;
    }
  }
  return count;
}

function reverseWord(word: string) {
  return [...word].reverse().join("");
}
// @lc code=end
