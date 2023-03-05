/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
/* function hammingWeight(n: number): number {
  let bs = n.toString(2);
  let count = 0;
  for (let c of bs) {
    if (c == "1") {
      count++;
    }
  }
  return count;
} */

function hammingWeight(n: number): number {
  let count = 0;
  while (n) {
    count++;
    n = n & (n - 1);
  }
  return count;
}

console.log(hammingWeight(0b00000000000000000000000000001011));
// @lc code=end
