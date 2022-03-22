function closuresInLoopsES5() {
    for (var counter = 1; counter <= 3; ++counter) {
        (function(value) {
            setTimeout(function() {
                console.log(value);
            }, 1000 * counter);
        })(counter);
    }
}
closuresInLoopsES5();
