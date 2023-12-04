// function quicksort(items) {
//     if (items.length <= 1) return items;

//     const pivot = items[items.length - 1]

//     const left = [];
//     const right = [];

//     const ArraywithOutPivot = items.slice(0, items.length - 1);

//     for (const item of ArraywithOutPivot) {
//         if (item > pivot) {
//             right.push(item);
//         } else {
//             left.push(item);
//         }
//     }
//     return [...quicksort(left), pivot, quicksort(right)];
// }


// const temp = [1,24,5,57,8,9,-1,-8]



function quickSort(items) {

    if (items.length <= 1) return items;
    let pivot = items[items.length - 1];

    let left = [];
    let right = [];

    let withOutPivot = items.slice(0, items.length - 1);

    for (const item of withOutPivot) {
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const temp = quickSort([1, 3, 4, 63, 1, 2, -1, 0])

console.log('temp', temp)