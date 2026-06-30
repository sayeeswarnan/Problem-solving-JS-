// Factorial of a Number : Iterative and Recursive

// Problem Statement: Given a number X,  print its factorial.

// To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.

// Note: X  is always a positive number.

/* question:
Example 1:
Input:
 X = 5
Output:
 120
Explanation:
 5! = 5*4*3*2*1

Example 2:
Input:
 X = 3
Output:
 6
Explanation:
 3!=3*2*1 */

// It will contain both solution normal one and recursive one.

//solution 1:

/* function factorial(N) {
  let value = 1;
  for (let i = 1; i <= N; i++) {
    value = value * i;
  }
  return value;
}

let x = 5;
let result = factorial(x);
console.log(`the factorial of ${x} is ${result}`);
 */

// recursive solution 2:

function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

// Define the number to compute factorial
const n = 3;

// Call the factorial function and print the result
console.log(factorial(n));
