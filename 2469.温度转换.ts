/*
 * @lc app=leetcode.cn id=2469 lang=typescript
 *
 * [2469] 温度转换
 */

// @lc code=start
function convertTemperature(celsius: number): number[] {
  const kelvin = (celsius + 273.15).toFixed(6);
  const fahrenheit = (celsius * 1.8 + 32.0).toFixed(6);
  return [Number(kelvin), Number(fahrenheit)];
}
// @lc code=end
