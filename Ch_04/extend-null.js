class X extends null { }  // depends on JavaScript engine; does not work with node.js
const o = new X();
console.log(o.toString); // undefined
console.log(Object.getPrototypeOf(X.prototype) === null); // true
