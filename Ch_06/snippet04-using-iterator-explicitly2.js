const a = ["a", "b", "c"];
const it = a[Symbol.iterator]();

let result;
while (!(result = it.next()).done) {  // now it.next() is only in one place
  console.log(result.value);
}
