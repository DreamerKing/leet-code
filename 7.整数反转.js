/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = []
    let num = x > 0? x: -x;
    do {
        arr.push(num % 10);
        num = Number.parseInt(num/10);
    }while (num > 0) 
    let result = Number.parseInt(arr.join(''));
    result = result <= 0x7fffffff? result: 0;
    return x > 0 ? result : -result;
    
   // return x > 0 ? +(x.toString().split('').reverse().join('')) : -((-x).toString().split('').reverse().join(''))
};

console.log(reverse('1534236469'));




