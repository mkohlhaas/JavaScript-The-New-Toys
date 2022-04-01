const a = ["a", "b", "c"];
for (const value of a) {
  console.log(value);
}

// "a"
// "b"
// "c"

// for-of is different from for-in.
// If you use for-in on that array, you get "0", then "1",
// then "2" - the names of the properties for the array’s entries
for (const key in a) {
  console.log(key);
}

// 0
// 1
// 2
