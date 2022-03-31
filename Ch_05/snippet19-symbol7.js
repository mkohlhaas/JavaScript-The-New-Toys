// One common misconception about Symbols is that they're for private properties.

const everUpward = (() => {
  const count = Symbol("count");
  return {
    [count]: 0,
    increment() { return ++this[count]; },
    get() { return this[count]; }
  };
})();

console.log(everUpward.get()); // 0
everUpward.increment();
console.log(everUpward.get()); // 1

console.log(everUpward["count"]); // undefined
console.log(everUpward[Symbol("count")]); // undefined

// But the Symbol stored in count isn't private (even though the constant referring to it is) because
// Symbols are discoverable. For instance, you can get the Symbols an object uses via the aptly named
// Object.getOwnPropertySymbols. Since they're discoverable, Symbols don't provide any privacy for
// properties.
