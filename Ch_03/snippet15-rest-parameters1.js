// In a later chapter you'll learn about the `for-of` loop, which you'd probably
// want here instead of `forEach`. But you'll also learn about `Object.assign`,
// which you could use instead of this entire function.

// “rest” Parameters

function extend(target, ...sources) {
    // 'sources' is a genuine array (if no additional arguments sources will be an empty array, not 'undefined'
    sources.forEach(source => {
        Object.keys(source).forEach(key => {
            target[key] = source[key];
        });
    });
    return target;
}

// as arrow function:
const extend1 = (target, ...sources) => {
    sources.forEach(source => {
        Object.keys(source).forEach(key => {
            target[key] = source[key];
        });
    });
    return target;
}

const obj = extend({}, { a: 1 }, { b: 2 });
const obj1 = extend1({}, { a: 1 }, { b: 2 });

console.log(obj); // {a: 1, b: 2}
console.log(obj1); // {a: 1, b: 2}
