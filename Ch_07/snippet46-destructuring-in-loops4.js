const obj = { a: 1, b: 2, c: 3 };

for (const [name, value] of Object.entries(obj)) {
  console.log(name + " = " + value);
}

// a = 1
// b = 2
// c = 3

// Does not work!
// for (const [name, value] of obj.entries()) {
//   console.log(name + " = " + value);
// }

// Arrays work!
for (const [name, value] of [1, 2, 3].entries()) {
  console.log(name + " = " + value);
}

// 0 = 1
// 1 = 2
// 2 = 3
