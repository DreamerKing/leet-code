/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
/* function addBinary(a: string, b: string): string {
  let sum = "";
  let pev = 0;
  for (
    let p1 = a.length - 1, p2 = b.length - 1;
    p1 >= 0 || p2 >= 0;
    p1--, p2--
  ) {
    let x = 0,
      y = 0;
    if (p1 >= 0 && p1 < a.length) {
      x = Number(a.charAt(p1));
    }
    if (p2 >= 0 && p2 < b.length) {
      y = Number(b.charAt(p2));
    }
    let count = x + y + pev;
    if (count > 1) {
      if (count == 2) {
        sum = "0" + sum;
      } else {
        sum = "1" + sum;
      }
      pev = 1;
    } else {
      sum = count + sum;
      pev = 0;
    }
  }

  if (pev == 1) {
    sum = pev + sum;
  }
  return sum;
} */

function addBinary(a: string, b: string): string {
  let n = Math.max(a.length, b.length);
  let ar = a.padStart(n, "0");
  let br = b.padStart(n, "0");
  let rr = Array(n).fill("0");
  let carry = 0;
  for (let i = n - 1; i >= 0; i--) {
    let av = +ar.charAt(i);
    let bv = +br.charAt(i);
    let cv = av + bv + carry;
    rr[i] = cv % 2;
    carry = Math.floor(cv / 2);
  }
  if (carry > 0) rr.unshift(carry);
  return rr.join("");
}

console.log(addBinary("1010", "1111"));
// 01010 01010 01010 01010
//1010
//1111
//11001
// @lc code=end
