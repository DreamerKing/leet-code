/*
 * @lc app=leetcode.cn id=2974 lang=typescript
 *
 * [2974] 最小数字游戏
 */

// @lc code=start
function numberGame(nums: number[]): number[] {
  const arr: number[] = [];
  let firstMin, secondMin;
  while (nums.length) {
    firstMin = findMinRemove(nums);
    secondMin = findMinRemove(nums);
    arr.push(secondMin);
    arr.push(firstMin);
  }
  return arr;
};

function findMinRemove(nums) {
  let index = 0, minIndex, min = Infinity;
  for (const item of nums) {
    if (item < min) {
      min = item;
      minIndex = index;
    }
    index++;
  }
  nums.splice(minIndex, 1);
  return min;
}
// @lc code=end

