function temporalExample() {
    const f = () => {
        console.log(value);
    };
    let value = 42;  // TDZ is temporal not spatial. by the time f uses value, the declaration has been run.
    f();             // swap the last two lines and you'll get an error message
}
temporalExample();
