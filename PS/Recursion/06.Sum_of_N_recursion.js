/* Sum of first N Natural Numbers
Problem Statement: Given a number ‘N’, find out the sum of the first N natural numbers .

Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15

Input: N=6
Output: 21
Explanation: 1+2+3+4+5+6=15 */

// Solution:
let sum = 0;
let val = 0;
function sum_nat(N) {
  val = N;
  sum = sum + val;
  if (N === 0) {
    console.log(sum);
    return;
  }
  sum_nat(N - 1);
}

sum_nat(10);

// code flatform solution:
class Solution {
  NnumbersSum(N) {
    if (N === 0) {
      return 0;
    }

    return N + this.NnumbersSum(N - 1);
  }
}

// Create object
const obj = new Solution();

// Call method
console.log(obj.NnumbersSum(5));
