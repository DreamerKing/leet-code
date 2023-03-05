/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  let m1 = frequencyMap(nums1);
  let m2 = frequencyMap(nums2);
  let result: number[] = [];
  for (let num of m1.keys()) {
    if (m2.has(num)) {
      if (m1.get(num) <= m2.get(num)) {
        let pushArray: number[] = new Array(m1.get(num)).fill(num);
        result.push(...pushArray);
      } else {
        let pushArray: number[] = new Array(m2.get(num)).fill(num);
        result.push(...pushArray);
      }
    }
  }
  return result;
}

function frequencyMap(nums) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      m.set(nums[i], m.get(nums[i] + 1));
    } else {
      m.set(nums[i], 1);
    }
  }
  return m;
}
// @lc code=end

console.log(intersect([1, 2, 2, 1], [2, 2]));
