// Method syntax in object literals

// Use Method Syntax for Methods

const obj2 = {
  name: "Joe",
  // Before you had to write:
  // say: function() {
  say() {
    console.log(this.name);
  }
};

obj2.say(); // "Joe"
