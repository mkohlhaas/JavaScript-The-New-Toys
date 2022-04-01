const a = ["a", "b", "c", "d"];
const it = a[Symbol.iterator]();
let result;

while (!(result = it.next()).done) {
  if (result.value === "c") {
    if (it.return) { it.return(); }  // 'return' is optional method. Iterator should clean up resources.
    // Using 'optional chaining' would have the same effect:
    // it.return?.()
    break;
  }
  console.log(result.value);
}

// a
// b
