/*
 * @lc app=leetcode.cn id=1725 lang=typescript
 *
 * [1725] 可以形成最大正方形的矩形数目
 */

// @lc code=start
function countGoodRectangles(rectangles: number[][]): number {
  const m = new Map();
  return Math.max(
    ...rectangles
      .map((r) => Math.min(...r))
      .reduce((p, c) => {
        if (p.has(c)) {
          p.set(c, p.get(c) + 1);
        } else {
          p.set(c, 1);
        }
        return p;
      }, m)
      .values()
  );
}
// @lc code=end
