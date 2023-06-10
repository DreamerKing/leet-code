/*
 * @lc app=leetcode.cn id=1828 lang=typescript
 *
 * [1828] 统计一个圆中点的数目
 */

// @lc code=start
function countPoints(points: number[][], queries: number[][]): number[] {
  const cn = queries.length;
  const pn = points.length;
  const result: Array<number> = [];
  for (let i = 0; i < cn; i++) {
    let count = 0;
    for (let j = 0; j < pn; j++) {
      if (
        isPointInCycle(
          points[j] as [number, number],
          queries[i] as [number, number, number]
        )
      ) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

function isPointInCycle(
  [x, y]: [number, number],
  [xc, yc, xr]: [number, number, number]
): boolean {
  const xd = x - xc;
  const yd = y - yc;
  const d = xd * xd + yd * yd;
  if (d <= xr * xr) return true;
  return false;
}
// @lc code=end
