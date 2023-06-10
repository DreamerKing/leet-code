/*
 * @lc app=leetcode.cn id=1773 lang=typescript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
function countMatches(
  items: Item[],
  ruleKey: RuleKey,
  ruleValue: string
): number {
  const keyMapIndex = {
    type: 0,
    color: 1,
    name: 2,
  };
  let count = 0;
  for (const item of items) {
    if (item[keyMapIndex[ruleKey]] === ruleValue) {
      count++;
    }
  }
  return count;
}

type Item = [type: string, color: string, name: string];

type RuleKey = "type" | "color" | "name";

// @lc code=end
