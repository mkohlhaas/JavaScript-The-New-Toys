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

// ES2015 adds the ability to set the prototype of an existing object.
// It’s a very unusual thing to want to do, but it’s now possible.
Object.setPrototypeOf(obj, p2);
obj.greet(); // p2 greet, name = Joe
