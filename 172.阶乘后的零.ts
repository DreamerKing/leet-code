/*
 * @lc app=leetcode.cn id=172 lang=typescript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/* function trailingZeroes(n: number): number {
    let result = factorial(n);
    const resultStr = String(result);
    let count = 0;
    let i = resultStr.length - 1;
    while(resultStr[i] == '0'){
        count++;
        i--;
    }
    return count;
};

function factorial(n: number): number {
    if(n < 1) return 1;
    return factorial(n - 1) * n;
} */
/* 
function trailingZeroes(n: number): number {
    let count = 0;
    while(n >= 5){
        count += Math.floor(n / 5);
        n -= 5;
    }
    return count;
} */

/* 
function trailingZeroes(n: number): number {
    let count = 0;
    for(let i = 1; i <=n; i++) {
        let N = i;
        while(N >= 5){
            if(N % 5 == 0){
                count++;
                N = Math.floor(N / 5);
            } else {
                break;
            }
        }
    }
    return count;
} */
// 计算5出现的次数
function trailingZeroes(n: number): number {
    let count = 0;
    for(let i = 0; i <= n; i += 5){
        let N = i;
        while( N >= 5) {
            if(N % 5 == 0) {
                count++;
                N /=  5; 
            } else {
                break;
            }
           
        }
    }
    
    return count;
}

/* function factorial(n: number): number {
    if(n <= 1) return 1;
    return factorial(n - 1) * n;
}
console.log(factorial(20));

console.log(trailingZeroes(20)); */

// @lc code=end

