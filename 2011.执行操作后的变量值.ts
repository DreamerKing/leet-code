/*
 * @lc app=leetcode.cn id=2011 lang=typescript
 *
 * [2011] 执行操作后的变量值
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
  const m = new Map([
    ["++X", 1],
    ["X++", 1],
    ["--X", -1],
    ["X--", -1],
  ]);
  let x = 0;
  for (const op of operations) {
    x += m.get(op) ?? 0;
  }
  return x;
}
// @lc code=end
