/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    let row: number[] = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }

  return result;
}

console.log(generate(5));
// @lc code=end
