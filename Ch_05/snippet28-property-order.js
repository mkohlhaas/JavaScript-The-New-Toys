// Property Order
//
// First, properties whose keys are strings that are integer indexes, in numeric order.
// Then, other properties whose keys are strings, in the order the property was created on the object.
// Then, properties whose keys are Symbols, in the order the property was created on the object.

// In the general case, despite there being a defined order now, it’s rarely if ever a good idea to rely on
// the order of properties in an object. Doing so is brittle, e.g.

function example(obj) {
  obj.answer = 42;
  obj.question = "Life, the Universe, and Everything";
  return obj;
}

const obj1 = example({});
console.log(Object.keys(obj1)); // ["answer", "question"]

const obj2 = example({
  question: "What's the meaning of life?"
});
// Now, the order is question, then answer, because question was added to the object first:
console.log(Object.keys(obj2)); // ["question", "answer"]
