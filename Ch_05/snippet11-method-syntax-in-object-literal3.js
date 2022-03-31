// The method name doesn’t have to be a literal identifier; as with property keys it can be a string.

const s = "ple";
const obj = {
  "biz-baz"() { console.log("Ran biz-baz"); },     // String literal method name
  ["exam" + s]() { console.log("Ran example"); }   // Computed method name
};

obj["biz-baz"](); // "Ran biz-baz"
obj.example(); // "Ran example"
