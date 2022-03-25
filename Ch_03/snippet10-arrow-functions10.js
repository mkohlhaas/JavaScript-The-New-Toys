// traditional functions have prototype property, arrow functions don't.
function traditional() {}
const arrow = () => {};
console.log("prototype" in traditional); // true
console.log("prototype" in arrow); // false
