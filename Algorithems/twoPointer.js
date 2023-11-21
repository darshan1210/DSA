function twoPointer(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1
}

const temp = twoPointer([1, 2, 3, 4, 5, 6, 7], 2);

console.log('temp', temp);