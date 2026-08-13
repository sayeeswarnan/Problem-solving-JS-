function mergeSort(arr, left, right) {
    // Base case
    if (left >= right) {
        return;
    }

    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Sort the left half
    mergeSort(arr, left, mid);

    // Sort the right half
    mergeSort(arr, mid + 1, right);

    // Merge the two sorted halves
    merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
    const temp = [];

    let i = left;
    let j = mid + 1;

    // Compare elements from both halves
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    // Copy remaining elements from left half
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    // Copy remaining elements from right half
    while (j <= right) {
        temp.push(arr[j]);
        j++;
    }

    // Copy sorted elements back into the original array
    for (let k = left; k <= right; k++) {
        arr[k] = temp[k - left];
    }
}

// Example
const arr = [8, 3, 5, 4, 7, 6, 1, 2];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);