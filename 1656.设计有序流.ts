/*
 * @lc app=leetcode.cn id=1656 lang=typescript
 *
 * [1656] 设计有序流
 */

// @lc code=start
class OrderedStream {
  private ptr = 1;
  private stream: string[] = [];
  protected size: number;
  constructor(n: number) {
    this.stream = Array(n).fill("");
    this.size = n;
  }

  insert(idKey: number, value: string): string[] {
    this.stream[idKey - 1] = value;
    const result: string[] = [];
    if (this.ptr === idKey) {
      for (let current = idKey - 1; current < this.size; current++) {
        let cur = this.stream[current];
        if (!!cur) {
          result.push(cur);
        } else {
          break;
        }
      }
      this.ptr++;
    }
    return result;
  }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end
