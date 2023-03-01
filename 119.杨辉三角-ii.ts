/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  const tringle: number[][] = [];
  for (let i = 0; i <= rowIndex; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      row[j] = tringle[i - 1][j - 1] + tringle[i - 1][j];
    }
    tringle.push(row);
  }
  return tringle[rowIndex];
}

console.log(getRow(0));
// @lc code=end
