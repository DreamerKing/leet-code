/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums = [];
    for (let i = 0, j = 0, len1 = nums1.length, len2 = nums2.length; i < len1 || j < len2;) {
        if (i < len1 && j < len2) {
            if (nums1[i] < nums2[j]) {
                nums.push(nums1[i]);
                i++;
            } else if (nums1[i] > nums2[j]) {
                nums.push(nums2[j]);
                j++;
            } else if (nums1[i] == nums2[j]) {
                nums.push(nums1[i]);
                nums.push(nums2[j]);
                i++;
                j++;
            }
        }
        if (i >= len1 && j < len2) {
            nums.push(nums2[j]);
            j++;
        }
        if (j >= len2 && i < len1) {
            nums.push(nums1[i]);
            i++;
        }
    }

    let len = nums.length;

    if (len % 2) {
        return nums[(len + 1) / 2 - 1]
    } else {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2;
    }
};


