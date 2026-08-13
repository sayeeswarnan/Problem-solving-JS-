/* 

Problem Statement: Given an array of N integers,
 write a program to implement the Bubble Sorting algorithm.


Example 1:
Input: N = 5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting we get 1,2,3,4,5


Example 2:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting we get 9,13,20,24,46,52

*/

function bubbleSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }

        }

    }

    return arr;
}

const arr = [64, 34, 25, 12, 22];
const arr_2 = [1,2,4,3,6,5]


console.log(bubbleSort(arr));
console.log(bubbleSort(arr_2));