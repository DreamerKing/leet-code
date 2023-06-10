/*
 * @lc app=leetcode.cn id=2325 lang=typescript
 *
 * [2325] 解密消息
 */

// @lc code=start
function decodeMessage(key: string, message: string): string {
  const map = new Map();
  const az = "abcdefghijklmnopqrstuvwxyz";
  let start = 0;
  for (const c of key) {
    if (c !== " " && !map.has(c)) {
      map.set(c, az[start]);
      let next = start + 1;
      start = next > 26 ? next % 26 : next;
    }
  }

  let res = "";
  for (const c of message) {
    if (c == " ") {
      res += c;
    } else {
      res += map.get(c);
    }
  }
  return res;
}

// @lc code=end
