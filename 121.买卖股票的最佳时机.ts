/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/* function maxProfit(prices: number[]): number {
	let max = 0,
		len = prices.length;
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			let temp = prices[j] - prices[i];
			if (temp > max) {
				max = temp;
			}
		}
	}
	return max;
} */

/* function maxProfit(prices: number[]): number {
	let max = 0;
	if (prices.length == 1) return max;
	let lMax = Math.max(...prices.slice(1));
	let temp = lMax - prices[0];
	if (temp > max) max = temp;
	let rMax = maxProfit(prices.slice(1));
	return rMax > max ? rMax : max;
} */
/* 
function maxProfit(prices: number[]): number {
	let minPrice = prices[0],
		max = 0,
		temp = 0,
		len = prices.length;
	for (let i = 1; i < len; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		} else if ((temp = prices[i] - minPrice) > max) {
			max = temp;
		}
	}
	return max;
}
 */

function maxProfit(prices: number[]): number {
	let min = Infinity,
		max = 0,
		len = prices.length;
	for (let i = 0; i < len; i++) {
		min = Math.min(min, prices[i]);
		max = Math.max(max, prices[i] - min);
	}
	return max;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// @lc code=end
