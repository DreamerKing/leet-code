/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  const charMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((pre, c, index) => {
    pre[c] = index + 1;
    return pre;
  }, {});
  let serialNum = 0;
  let i = 0;
  let len = columnTitle.length;
  while (len > 0) {
    serialNum += charMap[columnTitle[--len]] * Math.pow(26, i);
    i++;
  }
  return serialNum;
};
// @lc code=end

