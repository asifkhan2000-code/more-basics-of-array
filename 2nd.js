const numbers = [12, 98, 5, 41, 23, 78, 46];
const partOfNumbers = [];
let i = 0;
while (i < numbers.length) {
    const num = numbers[i];
    if (num % 2 == 0) {
        partOfNumbers.push(num);
    }
    i++;
}
console.log(partOfNumbers);
