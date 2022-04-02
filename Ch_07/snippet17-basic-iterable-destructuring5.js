const arr = [1, 2]
let first, second
// you try to use ASI = Automatic Semicolon Insertion:
console.log("ASI hazard")
[first, second] = arr // TypeError: Cannot set property 'undefined' of undefined
console.log(first, second)

// Fails because the parser treats the [first, second] as a property accessor (with a comma
// expression inside) that' s setting a property on whatever console.log returns, as though
// you’d written:
// console.log("ASI hazard")[first, second] = arr
