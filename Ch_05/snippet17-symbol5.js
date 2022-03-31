// As of ES2019, a Symbol’ s description is available as a description property on the Symbol.

const mySymbol = Symbol("my symbol");
console.log(mySymbol.description); // "my symbol"
