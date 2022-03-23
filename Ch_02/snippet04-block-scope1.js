function jumpOut() {
    var a = [1, 2, 3];
    for (var i = 0; i < a.length; ++i) {
        var value = a[i];
        console.log(value);
    }
    console.log("value outside loop: " + value); // Why can we use 'value' here?
    console.log("i outside loop: " + i);
}
jumpOut();
