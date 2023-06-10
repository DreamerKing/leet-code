/*
 * @lc app=leetcode.cn id=1678 lang=typescript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
function interpret(command: string): string {
  let resoveStr = "";
  const len = command.length;
  for (let i = 0; i < len; ) {
    if (command[i] === "G") {
      resoveStr += "G";
      i++;
    } else if (command[i] === "(" && command[i + 1] === ")") {
      resoveStr += "o";
      i += 2;
    } else if (command.slice(i, i + 4) === "(al)") {
      resoveStr += "al";
      i += 4;
    } else {
      i++;
    }
  }
  return resoveStr;
}
// @lc code=end
