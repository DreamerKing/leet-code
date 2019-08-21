/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = [];
    let [first='', ...rest] = (Array.isArray(strs)? strs: JSON.parse(strs));
    console.log((Array.isArray(strs) ? strs : JSON.parse(strs)));
    
    for(let i = 0, len = first.length; i < len; i++ ){
        if(rest.every(item => item.charAt(i) == first.charAt(i))){
            common.push(first.charAt(i))
        } else {
            break;
        }
    }
    return common.join('');
};




