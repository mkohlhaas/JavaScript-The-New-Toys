// A generator can pass control to another generator (or any iterable) and then pick up again when that
// generator (or iterable) is done by using yield*.

// inner generator
function* collect(count) {
  const data = [];
  if (count < 1 || Math.floor(count) !== count) {
    throw new Error("count must be an integer >= 1");
  }
  do {
    let msg = "values needed: " + count;
    data.push(yield msg);
  } while (--count > 0);
  return data;
}

// outer generator
function* outer() {
  let data1 = yield* collect(2);                          // Have `collect` collect two values:
  console.log("data collected by collect(2) =", data1);
  let data2 = yield* collect(3);                          // Have `collect` collect three values:
  console.log("data collected by collect(3) =", data2);
  return [data1, data2];                                  // Return an array of results
}

let g = outer();
let result;
console.log("next got:", g.next());
console.log("next got:", g.next("a"));
console.log("next got:", g.next("b"));
console.log("next got:", g.next("c"));
console.log("next got:", g.next("d"));
console.log("next got:", g.next("e"));

// next got: { value: 'values needed: 2', done: false }
// next got: { value: 'values needed: 1', done: false }
// data collected by collect(2) = [ 'a', 'b' ]
// next got: { value: 'values needed: 3', done: false }
// next got: { value: 'values needed: 2', done: false }
// next got: { value: 'values needed: 1', done: false }
// data collected by collect(3) = [ 'c', 'd', 'e' ]
// next got: { value: [ [ 'a', 'b' ], [ 'c', 'd', 'e' ] ], done: true }
