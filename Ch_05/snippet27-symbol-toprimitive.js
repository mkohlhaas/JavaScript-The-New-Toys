const obj = {
  // the type hint is "number", "string", or "default" if the operation has no preference.
  [Symbol.toPrimitive](hint) {
    const result = hint === "string" ? "str" : 42;
    console.log("hint = " + hint + ", returning " + JSON.stringify(result));
    return result;
  }
};

// ----------------------------
// Using the addition operator:
// ----------------------------
console.log("foo" + obj);
// hint = default, returning 42
// foo42

console.log(2 + obj);
// hint = default, returning 42
// 44

// -------------------------------
// Using the subtraction operator:
// -------------------------------
console.log(2 - obj);
// hint = number, returning 42
// -40

// -----------------------------
// Using when string is desired:
// -----------------------------
console.log(String(obj));
// hint = string, returning "str"
// str

console.log("this is a string".indexOf(obj));
// hint = string, returning "str"
// 10

// Your method must return a primitive value or a TypeError occurs. The value does not have to match the hint.
// The hint is just a hint, you can still return (for instance) a number even if the hint is for a
// string, or a boolean even if the hint is for a number.
