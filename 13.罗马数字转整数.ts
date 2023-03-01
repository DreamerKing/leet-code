/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const M = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let num = 0;
  if (s.length == 1) {
    num = M[s];
    return num;
  }
  const slen = s.length;
  for (let i = 0; i < slen; i++) {
    // 左侧字符小于右侧字符时做特殊处理
    let cValue = M[s[i]];
    let nextCharValue = M[s[i + 1]];
    if (i + 1 < slen && cValue < nextCharValue) {
      num += nextCharValue - cValue;
      i++;
    } else {
      num += cValue;
    }
  }
  return num;
}

console.log(romanToInt("CMXCIX"));
// @lc code=end
