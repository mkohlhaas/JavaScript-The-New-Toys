// It doesn’t matter if you’re declaring the variable when you assign the function or if you assign the
// function later; what matters is when you create the function:
let foo;
foo = function() {};
console.log(foo.name); // "foo"
