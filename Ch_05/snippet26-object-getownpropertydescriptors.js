// Object.getOwnPropertySymbols returns an array of Symbols for the object's own Symbol-named properties.
//
// Object.getOwnPropertyNames returns an array of strings for the string-named properties.
//
// Object.getOwnPropertyDescriptors returns an object with property descriptors for all
// of the object's own properties (including non-enumerable ones and ones keyed with Symbols rather
// than strings).

const s = Symbol("example");

const o1 = {
  [s]: "one", // property named with a Symbol

  get example() { // accessor property
    return this[s];
  },

  set example(value) {
    this[s] = value;
  },

  data: "value" // data property
};

// A non-enumerable property
Object.defineProperty(o1, "nonEnum", {
  value: 42,
  writable: true,
  configurable: true
});

// Copy those properties to a new object
const descriptors = Object.getOwnPropertyDescriptors(o1);
const o2 = Object.defineProperties({}, descriptors);
console.log(o2.example); // "one"
o2.example = "updated";
console.log(o2[s]); // "updated", the accessor property wrote to the [s] prop
console.log(o2.nonEnum); // 42
console.log(o2.data); // "value"

// Contrast with `Object.assign`:
console.log("----");
const o3 = Object.assign({}, o1);
console.log(o3.example); // "one"
o3.example = "updated";
console.log(o3[s]); // "one", because `example` is just a data property, not an accessor
console.log(o3.nonEnum); // undefined
console.log(o3.data); // "value"

// Contrast this with using Object.assign in that same situation, which wouldn’ t copy the accessor
// property as an accessor property; instead, it would copy the value returned by the accessor property
// as of when Object.assign was called. It also wouldn’t copy the non-enumerable property.
