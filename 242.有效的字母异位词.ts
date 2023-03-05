/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  let sortedS = [...s].sort().join("");
  let sortedT = [...t].sort().join("");
  return sortedS == sortedT;
}
/* function isAnagram(s: string, t: string): boolean {
  let sm = new Map(),
    tm = new Map();
  setMap(sm, s);
  setMap(tm, t);
  let flag = true;
  if (sm.size == tm.size) {
    for (let c of sm.keys()) {
      if (sm.get(c) !== tm.get(c)) {
        flag = false;
        break;
      }
    }
  } else {
    flag = false;
  }
  return flag;
}

function setMap(m, s) {
  for (let c of s) {
    if (m.has(c)) {
      m.set(c, m.get(c) + 1);
    } else {
      m.set(c, 1);
    }
  }
} */

console.log(isAnagram("anagram", "nagaram"));
// @lc code=end
