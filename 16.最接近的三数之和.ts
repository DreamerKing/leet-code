/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  let min = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0, len = nums.length; i < len; i++) {
    let [left, right] = [i + 1, len - 1];
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      // 如果当前组合的和sum更接近target就更新最小值
      if (Math.abs(sum - target) < Math.abs(min - target)) {
        min = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return min;
      }
    }
  }
  return min;
}
// @lc code=end

console.log(threeSumClosest([-1, 2, 1, -4], 2));
console.log(threeSumClosest([1, 1, 1, 0], -100));
