/*
 * @lc app=leetcode.cn id=2678 lang=typescript
 *
 * [2678] 老人的数目
 */

// @lc code=start
function countSeniors(details: string[]): number {
  return details.filter((d) => Number(d.slice(11, 13)) > 60).length;
}
// @lc code=end
