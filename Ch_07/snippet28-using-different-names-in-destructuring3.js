const obj = { first: 1 };

// If the property name is a valid identifier name
// but you just don't want to use that name for some
// reason, you don’t need the quotes:
const { first: myName } = obj;

console.log(myName); // 1
