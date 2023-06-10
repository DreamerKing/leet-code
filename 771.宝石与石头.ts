/*
 * @lc app=leetcode.cn id=771 lang=typescript
 *
 * [771] 宝石与石头
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
  const jewelsMap = new Set(jewels.split(""));
  const len = stones.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (jewelsMap.has(stones[i])) {
      count++;
    }
  }
  return count;
}
// @lc code=end
