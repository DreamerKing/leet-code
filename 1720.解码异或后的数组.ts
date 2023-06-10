/*
 * @lc app=leetcode.cn id=1720 lang=typescript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
function decode(encoded: number[], first: number): number[] {
  const result: number[] = [first];
  for (const en of encoded) {
    const next = en ^ result[result.length - 1];
    result.push(next);
  }

  return result;
}
// @lc code=end
