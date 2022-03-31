const obj = {
  toString() {
    return super.toString().toUpperCase();
  }
};

// you can change the prototype of an object after it’s created
Object.setPrototypeOf(obj, {
  toString() {
    return "a different string";
  }
});

console.log(obj.toString()); // "A DIFFERENT STRING"
