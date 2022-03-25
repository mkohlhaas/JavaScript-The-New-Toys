// assigning to an object property on an existing object does NOT set the function’s name

const obj = {};
obj.foo = function() {};
// there's no name
console.log(obj.foo.name); // ""
