const array = [42, 67, 3, 23, 14];
// "verbose" arrow function (so-called "function body form") with curly braces:
array.sort((a, b) => { // brace right after arrow
    const aIsOdd = a % 2;
    const bIsOdd = b % 2;
    if (aIsOdd) {
        return bIsOdd ? a - b : -1;
    }
    return bIsOdd ? 1 : a - b; // we need an explicit return again
});
console.log(array); // [3, 23, 67, 14, 42]
