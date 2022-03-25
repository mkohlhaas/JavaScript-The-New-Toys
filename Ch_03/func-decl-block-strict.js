// For years, putting a function declaration inside a block wasn’t covered by the specification, but it
// wasn’t disallowed, either. JavaScript engines could handle them as an “allowable extension.” As of
// ES2015, function declarations in blocks are part of the specification. There are standard rules for
// them, and also “legacy web semantics” that only apply in loose mode on web browsers.

"use strict";  // strict mode ensures standard semantics!

function branching(num) {
    let f;
    console.log(num);
    if (num < 0.5) {
        console.log("true branch, typeof doSomething = " + typeof doSomething);
        f = doSomething;

        function doSomething() {
            console.log("true");
        }

    } else {
        console.log("false branch, typeof doSomething = " + typeof doSomething);
        f = doSomething;

        function doSomething() {
            console.log("false");
        }

    }
    f();
}

branching(Math.random());
