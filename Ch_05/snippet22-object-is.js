// ES2015’s Object.is compares two values according to the specification’s SameValue abstract
// operation. The SameValue operation is like === (strict equality) except:

console.log(Object.is(+0, -0));   // false
console.log(Object.is(NaN, NaN)); // true

// and for everything else, it’s just like ===.
