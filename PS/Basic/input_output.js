/* const fs = require("fs");
const path = require("path");

// Read input from input.txt in the same directory
const data = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()
  .split(/\s+/);

let index = 0;
function input() {
  return data[index++];
}

let n = parseInt(input());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(input()));
}

console.log("N =", n);
console.log("Array =", arr);

 */

let a = new Set([1, 2, 3, 4, 5, 5, 6, 6]);
console.log(a.size);
