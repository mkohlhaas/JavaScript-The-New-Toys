const source = { example: 42 };

// When specifying the target explicitly, the target of destructuring can be anything you can assign to.
const dest = {};
({ example: dest.result } = source);

console.log(dest.result); // 42
