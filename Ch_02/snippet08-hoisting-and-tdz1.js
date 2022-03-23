function example() {
    console.log(answer); // undefined
    answer = 42;
    console.log(answer); // 42
    var answer = 67;     // only the declaration was moved/hoisted, not the initializer attached to it (= 67)
}
example();
