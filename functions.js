const prompt = require('prompt-sync')();
/*function inputNum() {
    while (true) {
        let num = Number(prompt(`Enter number: `));
        if (isNaN(num)) console.log(`Invalid input.`);
        else return num;
    }
}
let num1 = inputNum(), num2 = inputNum(), num3 = inputNum();
console.log(num1, `+`, num2, `+`, num3, `=`, num1 + num2 + num3);
function add(x, y, z) {
    return x + y + z;
}
console.log(add(10, 5, 6));
function square(x) {
    return x ** 2;
}
console.log(square(5));
const square = x => x ** 2
console.log(square(5));
// console.log(num1, `^ 2 -`, num2, `^ 2 =`, num1 ** 2 - num2 ** 2);

let x = 10;
if (true) {
    let y = 5; // let = local
    var z = 20; // var = global
    console.log(x + y + z);
}
console.log(x + z);

// Call Stack
const greet = who => console.log(`Hello,`, who + `.`)
greet(`Jonathan`);
console.log(`Bye bye!`);

// Stack Overflow
const chicken = () => egg();
const egg = () => chicken();
console.log(chicken(), "came first.");

// Optional Arguments
const square = x => x ** 2;
console.log(square(5, false, "gargoyle"));

const minus = (a, b) => {
    if (b == undefined) return -a;
    else return a - b;
}
console.log(minus(10) + `\n` + minus(10, 5));

const power = (base, exponent = 2) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) result *= base;
    return result;
}
console.log(power(4) + `\n` + power(2, 6));*/

// Recursion
const power = (base = 0, exp = 0) => {
    if (base === 0 && exp === 0) return undefined;
    else if (exp === 0) return 1;
    return base * power(base, exp - 1);
}
console.log(power(2, 3));