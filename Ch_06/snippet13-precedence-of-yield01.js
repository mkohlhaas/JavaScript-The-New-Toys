// The yield operator has very low precedence. That means that as much of the expression following
// it as possible is grouped together before yield is done.
function* example() {
  let a = yield + 2 + 30; // WRONG
  // same as: yield (+ 2 + 30)
  // + is the unary operator
  //          yield 2 + 30
  // * is not a unary operator and would lead to a syntax error
  //          yield * 2 + 30  (TypeError  number 32 is not iterable)
  return a;
}

const gen = example();
// The first call just primes the generator.
// Code in generator functions doesn't see a value passed to the first call to next!
console.log(gen.next());   // {value: 32, done: false}
console.log(gen.next(10)); // {value: 10, done: true}
