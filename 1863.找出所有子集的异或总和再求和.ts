/*
 * @lc app=leetcode.cn id=1863 lang=typescript
 *
 * [1863] 找出所有子集的异或总和再求和
 */

// @lc code=start
function subsetXORSum(nums: number[]): number {
  let sum = 0;
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let arr = [...nums.slice(j, j + i)];
      if (j + i > len) {
        arr.push(...nums.slice(0, i + j - len));
      }
      sum += sumxor(arr);
    }
  }
  sum += sumxor(nums);
  return sum;
}

function sumxor(nums: number[]): number {
  return nums.reduce((pre, cur) => pre ^ cur, 0);
}
// @lc code=end
