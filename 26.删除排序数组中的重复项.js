/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let m = new Map();
    for (let index = 0; index < nums.length;) {
       if(m.get(nums[index])){
           nums.splice(index, 1); 
       } else {
           m.set(nums[index], true);
           index++;
       }
    }
    return nums.length;
};





