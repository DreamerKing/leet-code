/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let prev = 0; 
    for (let len = digits.length, i = len - 1; i >= 0; i--) {
        if(i == len -1){
            if(digits[i] + 1 == 10){
                digits[i] = 0;
                prev = 1;
            } else {
                prev = 0;
                digits[i] += 1;
            }

            if (i == 0 && prev == 1) {
                digits.unshift(1);
            }
        } else {
            if (digits[i] + prev == 10) {
                digits[i] = 0;
                prev = 1;
            } else {
                digits[i] +=  prev;
                prev = 0;
            } 
            if(i == 0 && prev == 1){
                digits.unshift(1);
            }
        }   
    }
    return digits;
};


