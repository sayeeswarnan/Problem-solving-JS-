/* 
Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string.

*/

// solution 1: brute force:

/* 
let str = "ABCDCBA";

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}

console.log(reverse);

if (str === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

 */
// solution 2: recursion
// Function to check if a string is a palindrome using recursion
function palindrome(i, s) {
  // Base Condition: If i exceeds half of the string, all the elements have been compared
  // and the string is a palindrome, return true.
  if (i >= s.length / 2) return true;

  // If the start and end characters are not equal, it's not a palindrome.
  if (s[i] !== s[s.length - i - 1]) return false;

  // If both characters are the same, increment i and check start+1 and end-1.
  return palindrome(i + 1, s);
}

// Driver code
const s = "A man, a plan, a canal: Panama"; // Example string to check

// Check if the string is a palindrome and output the result
console.log(palindrome(0, s)); // Output true if palindrome, false if not

const value = "A man, a plan, a canal: Panama";
console.log(value.length);
