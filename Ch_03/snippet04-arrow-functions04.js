const array = [42, 67, 3, 23, 14];
// arrow functions are frequently written on one line, but it's not necessary.
// The body is still a single expression, though.
array.sort((a, b) =>
    a % 2 ? b % 2 ? a - b : -1 : b % 2 ? 1 : a - b
);
// first odds then evens
console.log(array); // [3, 23, 67, 14, 42]
