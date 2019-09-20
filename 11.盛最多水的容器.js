/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length; 
    let maxs = [];
    for (let i = 0; i < len; i++) {
        let m = 0;
        let temp = 0;
        for (let j = i + 1; j < len; j++) {
            temp = (j - i) * (Math.min(height[i],height[j]));
            if(m < temp){
                m = temp;
            }  
        }
        maxs.push(m);
    }
    
    return Math.max(...maxs);
};



