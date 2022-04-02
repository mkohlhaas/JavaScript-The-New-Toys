function getSomeObject() {
  return { first: 1, second: 2 };
}

let { first, second } = getSomeObject();

console.log(first, second); // 1 2
