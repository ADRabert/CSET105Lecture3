const prompt = require('prompt-sync')(), min2 = (x, y) => {
    if (x < y) return x;
    else if (x > y) return y;
    else return null;
}, min3 = (x, y, z) => {
    if (min2(x, y) === null && min2(x, z) === null) return null;
    else if (min2(x, y) === x && min2(x, z) === x) return x;
    else if (min2(x, y) === y && min2(y, z) === y) return y;
    else return z;
}, minX = (x, y, z = null) => {
    if (z === null) return min2(x, y);
    else return min3(x, y, z);
}, isEven = (x) => {
    if (x === 0) return true;
    else if (x === 1) return false;
    else if (x < 0) return isEven(x + 2);
    else return isEven(x - 2);
}, series1 = (x) => {
    let result = 2;
    for (x; x > 1; x) result += 4 * --x;
    return result;
}, series2 = (x) => {
    if (x < 1) return undefined;
    let result = 1;
    for (x; x > 1; x--) result *= x;
    return result;
}, fibonacci = (x) => {
    if (x < 1) return undefined;
    else if (x > 2) return fibonacci(--x) + fibonacci(--x);
    else return 1;
}, hcf = (x, y) => {
    if (x < 1 || y < 1) return undefined;
    let factor = 1, count = 1;
    if (x < y) while (++count <= y) if (x % count === 0 && y % count === 0) factor = count;
    else while (++count <= x) if (x % count === 0 && y % count === 0) factor = count;
    return factor;
}, lcm = (x, y) => {
    if (x < 1 || y < 1) return undefined;
    let count = 1;
    if (x < y) while (++count <= y) if (x % count === 0 && y % count === 0) return count;
    else while (++count <= x) if (x % count === 0 && y % count === 0) return count;
    return 1;
}, calcMenu = () => {
    console.log(`1. Add\n2. Subtract\n3. Multiply\n4. Divide\n0. Quit`);
    while (true) {
        let opt = Number(prompt(`Enter option: `));
        if (isNaN(opt) || opt < 0 || opt > 4) console.log(`Invalid option.`);
        else return opt;
    }
}, add = (x, y) => console.log(x + y + `\n`), subtract = (x, y) => console.log(x - y + `\n`), multiply = (x, y) => console.log(x * y + `\n`), divide = (x, y) => console.log(x / y + `\n`), calcMain = (opt) => {
    let x = Number(prompt(`Enter first number: `)), y = Number(prompt(`Enter second number: `));
    if (isNaN(x) || isNaN(y)) console.log(`Invalid input(s).`);
    else if (opt === 1) add(x, y);
    else if (opt === 2) subtract(x, y);
    else if (opt === 3) multiply(x, y);
    else divide(x, y);
}, getNum = (str) => {
    let x = Number(prompt(`Enter ` + str + `: `));
    if (isNaN(x)) {
        console.log(`Invalid input.`);
        return null;
    } else return x;
}, multTable = (x, a, b) => { while (a <= b) console.log(x, `*`, a, `=`, x * a++) }, superMultTable = (x, y, a, b) => { while (x <= y) multTable(x++, a, b); }

console.log(`Exercise 1: Minimum of numbers\n2 numbers\nMinimum:`, min2(6, 7) + `\n3 numbers\nMinimum:`, min3(6, 7, 4) + `\n2 or 3 numbers\nMinimum:`, minX(6, 7) + `\n\nExercise 2: Recursive evens\n\
Is`, 50, `even?`, isEven(50) + `\nIs`, 75, `even?`, isEven(75) + `\nIs`, -1, `even?`, isEven(-1) + `\n\nExercise 3: Series & factor calculations\nSeries 1:`, series1(6) + `\nSeries 2:`, series2(7) + `\n\
Fibonacci:`, fibonacci(8) + `\nHighest common factor:`, hcf(18, 84) + `\nLowest common multiple:`, lcm(9, 27) + `\n\nExercise 4: Functionalized calculator`);
while (calcMenu() != 0) calcMain();

console.log(`\nExercise 5: Enhanced multiplication table`);
while (true) {
    let x = getNum(`multiplier`);
    if (x === null) break;
    let a = getNum(`start number`);
    if (a === null) break;
    let b = getNum(`end number`);
    if (b === null) break;
    multTable(x, a, b);
}

console.log(`\nExercise 6: Super enhanced multiplication table`);
while (true) {
    let x = getNum(`start multiplier`);
    if (x === null) break;
    let y = getNum(`end multiplier`);
    if (y === null) break;
    let a = getNum(`start number`);
    if (a === null) break;
    let b = getNum(`end number`);
    if (b === null) break;
    superMultTable(x, y, a, b);
}