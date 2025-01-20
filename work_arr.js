// mySlice
function mySlice(arr, start = 0, end = arr.length) {
    let result = [];
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

// myIndexOf
function myIndexOf(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

// myIncludes
function myIncludes(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

// Примеры использования
let arr = [1, 2, 3, 4, 5];

console.log(mySlice(arr, 1, 4)); // [2, 3, 4]
console.log(myIndexOf(arr, 3));  // 2
console.log(myIncludes(arr, 3)); // true
console.log(myIncludes(arr, 6)); // false
