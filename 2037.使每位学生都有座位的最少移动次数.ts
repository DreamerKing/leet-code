/*
 * @lc app=leetcode.cn id=2037 lang=typescript
 *
 * [2037] 使每位学生都有座位的最少移动次数
 */

// @lc code=start
function minMovesToSeat(seats: number[], students: number[]): number {
  let count = 0;
  while (students.length) {
    let minDiff = Infinity;
    let removeStudentIndex = -1;
    let removeSeatsIndex = -1;
    for (let i = 0, slen = students.length; i < slen; i++) {
      for (let j = 0, seaLen = seats.length; j < seaLen; j++) {
        const diff = Math.abs(students[i] - seats[j]);
        if (diff < minDiff) {
          minDiff = diff;
          removeStudentIndex = i;
          removeSeatsIndex = j;
        }
      }
    }
    count += minDiff;
    removeStudentIndex > -1 && students.splice(removeStudentIndex, 1);
    removeSeatsIndex > -1 && seats.slice(removeSeatsIndex, 1);
  }
  return count;
}
// @lc code=end
