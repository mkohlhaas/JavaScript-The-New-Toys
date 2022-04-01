function* example() {
  let x = yield;
  let a = x + 2 + 30;  // clearest way is just to put it in its own statement
  return a;
}

const gen = example();
console.log(gen.next());   // {value: undefined, done: false}
console.log(gen.next(10)); // {value: 42, done: true}
