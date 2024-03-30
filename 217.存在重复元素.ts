/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  /* const len = nums.length;

  let result = false;
   out: for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] == nums[j]) {
        result = true;
        break out
      }
    }
  }
  return result;
  */
  const map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, true)
    } else {
      map.set(num, false);
    }
  }

  let result = false;
  for (const val of map.values()) {
    if (val) {
      result = true;
      break;
    }
  }
  return result;
};
// @lc code=end

