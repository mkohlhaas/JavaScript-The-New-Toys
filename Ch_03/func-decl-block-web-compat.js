// For years, putting a function declaration inside a block wasn’t covered by the specification, but it
// wasn’t disallowed, either. JavaScript engines could handle them as an “allowable extension.” As of
// ES2015, function declarations in blocks are part of the specification. There are standard rules for
// them, and also “legacy web semantics” that only apply in loose mode on web browsers.

// "use strict";  // strict mode ensures standard semantics!

function branching(num) {

    console.log("num = " + num + ", typeof doSomething = " + typeof doSomething);
    if (num < 0.5) {
        console.log("true branch, typeof doSomething = " + typeof doSomething);


        function doSomething() {  // in strict mode this function will be hoisted to the top of its block
            console.log("true");
        }
        console.log("end of true block");
    } else {
        console.log("false branch, typeof doSomething = " + typeof doSomething);


        function doSomething() {  // in strict mode this function will be hoisted to the top of its block
            console.log("false");
        }
        console.log("end of false block");
    }
    doSomething();
}

branching(Math.random());
