/* Question:

Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: 
Since the order of elements gets reversed the first element 
will occupy the fifth position, the second element occupies the fourth position and so on.

Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will 
occupy the fifth position, the second element occupies the fourth position and so on.

*/

// solution 1 : without recursion

// let a = [1, 2, 3, 4];
// let rev = [];
// for (let i = a.length - 1; i >= 0; i--) {
//   rev.push(a[i]);
//   //   console.log(a[i]);
// }
// console.log("the reverse:", rev);

// solution 2: with recursion
class Solution {
  reverse(arr, n) {
    if (n <= Math.ceil(arr.length / 2)) {
      return;
    }

    let left = arr.length - n;
    let right = n - 1;

    [arr[left], arr[right]] = [arr[right], arr[left]];

    this.reverse(arr, n - 1);
  }
}

const obj = new Solution();

let arr = [1, 2, 3, 4, 5];

obj.reverse(arr, arr.length);

console.log(arr);
