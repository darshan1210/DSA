function merge(left, right) {
    let sortedArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}

function MergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));
    return merge(left, right);
}



let temp = MergeSort([1, 4, 6, 2, 6, 7, 23, -1]);
console.log('temp', temp)