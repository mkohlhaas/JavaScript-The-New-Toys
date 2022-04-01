// Generator functions create and return generator objects.
// Generator objects are iterators but with a two-way information flow.
// Where iterators only produce values, generators can both produce and consume values.

// Note the * after the function keyword. That’s what makes it a generator function. You can
// have whitespace after function and before the * if you like, it’s purely a matter of style.
function* usingReturn() {
  yield 1;
  yield 2;
  return 3;
}

console.log("Using for-of:");
for (const value of usingReturn()) {  // generators are also iterators
  console.log(value);
}
// 1
// 2

console.log("\nUsing the generator directly:");
const g = usingReturn();

let result;
while (!(result = g.next()).done) {
  console.log(result);
}
// {value: 1, done: false}
// {value: 2, done: false}

console.log("\nResult: ", result);
// {value: 3, done: true}
