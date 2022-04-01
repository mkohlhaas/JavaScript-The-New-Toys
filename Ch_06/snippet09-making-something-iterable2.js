const a = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

// Take 1
// You've seen that you get an iterator by calling an iterable's Symbol.iterator method. And you've
// seen that an iterator is an object with, at minimum, a next method that returns the "next"
// result object with value and done.
a[Symbol.iterator] = function() {    // [Symbol.iterator] to get iterator
  let index = 0;
  return {
    next: () => {                    // iterator has at least next method... (arrow function guarantees that this refers to the pseudo array)
      if (index < this.length) {
        return {                     // ...that returns next result object with 'value' and 'done'.
          value: this[index++],
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    }
  };
};

for (const value of a) {
  console.log(value);
}

// a
// b
// c
