const arr = [1, 2, 3, 4, 5];

// matching indices
// using object destructuring rather than array destructuring
// numeric constants are valid property names but not valid identifiers
// → you have to rename them
const { 1: b, 4: e } = arr;

// this would be array destructuring
// const [, b, , , e] = arr;

console.log(b, e); // 2 5
