const a = ["one", "two", "three", "four"];
const it = a[Symbol.iterator]();
it.next();                                   // an iterator is itself iterable; no need to use 'slice' or similar

for (const value of it) {
  console.log(value);
}

// "two"
// "three"
// "four"
