// Note: This file is encoded in UTF-8. Your system may or may not have a different default encoding.

const a = ["Joe", "Mohammed", "María"];
const b = a.map(name => ({ // '(' is the first character after '=>'; now it is a concise arrow function
    name: name
})); // Works
// the same:
// const b = a.map(name => ({name: name}));
// even conciser with so-called 'shorthand properties':
// const b = a.map(name => ({ name }))
console.log(b); // [ { name: 'Joe' }, { name: 'Mohammed' }, { name: 'María' } ]
