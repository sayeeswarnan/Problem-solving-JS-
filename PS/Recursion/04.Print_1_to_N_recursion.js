/* question
Input: N = 4
Output: 1, 2, 3, 4
Explanation: All the numbers from 1 to 4 are printed.
Input: N = 1
Output: 1 
Explanation: This is the base case. */

//solution:
let count = 0;
function Print_num(N) {
  count++;
  console.log(count);

  if (count === N) return;

  Print_num(N);
}

Print_num(4);

//another method called forward recursion:
class Solution {
  // Recursive function to print numbers from current to n
  printNumbers(current, n) {
    // Base case: if current exceeds n, stop recursion
    if (current > n) return;

    // Print current number
    process.stdout.write(current + " ");

    // Recursive call with next number
    this.printNumbers(current + 1, n);
  }
}

// Driver code
const sol = new Solution();
const n = 10;

sol.printNumbers(1, n);
console.log();
