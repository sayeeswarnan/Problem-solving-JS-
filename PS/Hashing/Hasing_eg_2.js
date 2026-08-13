/* Without using Google, answer these two questions:

Write the for loop to visit every element in the array.
How would you check whether the current element already exists in freq? */

/* const freq = {
  1: 2,
  2: 5,
};
console.log(freq[3]);
 */

// about answer will give you undefined as answer:

//Problem 1 and solution:
// using using brute force method
// const arr = [1, 1, 2, 3, 2, 3, 4];

// const freq = {};

// for (let i = 0; i < arr.length; i++) {
//   if (freq[arr[i]] === undefined) {
//     freq[arr[i]] = 1;
//   } else {
//     freq[arr[i]] += 1;
//   }
// }

// console.log(freq);

// using for..in

/* const arr = [1, 1, 2, 3, 2, 3, 4];

const freq = {
  a: 5,
  b: 10,
  c: 15,
};

for (let key in freq) {
  console.log(`key:${key},value:${freq[key]}`);
}
 */

const freq = {
  a: 5,
  b: 10,
  c: 15,
};

let maxFreq = 0;
let maxElement = 0;

for (let key in freq) {
  if (freq[key] > maxFreq) {
    // Write only these two lines
    maxFreq = freq[key];
    maxElement = key;
  }
}

console.log(maxElement, ":", maxFreq);
