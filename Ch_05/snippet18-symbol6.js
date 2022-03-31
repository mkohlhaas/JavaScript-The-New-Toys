// The description is not the value of the Symbol, and two different Symbols can have the same description but still be different Symbols

const a = Symbol("my symbol");
console.log(a); // Symbol(my symbol)

const b = Symbol("my symbol");
console.log(b); // Symbol(my symbol)

console.log(a === b); // false
const obj = {
  [a]: 6,
  [b]: 7
};

console.log(obj[a]); // 6
console.log(obj[b]); // 7

// Properties keyed by symbols rather than strings are NOT(!) included in for-in loops or the array returned by object.keys !
