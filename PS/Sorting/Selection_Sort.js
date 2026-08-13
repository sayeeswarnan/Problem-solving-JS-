/* 
================================================================================
                               SELECTION SORT
================================================================================

1. THEORY / CONCEPT
-------------------
Selection Sort is a simple, comparison-based sorting algorithm.
The algorithm divides the input array into two parts:
  - The sorted sub-array at the front (left), which is built up from left to right.
  - The unsorted sub-array occupying the rest of the array (right).

In each iteration:
  1. The algorithm finds the minimum element in the unsorted sub-array.
  2. It swaps this minimum element with the first element of the unsorted sub-array.
  3. The boundary of the sorted sub-array is shifted one position to the right.

This process is repeated until the entire array is sorted.

2. COMPLEXITY ANALYSIS
----------------------
- Time Complexity:
  - Best Case:    O(N²) - Even if the array is already sorted, the algorithm still performs all comparisons to ensure no smaller element exists.
  - Average Case: O(N²) - We do N * (N - 1) / 2 comparisons on average.
  - Worst Case:   O(N²) - When the array is reverse-sorted, we perform the same number of comparisons.
- Space Complexity: O(1) - It is an in-place sorting algorithm, requiring no extra memory space.
- Stability: Non-stable. Swapping can change the relative order of elements with equal keys.

3. DRY RUN / STEP-BY-STEP TRACE
-------------------------------
Initial Array: [64, 25, 12, 22, 11] (Length N = 5)

Iteration 1 (i = 0):
  - Unsorted subarray: [64, 25, 12, 22, 11]
  - Search for minimum starting at index 0.
  - Minimum found is 11 (at index 4).
  - Swap arr[0] (64) with arr[4] (11).
  - Array becomes: [11, 25, 12, 22, 64]
                   ^ sorted

Iteration 2 (i = 1):
  - Unsorted subarray: [25, 12, 22, 64]
  - Search for minimum starting at index 1.
  - Minimum found is 12 (at index 2).
  - Swap arr[1] (25) with arr[2] (12).
  - Array becomes: [11, 12, 25, 22, 64]
                   ^^^^^^ sorted

Iteration 3 (i = 2):
  - Unsorted subarray: [25, 22, 64]
  - Search for minimum starting at index 2.
  - Minimum found is 22 (at index 3).
  - Swap arr[2] (25) with arr[3] (22).
  - Array becomes: [11, 12, 22, 25, 64]
                   ^^^^^^^^^^ sorted

Iteration 4 (i = 3):
  - Unsorted subarray: [25, 64]
  - Search for minimum starting at index 3.
  - Minimum found is 25 (at index 3).
  - Swap arr[3] (25) with arr[3] (25) - (No swap needed, or swaps with itself).
  - Array becomes: [11, 12, 22, 25, 64]
                   ^^^^^^^^^^^^^^ sorted

Iteration 5 (i = 4):
  - Only one element left (64). It is automatically in the correct position.
  - Final Sorted Array: [11, 12, 22, 25, 64]

================================================================================
*/

/**
 * Sorts an array in ascending order using the Selection Sort algorithm.
 * 
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
function selectionSort(arr) {
    let n = arr.length;

    // The outer loop moves the boundary of the unsorted sub-array.
    // We only need to go up to n - 2 (i < n - 1) because when n-1 elements are sorted,
    // the last element is automatically in its correct position.
    for (let i = 0; i < n - 1; i++) {
        
        // Assume the first element of the unsorted part is the minimum.
        let minIndex = i;

        // The inner loop scans the remaining unsorted part to find the actual minimum element.
        for (let j = i + 1; j < n; j++) {
            // If we find an element smaller than our current minimum, update minIndex.
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part.
        // We only perform the swap if the minimum element is not already at index i.
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example 1:
// Input: N = 6, array[] = [13, 46, 24, 52, 20, 9]
// Expected Output: [9, 13, 20, 24, 46, 52]
let arr1 = [13, 46, 24, 52, 20, 9];
console.log("Example 1 Input:", arr1);
console.log("Example 1 Sorted:", selectionSort(arr1));

// Example 2:
// Input: N = 5, array[] = [5, 4, 3, 2, 1]
// Expected Output: [1, 2, 3, 4, 5]
let arr2 = [5, 4, 3, 2, 1];
console.log("Example 2 Input:", arr2);
console.log("Example 2 Sorted:", selectionSort(arr2));