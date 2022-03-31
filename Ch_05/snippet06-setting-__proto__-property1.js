// In the browser environment, you can use an accessor property called __proto__ to get and set the
// prototype of an object, but don’t do so in new code. Officially, it’s not defined for JavaScript engines
// that aren’t in a browser (although the engine may provide it anyway).

const p1 = {
  greet: function() {
    console.log("p1 greet, name = " + this.name);
  }
};
const p2 = {
  greet: function() {
    console.log("p2 greet, name = " + this.name);
  }
};

const obj = Object.create(p1);
obj.name = "Joe";
obj.greet(); // p1 greet, name = Joe

// __proto__ is a legacy feature that’s been standardized only to officially
// describe the behavior it had as a non-standard extension. In new code, you
// shouldn’t use it; use getPrototypeOf and setPrototypeOf instead.
obj.__proto__ = p2;
obj.greet(); // p2 greet, name = Joe
