const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums);
// 1st method to reverse
const rev_nums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    rev_nums.push(num);
}
console.log(rev_nums);
// 2nd method to reverse
const rev_nums2 = [];
for (const num of nums) {
    rev_nums2.unshift(num);
}
console.log(rev_nums2);
// 3rd method to reverse
const rev_nums3 = [];
for (let j = 0; j < nums.length; j++) {
    const num = nums[j];
    rev_nums3.push(num);
    rev_nums3.reverse();
}
console.log(rev_nums3);
// 5th method to reverse
// reverse() function is only for array
nums.reverse();
console.log(nums);
