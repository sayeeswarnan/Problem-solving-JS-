/* Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6
Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing) */

function fib(n) {
  console.log("Entered fib(", n, ")");

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const result = fib(n - 1) + fib(n - 2);

  return result;
}

console.log(fib(3));
