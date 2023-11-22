function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]]
            j--
        }
    }
    return array;
}

const temp = insertionSort([1, 2, 3, 56, 9, 52, -2, -1, 0])
console.log('temp', temp)