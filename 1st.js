const colors = ["red", "blue", "green", "yellow", "orange"];
const rev_colors = [];
// 1st method
let i = 0;
while (i < colors.length) {
    const colorsName = colors[i];
    rev_colors.unshift(colorsName);
    i++;
}
console.log(rev_colors);
// second method
const rev_colors2 = [];
for (let j = 0; j < colors.length; j++) {
    const colorsName = colors[j];
    rev_colors2.push(colorsName);
}
rev_colors2.reverse();
console.log(rev_colors2);
// third method
const rev_colors3 = [];
for(const color of colors) {
    rev_colors3.push(color);
}
rev_colors3.reverse();
console.log(rev_colors3)
// 4th method
const rev_colors4 = [];
for(let n = colors.length - 1; n >= 0; n--) {
    const colorsName = colors[n];
    rev_colors4.push(colorsName);
}
console.log(rev_colors4);