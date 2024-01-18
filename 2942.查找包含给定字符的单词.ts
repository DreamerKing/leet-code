/*
 * @lc app=leetcode.cn id=2942 lang=typescript
 *
 * [2942] 查找包含给定字符的单词
 */

// @lc code=start
function findWordsContaining(words: string[], x: string): number[] {
  let l = 0, r = words.length - 1;
  const mid = Math.floor(r / 2);
  return findWordIndex(words, 0, mid-1, x).concat(findWordIndex(words, mid, r, x));
};

function findWordIndex(words, left, right, x) {
  const result: number[] = [];
  for (let i = left; i <= right; i++){
    if (words[i].includes(x)) {
      result.push(i);
    }
  }
  return result;
}

/* function findWordsContaining(words: string[], x: string): number[] {
  let index = 0;
  const result: number[] = [];
  for (const str of words) {
    if (str.includes(x)) {
      result.push(index);
    }
    index++;
  }
  return result;
}; */
// @lc code=end

