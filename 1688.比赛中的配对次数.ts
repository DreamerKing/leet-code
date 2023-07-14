/*
 * @lc app=leetcode.cn id=1688 lang=typescript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
function numberOfMatches(n: number): number {
  if (n < 2) return 0;

  if (n % 2 === 0) {
    return n / 2 + numberOfMatches(n / 2);
  } else {
    return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
  }
}
// @lc code=end
