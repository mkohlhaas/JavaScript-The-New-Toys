// Use Computed Syntax When Creating Properties with Dynamic Names

var antwort = "answer";
var obj = {
  [antwort]: 42
};
console.log(obj); // {answer: 42}
