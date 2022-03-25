// The Function 'name' Property

// Names are handy for reporting purposes, and particularly useful in call stacks on errors.

// Declaration
function foo() {}
console.log(foo.name); // "foo"

// Named function expression
const f = function bar() {};
console.log(f.name); // "bar"

// also anonmyous functions
let foo1 = function() {};
console.log(foo1.name); // "foo1"
