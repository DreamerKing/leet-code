/*
 * @lc app=leetcode.cn id=2373 lang=typescript
 *
 * [2373] 矩阵中的局部最大值
 */

// @lc code=start
function largestLocal(grid: number[][]): number[][] {
  const result: number[][] = [];
  const n = grid.length;
  for (let i = 0; i < n - 2; i++) {
    result[i] = new Array(n - 2).fill(0);
  }
  for (let i = 0, rows = result.length; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      result[i][j] = max3x3Grid(grid, i, j);
    }
  }
  return result;
}

function max3x3Grid(grid: number[][], i: number, j: number): number {
  const cols = j + 3;
  const grid3x3 = [
    ...grid[i].slice(j, cols),
    ...grid[i + 1].slice(j, cols),
    ...grid[i + 2].slice(j, cols),
  ];
  return Math.max(...grid3x3);
}
// @lc code=end
