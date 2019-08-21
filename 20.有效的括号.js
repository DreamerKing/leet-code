/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let c = [];
    for (let i = 0, len = s.length; i < len; i++) {
       if(["(", "[", "{"].includes(s[i])){
            c.push(s[i]);
       } else if([")", "}", "]"].includes(s[i])){
            let l = c[c.length - 1];
           if ((l == "(" && s[i] == ")") || (l == "[" && s[i] == "]") || (l == "{" && s[i] == "}")){
               c.pop();
           } else {
               c.push(s[i])
           }
       }
        
    }
    return c.length == 0;
}


