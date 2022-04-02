function getSomeObject() {
  return { first: 1, second: 2 };
}

let first, second;
{ first, second } = getSomeObject(); // SyntaxError: Unexpected token =

// From language server (tsserver):
// Declaration or statement expected.
// This '=' follows a block of statements, so if you intended to write a destructuring assignment,
// you might need to wrap the the whole assignment in parentheses.
