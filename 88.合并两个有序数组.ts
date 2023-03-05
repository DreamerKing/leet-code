/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
/* function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index = 0;
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= m; j++) {
            if(nums2[i] > nums1[j]){
                index = j;
            } else {
                for(let k = index + 1; k <= m; k++) {
                    nums1[k + 1] = nums1[k];
                }
            }
        }
        nums1[index] = nums2[i];
        // index = i;
    }
}; */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let tail = n + m - 1;
  let current = 0;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 == -1) {
      current = nums2[p2--];
    } else if (p2 == -1) {
      current = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      current = nums1[p1--];
    } else {
      current = nums2[p2--];
    }
    nums1[tail--] = current;
  }
}

let a = [1, 3, 4, 0, 0, 0],
  b = [2, 5, 6];
merge(a, 3, b, 3);
console.log(a);

// @lc code=end
