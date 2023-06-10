/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
/* function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  let len = nums.length;

  const dfs = (index: number, list: number[]) => {
    if (index === len) {
      // 指针越界
      res.push(list.slice()); // 加入解集
      return; //结束当前递归
    }
    list.push(nums[index]); // 选取这个数
    dfs(index + 1, list); // 基于选择，继续递归，考察下一个数
    list.pop(); // 上面递归结束，撤销该选择
    dfs(index + 1, list); // 不选这个数，继续考察下一个数
  };

  dfs(0, []);
  return res;
}
 */
function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  let len = nums.length;

  const dfs = (index: number, list: number[]) => {
    res.push(list.slice()); //调用子递归前加入解集
    for (let i = index; i < len; i++) {
      list.push(nums[i]); // 选取这个数
      dfs(i + 1, list); // 基于这个数进行递归
      list.pop(); //撤销选这个数
    }
  };

  dfs(0, []);
  return res;
}

// @lc code=end
