/*
 * @lc app=leetcode.cn id=807 lang=typescript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const max = maxGrid(grid);
  console.log(max);
  let sum = 0;
  const rowLen = grid.length;
  const colLen = grid[0].length;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      sum += max[i][j] - grid[i][j];
    }
  }
  return sum;
}

function rowAndColMax(grid: number[][]): { row: number[]; col: number[] } {
  let row: number[] = [];
  let col: number[] = [];
  const rowLen = grid.length;
  const colLen = grid[0].length;
  for (let i = 0; i < rowLen; i++) {
    let rowMax = grid[i][0];
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] > rowMax) {
        rowMax = grid[i][j];
      }
    }
    row.push(rowMax);
  }
  // 似乎是重复的
  for (let i = 0; i < colLen; i++) {
    let colMax = grid[0][i];
    for (let j = 0; j < rowLen; j++) {
      if (grid[j][i] > colMax) {
        colMax = grid[j][i];
      }
    }
    col.push(colMax);
  }

  return { row, col };
}

function maxGrid(grid: number[][]): number[][] {
  let { row, col } = rowAndColMax(grid);
  const rowLen = row.length;
  const colLen = col.length;
  const max: number[][] = [];
  for (let i = 0; i < rowLen; i++) {
    let rowArray: number[] = [];
    for (let j = 0; j < colLen; j++) {
      const result = Math.min(row[i], col[j]);
      rowArray.push(result);
    }
    max.push(rowArray);
  }
  return max;
}

// @lc code=end
