function closuresInLoopsWithLet() {
    for (let counter = 1; counter <= 3; ++counter) {
        setTimeout(function() {
            console.log(counter);
        }, 1000 * counter);
    }
}
closuresInLoopsWithLet();
