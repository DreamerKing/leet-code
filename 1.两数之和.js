/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    for(let j = 0; j < len; j++){
        for(let i = j+1; i < len; i++){
            if(nums[j] + nums[i] == target){
                return [j, i];
            }
        }
    }
};

// let result = twoSum([2, 7, 11, 15],26);
// console.log(result);


