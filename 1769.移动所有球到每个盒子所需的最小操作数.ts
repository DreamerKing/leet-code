/*
 * @lc app=leetcode.cn id=1769 lang=typescript
 *
 * [1769] 移动所有球到每个盒子所需的最小操作数
 */

// @lc code=start
function minOperations(boxes: string): number[] {
  const answer: number[] = [];
  const len = boxes.length;
  for (let i = 0; i < len; i++) {
    let steps = 0;
    for (let j = 0; j < len; j++) {
      if (boxes[j] == "1" && i !== j) {
        steps += Math.abs(i - j);
      }
    }
    answer.push(steps);
  }
  return answer;
}
// @lc code=end
