const obj = { "my-name": 1 };

// explicit variable name instead of short-hand syntax
const { "my-name": myName } = obj;

console.log(myName); // 1
