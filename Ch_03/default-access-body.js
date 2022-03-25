// Defaults Are Evaluated in Their Own Scope

// Cannot reference inside the function body, not even hoisted things like a var.
function example1(value = x) {
    var x = 42;
    console.log(value);
}
example1(); // ReferenceError: x is not defined


let x = 42
// a refers to global, b to argument before it, c does not work.
function example2(a = x, b = a, c = y) {
  var y = 67;
  return a + b;
}
example2(); // ReferenceError: y is not defined
