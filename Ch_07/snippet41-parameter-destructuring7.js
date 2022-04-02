function example({ a, b = "prop b def" } = { a: "param def a", b: "param def b" }) {
  console.log(a, b);
}

// no object is passed in so default is used:
example(); // "param def a" "param def b"
// object passed in so default of matched object is used
example({ a: "ayy" }); // "ayy" "prop b def"
