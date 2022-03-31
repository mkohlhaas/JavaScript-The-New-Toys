// Your code doesn’t only have access to its own realm, though, it can also get access to things in other
// realms: a child window has a different realm from its parent window, a web worker has its own
// realm distinct from the realm that created it, etc. But in many cases, code in those realms can pass
// objects between the realms. That’s not a problem, but if code in two different realms needs to share
// access to a property identified by a Symbol, then the Symbol needs to be shared as well. This is where
// global Symbols come in.

// In the global registry:
const s = Symbol.for("my-nifty-symbol");
// If you need to know if a Symbol is in the global Symbol registry, and if so what key it's assigned to, you can use Symbol.keyFor:
const key = Symbol.keyFor(s);
console.log(key); // "my-nifty-symbol"

// Not in the global registry:
const s2 = Symbol("my-nifty-symbol");
const key2 = Symbol.keyFor(s2);
console.log(key2); // undefined
