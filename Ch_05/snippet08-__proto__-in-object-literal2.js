const p = {
  hi() {
    console.log("hi");
  }
};

const proto = "__proto__"; // <===\\
const obj = {
  [proto]: p  // __proto__ works only when used literally
};

obj.hi(); // TypeError: obj.hi is not a function

// Again, don’t use __proto__ in new code; use Object.create to create an object with the correct
// prototype in the first place, and use Object.getPrototypeOf and Object.setPrototypeOf if
// necessary to get or set the prototype afterward. That way, you don’t have to worry about whether
// the code is running in a browser or not, and (in the case of the accessor property) whether the object
// inherits from Object.prototype or not.
