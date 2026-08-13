// Hashing brute force solution very slow

function hashing(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      count = count + 1;
    }
  }
  return `Number ${target} occurs ${count} times`;
}

let a = [1, 3, 1, 2, 5, 2];
hashing(a, 4);

console.log(hashing(a, 2));
