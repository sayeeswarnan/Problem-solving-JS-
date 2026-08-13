/* question:
Input: N = 3
Output: Ashish Ashish Ashish 
Explanation: Name is printed 3 times.
Input: N = 1
Output: Ashish 
Explanation: Name is printed once. */

//Solution:

function print_name(N) {
  if (N === 0) return;

  console.log("Ashish");
  print_name(N - 1);
}

print_name(3);
