const a = ["a", "b", "c", "d"];

for (const value of a) {
  if (value === "c") {
    break; // for-of calls the iterator's `return` implicitly
  }
  console.log(value);
}
