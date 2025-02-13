const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1st method
for (const num of nums) {
    console.log(num);
}
// 2nd method
for (let i = 0; i < nums.length; i++) {
    console.log("index no.", i, "it's value is", nums[i]);
}
// 3rd method
let j = 0;
while (j < nums.length) {
    console.log("index no.", j, "it's value is", nums[j]);
    j++;
}
