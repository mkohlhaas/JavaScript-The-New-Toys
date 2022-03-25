// In an object literal, if you assign an anonymous function expression’s result to a property, the function gets the name of the property

const obj = {
    foo: function() {}
};

console.log(obj.foo.name); // "foo"

// Why not? TC39 considered this specific usage to be too much of an information leak. Suppose an
// app has a cache of handlers keyed by some secret information related to a user and needs to pass the
// handler to some external code. If it created the handler like this:
//
// cache[getUserSecret(user)] = function() {};
//
// and the function name was set by that operation, giving out the handler function to third-party code
// would give out the value from getUserSecret(user). So the committee intentionally omitted that
// particular operation from setting the function name.
