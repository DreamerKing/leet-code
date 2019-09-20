/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    for (let i = 0,  len = nums.length; i < len; i++) {
        for(let j = i + 1; j < len; j++){
            let temp = 0 - nums[i] - nums[j];
            if(nums.includes(temp) && temp !== nums[i] && temp !== nums[j]) {
                if (nums[i] == -nums[j] ){
                   // result.push([nums[i], nums[j], temp]);
                } else {
                    result.push([nums[i], nums[j], temp]);

                }
            }  
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));


