// super outside classes

const obj = {
  toString() {
    return super.toString().toUpperCase();
    // same as in old syntax:
    // return Object.prototype.toString.call(this).toUpperCase();
  }
};
console.log(obj.toString()); // "[OBJECT OBJECT]"
