let source = { a: "ayy", b: "bee" };

let name1 = Math.random() < 0.5 ? "a" : "b";

let { [name1]: dest } = source;

console.log(dest); // "ayy" half the time, "bee" the other half
