/* Input: N = 4
Output: 4, 3, 2, 1
Explanation: All the numbers from 4 to 1 are printed.
Input: N = 1
Output: 1 
Explanation: This is the base case. */

//Solution:

let count = 0;
function Print_N_to_1(N) {
  console.log(N);

  if (N === 1) return;

  Print_N_to_1(N - 1);
}

Print_N_to_1(1);
