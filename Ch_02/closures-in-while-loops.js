function closuresInWhileLoops() {
    let outside = 1;
    while (outside <= 3) {
        let inside = outside;
        setTimeout(function() {
            console.log("inside = " + inside + ", outside = " + outside);
        }, 1000 * outside);
        ++outside;
    }
}
closuresInWhileLoops();
