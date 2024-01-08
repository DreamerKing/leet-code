/*
 * @lc app=leetcode.cn id=1791 lang=typescript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
function findCenter(edges: number[][]): number {
  /*  const [first, ...rest] = edges;
  let result = first[0];
  for (const s of first) {
    if (rest.every((a) => a.includes(s))) {
      result = s;
      break;
    }
  } */
  let result;
  const nodeMap = new Map();
  edges.flat().forEach((a) => {
    if (nodeMap.has(a)) {
      nodeMap.set(a, nodeMap.get(a) + 1);
    } else {
      nodeMap.set(a, 1);
    }
  });
  for (const [k, v] of nodeMap.entries()) {
    if (v > 1) {
      result = k;
      break;
    }
  }

  return result;
}
// @lc code=end
