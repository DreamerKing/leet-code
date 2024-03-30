/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  const map = new Map();
  const map2 = new Map();
  
  for (let i = 0; i < s.length; i++){
    if (!map.has(s[i]) && !map2.has(t[i])) {
      map.set(s[i], t[i]);
      map2.set(t[i], s[i]);
    }
  }

  let str = '';
  for (const c of s) {
    str += map.get(c);
  }


  return str == t;
};
// @lc code=end

