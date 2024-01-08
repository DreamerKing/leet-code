/*
 * @lc app=leetcode.cn id=1944 lang=typescript
 *
 * [1944] 队列中可以看到的人数
 */

// @lc code=start
function canSeePersonsCount(heights: number[]): number[] {
  const len = heights.length;
  let result = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = i + 1; j < len; j++) {
      if (heights[i] > heights[j]) {
        count++;
      } else if (heights[j] >= heights[i] && j == i + 1) {
        count++;
        result[i] = count;
        break;
      } else {
        result[i] = count;
        break;
      }
    }
  }
  return result;
};
// @lc code=end

