const obj = { a: 10, b: 20 };

const { a, b, c = a * 3 } = obj; // destructuring is done in source code order, later targets can refer to the value of earlier targets in their defaults

console.log(c); // 30
