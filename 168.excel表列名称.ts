/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
  const strMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const arr: string[] = [];
  let curent = -1;
  while (columnNumber) {
    curent = ((columnNumber - 1) % 26) + 1;
    arr.push(strMap[curent - 1]);
    columnNumber = Math.floor((columnNumber - curent) / 26);
  }
  return arr.reverse().join("");
}
// @lc code=end
