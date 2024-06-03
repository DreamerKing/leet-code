/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
	let len = nums.length;
	let map = new Map();
	for (let i = 0; i < len; i++) {
		if (!map.has(nums[i])) {
			map.set(nums[i], i)
		}
		let b = target - nums[i];
		if (map.has(b)) {
			return [i, map.get(b)];
		}
	}
};

/* const twoSum = function (nums, target) {
	let len = nums.length;
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
}; */

/* const twoSum = function (nums, target) {
	let len = nums.length;
	for (let i = 0; i < len; i++) {
		const index = nums.indexOf(target - nums[i], i + 1);
		if (index > -1) return [i, index];
	}
}; */



let result = twoSum([2, 7, 11, 15], 26);
console.log(result);
