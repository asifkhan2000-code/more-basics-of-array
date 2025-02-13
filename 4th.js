const statement = "I am a hard working person";
// 1st method
let words = statement.split(" ");
let newArray = [];
for (i = words.length - 1; i >= 0; i--) {
    const word = words[i];
    newArray.push(word);
}
const str = newArray.join(" ");
console.log(str);
// 2nd method
words = words.reverse().join(" ")
console.log(words);