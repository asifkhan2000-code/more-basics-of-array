const nums = [6, 4, 8, 3, 2, 5, 1, 4];
// ascending order
// it doesn't work properly
// const sortedNums = nums.sort()
let sortedNumsAsc = [...nums].sort(function (a, b) {
    return a - b;
});
// descending order
sortedNumsDesc = [...nums].sort(function (a, b) {
    return b - a;
});
console.log(sortedNumsAsc);
console.log(sortedNumsDesc);
