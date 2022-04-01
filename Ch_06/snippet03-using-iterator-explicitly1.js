const a = ["a", "b", "c"];
const it = a[Symbol.iterator](); // Step 1: Get Iterator.
let result = it.next();          // Step 2: Get result object. result conforms to IteratorResult interface.
                                 // Has 'done' and 'value' properties.

while (!result.done) {           // Step 3.a: Use 'done'.
  console.log(result.value);     // Step 3.b: Use 'value'.
  result = it.next();            // Step 3.c: Use 'next' on iterator again.
}
