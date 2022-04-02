const obj = { "my-name": 1 };

// an identifier name has fairly strict rules (no dashes, for instance)
// and unlike property names, there's no quoted format for identifier:
let { my-name } = obj;   // SyntaxError: Unexpected token -
let { "my-name" } = obj; // SyntaxError: Unexpected token }
