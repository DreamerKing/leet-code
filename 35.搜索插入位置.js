/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1;
    /*   while (l < r) {
          m = Math.floor((l + r) / 2)
        if(target < nums[m]){
            r = m - 1;
        } else if (target > nums[m]){
          l = m + 1;
        } else {
            break;
        } 
      }  */




    return binSearch(nums, l, r, target);

    function binSearch(nums, left, right, target) {
        if (left > right) {
            return left;
        }
        let m = Math.floor((left + right) / 2);
        if (target = nums[m]) {
            return m;
        } else if (target > nums[m]) {
            left = m + 1;
            return binSearch(nums, left, right, target);
        } else {
            right = m - 1;
            return binSearch(nums, left, right, target);
        }

    }
};



