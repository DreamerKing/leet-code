/*
 * @lc app=leetcode.cn id=2194 lang=typescript
 *
 * [2194] Excel 表中某个范围内的单元格
 */

// @lc code=start
function cellsInRange(s: string): string[] {
  const aphbet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [c1, r1, c2, r2] = s
    .split(":")
    .map((cr) => cr.split(""))
    .flat(1);
  const cn1 = aphbet.indexOf(c1);
  const cn2 = aphbet.indexOf(c2);
  const cr1 = Number(r1);
  const cr2 = Number(r2);
  const result: string[] = [];
  for (let i = cn1; i <= cn2; i++) {
    for (let j = cr1; j <= cr2; j++) {
      result.push(aphbet.charAt(i) + j);
    }
  }
  return result;
}
console.log(cellsInRange("K1:L2"));

// @lc code=end
