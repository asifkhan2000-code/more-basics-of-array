const statement = "I am a hard working person";
// 1st method
const words = statement.split("");
let str = "";
for (const word of words) {
    str = word + str;
}
console.log(str);
// 2nd method
let str2 = "";
for(i = 0; i < words.length; i++) {
    const word = words[i];
    str2 = word + str2;
}
console.log(str2)
// 3rd method
const newStatement = statement.split("").reverse().join("");
console.log(newStatement);
