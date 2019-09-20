/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        let max = nums[i];
        let index = i;
        let sum = nums[i];
        for (let j = i + 1; j < len; j++){
            sum += nums[j];
            if(sum > max){
                max = sum;
                index = j;
            }
        }
        result.push({max, index});  
    }
    
    let start = 0;
    let finalResult =  result.reduce((pre, cur, index) => {
        if(pre.max < cur.max){
            start = index;
            return cur;
        } else {
            return pre;
        } 
    });
    // console.log(start);
    return finalResult.max;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


