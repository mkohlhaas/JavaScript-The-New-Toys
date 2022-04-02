let a, b, c;
const obj = { a: 10, b: 20 };

({ c = a * 3, b, a } = obj); // when c's default is calculated, a has the value undefined, and undefined * 3 is NaN

console.log(c); // NaN
