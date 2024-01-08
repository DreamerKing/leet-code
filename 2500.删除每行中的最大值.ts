/*
 * @lc app=leetcode.cn id=2500 lang=typescript
 *
 * [2500] 删除每行中的最大值
 */

// @lc code=start
function deleteGreatestValue(grid: number[][]): number {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].sort((a, b) => b - a);
  }

  const colums = grid[0].length;
  for (let i = 0; i < colums; i++) {
    let max = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] > max) max = grid[j][i];
    }
    result += max;
  }
  return result;
}
// @lc code=end
