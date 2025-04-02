function secondLargest(arr) {
    if (arr.length < 2) return undefined;
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i of arr) {
        if (i >= max) {
            if (i !== max) {
                secondMax = max
            }
            max = i;
        } else if (i > secondMax) {
            secondMax = i;
        }
    }
    return secondMax == -Infinity ? undefined : secondMax;

}

console.log(secondLargest([1, 5, 3, 9, 2]));  // Output: 5
console.log(secondLargest([10, 10, 5, 3]));  // Output: 5
console.log(secondLargest([4]));  // Output: undefined
console.log(secondLargest([]));  // Output: undefined
console.log(secondLargest([10, 10, 10])); 