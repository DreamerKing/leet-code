/*
 * @lc app=leetcode.cn id=2315 lang=typescript
 *
 * [2315] 统计星号
 */

// @lc code=start
/* function countAsterisks(s: string): number {
  let count = 0;
  const len = s.length;
  let subCount = 0;
  let isInslash = false;
  for (let i = 0; i < len; i++) {
    if (s[i] == "|") {
      if (isInslash) {
        count -= subCount;
        subCount = 0;
      }
      isInslash = !isInslash;
    } else if (s[i] === "*") {
      count++;
      if (isInslash) {
        subCount++;
      }
    }
  }
  return count;
} */

function countAsterisks(s: string): number {
  let countArr = s.split("|").map((s) => s.replace(/[^\*]/g, ""));
  if (countArr.length <= 2) {
    return countArr.reduce((pre, cur) => pre + cur.length, 0);
  } else {
    let count = 0;
    for (let i = 0; i < countArr.length; i += 2) {
      count += countArr[i].length;
    }
    return count;
  }
}
// @lc code=end
