/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
/* var lengthOfLastWord = function(s) {
    let len = 0; 
    let l = s.length;
    let start = l - 1;
    let char = s.charAt(start);
    while (char == ' ') {
      start--;
      char = s.charAt(start);
    }
   
    while (start >= 0 && char && char != ' ') {
        start--;
        char = s.charAt(start);
        len++;
    }
    return len;
}; */

var lengthOfLastWord = function (s) {
    let len = 0;
    let l = s.length;
    let start = l - 1;
    let char = s.charAt(start);
    for ( ; start >= 0 ; ) {
        if(char != ' '){
            len++; 
        } 
        if((char == ' ' && len > 0)||!char ){
            break;
        }
        start--;
        char = s.charAt(start); 
    }
    return len;
};





