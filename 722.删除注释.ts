/*
 * @lc app=leetcode.cn id=722 lang=typescript
 *
 * [722] 删除注释
 */

// @lc code=start
function removeComments(source: string[]): string[] {
  let result: string[] = [];
  let inBlocked = false;
  const sourceLength = source.length;
  let code = "";
  for (let i = 0; i < sourceLength; i++) {
    if (!inBlocked) code = "";
    let line = source[i];

    for (let j = 0; j < line.length; j++) {
      let ch = line.charAt(j);
      let nextCh = line.charAt(j + 1); // 下一个字符
      let currentLineLength = line.length;

      if (!inBlocked && ch === "/" && nextCh === "*") {
        inBlocked = true;
        if (j + 1 < currentLineLength) j++;
      } else if (!inBlocked && ch === "/" && nextCh === "/") {
        break;
      } else if (inBlocked && ch === "*" && nextCh === "/") {
        inBlocked = false;
        if (j + 1 < currentLineLength) j++;
      } else if (!inBlocked) {
        code += ch;
      }
    }

    if (!inBlocked && code.length > 0) {
      result.push(code);
    }
  }
  return result;
}

let source = [
  "/*Test program */",
  "int main()",
  "{ ",
  "  // variable declaration ",
  "int a, b, c;",
  "/* This is a test",
  "   multiline  ",
  "   comment for ",
  "   testing */",
  "a = b + c;",
  "}",
];

let result2 = removeComments(source);
console.log(result2);
// @lc code=end
