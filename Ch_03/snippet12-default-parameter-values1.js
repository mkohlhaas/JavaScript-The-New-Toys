// default parameter values:
function animate1(type, duration = 300) {
    console.log(type + ", " + duration);
}

animate1("fadein");             // fadein, 300
animate1("fadein", undefined);  // fadein, 300
animate1("fadein", 400);        // fadein, 400

// In ES5 you had to do something like this:
// function animate(type, duration) {
//     if (duration === undefined) { // (Or any of several similar checks)
//         duration = 300;
//     }
//     // ...do the work...
// }

// also possible
function animate2(type = "fadeout", duration = 300) {
    console.log(type + ", " + duration);
}

console.log("------------------------------");

// also possible
function animate3(type = "fadeout", duration) {
    console.log(type + ", " + duration);
}
animate3("fadeout", 300); // "fadeout, 300"
animate3(undefined, 300); // "fadeout, 300"
animate3("fadein", 300);  // "fadein, 300"
animate3();               // "fadeout, undefined"
