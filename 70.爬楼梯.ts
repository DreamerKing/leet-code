/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

const map = new Map([[1, 1],[2, 2]]);

// @lc code=start
function climbStairs(n: number): number {

  if (n == 1) return 1;
  if (n == 2) return 2;

  if (map.has(n)) return map.get(n) as number;

  const result = climbStairs(n - 1) + climbStairs(n - 2);
  map.set(n, result);
  return result
};
// @lc code=end

