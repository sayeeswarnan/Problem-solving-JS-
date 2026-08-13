/* Write a function:

function highestOccurring(arr) {

}

Requirements:

Build the frequency object.
Find the element with the highest frequency.
Return the element.

Example:

const arr = [1, 2, 2, 3, 1, 2];

console.log(highestOccurring(arr));

Expected output:

2 */

function highestOccurring(arr) {
  let freq = {};
  let maxFreq = 0;
  let maxElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === undefined) {
      freq[arr[i]] = 1;
    } else {
      freq[arr[i]]++;
    }
  }

  for (let key in freq) {
    if (freq[key] > maxFreq) {
      maxFreq = freq[key];
      maxElement = key;
    }
  }

  return maxElement;
}

const arr = [1, 2, 2, 3, 1, 2];

console.log(highestOccurring(arr));
