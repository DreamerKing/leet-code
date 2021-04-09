/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1, 
        right = Math.floor(x / 2) + 1, 
        mid, midInt;
   do {
        mid =(left + right) / 2;
        midInt = Math.floor(mid * mid);
    if(midInt > x) {
        right = mid - 1;
    }  else if(midInt < x) {
        left = mid + 1;   
    } else {
        return Math.floor(mid);
    }
   } while(true);
};

// @lc code=end

