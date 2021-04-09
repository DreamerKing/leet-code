/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */

 /* var lengthOfLongestSubstring = function(s) {
    let res = {};
    let re = 0;
    let l = 0, r = -1;
    let len = s.length;
    while(l < len){
        if(r + 1 < len && res[s[r+1]]== undefined){
            r++;
            res[s[r+1]] = 1;
            re++;
        } else {
            res[s[r+1]] += 1;
            l++;
        }
        re = Math.max(re, r-l+1);
    }
    return re;
 } */

 function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        console.log(map[v] >= left);
        
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        console.log(map, " > ", max);
        
        return Math.max(max, i - left + 1);
    }, 0);
}
console.log(lengthOfLongestSubstring("abcabcbb"));

/* var lengthOfLongestSubstring = function(s) {
   let res = [];
   let len = s.length;
   for(let i = 0; i < len; i++){
       let j = i+1;
       for(; j < len - 1; ){
         if(!(s.slice(i, j).includes(s[j]))){
             j++;
         }else {
             break;
         }
       }
    res[i] = s.slice(i,j+1);
   }   
   console.log(res);
    
   return res.reduce((a, b) => {
       if(a.length > b.length){
           return a;
       }else {
           return b;
       }
   }, '');
};

console.log(lengthOfLongestSubstring("abcabcbb")); */
console.log(lengthOfLongestSubstring("abcabcbb"));


