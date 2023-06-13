/*
 * @lc app=leetcode.cn id=2697 lang=typescript
 *
 * [2697] 字典序最小回文串
 */

// @lc code=start
function makeSmallestPalindrome(s: string): string {
  const sa = [...s];
  const len = sa.length;
  let l = Math.ceil(len / 2) - 1;
  let r = len % 2 ? l : l + 1; // 注意边界
  while (l >= 0) {
    console.log(sa[l], sa[r]);
    if (sa[l] > sa[r]) {
      sa[l] = sa[r];
    } else if (sa[l] < sa[r]) {
      sa[r] = sa[l];
    }
    l--;
    r++;
  }
  return sa.join("");
}

console.log(makeSmallestPalindrome("abcd"));

/* function makeSmallestPalindrome(s: string): string {
  let result: string = "";
  const len = s.length;
  for (let i = 0, j = len - 1; i <= j; i++, j--) {
    if (s[i] < s[j]) {
      result += s[i];
    } else if (s[i] > s[j]) {
      result += s[j];
    } else {
      result += s[i];
    }
  }
  return (
    result +
    result
      .slice(0, len % 2 ? -1 : result.length)
      .split("")
      .reverse()
      .join("")
  );
} */
// @lc code=end
