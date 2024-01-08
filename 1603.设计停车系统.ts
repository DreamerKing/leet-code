/*
 * @lc app=leetcode.cn id=1603 lang=typescript
 *
 * [1603] 设计停车系统
 */

// @lc code=start
class ParkingSystem {
  private readonly bigMax: number;
  private readonly midMax: number;
  private readonly samMax: number;
  private readonly CarTypeMap = {
    1: "big",
    2: "mid",
    3: "sam",
  };
  private big: number = 0;
  private mid: number = 0;
  private sam: number = 0;
  constructor(big: number, medium: number, small: number) {
    this.bigMax = big;
    this.midMax = medium;
    this.samMax = small;
  }

  addCar(carType: number): boolean {
    if (
      this[this.CarTypeMap[carType]] < this[`${this.CarTypeMap[carType]}Max`]
    ) {
      this[this.CarTypeMap[carType]] += 1;
      return true;
    } else {
      return false;
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
