class Base {
  constructor(data) {
    this.data = data;
  }

  // Comment this out to see a difference!
  static get [Symbol.species]() {
    return this;
  }

  static create(data) {
    // Doesn't use `Symbol.species`
    const ctor = this || Base;
    return new ctor(data);
  }

  clone() {
    // Uses `Symbol.species`
    const ctor = this && this.constructor && this.constructor[Symbol.species] || Base;
    return new ctor(this.data);
  }
}

class Sub extends Base { }

class SubSub1 extends Sub { }

class SubSub2 extends Sub {
  static get [Symbol.species]() {
    return null;
  }
}

// Add more examples to see a difference!
const a = new Base()
console.log(a.constructor.name);

const b = Sub.create(3);
console.log(b.constructor.name);

const c = SubSub1.create(3);
console.log(c.constructor.name);

const d = Base.create(3);
console.log(d.constructor.name);

const x = new SubSub1(1).clone();
console.log(x.constructor.name);

const y = new SubSub2(2).clone();
console.log(y.constructor.name);
