// comma operator
function returnSecond(a, b) {
    return a, b;
}
console.log(returnSecond(1, 2)); // 2

// const handlers = handlers.map(function(handler) {
//     unregister(handler);
//     returnregister(handler.item);
// });


// Shorter with verbose arrow function.
// handlers = handlers.map(handler => {
//     unregister(handler);
//     return register(handler.item);
// })

// Even shorter with concise arrow function and comma operator.
// handlers = handlers.map(handler =>
//     (unregister(handler), register(handler.item))  // parentheses are necessary; otherwise calling map with two parameters
// );
