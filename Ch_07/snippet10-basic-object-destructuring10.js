function getSomeObject() {
  return { first: 1, second: 2 };
}

let first, second;
({ first, second } = getSomeObject()); // Works
