// Note: This file is encoded in UTF-8. Your system may or may not have a different default encoding.

const a = ["Joe", "Mohammed", "María"];
const b = a.map(name => {  // introduces a verbose arrow function
    name: name             // body of the verbose arrow function; is valid syntax, a label called 'name'
}); // Doesn't work
// the same:
// const b = a.map(name => {name: name});
console.log(b); // [ undefined, undefined, undefined ]
