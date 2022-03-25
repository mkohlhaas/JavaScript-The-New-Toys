const array = [42, 67, 3, 23, 14];
// multiple parameters with parentheses:
array.sort((a, b) => a - b);
console.log(array); // [3, 14, 23, 42, 67]

// Parentheses are necessary!
// array.sort(a, b => a - b);
// would be passing to parameters to sort:
// 1. a
// 2. b => a - b
