// Using the throw method in this situation is simpler to understand: it behaves exactly as though the
// innermost active generator/iterator had used the throw statement.

function* inner() {
  try {
    yield "something";
    console.log("inner - done");
  } finally {
    console.log("inner - finally");
  }
}

function* outer() {
  try {
    yield* inner();
    console.log("outer - done");
  } finally {
    console.log("outer - finally");
  }
}

const gen = outer();
let result = gen.next();
result = gen.throw(new Error("boom"));

// inner - finally
// outer - finally
// Error: "boom"
