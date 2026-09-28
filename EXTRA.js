const prompt = require('prompt-sync')();

// Extra credit for weekly assignment 1
const series1 = (n) => {
    let result = 2, out = `Series 1: `;
    if (n < 1) out += undefined;
    else for (let count = 0; count < n; count++) {
        result += 4 * count;
        out += result + ` `;
    }
    console.log(out);
}, series2 = (n) => {
    let result = 1, out = `Series 2: `;
    if (n < 1) out += undefined;
    else for (let count = 1; count <= n; count++) {
        result *= count;
        out += result + ` `;
    }
    console.log(out);
}
series1(6);
series2(7);