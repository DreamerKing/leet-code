/*
 * @lc app=leetcode.cn id=2114 lang=typescript
 *
 * [2114] 句子中的最多单词数
 */

// @lc code=start
function mostWordsFound(sentences: string[]): number {
  return Math.max(...sentences.map((s) => s.split(/\s+/).length));
}
// @lc code=end
