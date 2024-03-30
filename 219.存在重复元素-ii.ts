/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();
  const len = nums.length;
  for (let idx = 0; idx < len; idx++) {
    let num = nums[idx];
    if (map.has(num)) {
      map.get(num).push(idx);
    } else {
      map.set(num, [idx]);
    }
  }
  
  let repeat = [...map.values()].filter(item => item.length > 1)
    .map(item => item.reduce((pre, cur, idx) => {
      if (idx >= 1) {
        pre.push(cur - item[idx - 1]);
      }
      return pre;
    }, [])).flat();
  return [...repeat].some(item => item <= k);
};

console.log(containsNearbyDuplicate([1,0,1,1], 1))
// @lc code=end

