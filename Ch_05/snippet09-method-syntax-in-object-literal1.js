// Method syntax in object literals

const obj2 = {
  name: "Joe",
  // Before you had to write
  // say: function() {
  say() {
    console.log(this.name);
  }
};

obj2.say(); // "Joe"
