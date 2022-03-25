// A parameter default is an expression; it doesn’t have to be just a literal value. The default can even
// call a function. The default expression is evaluated when the function is called, not when the function
// is defined, and only if the default is needed for that particular call to the function.

const types = {
    fadein: 200,
    flyin: 400
};

function getDefaultDuration(type) {
    console.log("getDefaultDuration called with type = " + type);
    return types[type] || 300;
}

// type before duration:
function animate1(type, duration = getDefaultDuration(type)) {
    console.log(type + ", " + duration);
}

// type after duration
function animate2(duration = getDefaultDuration(type), type) {
    console.log(type + ", " + duration);
}

// animate(undefined, "fadein");
animate1("dissolve", 500);  // dissolve, 500
animate1("dissolve");       // dissolve, 300
animate1("fadein");         // fadein, 200
animate2(500, "dissolve");  // dissolve, 500
// animate2(undefined, "dissolve"); // ReferenceError: Cannot access 'type' before initialization

// The rule is simple: a default can use parameters listed before it, but not parameters listed after it!
